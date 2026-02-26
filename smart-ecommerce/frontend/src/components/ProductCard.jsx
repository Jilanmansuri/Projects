import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', transition: 'var(--transition)' }}>
            <Link to={`/product/${product._id}`}>
                <img
                    src={product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop'}
                    alt={product.name}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '1px solid var(--border-color)' }}
                />
            </Link>

            <div style={{ padding: '1.5rem' }}>
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center" style={{ gap: '0.2rem', marginBottom: '1rem', color: '#fbbf24' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                    <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem', fontSize: '0.9rem' }}>
                        ({product.numReviews} reviews)
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
                        ${product.price}
                    </span>
                    <Link to={`/product/${product._id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
