import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-brand">
          Aarush Solomon
        </div>
        
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Aarush Solomon. Designed & built from scratch.
        </p>

        <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
          <ArrowUp size={18} />
        </button>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--card-border);
          padding: 2.5rem 0;
          position: relative;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .footer-copy {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .back-to-top-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: translateZ(0);
          will-change: transform, background, color, box-shadow;
          transition: var(--transition-normal);
        }

        .back-to-top-btn:hover {
          background: #10b981;
          color: #080a0f;
          border-color: #10b981;
          transform: translateY(-3px) translateZ(0);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        @media (max-width: 480px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
