import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Code, ShieldCheck, GitPullRequest, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Computer Science Degree",
      description: "B.Tech in Computer Science Engineering (IET Khandari, DBRAU, 2021–2025).",
      icon: <Award size={20} />
    },
    {
      title: "TripPlanner AI Multimodal Platform",
      description: "Architected multimodal travel planner with Google Gemini 3.7 Vision, Haversine geospatial clustering, Nominatim REST APIs & 36 tests.",
      icon: <Zap size={20} />
    },
    {
      title: "SkillSwap Time-Bank System",
      description: "Engineered a time-bank platform with custom transaction validation, Supabase RPC, Next.js 16 SSR, and PostgreSQL ledger.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Full-Stack Project Portfolio",
      description: "Built and deployed modern web applications using React 19, Next.js 16, TypeScript, Node.js, Express, and Supabase.",
      icon: <Code size={20} />
    },
    {
      title: "Git & Version Control",
      description: "Practiced standard version control workflows, branching, and clean repository structures.",
      icon: <GitPullRequest size={20} />
    },
    {
      title: "Open Source Presence",
      description: "Published project repositories on GitHub with clear documentation and deployment setups.",
      icon: <Globe size={20} />
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Highlights</span>
          <h2 className="section-title">Achievements & Milestones</h2>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card achievement-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="achievement-icon-box">
                {item.icon}
              </div>
              <div className="achievement-details">
                <h3 className="achievement-card-title">{item.title}</h3>
                <p className="achievement-card-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-section {
          background-color: var(--bg-primary);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.8rem;
          background: rgba(13, 17, 23, 0.7);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, border-color, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .achievement-card:hover {
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-3px) translateZ(0);
          box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.22);
        }

        .achievement-icon-box {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10b981;
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transform: translateZ(0);
          transition: all var(--transition-normal);
        }

        .achievement-card:hover .achievement-icon-box {
          background: #10b981;
          color: #080a0f;
          border-color: #10b981;
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
          transform: scale(1.05);
        }

        .achievement-card-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .achievement-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
