import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Package, Grid } from 'lucide-react';
import useStore from '../store/useStore';
import api from '../services/api';

const Header = () => {
    const { userInfo, logout, cartItems } = useStore();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await api.post('/users/logout');
            logout();
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border-color)' }}>
            <div className="container flex justify-between items-center" style={{ height: '70px' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2 className="text-gradient" style={{ margin: 0, fontSize: '1.8rem' }}>SmartShop</h2>
                </Link>

                <nav className="flex items-center" style={{ gap: '1.5rem' }}>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
                        <ShoppingCart size={22} />
                        <span>Cart</span>
                        {cartItems.length > 0 && (
                            <span className="badge badge-success" style={{ position: 'absolute', top: '-10px', right: '-15px', padding: '0.15rem 0.4rem', fontSize: '0.7rem' }}>
                                {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </span>
                        )}
                    </Link>

                    {userInfo ? (
                        <div className="flex items-center" style={{ gap: '1rem' }}>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={22} color="var(--primary)" />
                                <span>{userInfo.name}</span>
                            </div>

                            {userInfo.isAdmin && (
                                <Link to="/admin/dashboard" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
                                    <Grid size={16} /> Admin
                                </Link>
                            )}

                            <Link to="/profile" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                                <Package size={22} />
                            </Link>

                            <button onClick={logoutHandler} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem' }}>
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-primary">
                            <User size={18} /> Sign In
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
