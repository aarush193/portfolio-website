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
      title: "Full Stack SkillSwap System",
      description: "Engineered a time-bank platform with custom transaction validation, Supabase RPC, and PostgreSQL ledger.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Project Portfolio",
      description: "Built and deployed multiple frontend and full-stack web applications using React, Next.js, Node, Express, and Supabase.",
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
    },
    {
      title: "Modern UI & Performance",
      description: "Created responsive interactive interfaces with React, Next.js, and Framer Motion.",
      icon: <Zap size={20} />
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Highlights</span>
          <h2 className="section-title">Achievements & Milestones</h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card achievement-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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
        }

        .achievement-icon-box {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          color: var(--secondary);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .achievement-card:hover .achievement-icon-box {
          background: var(--gradient-secondary);
          color: white;
          border-color: transparent;
        }

        .achievement-card-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .achievement-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
