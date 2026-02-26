import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import api from '../services/api';
import useStore from '../store/useStore';
import { Download, CreditCard, CheckCircle } from 'lucide-react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // Generic Stripe test key

const CheckoutForm = ({ orderId, totalAmount, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setProcessing(true);
        try {
            // Create Intent
            const { data } = await api.post('/payment/create-intent', { amount: totalAmount });
            const clientSecret = data.clientSecret;

            // Confirm Payment
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (payload.error) {
                setError(`Payment failed: ${payload.error.message}`);
                setProcessing(false);
            } else {
                // Update Order to paid
                await api.put(`/orders/${orderId}/pay`, {
                    id: payload.paymentIntent.id,
                    status: payload.paymentIntent.status,
                    update_time: new Date().toISOString(),
                    email_address: 'test@example.com'
                });
                setError(null);
                setProcessing(false);
                onPaymentSuccess();
            }
        } catch (err) {
            setError(err.message || 'Payment failed');
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '1.5rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)' }}>
                <CardElement options={{ style: { base: { fontSize: '16px', color: '#fff', '::placeholder': { color: '#aab7c4' } }, invalid: { color: '#ef4444' } } }} />
            </div>
            {error && <div className="badge badge-danger text-center" style={{ display: 'block', padding: '1rem' }}>{error}</div>}
            <button className="btn btn-primary" disabled={processing || !stripe} style={{ width: '100%', padding: '1rem' }}>
                <CreditCard size={18} /> {processing ? 'Processing...' : `Pay $${totalAmount}`}
            </button>
        </form>
    );
};

const OrderPage = () => {
    const { id: orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchOrder = async () => {
        try {
            const { data } = await api.get(`/orders/${orderId}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, [orderId]);

    const downloadInvoice = async () => {
        try {
            const response = await api.get(`/orders/${orderId}/invoice`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `invoice-${orderId}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error('Invoice download failed', err);
        }
    };

    if (loading) return <h2 className="text-center text-muted" style={{ marginTop: '5rem' }}>Loading order...</h2>;
    if (!order) return <h2 className="text-center text-muted" style={{ marginTop: '5rem' }}>Order not found</h2>;

    return (
        <div className="container" style={{ paddingTop: '2rem' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Order <span className="text-gradient">#{order._id}</span></h1>

            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div className="flex flex-col" style={{ gap: '2rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Shipping</h2>
                        <p><strong>Name: </strong> {order.user.name}</p>
                        <p><strong>Email: </strong> <a href={`mailto:${order.user.email}`} style={{ color: 'var(--primary)' }}>{order.user.email}</a></p>
                        <p>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                        </p>
                        {order.isDelivered ? (
                            <div className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem 1rem' }}>
                                <CheckCircle size={16} /> Delivered on {order.deliveredAt.substring(0, 10)}
                            </div>
                        ) : (
                            <div className="badge badge-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem 1rem' }}>
                                Not Delivered
                            </div>
                        )}
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Payment Method</h2>
                        <p><strong>Method: </strong> {order.paymentMethod}</p>
                        {order.isPaid ? (
                            <div className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem 1rem' }}>
                                <CheckCircle size={16} /> Paid on {order.paidAt.substring(0, 10)}
                            </div>
                        ) : (
                            <div className="badge badge-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem 1rem' }}>
                                Not Paid
                            </div>
                        )}
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Order Items</h2>
                        <div className="flex flex-col" style={{ gap: '1rem' }}>
                            {order.orderItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="flex items-center" style={{ gap: '1rem' }}>
                                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                                        <span style={{ fontWeight: 600 }}>{item.name}</span>
                                    </div>
                                    <div>
                                        {item.qty} x ${item.price} = <strong className="text-gradient">${(item.qty * item.price).toFixed(2)}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
                        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Order Summary</h2>

                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Items</span>
                            <span>${order.itemsPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Shipping</span>
                            <span>${order.shippingPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Tax</span>
                            <span>${order.taxPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between" style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span className="text-gradient">${order.totalPrice.toFixed(2)}</span>
                        </div>

                        {!order.isPaid && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm orderId={order._id} totalAmount={order.totalPrice} onPaymentSuccess={fetchOrder} />
                                </Elements>
                            </div>
                        )}

                        {order.isPaid && (
                            <button onClick={downloadInvoice} className="btn btn-outline" style={{ width: '100%', padding: '1rem' }}>
                                <Download size={18} /> Download Invoice PDF
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
