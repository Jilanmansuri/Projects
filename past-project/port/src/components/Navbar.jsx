import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <header className="header animate-fade-in">
            {/* Logo Removed as per request */}
            {/* Desktop Nav Removed as per request */}
            <button onClick={toggleTheme} className="icon-btn theme-toggle">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </header>
    );
};

export default Navbar;
