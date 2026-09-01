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
      description: "Built and deployed a full-stack time-bank skill exchange platform featuring atomic transaction logic, Supabase SSR modernization, and RPC functions.",
      icon: <Award size={16} />,
      status: "completed"
    },
    {
      title: "7. TripPlanner AI Platform",
      description: "Architected a multimodal AI travel planner with Google Gemini 3.7 Vision screenshot extraction, geospatial clustering algorithms, and Supabase RLS backend.",
      icon: <Sparkles size={16} />,
      status: "completed"
    },
    {
      title: "8. Seeking Software Role",
      description: "Actively seeking entry-level Full Stack Web Developer opportunities to build high-impact applications.",
      icon: <Rocket size={16} />,
      status: "current"
    }
  ];

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Roadmap</span>
          <h2 className="section-title">My Journey</h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                className={`timeline-item ${isEven ? 'left' : 'right'} ${step.status}`}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
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
          transform: translateZ(0);
          transition: all var(--transition-normal);
        }

        .timeline-item.completed .timeline-dot {
          border-color: #10b981;
          color: #10b981;
        }

        .timeline-item.current .timeline-dot {
          border-color: #10b981;
          color: #10b981;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
          background: rgba(16, 185, 129, 0.1);
        }

        .timeline-content {
          width: 100%;
          max-width: 360px;
          padding: 1.3rem;
          background: rgba(13, 17, 23, 0.75);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, border-color, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .timeline-content:hover {
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 8px 25px -8px rgba(16, 185, 129, 0.22);
          transform: translateY(-2px) translateZ(0);
        }

        .status-badge {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.15rem 0.5rem;
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
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
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
