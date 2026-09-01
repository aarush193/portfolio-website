import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Folder, Layers, Database, Compass, CheckCircle2, Terminal, Shield, ArrowRight, Play, RotateCcw, Image as ImageIcon, MapPin, Zap } from 'lucide-react';

// Live Interactive Showcase for TripPlanner AI
const TripPlannerInteractiveShowcase = () => {
  const [step, setStep] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  const stepsData = [
    {
      id: 0,
      title: "1. Upload Screenshot",
      sub: "User inputs itinerary capture",
      preview: (
        <div className="sim-step-box step-upload">
          <div className="upload-mock">
            <ImageIcon size={18} className="text-muted" />
            <div className="upload-meta">
              <span className="mock-file">trip_tokyo_itinerary.png</span>
              <span className="mock-stat">2.4 MB • 100% Ingested</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "2. Gemini 3.7 Vision Scan",
      sub: "Multimodal Landmark Detection",
      preview: (
        <div className="sim-step-box step-vision">
          <div className="vision-scan-bar">
            <span className="laser-line"></span>
          </div>
          <div className="detected-pois">
            <span className="poi-chip">⛩️ Senso-ji Temple</span>
            <span className="poi-chip">🗼 Tokyo Skytree</span>
            <span className="poi-chip">⚡ Akihabara District</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "3. 2-Opt Geospatial Route",
      sub: "Haversine Distance Clustering",
      preview: (
        <div className="sim-step-box step-route">
          <div className="route-timeline">
            <div className="rt-node">
              <span className="rt-time">09:00 AM</span>
              <span className="rt-name">Senso-ji (Morning)</span>
            </div>
            <span className="rt-arrow">↓ 1.4km</span>
            <div className="rt-node">
              <span className="rt-time">01:30 PM</span>
              <span className="rt-name">Akihabara (2-Opt)</span>
            </div>
            <span className="rt-arrow">↓ 3.2km</span>
            <div className="rt-node">
              <span className="rt-time">06:30 PM</span>
              <span className="rt-name">Tokyo Skytree</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setStep(0);
    setTimeout(() => setStep(1), 1200);
    setTimeout(() => {
      setStep(2);
      setIsRunning(false);
    }, 2600);
  };

  return (
    <div className="interactive-showcase tripplanner-showcase">
      <div className="showcase-topbar">
        <div className="step-toggles">
          {stepsData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setStep(idx)}
              className={`step-toggle-btn ${step === idx ? 'active' : ''}`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <button 
          onClick={handleRun} 
          disabled={isRunning}
          className="btn-sim-action"
          title="Run full AI workflow animation"
        >
          <Play size={11} /> {isRunning ? "Processing..." : "Run Pipeline"}
        </button>
      </div>

      <div className="showcase-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="viewport-content"
          >
            <div className="viewport-header">
              <span className="viewport-step-tag">{stepsData[step].sub}</span>
              <span className="viewport-indicator">● LIVE WORKFLOW</span>
            </div>
            {stepsData[step].preview}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Live Interactive Showcase for SkillSwap
const SkillSwapInteractiveShowcase = () => {
  const [learnerBalance, setLearnerBalance] = useState(10.0);
  const [mentorBalance, setMentorBalance] = useState(4.0);
  const [stateStatus, setStateStatus] = useState('idle'); // 'idle', 'escrow', 'settled'
  const [logs, setLogs] = useState([
    "Ready: Two-Party Session Complete",
    "Waiting for atomic settlement trigger..."
  ]);

  const handleSettle = () => {
    if (learnerBalance < 2.0) return;
    setStateStatus('escrow');
    setLogs(["1. Escrow Lock: 2.0 hrs reserved from Learner"]);
    
    setTimeout(() => {
      setLearnerBalance(prev => Math.max(0, +(prev - 2.0).toFixed(1)));
      setMentorBalance(prev => +(prev + 2.0).toFixed(1));
      setStateStatus('settled');
      setLogs([
        "1. Escrow Lock: 2.0 hrs reserved",
        "2. Transaction Verified: Signature OK",
        "3. PostgreSQL RPC: execute_exchange() (200 OK)"
      ]);
    }, 900);
  };

  const handleReset = () => {
    setLearnerBalance(10.0);
    setMentorBalance(4.0);
    setStateStatus('idle');
    setLogs([
      "Reset: Session ready for demo",
      "Waiting for atomic settlement trigger..."
    ]);
  };

  return (
    <div className="interactive-showcase skillswap-showcase">
      <div className="showcase-topbar">
        <span className="showcase-title-label">Time Bank Atomic Ledger</span>
        <div className="showcase-controls">
          <button 
            onClick={handleSettle} 
            disabled={stateStatus === 'settled'}
            className={`btn-sim-action ${stateStatus === 'settled' ? 'disabled' : ''}`}
          >
            <Zap size={11} /> {stateStatus === 'settled' ? "Settled (200 OK)" : "Settle 2.0 hrs"}
          </button>
          <button onClick={handleReset} className="btn-sim-reset" title="Reset Simulation">
            <RotateCcw size={11} />
          </button>
        </div>
      </div>

      <div className="showcase-viewport skillswap-viewport">
        <div className="timebank-balances">
          <div className="balance-card learner">
            <span className="bal-role">Learner (Alice)</span>
            <span className={`bal-value ${stateStatus === 'settled' ? 'decreased' : ''}`}>
              {learnerBalance.toFixed(1)} hrs
            </span>
            <span className="bal-tag">Web Dev Mentee</span>
          </div>

          <div className="transfer-indicator">
            <span className={`transfer-arrow ${stateStatus === 'settled' ? 'active' : ''}`}>
              {stateStatus === 'settled' ? "➔ 2.0 hrs Transferred ➔" : "⇄ RPC Bridge"}
            </span>
          </div>

          <div className="balance-card mentor">
            <span className="bal-role">Mentor (Bob)</span>
            <span className={`bal-value ${stateStatus === 'settled' ? 'increased' : ''}`}>
              {mentorBalance.toFixed(1)} hrs
            </span>
            <span className="bal-tag">React Tutor</span>
          </div>
        </div>

        <div className="rpc-live-terminal">
          <div className="terminal-bar">
            <Terminal size={11} />
            <span>PostgreSQL RPC Ledger Log:</span>
          </div>
          <div className="terminal-lines">
            {logs.map((l, i) => (
              <span key={i} className="log-line">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'ai', name: 'AI & Multimodal' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const projectsData = [
    {
      id: 1,
      title: "TripPlanner AI",
      subtitle: "AI-Powered Multimodal Travel Platform",
      url: "trip-planner-orpin-omega.vercel.app",
      indexLabel: "01 — Flagship AI",
      description: "Multimodal AI travel planning application engineered with Next.js 16, React 19, and TypeScript. Leverages Google Gemini 3.7 Vision to extract landmarks, categories, and context from user-uploaded screenshots, paired with an algorithmic geospatial itinerary engine.",
      highlights: [
        "Google Gemini 3.7 Vision multimodal screenshot extraction for landmarks & POIs",
        "Geospatial itinerary engine (Haversine distance, K-Means/Medoids, Farthest-First, 2-Opt local search)",
        "Place discovery and geocoding pipeline using OpenStreetMap / Nominatim REST APIs with offline fallback",
        "Supabase & PostgreSQL backend with Auth, RLS policies, PL/pgSQL triggers & 36 offline unit tests (100% pass rate)"
      ],
      tech: ["Next.js 16", "React 19", "TypeScript", "Gemini 3.7 Vision AI", "REST APIs", "Supabase", "PostgreSQL", "Tailwind CSS"],
      category: "ai",
      flagship: true,
      github: "https://github.com/aarush193",
      demo: "https://trip-planner-orpin-omega.vercel.app/",
      icon: <Sparkles size={18} />,
      visualLayout: <TripPlannerInteractiveShowcase />
    },
    {
      id: 2,
      title: "SkillSwap",
      subtitle: "Full Stack Skill Exchange & Time Bank",
      url: "skillswap.vercel.app",
      indexLabel: "02 — Flagship Full-Stack",
      description: "A full-stack collaborative time-bank platform where users publish skill listings and exchange services using Time Credits. Features custom atomic exchange settlements, an immutable time-bank ledger, Supabase RPC database validation, incoming/sent proposal lifecycles, and database-backed transactional integrity.",
      highlights: [
        "Time Bank economy with available/reserved balances, proposal lifecycles & automatic credit settlement",
        "Supabase Authentication, PostgreSQL, Row Level Security, and transactional PostgreSQL RPC functions",
        "Migrated to Next.js 16 SSR architecture, resolving 15+ migration & hydration issues",
        "Two-party completion confirmation with edge-case protection against balance overdrafts"
      ],
      tech: ["Next.js 16", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
      category: "fullstack",
      flagship: true,
      github: "https://github.com/aarush193/SkillSwap",
      demo: "https://skillswap-orcin-psi.vercel.app/",
      icon: <Layers size={18} />,
      visualLayout: <SkillSwapInteractiveShowcase />
    },
    {
      id: 3,
      title: "Express Gym Website",
      subtitle: "Server-Side Routing & Web Application",
      url: "express-gym.onrender.com",
      indexLabel: "03 — Backend & Routing",
      description: "A responsive multi-page web platform built with Node.js and Express.js, featuring structured backend route handling, static asset delivery, form validation, FAQ accordions, and interactive scroll animations.",
      highlights: [
        "Express.js structured backend router with modular route handling and static serving",
        "Interactive UI featuring responsive navigation, form validation, and scroll animations",
        "Multi-page architecture with dedicated Home, Services, About, and Contact endpoints"
      ],
      tech: ["Node.js", "Express.js", "HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      flagship: false,
      github: "https://github.com/aarush193/express-html-site.git",
      demo: "https://express-html-site.onrender.com",
      icon: <Database size={18} />,
      visualLayout: (
        <div className="browser-canvas express-canvas">
          <div className="route-badge-row">
            <span className="route-badge post">POST /api/contact</span>
            <span className="latency-tag">24ms</span>
          </div>
          <div className="route-badge-row">
            <span className="route-badge get">GET /api/classes</span>
            <span className="latency-tag">304 Cached</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Todo List App",
      subtitle: "Task Management & State System",
      url: "todo-list.vercel.app",
      indexLabel: "04 — State & Storage",
      description: "Task management web application featuring full CRUD operations, real-time search filtering, subtasks support, and LocalStorage data persistence.",
      highlights: [
        "Complete CRUD lifecycle with local state synchronization",
        "Multi-level subtask tracking and priority filtering",
        "LocalStorage persistent client state"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      category: "frontend",
      flagship: false,
      github: "https://github.com/aarush193/todo-list",
      demo: "https://todo-list-xi-fawn.vercel.app/",
      icon: <Compass size={18} />,
      visualLayout: (
        <div className="browser-canvas todo-canvas">
          <div className="todo-item-preview done">
            <CheckCircle2 size={13} className="text-mint" />
            <span>Implement Atomic CRUD</span>
          </div>
          <div className="todo-item-preview pending">
            <span className="hollow-dot"></span>
            <span>Subtask Synchronization</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Notes App",
      subtitle: "Modular React Note-Taking App",
      url: "notes-react.vercel.app",
      indexLabel: "05 — React Hooks",
      description: "React note-taking application with LocalStorage persistence, built using React Hooks and modular, reusable component architecture.",
      highlights: [
        "Modular functional components with custom React Hooks",
        "Instant search filtering and LocalStorage data caching",
        "Responsive note card layout"
      ],
      tech: ["React", "JavaScript", "LocalStorage", "CSS3"],
      category: "frontend",
      flagship: false,
      github: "https://github.com/aarush193/notes-app-react",
      demo: "https://notes-app-react-kappa-blue.vercel.app/",
      icon: <Folder size={18} />,
      visualLayout: (
        <div className="browser-canvas notes-canvas">
          <div className="note-card-chip">
            <span className="chip-title">State Architecture</span>
            <span className="chip-desc">useState & useEffect</span>
          </div>
          <div className="note-card-chip">
            <span className="chip-title">Persistence</span>
            <span className="chip-desc">LocalStorage Sync</span>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter || (filter === 'fullstack' && proj.category === 'ai'));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Portfolio & Production Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Project Grid with lightweight hardware accelerated rendering */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card-wrapper ${project.flagship ? 'flagship' : ''}`}
            >
              <div className="glass-card project-card">
                {/* Realistic Dark-Mode Browser Header */}
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-min"></span>
                    <span className="dot dot-max"></span>
                  </div>

                  <div className="browser-address-bar">
                    <span className="address-protocol">https://</span>
                    <span className="address-domain">{project.url}</span>
                  </div>

                  <div className="browser-badge">
                    <span className="badge-index">{project.indexLabel}</span>
                  </div>
                </div>

                {/* Visual Simulation Canvas */}
                <div className="project-visual-canvas">
                  {project.visualLayout}
                </div>

                {/* Project Details */}
                <div className="project-details">
                  <div className="project-title-row">
                    <div className="project-meta-icon-title">
                      <span className="project-header-icon">{project.icon}</span>
                      <span className="project-subtitle-label">{project.subtitle}</span>
                    </div>
                    {project.flagship && (
                      <span className="flagship-indicator">
                        <Sparkles size={11} /> Flagship
                      </span>
                    )}
                  </div>
                  
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>

                  {project.highlights && (
                    <ul className="project-highlights-list">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="highlight-item">{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="tech-badge-container">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-action">
                      <Github size={14} /> GitHub Repository
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-action">
                      Live Application <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }

        .projects-filter {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.825rem;
          font-weight: 500;
          transform: translateZ(0);
          will-change: transform, background, border-color, color;
          transition: all var(--transition-normal);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px) translateZ(0);
        }

        .filter-btn.active {
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border-color: rgba(16, 185, 129, 0.35);
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
          background: #0d1117;
          border: 1px solid var(--card-border);
          border-radius: 14px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: border-color, transform, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          border-color: var(--card-hover-border);
          box-shadow: 0 10px 32px -8px rgba(16, 185, 129, 0.25);
          transform: translateY(-3px) translateZ(0);
        }

        /* Realistic Dark Browser Header */
        .browser-header {
          background: #080a0f;
          border-bottom: 1px solid var(--card-border);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .browser-dots {
          display: flex;
          gap: 0.35rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot-close { background: #ef4444; opacity: 0.7; }
        .dot-min { background: #f59e0b; opacity: 0.7; }
        .dot-max { background: #10b981; opacity: 0.7; }

        .browser-address-bar {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          padding: 0.2rem 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.1rem;
          max-width: 280px;
          width: 100%;
          justify-content: center;
        }

        .address-protocol {
          color: var(--text-muted);
        }

        .address-domain {
          color: var(--text-primary);
          font-weight: 500;
        }

        .browser-badge {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--text-muted);
        }

        /* Visual Canvas */
        .project-visual-canvas {
          background: linear-gradient(180deg, #090c12 0%, #0c1017 100%);
          border-bottom: 1px solid var(--card-border);
          padding: 1rem;
          min-height: 155px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Interactive Showcase Common */
        .interactive-showcase {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .showcase-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-bottom: 0.4rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
        }

        .step-toggles {
          display: flex;
          gap: 0.3rem;
          flex-wrap: wrap;
        }

        .step-toggle-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.675rem;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .step-toggle-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .step-toggle-btn.active {
          background: rgba(168, 85, 247, 0.12);
          border-color: #a855f7;
          color: #c084fc;
        }

        .btn-sim-action {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-family: var(--font-mono);
          font-size: 0.675rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-sim-action:hover:not(:disabled) {
          background: #10b981;
          color: #080a0f;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .btn-sim-action.disabled {
          opacity: 0.7;
          cursor: default;
        }

        .btn-sim-reset {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          color: var(--text-muted);
          padding: 0.25rem 0.4rem;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: var(--transition-fast);
        }

        .btn-sim-reset:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .showcase-viewport {
          background: rgba(8, 10, 15, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          padding: 0.6rem 0.8rem;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .viewport-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          font-family: var(--font-mono);
        }

        .viewport-step-tag {
          font-size: 0.675rem;
          color: #c084fc;
          font-weight: 600;
          text-transform: uppercase;
        }

        .viewport-indicator {
          font-size: 0.6rem;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        /* Step Upload */
        .upload-mock {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          padding: 0.4rem 0.7rem;
          border-radius: 4px;
        }

        .upload-meta {
          display: flex;
          flex-direction: column;
        }

        .mock-file {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--text-primary);
        }

        .mock-stat {
          font-size: 0.65rem;
          color: #10b981;
          font-family: var(--font-mono);
        }

        /* Step Vision */
        .step-vision {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .vision-scan-bar {
          height: 2px;
          background: rgba(168, 85, 247, 0.2);
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .laser-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 30%;
          background: #c084fc;
          box-shadow: 0 0 8px #c084fc;
          animation: scanLaser 1.5s infinite linear;
        }

        @keyframes scanLaser {
          0% { left: -30%; }
          100% { left: 100%; }
        }

        .detected-pois {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .poi-chip {
          background: rgba(168, 85, 247, 0.08);
          border: 1px solid rgba(168, 85, 247, 0.25);
          color: #e9d5ff;
          font-size: 0.675rem;
          font-family: var(--font-mono);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        /* Step Route */
        .route-timeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .rt-node {
          background: rgba(6, 182, 212, 0.06);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }

        .rt-time {
          font-size: 0.6rem;
          color: #22d3ee;
          font-family: var(--font-mono);
        }

        .rt-name {
          font-size: 0.675rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .rt-arrow {
          font-size: 0.625rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* SkillSwap Viewport */
        .showcase-title-label {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: #10b981;
          font-weight: 600;
        }

        .showcase-controls {
          display: flex;
          gap: 0.4rem;
        }

        .timebank-balances {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }

        .balance-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          border-radius: 6px;
          padding: 0.4rem 0.6rem;
          display: flex;
          flex-direction: column;
        }

        .bal-role {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .bal-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .bal-value.decreased {
          color: #f59e0b;
        }

        .bal-value.increased {
          color: #10b981;
        }

        .bal-tag {
          font-size: 0.6rem;
          color: var(--text-secondary);
        }

        .transfer-indicator {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          text-align: center;
        }

        .transfer-arrow.active {
          color: #10b981;
          font-weight: 600;
        }

        .rpc-live-terminal {
          background: #05070a;
          border: 1px solid var(--card-border);
          border-radius: 4px;
          padding: 0.4rem 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
        }

        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .terminal-lines {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .log-line {
          color: #38bdf8;
        }

        /* Express Canvas */
        .browser-canvas {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          gap: 1rem;
        }

        .route-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.725rem;
        }

        .route-badge.post { color: #f59e0b; }
        .route-badge.get { color: #10b981; }
        .latency-tag { color: var(--text-muted); font-size: 0.675rem; }

        /* Todo Canvas */
        .todo-canvas {
          flex-direction: column;
          gap: 0.4rem;
          align-items: stretch;
        }

        .todo-item-preview {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        .todo-item-preview.done {
          border-color: rgba(16, 185, 129, 0.25);
          color: #cbd5e1;
        }

        .hollow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid var(--text-muted);
        }

        /* Notes Canvas */
        .notes-canvas {
          gap: 0.6rem;
        }

        .note-card-chip {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
        }

        .chip-title {
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .chip-desc {
          font-size: 0.675rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* Details */
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
          color: #10b981;
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
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .flagship-indicator {
          font-size: 0.7rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 0.15rem 0.55rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 600;
        }

        .project-card-title {
          font-size: 1.45rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .project-card-desc {
          color: var(--text-secondary);
          font-size: 0.925rem;
          margin-bottom: 1.2rem;
          line-height: 1.6;
        }

        .project-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.3rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .highlight-item {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
          position: relative;
          padding-left: 1.1rem;
        }

        .highlight-item::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #10b981;
          font-size: 0.9rem;
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
          font-family: var(--font-mono);
          padding: 0.2rem 0.55rem;
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
          padding: 0.6rem;
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
          .browser-canvas {
            flex-direction: column;
          }
          .canvas-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
