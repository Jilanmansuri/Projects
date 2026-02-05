import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const Certificates = () => {
    return (
        <section className="section" id="certificates">
            <Reveal>
                <div className="section-header">
                    <h2>Certifications</h2>
                </div>
            </Reveal>

            <div className="certificates-list">
                {/* Cert 1 */}
                <Reveal>
                    <div className="cert-card-large">
                        <div className="cert-image-wrapper">
                            <img
                                src="/cert-css.png"
                                alt="HackerRank CSS Certificate"
                                className="cert-img-large"
                            />
                        </div>
                        <div className="cert-details-large">
                            <div className="cert-header">
                                <Award size={28} color="#f97316" />
                                <h3>CSS</h3>
                            </div>
                            <p className="cert-issuer">HackerRank • Dec 2025</p>
                            <button className="btn-link">Verify Credential <ExternalLink size={14} /></button>
                        </div>
                    </div>
                </Reveal>

                {/* Cert 2 */}
                <Reveal>
                    <div className="cert-card-large">
                        <div className="cert-image-wrapper">
                            <img
                                src="/cert-js.png"
                                alt="JavaScript (Basic) Certificate"
                                className="cert-img-large"
                            />
                        </div>
                        <div className="cert-details-large">
                            <div className="cert-header">
                                <Award size={28} color="#38bdf8" />
                                <h3>JavaScript (Basic)</h3>
                            </div>
                            <p className="cert-issuer">HackerRank • Dec 2025</p>
                            <button className="btn-link">Verify Credential <ExternalLink size={14} /></button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Certificates;
