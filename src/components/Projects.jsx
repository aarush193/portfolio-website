import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Folder, Layers, Database, Compass } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const projectsData = [
    {
      id: 1,
      title: "SkillSwap",
      subtitle: "Flagship Project",
      description: "A full-stack community platform where users exchange skills using a time-credit system instead of money. Features secure user accounts, trade logs, and email notifications.",
      features: ["User Authentication", "Time Credit Economy", "Email Integration", "Database Management"],
      tech: ["React", "Supabase", "SMTP", "JavaScript"],
      category: "fullstack",
      flagship: true,
      github: "https://github.com/aarush193",
      demo: "https://example.com",
      icon: <Layers size={20} />,
      visualLayout: (
        <div className="card-visual skillswap-visual">
          <div className="vis-node">User A</div>
          <div className="vis-arrow">1 Credit →</div>
          <div className="vis-node">User B</div>
        </div>
      )
    },
    {
      id: 2,
      title: "React Notes App",
      subtitle: "Frontend App",
      description: "A notes management application built using React and Vite featuring state persistence and lightweight client-side filtering.",
      features: ["Create & Delete Notes", "React Hooks", "LocalStorage Persistence"],
      tech: ["React", "Vite", "JavaScript", "CSS"],
      category: "frontend",
      flagship: false,
      github: "https://github.com/aarush193",
      demo: "https://example.com",
      icon: <Folder size={20} />,
      visualLayout: (
        <div className="card-visual notes-visual">
          <div className="vis-note-item">Note A</div>
          <div className="vis-note-item">Note B</div>
        </div>
      )
    },
    {
      id: 3,
      title: "Express Gym Website",
      subtitle: "Backend Project",
      description: "A website built with Express.js demonstrating backend routing, clean controller templates, and response rendering.",
      features: ["Routing APIs", "Static Serving", "Contact Requests Ingestion"],
      tech: ["Node.js", "Express.js", "HTML", "CSS"],
      category: "fullstack",
      flagship: false,
      github: "https://github.com/aarush193",
      demo: "https://example.com",
      icon: <Database size={20} />,
      visualLayout: (
        <div className="card-visual gym-visual">
          <div className="vis-route">POST /contact</div>
          <div className="vis-route">GET /classes</div>
        </div>
      )
    },
    {
      id: 4,
      title: "Todo Application",
      subtitle: "JavaScript Core",
      description: "A responsive task management application demonstrating modern DOM manipulation, array filters, and simple styling.",
      features: ["CRUD Operations", "Active / Completed Filter", "LocalStorage Persistence"],
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      flagship: false,
      github: "https://github.com/aarush193",
      demo: "https://example.com",
      icon: <Compass size={20} />,
      visualLayout: (
        <div className="card-visual todo-visual">
          <div className="vis-todo-item checked">Task A</div>
          <div className="vis-todo-item">Task B</div>
        </div>
      )
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                key={project.id}
                className={`project-card-wrapper ${project.flagship ? 'flagship' : ''}`}
              >
                <div className="glass-card project-card">
                  {/* Clean Visual Preview Container */}
                  <div className="project-visual-header">
                    <div className="visual-top">
                      <span className="visual-dot"></span>
                      <span className="visual-dot"></span>
                      <span className="visual-dot"></span>
                    </div>
                    {project.visualLayout}
                  </div>

                  <div className="project-details">
                    <div className="project-title-row">
                      <div className="project-meta-icon-title">
                        <span className="project-header-icon">{project.icon}</span>
                        <span className="project-subtitle-label">{project.subtitle}</span>
                      </div>
                      {project.flagship && (
                        <span className="flagship-indicator">
                          <Sparkles size={10} /> Flagship
                        </span>
                      )}
                    </div>
                    
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>

                    <div className="tech-badge-container">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-badge">{t}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-action">
                        <Github size={14} /> GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-action">
                        Demo <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }

        .projects-filter {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          padding: 0.4rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.85rem;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .filter-btn.active {
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* Prominent Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card-wrapper.flagship {
          grid-column: span 2;
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: rgba(12, 12, 12, 0.6);
          border-color: var(--card-border);
        }

        .project-visual-header {
          background: #080808;
          border-bottom: 1px solid var(--card-border);
          padding: 0.8rem 1rem;
          height: 140px;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          position: relative;
        }

        .visual-top {
          display: flex;
          gap: 0.3rem;
        }

        .visual-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #222222;
        }

        /* Abstract CSS Visuals for Projects */
        .card-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-grow: 1;
        }

        .skillswap-visual .vis-node {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.75rem;
          color: #3b82f6;
        }

        .skillswap-visual .vis-arrow {
          font-family: monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .notes-visual .vis-note-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          width: 80px;
          height: 50px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-family: monospace;
          color: var(--text-secondary);
        }

        .gym-visual .vis-route {
          background: rgba(239, 68, 68, 0.03);
          border: 1px solid rgba(239, 68, 68, 0.15);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.7rem;
          color: #ef4444;
        }

        .todo-visual .vis-todo-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-family: monospace;
          color: var(--text-secondary);
        }

        .todo-visual .vis-todo-item.checked {
          border-color: rgba(16, 185, 129, 0.25);
          color: #10b981;
          background: rgba(16, 185, 129, 0.02);
          text-decoration: line-through;
        }

        .project-details {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-meta-icon-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .project-header-icon {
          color: var(--primary);
          display: flex;
          align-items: center;
        }

        .project-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .project-subtitle-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .flagship-indicator {
          font-size: 0.7rem;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          font-weight: 500;
        }

        .project-card-title {
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .project-card-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.8rem;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .project-actions {
          display: flex;
          gap: 0.8rem;
          margin-top: auto;
        }

        .btn-action {
          flex: 1;
          justify-content: center;
          padding: 0.55rem;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-card-wrapper.flagship {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
