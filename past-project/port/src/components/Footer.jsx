import React from 'react';
import { Code2, Linkedin, Github, Youtube } from 'lucide-react';
import { Reveal } from './Reveal';

const XPlatformIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" stroke="none" fill="currentColor" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <Reveal width="100%">
                <div className="footer-content">

                    <div className="footer-brand-col">
                        <div className="logo-container">
                            <div className="logo-icon small">
                                <Code2 size={16} color="white" />
                            </div>
                            <span className="brand">DevPortfolio</span>
                        </div>
                        <p className="footer-bio">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-links-col">
                        <h4>Socials</h4>
                        <a href="https://www.linkedin.com/in/jilan-mansuri-235b38392/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Jilanmansuri" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://x.com/jilan_24" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.youtube.com/@JilanMansuri-b3c" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>

                    <div className="footer-action-col">
                        <h4>Let's Chat</h4>
                        <button className="btn-small">rdev@example.com</button>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2025 Developer. All rights reserved.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/in/jilan-mansuri-235b38392/" target="_blank" rel="noopener noreferrer" className="icon-btn-small"><Linkedin size={16} /></a>
                        <a href="https://github.com/Jilanmansuri" target="_blank" rel="noopener noreferrer" className="icon-btn-small"><Github size={16} /></a>
                        <a href="https://x.com/jilan_24" target="_blank" rel="noopener noreferrer" className="icon-btn-small"><XPlatformIcon size={16} /></a>
                        <a href="https://www.youtube.com/@JilanMansuri-b3c" target="_blank" rel="noopener noreferrer" className="icon-btn-small"><Youtube size={16} /></a>
                    </div>
                </div>
            </Reveal>
        </footer>
    );
};

export default Footer;
