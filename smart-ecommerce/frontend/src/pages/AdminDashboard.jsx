import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import api from '../services/api';
import useStore from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { Users, Package, ShoppingCart, DollarSign } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const { userInfo } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login');
            return;
        }

        const fetchAnalytics = async () => {
            try {
                const { data } = await api.get('/analytics');
                setAnalytics(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, [userInfo, navigate]);

    if (loading) return <h2 className="text-center text-muted" style={{ marginTop: '5rem' }}>Loading Dashboard...</h2>;

    const chartData = {
        labels: analytics.salesData.map(data => data._id),
        datasets: [
            {
                label: 'Monthly Revenue ($)',
                data: analytics.salesData.map(data => data.totalSales),
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top', labels: { color: '#f8fafc' } },
            title: { display: true, text: 'Sales Overview', color: '#f8fafc', font: { size: 16 } },
        },
        scales: {
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        }
    };

    return (
        <div className="container" style={{ paddingTop: '2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

                <div className="glass flex items-center" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(99, 102, 241, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        <DollarSign size={32} />
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>Total Revenue</h3>
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>${analytics.totalRevenue.toFixed(2)}</h2>
                    </div>
                </div>

                <div className="glass flex items-center" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                        <ShoppingCart size={32} />
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>Total Orders</h3>
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>{analytics.totalOrders}</h2>
                    </div>
                </div>

                <div className="glass flex items-center" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.2)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                        <Users size={32} />
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>Total Users</h3>
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>{analytics.totalUsers}</h2>
                    </div>
                </div>

                <div className="glass flex items-center" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '50%', color: '#f59e0b' }}>
                        <Package size={32} />
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.5rem' }}>Products</h3>
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>{analytics.totalProducts}</h2>
                    </div>
                </div>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                {analytics.salesData.length > 0 ? (
                    <Bar data={chartData} options={chartOptions} height={100} />
                ) : (
                    <h3 className="text-center text-muted" style={{ padding: '3rem 0' }}>No sales data yet.</h3>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
