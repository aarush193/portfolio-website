import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("aarushsolomon193@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="blur-glow" style={{ bottom: '10%', right: '10%' }}></div>
      
      <div className="container">
        {/* Goals Section: What I'm Looking For */}
        <motion.div 
          className="glass-card goals-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="goals-title">What I'm Looking For</h3>
          <p className="goals-text">
            I am a Computer Science graduate actively looking for my first software development role as a <strong>Full Stack Web Developer</strong>, <strong>Frontend Developer</strong>, or <strong>Software Engineer</strong> where I can build scalable, user-focused web applications and contribute to real-world projects.
          </p>
        </motion.div>

        <motion.div 
          className="section-header contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Let's build something together</h2>
        </motion.div>

        <div className="contact-wrapper-centered">
          {/* Contact Details & Links */}
          <motion.div 
            className="glass-card contact-details-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="contact-box-desc">
              Whether you have an open position, a project proposal, or want to discuss full-stack web development, feel free to get in touch!
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item copyable" onClick={handleCopyEmail} role="button" tabIndex={0}>
                <div className="icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="info-text-group">
                  <span className="info-label">Email (Click to Copy)</span>
                  <span className="info-value">aarushsolomon193@gmail.com</span>
                </div>
                <button className="copy-action-btn" title="Copy Email">
                  {copied ? <Check size={14} className="text-mint" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Agra, India</span>
                </div>
              </div>
            </div>

            <div className="action-buttons-group">
              <a 
                href="mailto:aarushsolomon193@gmail.com" 
                className="btn btn-primary resume-btn"
              >
                <Mail size={18} /> Send Message
              </a>

              <div className="socials-horizontal">
                <a href="https://github.com/aarush193" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aarush-solomon-217148372" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
          padding-bottom: 6rem;
        }

        .goals-container {
          max-width: 800px;
          margin: 0 auto 4rem;
          padding: 2.2rem;
          text-align: center;
          background: rgba(13, 17, 23, 0.7);
          border: 1px solid var(--card-border);
          border-radius: 14px;
        }

        .goals-container:hover {
          border-color: rgba(16, 185, 129, 0.35);
        }

        .goals-title {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
          color: var(--text-primary);
        }

        .goals-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .goals-text strong {
          color: #10b981;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .contact-wrapper-centered {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-details-box {
          padding: 2.5rem;
          background: rgba(13, 17, 23, 0.8);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, border-color, box-shadow;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);
        }

        .contact-details-box:hover {
          border-color: rgba(16, 185, 129, 0.45);
          box-shadow: 0 10px 35px -10px rgba(16, 185, 129, 0.25);
        }

        .contact-box-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 0.95rem;
          text-align: center;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          transform: translateZ(0);
          will-change: transform, background, border-color;
          transition: all var(--transition-normal);
        }

        .contact-info-item.copyable {
          cursor: pointer;
        }

        .contact-info-item.copyable:hover {
          border-color: rgba(16, 185, 129, 0.35);
          background: rgba(16, 185, 129, 0.04);
          transform: translateX(4px) translateZ(0);
        }

        .info-text-group {
          flex-grow: 1;
        }

        .copy-action-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          color: var(--text-muted);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .contact-info-item.copyable:hover .copy-action-btn {
          border-color: rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .text-mint {
          color: #10b981 !important;
        }

        .icon-wrapper {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.6rem;
          border-radius: 8px;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(0);
          transition: all var(--transition-normal);
        }

        .info-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .action-buttons-group {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          border-top: 1px solid var(--card-border);
          padding-top: 1.5rem;
        }

        .socials-horizontal {
          display: flex;
          gap: 0.8rem;
        }

        .social-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          transform: translateZ(0);
          will-change: transform, border-color, background, color;
          transition: all var(--transition-normal);
        }

        .social-circle:hover {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.4);
          background: rgba(16, 185, 129, 0.08);
          transform: translateY(-2px) translateZ(0);
        }

        @media (max-width: 600px) {
          .contact-details-box {
            padding: 1.5rem;
          }
          .action-buttons-group {
            flex-direction: column;
            align-items: stretch;
          }
          .socials-horizontal {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
