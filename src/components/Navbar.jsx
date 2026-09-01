import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const isPast20 = window.scrollY > 20;
      if (isPast20 !== lastScrolled) {
        lastScrolled = isPast20;
        setScrolled(isPast20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="navbar-fixed-container">
        <nav className={`navbar-island ${scrolled ? 'scrolled' : ''}`}>
          <a href="#" className="nav-logo">
            <span className="badge-dot-container" style={{ width: 8, height: 8, position: 'relative' }}>
              <span className="radar-ring" style={{ width: 8, height: 8 }}></span>
              <span className="logo-indicator"></span>
            </span>
            Aarush Solomon
          </a>

          {/* Desktop Nav */}
          <div className="nav-desktop-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-item">
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right-action">
            <a href="#contact" className="btn-nav-action">
              Contact <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer with AnimatePresence Smooth Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-links-container">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="mobile-nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary mobile-contact-btn"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-fixed-container {
          position: fixed;
          top: 1.2rem;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
          pointer-events: none;
        }

        .navbar-island {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 900px;
          padding: 0.55rem 1.1rem;
          background: rgba(13, 17, 23, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          border-radius: 9999px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          transform: translateZ(0);
          will-change: background, border-color, box-shadow;
          transition: border-color var(--transition-normal), background var(--transition-normal), box-shadow var(--transition-normal);
        }

        .navbar-island.scrolled {
          background: rgba(10, 14, 20, 0.88);
          border-color: rgba(16, 185, 129, 0.25);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(16, 185, 129, 0.15);
        }

        .nav-logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity var(--transition-fast);
        }

        .nav-logo:hover {
          opacity: 0.9;
        }

        .logo-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-item {
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-right-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-nav-action {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.9rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          transform: translateZ(0);
          transition: all var(--transition-normal);
        }

        .btn-nav-action:hover {
          background: #10b981;
          color: #080a0f;
          border-color: #10b981;
          box-shadow: 0 2px 14px rgba(16, 185, 129, 0.45);
          transform: translateY(-1px) translateZ(0);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.3rem;
          transition: transform var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          transform: scale(1.05);
        }

        .mobile-drawer {
          position: fixed;
          top: 4.8rem;
          left: 1rem;
          right: 1rem;
          background: rgba(13, 17, 23, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          z-index: 99;
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
          transform: translateZ(0);
        }

        .mobile-links-container {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .mobile-nav-item {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0.8rem;
          border-radius: 8px;
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .mobile-nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-contact-btn {
          margin-top: 0.8rem;
          justify-content: center;
        }

        @media (max-width: 820px) {
          .nav-desktop-links, .btn-nav-action {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-island {
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
