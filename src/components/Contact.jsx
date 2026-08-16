import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="blur-glow" style={{ bottom: '10%', right: '10%' }}></div>
      
      <div className="container">
        {/* Goals Section: What I'm Looking For */}
        <motion.div 
          className="glass-card goals-container"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="goals-title">What I'm Looking For</h3>
          <p className="goals-text">
            I am a Computer Science graduate actively looking for my first software development role as a <strong>Full Stack Web Developer</strong>, <strong>Frontend Developer</strong>, or <strong>Software Engineer</strong> where I can build scalable, user-focused web applications and contribute to real-world projects.
          </p>
        </motion.div>

        <div className="section-header contact-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Let's build something together</h2>
        </div>

        <div className="contact-wrapper-centered">
          {/* Contact Details & Links */}
          <motion.div 
            className="glass-card contact-details-box"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="contact-box-desc">
              Whether you have an open position, a project proposal, or want to discuss full-stack web development, feel free to get in touch!
            </p>

            <div className="contact-info-list">
              <a href="mailto:aarushsolomon193@gmail.com" className="contact-info-item">
                <div className="icon-wrapper">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">aarushsolomon193@gmail.com</span>
                </div>
              </a>

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
          padding: 2rem;
          text-align: center;
        }

        .goals-title {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }

        .goals-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .goals-text strong {
          color: var(--text-primary);
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
          background: rgba(15, 15, 15, 0.6);
          border: 1px solid var(--card-border);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .contact-details-box:hover {
          border-color: var(--primary);
          box-shadow: 0 4px 20px -5px var(--primary-glow);
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
          transition: var(--transition-fast);
        }

        a.contact-info-item:hover {
          transform: translateX(4px);
        }

        .icon-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          padding: 0.6rem;
          border-radius: 6px;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
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
          width: 40px;
          height: 40px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .social-circle:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
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
