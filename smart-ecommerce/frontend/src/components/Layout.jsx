import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container" style={{ paddingBottom: '3rem', paddingTop: '2rem', minHeight: 'calc(100vh - 130px)' }}>
                <Outlet />
            </main>
            <footer className="text-center" style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <p>SmartShop Electronics &copy; {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};

export default Layout;
