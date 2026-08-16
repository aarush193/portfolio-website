import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "4+", label: "Projects Built" },
    { number: "2025", label: "B.Tech Graduate" },
    { number: "Full Stack", label: "Web Developer" },
    { number: "10+", label: "Technologies" }
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
            <h2 className="section-title story-main-title">Computer Science Graduate & Full Stack Developer</h2>
            <p className="story-paragraph">
              I am a Computer Science Engineering graduate (B.Tech 2021–2025) and Full Stack Web Developer actively seeking my first software development role.
            </p>
            <p className="story-paragraph">
              I specialize in building and deploying full-stack web applications using React, Next.js, Node.js, Express.js, Supabase, and PostgreSQL. My focus is on writing clean, scalable code and delivering seamless user experiences.
            </p>
            <p className="story-paragraph">
              Through hands-on project engineering—most notably building SkillSwap, a time-bank exchange platform with custom ledger logic and database-backed transactional verification—I have developed strong practical skills across frontend, backend, database management, and modern developer tooling.
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
