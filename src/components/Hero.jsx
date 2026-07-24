import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Cpu, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="ambient-glow" style={{ top: '-10%', right: '10%' }}></div>
      <div className="container hero-container-wrapper">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="badge-wrapper">
              <span className="hero-badge">
                <span className="badge-dot"></span> Open for opportunities
              </span>
            </div>

            <h1 className="hero-title">
              Building clean, <br />
              <span className="blue-accent">performant</span> web apps.
            </h1>

            <p className="hero-description">
              I build modern, responsive web applications using React, Node.js, Express.js, and MongoDB, with a focus on clean architecture and user experience.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" aria-label="View Projects">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in Touch">
                Get in Touch
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/aarush193" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/aarush-solomon-217148372" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aarushsolomon193@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Premium Developer-themed Abstract Stack Composition with Glassmorphism and Gradient borders */}
            <div className="architecture-composition">
              <div className="composition-card frontend-layer">
                <div className="layer-header">
                  <Cpu size={16} className="layer-icon" />
                  <div className="layer-tag">Frontend UI</div>
                </div>
                <div className="layer-details">
                  <span>React • Vite • SPA</span>
                </div>
              </div>
              
              <div className="connecting-line-vertical"></div>
              
              <div className="composition-card api-layer">
                <div className="layer-header">
                  <Terminal size={16} className="layer-icon" />
                  <div className="layer-tag">API Gateway</div>
                </div>
                <div className="layer-details">
                  <span>Node.js • Express Router</span>
                </div>
              </div>
              
              <div className="connecting-line-vertical"></div>
              
              <div className="composition-card database-layer">
                <div className="layer-header">
                  <Database size={16} className="layer-icon" />
                  <div className="layer-tag">Database Layer</div>
                </div>
                <div className="layer-details">
                  <span>MongoDB • Supabase</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Technologies Strip */}
        <div className="tech-strip">
          <span className="tech-strip-title">Core Technologies</span>
          <div className="tech-strip-items">
            <span>React</span>
            <span className="dot-sep">•</span>
            <span>Node.js</span>
            <span className="dot-sep">•</span>
            <span>Express.js</span>
            <span className="dot-sep">•</span>
            <span>MongoDB</span>
            <span className="dot-sep">•</span>
            <span>JavaScript</span>
            <span className="dot-sep">•</span>
            <span>Git</span>
            <span className="dot-sep">•</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: calc(var(--nav-height) + 1.5rem);
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--card-border);
          overflow: hidden;
        }

        .hero-container-wrapper {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          width: 100%;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .badge-wrapper {
          margin-bottom: 1rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--card-border);
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.05;
          margin-bottom: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .blue-accent {
          color: var(--primary);
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 480px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .hero-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon:hover {
          color: var(--text-primary);
          transform: scale(1.1);
        }

        /* Abstract Architecture Stack Visual styles with Premium Glassmorphism & Spacing */
        .architecture-composition {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          position: relative;
        }

        .composition-card {
          background: rgba(18, 18, 18, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 1.2rem 1.5rem;
          width: 100%;
          transition: border-color var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
        }

        .composition-card:hover {
          border-color: var(--primary);
          background: rgba(24, 24, 24, 0.7);
          box-shadow: 0 4px 15px -3px var(--primary-glow);
        }

        .layer-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .layer-icon {
          color: var(--primary);
        }

        .layer-tag {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .layer-details {
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
          padding-left: 1.5rem;
        }

        .connecting-line-vertical {
          height: 25px;
          width: 1px;
          background: linear-gradient(180deg, var(--primary) 0%, rgba(255,255,255,0.05) 100%);
        }

        /* Core Technologies Strip Styling */
        .tech-strip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          border-top: 1px solid var(--card-border);
          padding-top: 2rem;
          text-align: center;
        }

        .tech-strip-title {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .tech-strip-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .dot-sep {
          color: var(--card-border);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .tech-strip-items {
            gap: 0.5rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
