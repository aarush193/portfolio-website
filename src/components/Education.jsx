import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Academic & Certifications</span>
          <h2 className="section-title">Education & Credentials</h2>
        </motion.div>

        <div className="education-wrapper">
          {/* Degree Card */}
          <motion.div 
            className="glass-card education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="education-header">
              <div className="edu-title-box">
                <div className="icon-wrapper">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="degree-title">Bachelor of Technology (B.Tech)</h3>
                  <h4 className="major-title gradient-text">Computer Science & Engineering</h4>
                </div>
              </div>

              <div className="edu-meta">
                <span className="meta-badge">
                  <Calendar size={14} /> 2021 – 2025
                </span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="education-body">
              <div className="university-details">
                <div className="university-row">
                  <BookOpen size={18} className="univ-icon" />
                  <div>
                    <h4 className="college-name">Institute of Engineering and Technology (IET), Khandari</h4>
                    <p className="university-name">Dr. Bhimrao Ambedkar University (DBRAU)</p>
                  </div>
                </div>

                <div className="university-row location-row">
                  <MapPin size={18} className="univ-icon" />
                  <span>Agra, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            className="glass-card education-card cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="education-header">
              <div className="edu-title-box">
                <div className="icon-wrapper cert-icon-wrapper">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="degree-title">The Ultimate Web Development Course</h3>
                  <h4 className="major-title">Udemy (CodeWithHarry)</h4>
                </div>
              </div>

              <div className="edu-meta">
                <span className="meta-badge cert-badge">
                  <CheckCircle size={14} /> Completed: 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-secondary);
        }

        .education-wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .education-card {
          padding: 2.2rem 2.5rem;
          background: rgba(13, 17, 23, 0.7);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: transform, border-color, box-shadow;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .education-card:hover {
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-3px) translateZ(0);
          box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.22);
        }

        .cert-card {
          background: rgba(13, 17, 23, 0.55);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .cert-card:hover {
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.22);
        }

        .icon-wrapper {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.75rem;
          border-radius: 10px;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(0);
          transition: all var(--transition-normal);
        }

        .cert-icon-wrapper {
          background: rgba(6, 182, 212, 0.1) !important;
          border-color: rgba(6, 182, 212, 0.25) !important;
          color: #06b6d4 !important;
        }

        .cert-badge {
          background: rgba(6, 182, 212, 0.1) !important;
          color: #22d3ee !important;
          border-color: rgba(6, 182, 212, 0.25) !important;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .edu-title-box {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .degree-title {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .major-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #10b981;
        }

        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        .divider {
          height: 1px;
          background: var(--card-border);
          margin: 2rem 0;
        }

        .university-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .university-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .univ-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .college-name {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .university-name {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .location-row {
          color: var(--text-secondary);
          font-size: 0.95rem;
          align-items: center;
        }

        @media (max-width: 600px) {
          .education-card {
            padding: 1.5rem;
          }
          .education-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
