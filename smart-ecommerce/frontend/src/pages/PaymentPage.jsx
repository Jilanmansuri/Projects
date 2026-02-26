import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentPage = () => {
    const { shippingAddress, savePaymentMethod, paymentMethod: defaultPaymentMethod } = useStore();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState(defaultPaymentMethod || 'Stripe');

    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        savePaymentMethod(paymentMethod);
        navigate('/placeorder');
    };

    return (
        <div className="container flex flex-col items-center">
            <CheckoutSteps step1 step2 step3 />
            <div className="glass" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '500px' }}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>Payment Method</h1>

                <form onSubmit={submitHandler} className="flex flex-col" style={{ gap: '1.5rem' }}>
                    <div>
                        <label className="flex items-center" style={{ gap: '0.5rem', cursor: 'pointer', fontSize: '1.2rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: paymentMethod === 'Stripe' ? 'rgba(99, 102, 241, 0.1)' : 'transparent' }}>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Stripe"
                                checked={paymentMethod === 'Stripe'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--primary)' }}
                            />
                            Stripe or Credit Card
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
