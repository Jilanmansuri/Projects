import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import api from '../services/api';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderPage = () => {
    const navigate = useNavigate();
    const cart = useStore();

    useEffect(() => {
        if (!cart.shippingAddress.address) {
            navigate('/shipping');
        } else if (!cart.paymentMethod) {
            navigate('/payment');
        }
    }, [cart.shippingAddress, cart.paymentMethod, navigate]);

    const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

    const itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 10);
    const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));
    const totalPrice = (
        Number(itemsPrice) +
        Number(shippingPrice) +
        Number(taxPrice)
    ).toFixed(2);

    const placeOrderHandler = async () => {
        try {
            const { data } = await api.post('/orders', {
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice,
            });
            cart.clearCartItems();
            navigate(`/order/${data._id}`);
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || err.message);
        }
    };

    return (
        <div className="container">
            <CheckoutSteps step1 step2 step3 step4 />
            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div className="flex flex-col" style={{ gap: '2rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Shipping</h2>
                        <p>
                            <strong>Address: </strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                            {cart.shippingAddress.postalCode},{' '}
                            {cart.shippingAddress.country}
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Payment Method</h2>
                        <p>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Order Items</h2>
                        {cart.cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <div className="flex flex-col" style={{ gap: '1rem' }}>
                                {cart.cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div className="flex items-center" style={{ gap: '1rem' }}>
                                            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                                            <Link to={`/product/${item._id}`} style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {item.qty} x ${item.price} = <strong className="text-gradient">${(item.qty * item.price).toFixed(2)}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
                        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Order Summary</h2>

                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Items</span>
                            <span>${itemsPrice}</span>
                        </div>

                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Shipping</span>
                            <span>${shippingPrice}</span>
                        </div>

                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
                            <span>Tax</span>
                            <span>${taxPrice}</span>
                        </div>

                        <div className="flex justify-between" style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span className="text-gradient">${totalPrice}</span>
                        </div>

                        <button
                            className="btn btn-primary"
                            disabled={cart.cartItems.length === 0}
                            onClick={placeOrderHandler}
                            style={{ width: '100%', padding: '1rem' }}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderPage;
