import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, GitBranch, Wrench, GraduationCap, Layout, Compass, Terminal, FileCode, Figma, Cpu, Database, Settings, Sparkles, Rocket } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code size={18} />,
      skills: [
        { name: "JavaScript (ES6+)", icon: <FileCode size={14} /> },
        { name: "TypeScript", icon: <FileCode size={14} /> },
        { name: "HTML5", icon: <Layout size={14} /> },
        { name: "CSS3", icon: <Compass size={14} /> },
        { name: "SQL", icon: <Database size={14} /> }
      ]
    },
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: [
        { name: "React.js", icon: <Cpu size={14} /> },
        { name: "Next.js", icon: <Cpu size={14} /> },
        { name: "Tailwind CSS", icon: <Compass size={14} /> },
        { name: "Framer Motion", icon: <Sparkles size={14} /> }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={18} />,
      skills: [
        { name: "Node.js", icon: <Terminal size={14} /> },
        { name: "Express.js", icon: <Server size={14} /> },
        { name: "REST APIs", icon: <Settings size={14} /> }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      skills: [
        { name: "PostgreSQL", icon: <Database size={14} /> },
        { name: "Supabase", icon: <Cpu size={14} /> },
        { name: "MongoDB", icon: <Database size={14} /> }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={18} />,
      skills: [
        { name: "Git", icon: <GitBranch size={14} /> },
        { name: "GitHub", icon: <GithubIcon size={14} /> },
        { name: "Postman", icon: <Settings size={14} /> },
        { name: "Vercel", icon: <Rocket size={14} /> }
      ]
    },
    {
      title: "Development Environments & AI Tools",
      icon: <Terminal size={18} />,
      skills: [
        { name: "Cursor", icon: <Settings size={14} /> },
        { name: "VS Code", icon: <Terminal size={14} /> },
        { name: "Claude Code", icon: <Cpu size={14} /> },
        { name: "OpenAI Codex", icon: <FileCode size={14} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Core Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              className="glass-card skill-cat-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-badges-list">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-badge-pill">
                    <span className="skill-icon-inline">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.2rem;
        }

        .skill-cat-card {
          padding: 1.5rem;
          background: rgba(15, 15, 15, 0.4);
          border: 1px solid var(--card-border);
        }

        .skill-cat-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding-bottom: 0.8rem;
        }

        .skill-cat-icon {
          color: var(--primary);
          display: flex;
          align-items: center;
        }

        .skill-cat-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-badges-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-badge-pill {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          font-size: 0.8rem;
          padding: 0.35rem 0.7rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: var(--transition-fast);
        }

        .skill-badge-pill:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
        }

        .skill-icon-inline {
          display: flex;
          align-items: center;
          color: var(--text-muted);
        }

        .skill-badge-pill:hover .skill-icon-inline {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

// Simple inline SVG GitHub icon to bypass package imports if needed
const GithubIcon = ({ size = 14 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default Skills;
