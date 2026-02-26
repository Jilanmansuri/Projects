import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <div className="flex justify-center" style={{ gap: '1rem', marginBottom: '2rem' }}>
            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                {step1 ? (
                    <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign In</Link>
                ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Sign In</span>
                )}
                <span style={{ color: 'var(--border-color)' }}>{'>'}</span>
            </div>

            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                {step2 ? (
                    <Link to="/shipping" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Shipping</Link>
                ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                )}
                <span style={{ color: 'var(--border-color)' }}>{'>'}</span>
            </div>

            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                {step3 ? (
                    <Link to="/payment" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Payment</Link>
                ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Payment</span>
                )}
                <span style={{ color: 'var(--border-color)' }}>{'>'}</span>
            </div>

            <div className="flex items-center" style={{ gap: '0.5rem' }}>
                {step4 ? (
                    <Link to="/placeorder" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Place Order</Link>
                ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Place Order</span>
                )}
            </div>
        </div>
    );
};

export default CheckoutSteps;
