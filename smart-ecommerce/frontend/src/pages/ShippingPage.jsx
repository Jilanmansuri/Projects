import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingPage = () => {
    const { shippingAddress, saveShippingAddress } = useStore();
    const navigate = useNavigate();

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    const submitHandler = (e) => {
        e.preventDefault();
        saveShippingAddress({ address, city, postalCode, country });
        navigate('/payment');
    };

    return (
        <div className="container flex flex-col items-center">
            <CheckoutSteps step1 step2 />
            <div className="glass" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '500px' }}>
                <h1 className="text-center" style={{ marginBottom: '2rem' }}>Shipping</h1>

                <form onSubmit={submitHandler} className="flex flex-col" style={{ gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Address</label>
                        <input type="text" className="input-field" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>City</label>
                        <input type="text" className="input-field" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Postal Code</label>
                        <input type="text" className="input-field" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Country</label>
                        <input type="text" className="input-field" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ShippingPage;
