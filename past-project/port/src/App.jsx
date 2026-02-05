import React from "react";
import "./App.css";
import ParticleBackground from "./ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  React.useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };



  return (
    <div className="app">
      <CustomCursor />
      {/* Background Animation */}
      {/* Background Animation */}
      {/* <ParticleBackground theme={theme} /> */}

      {/* ===== HEADER ===== */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* ===== HERO ===== */}
        <Hero />

        {/* ===== ABOUT ME ===== */}
        <About />

        {/* ===== SKILLS & TOOLS ===== */}
        <Skills />

        {/* ===== PROJECTS ===== */}
        <Projects />

        {/* ===== CERTIFICATES ===== */}
        <Certificates />

        {/* ===== CONTACT Form ===== */}
        <Contact />

        {/* ===== EXPANDED FOOTER ===== */}
        <Footer />
      </main>

      {/* ===== BOTTOM NAVIGATION (Mobile Only) ===== */}
      <BottomNav />

      {/* Back to Top Button */}
      <ScrollToTop />

    </div>
  );
}
