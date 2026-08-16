import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Compass, Layers, Rocket, Sparkles, Terminal, Database } from 'lucide-react';

const Journey = () => {
  const steps = [
    {
      title: "1. Computer Science Engineering (B.Tech)",
      description: "Completed Computer Science degree (2021–2025) at IET Khandari, DBRAU, building core engineering foundations.",
      icon: <Compass size={16} />,
      status: "completed"
    },
    {
      title: "2. Web Foundations & JavaScript",
      description: "Mastered HTML5, CSS3, ES6+ JavaScript, TypeScript, and modern responsive web layouts.",
      icon: <Code size={16} />,
      status: "completed"
    },
    {
      title: "3. React & Modern Frontend",
      description: "Engineered responsive client applications using React.js, Next.js, Tailwind CSS, and Framer Motion.",
      icon: <Sparkles size={16} />,
      status: "completed"
    },
    {
      title: "4. Backend & API Services",
      description: "Built backend APIs, custom routers, and microservices using Node.js and Express.js.",
      icon: <Layers size={16} />,
      status: "completed"
    },
    {
      title: "5. Database & Cloud Architecture",
      description: "Architected data schemas and security policies with PostgreSQL, Supabase, and MongoDB.",
      icon: <Database size={16} />,
      status: "completed"
    },
    {
      title: "6. SkillSwap Flagship Platform",
      description: "Built and deployed a full-stack time-bank skill exchange platform featuring atomic transaction logic and RPC functions.",
      icon: <Award size={16} />,
      status: "completed"
    },
    {
      title: "7. Seeking Software Role",
      description: "Actively seeking entry-level Full Stack Web Developer opportunities to build high-impact applications.",
      icon: <Rocket size={16} />,
      status: "current"
    }
  ];

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Roadmap</span>
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                className={`timeline-item ${isEven ? 'left' : 'right'} ${step.status}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    {step.icon}
                  </div>
                </div>

                <div className="glass-card timeline-content">
                  <span className={`status-badge ${step.status}`}>
                    {step.status === 'current' ? 'Learning Now' : 'Completed'}
                  </span>
                  <h3 className="timeline-item-title">{step.title}</h3>
                  <p className="timeline-item-description">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .journey-section {
          background-color: var(--bg-primary);
          padding-bottom: 4rem;
        }

        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          position: relative;
          padding: 1rem 2.5rem;
          box-sizing: border-box;
        }

        .timeline-item.left {
          align-self: flex-start;
          justify-content: flex-end;
          left: 0;
        }

        .timeline-item.right {
          align-self: flex-end;
          justify-content: flex-start;
          left: 50%;
        }

        .timeline-dot-wrapper {
          position: absolute;
          top: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .timeline-item.left .timeline-dot-wrapper {
          right: -13px;
        }

        .timeline-item.right .timeline-dot-wrapper {
          left: -13px;
        }

        .timeline-dot {
          width: 26px;
          height: 26px;
          border-radius: 4px;
          background: #0a0a0a;
          border: 1px solid var(--card-border);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .timeline-item.completed .timeline-dot {
          border-color: var(--primary);
          color: var(--primary);
        }

        .timeline-item.current .timeline-dot {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .timeline-content {
          width: 100%;
          max-width: 360px;
          padding: 1.2rem;
          background: rgba(15, 15, 15, 0.4);
        }

        .status-badge {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .status-badge.completed {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          border: 1px solid var(--card-border);
        }

        .status-badge.current {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .timeline-item-title {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: var(--text-primary);
        }

        .timeline-item-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 15px;
          }
          
          .timeline-item {
            width: 100%;
            align-self: flex-start !important;
            justify-content: flex-start !important;
            left: 0 !important;
            padding: 0.8rem 0 0.8rem 2.5rem;
          }

          .timeline-item.left .timeline-dot-wrapper,
          .timeline-item.right .timeline-dot-wrapper {
            left: 2px;
            right: auto;
          }

          .timeline-content {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Journey;
