import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "4", label: "Projects Built" },
    { number: "1", label: "Internship Completed" },
    { number: "1", label: "Full Stack Course" },
    { number: "12+", label: "Technologies Learned" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title story-main-title">Bridging Theory & Practice</h2>
            <p className="story-paragraph">
              I hold a Computer Science degree and am an aspiring Full Stack Developer passionate about designing and building modern web applications.
            </p>
            <p className="story-paragraph">
              After graduating, I realized that true engineering mastery comes from application. Instead of relying solely on classroom theory, I dedicated myself to learning modern web development. I completed a comprehensive Full Stack Web Development course, reinforcing my skills with production workflows.
            </p>
            <p className="story-paragraph">
              During my learning journey, I completed a frontend internship at Radixcube Solutions, where I practiced professional frontend engineering, strengthened debugging workflows, and built responsive user interfaces.
            </p>
          </motion.div>

          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-card stat-card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .story-main-title {
          margin-bottom: 1.2rem;
        }

        .story-paragraph {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.8rem 1rem;
          background: rgba(255, 255, 255, 0.01);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
