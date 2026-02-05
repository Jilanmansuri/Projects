import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <Reveal width="100%">
                <div className="hero-centered-content">
                    <span className="welcome-tag">WELCOME TO MY PORTFOLIO</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="text-gradient">Jilan Mansuri</span>
                    </h1>
                    <p className="hero-subtitle">
                        Full Stack Developer & UI/UX Designer
                    </p>

                    <div className="hero-buttons centered">
                        <button
                            className="btn btn-primary"
                            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            <ArrowRight size={20} />
                            View My Work
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Hero;
