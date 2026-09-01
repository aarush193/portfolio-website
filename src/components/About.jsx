import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Built" },
    { number: "2025", label: "B.Tech Graduate" },
    { number: "AI & Full Stack", label: "Developer Focus" },
    { number: "12+", label: "Technologies" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title story-main-title">Computer Science Graduate & Full Stack Developer</h2>
            <p className="story-paragraph">
              I am a Computer Science Engineering graduate (B.Tech 2021–2025) and Full Stack Web Developer actively seeking my first software development role.
            </p>
            <p className="story-paragraph">
              I specialize in building and deploying full-stack web applications using React 19, Next.js 16, TypeScript, Node.js, Express.js, Supabase, and PostgreSQL. My focus is on writing clean, scalable code and delivering seamless user experiences.
            </p>
            <p className="story-paragraph">
              Through hands-on system engineering—including architecting <strong>TripPlanner AI</strong> (a multimodal travel planner leveraging Google Gemini 3.7 Vision and geospatial clustering engines) and <strong>SkillSwap</strong> (a time-bank skill exchange platform featuring transactional PostgreSQL RPCs and custom ledger logic)—I bring proven capability in end-to-end full-stack development, database security, and AI integrations.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats-grid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-card stat-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
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
          gap: 1.2rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 1rem;
          background: rgba(13, 17, 23, 0.7);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, border-color, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .stat-card:hover {
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-3px) translateZ(0);
          box-shadow: 0 10px 28px -8px rgba(16, 185, 129, 0.25);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.3rem;
          font-weight: 800;
          color: #10b981;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
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
