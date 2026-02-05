import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
    return (
        <section className="section" id="about">
            <Reveal>
                <div className="section-header">
                    <h2>About Me</h2>
                </div>
                <div className="about-content">
                    <p className="about-text">
                        I am a driven <span className="text-highlight">2nd Semester Computer Engineering Student</span> at <strong className="text-primary">Coding Gita x Swaminarayan University</strong>, passionate about translating logic into creative digital experiences.
                    </p>
                    <p className="about-text">
                        Currently, I'm building a strong foundation in <span className="text-highlight">Full Stack Development</span>, mastering core technologies like <strong>C, HTML, and Modern Web Tech</strong>. Beyond just code, I explore <strong>UI/UX Design in Figma</strong> to ensure my projects are not only functional but visually stunning.
                    </p>
                </div>
            </Reveal>
        </section>
    );
};

export default About;
