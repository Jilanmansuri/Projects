import React from 'react';
import { Home, User, Plus, Briefcase, Mail } from 'lucide-react';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <a href="#home" className="nav-item active">
                <Home size={24} />
                <span>Home</span>
            </a>
            <a href="#about" className="nav-item">
                <User size={24} />
                <span>About</span>
            </a>
            <div className="nav-item-center">
                <button className="fab">
                    <Plus size={28} color="white" />
                </button>
            </div>
            <a href="#work" className="nav-item">
                <Briefcase size={24} />
                <span>Work</span>
            </a>
            <a href="#contact" className="nav-item">
                <Mail size={24} />
                <span>Contact</span>
            </a>
        </nav>
    );
};

export default BottomNav;
