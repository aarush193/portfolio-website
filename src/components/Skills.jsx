import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, GitBranch, Wrench, Layout, Compass, Terminal, FileCode, Cpu, Database, Settings, Sparkles, Rocket, ShieldCheck, Zap } from 'lucide-react';

const Skills = () => {
  const domains = [
    {
      title: "Frontend & SSR Systems",
      desc: "Architecting responsive, performant client applications with server-side rendering, App Router patterns, and fluid animations.",
      icon: <Layout size={20} />,
      badge: "UI & Client",
      color: "emerald",
      skills: ["React.js (React 19)", "Next.js 16", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Framer Motion"]
    },
    {
      title: "AI & Multimodal Pipelines",
      desc: "Engineering multimodal AI workflows with vision models, geospatial clustering (Haversine / 2-Opt), and third-party REST integrations.",
      icon: <Sparkles size={20} />,
      badge: "AI & ML",
      color: "purple",
      skills: ["Google Gemini 3.7 Vision", "Geospatial 2-Opt / K-Means", "Nominatim REST APIs", "Multimodal Extraction", "JSON Pipelines"]
    },
    {
      title: "Backend Services & APIs",
      desc: "Building resilient RESTful services, custom middleware, transactional database procedures, and structured endpoint architectures.",
      icon: <Server size={20} />,
      badge: "Server & Logic",
      color: "cyan",
      skills: ["Node.js", "Express.js", "PostgreSQL RPC Functions", "RESTful Architecture", "State Management", "Auth Middleware"]
    },
    {
      title: "Database Architecture & Security",
      desc: "Designing normalized relational schemas, Row-Level Security (RLS) policies, immutable ledgers, and database triggers.",
      icon: <Database size={20} />,
      badge: "Data & Security",
      color: "emerald",
      skills: ["PostgreSQL", "Supabase (Auth & RLS)", "PL/pgSQL Triggers", "MongoDB", "SQL Query Optimization", "ACID Compliance"]
    },
    {
      title: "Developer Tools & Cloud Deployments",
      desc: "Managing standard Git workflows, automated CI/CD deployments, API testing suites, and cloud infrastructure.",
      icon: <Wrench size={20} />,
      badge: "DevOps & Cloud",
      color: "cyan",
      skills: ["Git", "GitHub", "Vercel", "Postman", "Firebase Studio", "Render", "Linux Basics"]
    },
    {
      title: "Modern AI & Dev Environments",
      desc: "Leveraging state-of-the-art developer environments, agentic AI coding assistants, and modern IDE workflows.",
      icon: <Terminal size={20} />,
      badge: "Workflows",
      color: "purple",
      skills: ["Cursor", "VS Code", "Claude Code", "OpenAI Codex", "Command Line Tools"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Technical Competence</span>
          <h2 className="section-title">Skills & Architectural Capabilities</h2>
        </motion.div>

        <div className="skills-grid">
          {domains.map((domain, index) => (
            <motion.div 
              key={index} 
              className={`glass-card skill-domain-card ${domain.color}-domain`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="skill-domain-header">
                <div className="header-left">
                  <span className={`domain-icon ${domain.color}-icon`}>{domain.icon}</span>
                  <h3 className="domain-title">{domain.title}</h3>
                </div>
                <span className="domain-badge">{domain.badge}</span>
              </div>

              <p className="domain-desc">{domain.desc}</p>

              <div className="skill-pills-wrap">
                {domain.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-secondary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 1.5rem;
        }

        .skill-domain-card {
          padding: 1.6rem;
          background: rgba(13, 17, 23, 0.7);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: border-color, transform, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .skill-domain-card:hover {
          transform: translateY(-3px) translateZ(0);
        }

        .emerald-domain:hover {
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.22);
        }

        .cyan-domain:hover {
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.22);
        }

        .purple-domain:hover {
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 10px 30px -10px rgba(168, 85, 247, 0.22);
        }

        .skill-domain-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          gap: 0.5rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .domain-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emerald-icon { color: #10b981; }
        .cyan-icon { color: #06b6d4; }
        .purple-icon { color: #c084fc; }

        .domain-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .domain-badge {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .domain-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }

        .skill-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .skill-pill {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          transform: translateZ(0);
          will-change: background, border-color, color, transform;
          transition: all var(--transition-fast);
        }

        .skill-domain-card:hover .skill-pill {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .skill-pill:hover {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.3) !important;
          color: #34d399;
          transform: translateY(-1px) translateZ(0);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
