import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Specex Extension",
        description: "Track rocket launches in real-time.",
        tags: ["Chrome Extension"],
        img: "/specex-preview.png",
        link: "https://specex-extension.netlify.app",
        github: "#",
        color: "#3b82f6" // Blue
    },
    {
        title: "News App",
        description: "Search and read news with API integration.",
        tags: ["API Project"],
        img: "/news-app-preview.png",
        link: "https://jilan-108623-apiproject.netlify.app/",
        github: "#",
        color: "#ef4444" // Red
    },
    {
        title: "Netflix Clone",
        description: "Responsive Netflix UI with TMDB API.",
        tags: ["React", "TMDB API"],
        img: "https://user-images.githubusercontent.com/79099734/156505537-8e28ee14-dd20-4299-9eea-984d7068c7fd.png",
        link: "#",
        github: "#",
        color: "#e50914" // Netflix Red
    },
    {
        title: "Spotify Clone",
        description: "Music streaming UI using Web Integration.",
        tags: ["React", "UI/UX"],
        img: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj98ao52nkzzv316mv3nz.png",
        link: "#",
        github: "#",
        color: "#1db954" // Spotify Green
    },
    {
        title: "Sapsidi Game",
        description: "Multiplayer Snakes & Ladders game.",
        tags: ["Game Dev"],
        img: "/sapsidi-preview.png",
        link: "https://jilan-sapsidi-jsgame.netlify.app/",
        github: "#",
        color: "#f59e0b" // Amber
    },
    {
        title: "Whack a Mole",
        description: "Fast-paced arcade reflex game.",
        tags: ["Game Dev"],
        img: "/whack-a-mole-preview.png",
        link: "https://whack-a-mole-game.netlify.app",
        github: "#",
        color: "#8b5cf6" // Purple
    },
    {
        title: "Barista",
        description: "Modern coffee shop website with ordering.",
        tags: ["Coffee Shop"],
        img: "/barista.png",
        link: "https://barista-web-clone-108623.netlify.app/",
        github: "https://github.com/Jilanmansuri/Website-project",
        color: "#d97706" // Coffee Brown
    },
    {
        title: "JioTV Clone",
        description: "Live TV streaming platform clone.",
        tags: ["Streaming"],
        img: "/jiotv-mockup.png",
        link: "https://jiotv-web2-clone.netlify.app/",
        github: "https://github.com/Jilanmansuri/Website-project",
        color: "#0078d7" // Jio Blue
    },
    {
        title: "Glean",
        description: "AI-powered enterprise search platform.",
        tags: ["AI Search"],
        img: "/glean.png",
        link: "https://glean-clone-web5-108623.netlify.app/",
        github: "https://github.com/Jilanmansuri/Website-project",
        color: "#6366f1" // Indigo
    },
    {
        title: "Paxos Gold",
        description: "Digital asset trading platform for gold.",
        tags: ["Crypto"],
        img: "/paxos.png",
        link: "https://paxos-clone-web4.netlify.app/",
        github: "https://github.com/Jilanmansuri/Website-project",
        color: "#facc15" // Gold
    }
];

const Projects = () => {
    return (
        <section className="section" id="work">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title text-center"
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{ '--theme-color': project.color }}
                    >
                        <div className="card-image-container">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="project-img"
                            />
                        </div>
                        <div className="card-content">
                            <h3 style={{ color: project.color }}>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="card-actions">
                                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="link-text">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="link-text github-link">
                                    <Github size={16} /> Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
