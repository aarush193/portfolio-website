import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Achievements from './components/Achievements.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const glowRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // 1. Ambient mouse follower glow
    const glow = glowRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving && glow) {
        isMoving = true;
        glow.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      if (glow) glow.style.opacity = '0';
    };

    const animate = () => {
      if (glow) {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    // 2. High-performance GPU scroll progress bar
    const updateProgress = () => {
      if (!progressBarRef.current) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('scroll', updateProgress, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', updateProgress);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Zero-Overhead Scroll Progress Indicator */}
      <div ref={progressBarRef} className="scroll-progress-bar" aria-hidden="true" />
      
      {/* Ambient Pointer Glow */}
      <div ref={glowRef} className="ambient-cursor-glow" aria-hidden="true" style={{ opacity: 0 }} />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
