import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const points = [
    "Worked with HTML, CSS, JavaScript, and modern frontend concepts to build interfaces.",
    "Learned and applied responsive web design best practices and robust UI layouts.",
    "Strengthened developer debugging capabilities, code testing, and problem-solving skills.",
    "Gained practical exposure to professional collaborative development, Git branching, and agile workflows."
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Professional Exposure</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-wrapper">
          <div className="glass-card experience-card">
            <div className="experience-header">
              <div className="role-company">
                <div className="icon-wrapper">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="role-title">Front-End Development Intern</h3>
                  <h4 className="company-name gradient-text">Radixcube Solutions Pvt. Ltd.</h4>
                </div>
              </div>
              
              <div className="meta-details">
                <span className="meta-item">
                  <Calendar size={16} /> 3 Months Internship
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> Hybrid / Remote
                </span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="experience-body">
              <h4 className="responsibilities-title">Key Responsibilities & Learnings</h4>
              <ul className="points-list">
                {points.map((point, index) => (
                  <li key={index} className="point-item">
                    <ChevronRight size={18} className="bullet-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-secondary);
        }

        .experience-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .experience-card {
          padding: 2.5rem;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .role-company {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }

        .role-title {
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .meta-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .divider {
          height: 1px;
          background: var(--card-border);
          margin: 2rem 0;
        }

        .responsibilities-title {
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
        }

        .points-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        @media (max-width: 600px) {
          .experience-card {
            padding: 1.5rem;
          }
          .experience-header {
            flex-direction: column;
            gap: 1rem;
          }
          .meta-details {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .role-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
