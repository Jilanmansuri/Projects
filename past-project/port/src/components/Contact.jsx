import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, Phone, Briefcase, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact = () => {
    const [showToast, setShowToast] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const form = useRef();

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_108623', 'template_5t1zekx', form.current, 'd7XlPrJpcnXHA9SHK')
            .then((result) => {
                console.log("SUCCESS!", result.text);
                setShowToast(true);
                setIsSending(false);
                e.target.reset();
                setTimeout(() => setShowToast(false), 3000);
            }, (error) => {
                console.log("FAILED...", error.text);
                setIsSending(false);
                alert(`Failed to send message: ${error.text}. Please check your internet connection or try again later.`);
            });
    };

    return (
        <>
            <section className="section contact-section" id="contact">
                <Reveal width="100%">
                    <div className="contact-wrapper">

                        {/* Left: Contact Info */}
                        <div className="contact-info">
                            <div className="contact-header-left">
                                <div className="icon-box">
                                    <Send size={28} color="#f97316" />
                                </div>
                                <h2>Get in Touch</h2>
                                <p className="sub-text">
                                    Feel free to reach out if you have any questions or just want to connect.
                                </p>
                            </div>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <Mail size={20} className="text-primary" />
                                    <a href="mailto:jilan2410@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>jilan2410@gmail.com</a>
                                </div>
                                <div className="contact-item">
                                    <Phone size={20} className="text-primary" />
                                    <a href="tel:7984088939" style={{ color: 'inherit', textDecoration: 'none' }}>7984088939</a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <form ref={form} className="contact-form" onSubmit={handleContactSubmit}>
                            <div className="input-row">
                                <div className="input-group">
                                    <User size={18} className="input-icon" />
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="input-group">
                                    <Mail size={18} className="input-icon" />
                                    <input type="email" name="email" placeholder="Email Address" required />
                                </div>
                            </div>

                            <div className="input-group">
                                <Briefcase size={18} className="input-icon" />
                                <input type="text" name="subject" placeholder="Subject" required />
                            </div>

                            <div className="input-group textarea-group">
                                <textarea name="message" placeholder="Your Message..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width" disabled={isSending}>
                                {isSending ? 'Sending...' : <>Send Message <ChevronRight size={18} /></>}
                            </button>
                        </form>

                    </div>
                </Reveal>
            </section>

            {/* Toast Notification */}
            {showToast && (
                <div className="toast-notification animate-slide-up">
                    <CheckCircle2 size={24} color="#22c55e" />
                    <div className="toast-content">
                        <h4>Message Sent!</h4>
                        <p>Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="toast-close">
                        <X size={18} />
                    </button>
                </div>
            )}
        </>
    );
};

export default Contact;
