import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await api.get(`/products${keyword ? `?keyword=${keyword}` : ''}`);
                setProducts(data.products);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProducts();
    }, [keyword]);

    const submitHandler = (e) => {
        e.preventDefault();
        // handled by state update
    };

    return (
        <div>
            <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <h1>Latest Products</h1>

                <form onSubmit={submitHandler} style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Search products..."
                        onChange={(e) => setKeyword(e.target.value)}
                        style={{ paddingRight: '3rem' }}
                    />
                    <button type="submit" style={{ position: 'absolute', right: '10px', top: '10px', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                        <Search size={20} />
                    </button>
                </form>
            </div>

            {loading ? (
                <h2 className="text-center text-muted" style={{ marginTop: '5rem' }}>Loading astonishing products...</h2>
            ) : (
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
