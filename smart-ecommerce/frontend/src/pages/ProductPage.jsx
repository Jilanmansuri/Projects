import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import api from '../services/api';
import useStore from '../store/useStore';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);
    const addToCart = useStore((state) => state.addToCart);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await api.get(`/products/${id}`);
                setProduct(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const addToCartHandler = () => {
        addToCart({ ...product, qty });
        navigate('/cart');
    };

    if (loading) return <h2 className="text-center text-muted" style={{ marginTop: '5rem' }}>Loading product details...</h2>;

    return (
        <div>
            <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem' }}>
                <ArrowLeft size={16} /> Go Back
            </Link>

            <div className="grid border-color" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <img
                        src={product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop'}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <h1 style={{ marginBottom: '0.5rem' }}>{product.name}</h1>
                        <div className="flex items-center" style={{ gap: '0.5rem', color: '#fbbf24' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                            ))}
                            <span className="text-muted" style={{ marginLeft: '0.5rem' }}>{product.numReviews} Reviews</span>
                        </div>
                    </div>

                    <h2 className="text-gradient">${product.price}</h2>

                    <p style={{ fontSize: '1.1rem' }}>{product.description}</p>

                    <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="flex justify-between" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                            <span>Status:</span>
                            <span style={{ fontWeight: 600, color: product.countInStock > 0 ? 'var(--accent)' : 'var(--danger)' }}>
                                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            </span>
                        </div>

                        {product.countInStock > 0 && (
                            <div className="flex justify-between items-center" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                                <span>Qty:</span>
                                <select
                                    className="input-field"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                    style={{ width: '100px', padding: '0.5rem' }}
                                >
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <button
                            className="btn btn-primary"
                            disabled={product.countInStock === 0}
                            onClick={addToCartHandler}
                            style={{ width: '100%', marginTop: '0.5rem' }}
                        >
                            <ShoppingCart size={18} /> Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
