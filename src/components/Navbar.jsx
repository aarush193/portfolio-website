import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="nav-logo">
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

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 100;
          display: flex;
          align-items: center;
          transition: var(--transition-fast);
          border-bottom: 1px solid transparent;
          background: rgba(10, 10, 10, 0.4);
        }
        
        .navbar-wrapper.scrolled {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--card-border);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-item {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .btn-nav {
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: var(--nav-height);
          left: 0;
          right: 0;
          background: #0a0a0a;
          border-bottom: 1px solid var(--card-border);
          z-index: 99;
          padding: 1.5rem;
        }

        .mobile-links-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-item {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0;
        }

        .mobile-nav-item:hover {
          color: var(--text-primary);
        }

        .mobile-hire-btn {
          text-align: center;
          justify-content: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .nav-desktop-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
