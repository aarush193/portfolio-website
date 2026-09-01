import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Cpu, Terminal, Database, Sparkles, Activity, ShieldCheck, Layers, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [activeTier, setActiveTier] = useState(null);

  const architectureNodes = [
    {
      id: 0,
      name: "AI & Multimodal Engine",
      subtitle: "TripPlanner AI Core",
      tag: "Gemini 3.7 Vision + Geospatial 2-Opt",
      metrics: "Multimodal POI Extraction • 36 Offline Tests (100% Pass)",
      tech: "Google Gemini 3.7 Vision • Nominatim REST • K-Means",
      project: "TripPlanner AI",
      projectLink: "#projects",
      trace: { endpoint: "POST /api/extract-landmarks", latency: "142ms", status: "200 OK", security: "Gemini 3.7 API SSL" },
      icon: <Sparkles size={16} />,
      color: "purple"
    },
    {
      id: 1,
      name: "Client Interface & SSR",
      subtitle: "High-Performance Modern Web",
      tag: "Next.js 16 + React 19",
      metrics: "App Router SSR • Zero Hydration Mismatches • Tailwind",
      tech: "React 19 • TypeScript • Framer Motion",
      project: "SkillSwap & TripPlanner",
      projectLink: "#projects",
      trace: { endpoint: "GET /dashboard (SSR)", latency: "42ms", status: "200 OK", security: "Hydration Verified" },
      icon: <Cpu size={16} />,
      color: "emerald"
    },
    {
      id: 2,
      name: "Backend Services & Security",
      subtitle: "Transactional API Layer",
      tag: "Node.js + Supabase RPC",
      metrics: "Atomic Ledger Settlements • 2-Party Confirmations",
      tech: "Node.js • Express • PostgreSQL RPC Functions",
      project: "SkillSwap Platform",
      projectLink: "#projects",
      trace: { endpoint: "POST /rpc/execute_exchange", latency: "64ms", status: "200 OK", security: "Atomic Transaction" },
      icon: <Terminal size={16} />,
      color: "cyan"
    },
    {
      id: 3,
      name: "Database & Ledger Store",
      subtitle: "Immutable Time-Bank Engine",
      tag: "PostgreSQL + Supabase RLS",
      metrics: "Row-Level Security • PL/pgSQL Triggers • ACID",
      tech: "PostgreSQL • Supabase Auth • MongoDB",
      project: "SkillSwap & Supabase",
      projectLink: "#projects",
      trace: { endpoint: "DB QUERY: profiles_ledger", latency: "8ms", status: "200 OK", security: "RLS Strict Enforced" },
      icon: <Database size={16} />,
      color: "emerald"
    }
  ];

  return (
    <section className="section hero-section">
      <div className="container hero-container-wrapper">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge-wrapper">
              <span className="hero-badge">
                <span className="badge-dot-container">
                  <span className="radar-ring"></span>
                  <span className="radar-ring delay"></span>
                  <span className="badge-dot"></span>
                </span> 
                Available for Full-Stack & Software Roles
              </span>
            </div>

            <h1 className="hero-title">
              Aarush Solomon <br />
              <span className="neo-accent-shimmer">Full Stack Developer</span>
            </h1>

            <p className="hero-description">
              Computer Science graduate building scalable, user-focused full-stack web applications with <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Supabase</strong>, and <strong>PostgreSQL</strong>. Experienced in designing AI multimodal pipelines, transactional databases, and secure APIs.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" aria-label="Explore Flagship Projects">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in Touch">
                Get in Touch
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/aarush193" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aarush-solomon-217148372" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Interactive Live Architecture Simulator */}
            <div 
              className="simulator-container"
              onMouseLeave={() => setActiveTier(null)}
            >
              <div className="simulator-header">
                <div className="sim-title-group">
                  <Activity size={14} className="sim-live-icon" />
                  <span className="sim-title">Live System Architecture</span>
                </div>
                <span className="sim-tag">Interactive Inspector</span>
              </div>

              <div className="architecture-composition">
                {architectureNodes.map((node, index) => {
                  const isActive = activeTier === index;
                  return (
                    <React.Fragment key={node.id}>
                      <div 
                        className={`composition-card ${node.color}-card ${isActive ? 'active' : ''}`}
                        onMouseEnter={() => setActiveTier(index)}
                        onClick={() => setActiveTier(activeTier === index ? null : index)}
                      >
                        <div className="layer-header">
                          <span className={`layer-icon ${node.color}-icon`}>{node.icon}</span>
                          <span className="layer-tag">{node.name}</span>
                          <span className="layer-badge">{node.tag}</span>
                        </div>
                        <div className="layer-details">
                          <span className="layer-tech">{node.tech}</span>
                        </div>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div 
                              className="layer-metrics-drawer"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="metrics-row">
                                <span className="metrics-label">Capability:</span>
                                <span className="metrics-value">{node.metrics}</span>
                              </div>
                              <div className="project-link-row">
                                <span className="link-label">Project:</span>
                                <a href={node.projectLink} className="sim-project-anchor">
                                  {node.project} <ArrowRight size={12} />
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {index < architectureNodes.length - 1 && (
                        <div className="connecting-line-vertical">
                          <div className={`pulse-signal ${node.color}-pulse`}></div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Simulated Runtime Trace Bar */}
              <div className="simulator-trace-bar">
                <div className="trace-header">
                  <span className="trace-dot"></span>
                  <span className="trace-title">
                    {activeTier !== null ? "Simulated Request Trace:" : "System Status:"}
                  </span>
                </div>
                <div className="trace-items">
                  {activeTier !== null && architectureNodes[activeTier] ? (
                    <>
                      <span className="trace-ep">{architectureNodes[activeTier]?.trace?.endpoint}</span>
                      <span className="trace-stat">{architectureNodes[activeTier]?.trace?.status}</span>
                      <span className="trace-lat">{architectureNodes[activeTier]?.trace?.latency}</span>
                      <span className="trace-sec">🛡️ {architectureNodes[activeTier]?.trace?.security}</span>
                    </>
                  ) : (
                    <>
                      <span className="trace-ep">All 4 Tiers Online (Production Ready)</span>
                      <span className="trace-stat">100% Verified</span>
                      <span className="trace-sec">Hover any layer to inspect</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Technologies Strip */}
        <div className="tech-strip">
          <span className="tech-strip-title">Core Production Stack</span>
          <div className="tech-strip-items">
            <span className="tech-pill">Next.js 16</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">React 19</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">TypeScript</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill ai-pill">Gemini 3.7 Vision AI</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">Node.js</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">Express.js</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">PostgreSQL</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">Supabase (RLS/RPC)</span>
            <span className="dot-sep">•</span>
            <span className="tech-pill">Tailwind CSS</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: calc(var(--nav-height) + 2.5rem);
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--card-border);
          overflow: hidden;
          position: relative;
        }

        .hero-container-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          width: 100%;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .badge-wrapper {
          margin-bottom: 1.2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          font-size: 0.775rem;
          font-weight: 600;
          color: #34d399;
          letter-spacing: 0.02em;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
          animation: pulseStatus 2s infinite ease-in-out;
        }

        @keyframes pulseStatus {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .hero-title {
          font-size: 3.4rem;
          line-height: 1.06;
          margin-bottom: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .neo-accent {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.65;
        }

        .hero-description strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .hero-socials {
          display: flex;
          gap: 1.2rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
        }

        .social-icon:hover {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
          background: rgba(16, 185, 129, 0.08);
        }

        /* Simulator Container */
        .simulator-container {
          background: #0d1117;
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 1.2rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          transform: translate3d(0, 0, 0);
        }

        .simulator-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.8rem;
          margin-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sim-title-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sim-live-icon {
          color: #10b981;
        }

        .sim-title {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sim-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
        }

        .architecture-composition {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .composition-card {
          background: #111722;
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          width: 100%;
          cursor: pointer;
          transform: translate3d(0, 0, 0);
          transition: border-color var(--transition-fast), background var(--transition-fast), transform var(--transition-fast);
        }

        .composition-card:hover, .composition-card.active {
          transform: translateY(-2px);
        }

        .emerald-card.active, .emerald-card:hover {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.08);
        }

        .cyan-card.active, .cyan-card:hover {
          border-color: #06b6d4;
          background: rgba(6, 182, 212, 0.08);
        }

        .purple-card.active, .purple-card:hover {
          border-color: #a855f7;
          background: rgba(168, 85, 247, 0.08);
        }

        .emerald-icon { color: #10b981; }
        .cyan-icon { color: #06b6d4; }
        .purple-icon { color: #c084fc; }

        .layer-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.3rem;
        }

        .layer-tag {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .layer-badge {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .layer-details {
          padding-left: 1.5rem;
          display: flex;
          align-items: center;
        }

        .layer-tech {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .layer-metrics-drawer {
          margin-top: 0.6rem;
          padding-top: 0.6rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.775rem;
          padding-left: 1.5rem;
          animation: fadeInFast 0.15s ease-out;
        }

        @keyframes fadeInFast {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .metrics-row, .project-link-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .metrics-label, .link-label {
          color: #10b981;
          font-weight: 600;
          font-size: 0.75rem;
        }

        .metrics-value {
          color: #e2e8f0;
        }

        .sim-project-anchor {
          color: #38bdf8;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .sim-project-anchor:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }

        /* Simulated Trace Bar */
        .simulator-trace-bar {
          margin-top: 1.2rem;
          background: #05070a;
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 0.6rem 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.725rem;
        }

        .trace-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .trace-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }

        .trace-title {
          color: var(--text-muted);
          font-size: 0.675rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trace-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
        }

        .trace-ep {
          color: #f1f5f9;
          font-weight: 600;
        }

        .trace-stat {
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
        }

        .trace-lat {
          color: #38bdf8;
        }

        .trace-sec {
          color: var(--text-muted);
          margin-left: auto;
          font-size: 0.675rem;
        }

        .connecting-line-vertical {
          height: 14px;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-signal {
          position: absolute;
          top: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: signalFlow 2s infinite ease-in-out;
        }

        .emerald-pulse { background: #10b981; }
        .cyan-pulse { background: #06b6d4; }
        .purple-pulse { background: #c084fc; }

        @keyframes signalFlow {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }

        /* Core Technologies Strip Styling */
        .tech-strip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.9rem;
          border-top: 1px solid var(--card-border);
          padding-top: 2rem;
          text-align: center;
        }

        .tech-strip-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .tech-strip-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
        }

        .tech-pill {
          color: #f1f5f9;
          font-weight: 600;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.65rem;
          border-radius: 6px;
          transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
        }

        .tech-pill:hover {
          border-color: rgba(16, 185, 129, 0.4);
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          transform: translateY(-1px);
        }

        .tech-pill.ai-pill {
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #d8b4fe;
        }

        .tech-pill.ai-pill:hover {
          border-color: rgba(168, 85, 247, 0.6);
          background: rgba(168, 85, 247, 0.2);
          color: #e9d5ff;
        }

        .dot-sep {
          color: #ffffff;
          opacity: 0.85;
          font-size: 0.75rem;
          user-select: none;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
