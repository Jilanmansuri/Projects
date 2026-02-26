import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStore from '../store/useStore';
import api from '../services/api';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { search } = useLocation();
    const redirect = new URLSearchParams(search).get('redirect') || '/';

    const { userInfo, setUserInfo } = useStore();

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const { data } = await api.post('/users', { name, email, password });
            setUserInfo(data);
            navigate(redirect);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    return (
        <div className="container flex justify-center items-center" style={{ minHeight: '70vh' }}>
            <div className="glass" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '450px' }}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>Sign Up</h1>

                {error && <div className="badge badge-danger text-center" style={{ display: 'block', padding: '1rem', marginBottom: '1.5rem' }}>{error}</div>}

                <form onSubmit={submitHandler} className="flex flex-col" style={{ gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Confirm Password</label>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Register
                    </button>
                </form>

                <div className="text-center" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                    Already have an account?{' '}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
