import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import useStore from '../store/useStore';

const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems, addToCart, removeFromCart } = useStore();

    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping');
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="glass text-center" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                    <ShoppingBag size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                    <h2>Your cart is empty</h2>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Go Back</Link>
                </div>
            ) : (
                <div className="grid" style={{ gridTemplateColumns: '1fr 350px', alignItems: 'start', gap: '2rem' }}>
                    <div className="flex flex-col" style={{ gap: '1rem' }}>
                        {cartItems.map((item) => (
                            <div key={item._id} className="glass flex items-center justify-between" style={{ padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                <div className="flex items-center" style={{ gap: '1rem' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                                    <Link to={`/product/${item._id}`} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>
                                        {item.name}
                                    </Link>
                                </div>

                                <div className="flex items-center" style={{ gap: '2rem' }}>
                                    <span className="text-gradient" style={{ fontWeight: 700 }}>${item.price}</span>

                                    <select
                                        className="input-field"
                                        value={item.qty}
                                        onChange={(e) => addToCart({ ...item, qty: Number(e.target.value) })}
                                        style={{ width: '80px', padding: '0.4rem' }}
                                    >
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>

                                    <button onClick={() => removeFromCart(item._id)} style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}>
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                        </h2>

                        <div className="flex justify-between" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                            <span>Total:</span>
                            <span className="text-gradient">
                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            </span>
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={checkoutHandler}
                            style={{ width: '100%', padding: '1rem' }}
                            disabled={cartItems.length === 0}
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
