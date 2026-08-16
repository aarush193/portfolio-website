import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Credentials</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-wrapper">
          <motion.div
            className="glass-card education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-secondary);
        }

        .education-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .education-card {
          padding: 2.5rem;
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
        }

        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(20, 184, 166, 0.1);
          color: #2dd4bf;
          border: 1px solid rgba(20, 184, 166, 0.2);
          font-size: 0.75rem;
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
