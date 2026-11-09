import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, Code, UserCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './CvModal.css';

const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cv-modal-container glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="cv-modal-toolbar">
          <div className="toolbar-left">
            <span className="cv-badge">Curriculum Vitae</span>
            <span className="cv-doc-name">Chamod_Nisal_CV.pdf</span>
          </div>
          <div className="toolbar-actions">
            <button onClick={handlePrint} className="toolbar-btn print-btn" title="Print or Save as PDF">
              <Printer size={16} /> Print / Save PDF
            </button>
            <button onClick={onClose} className="toolbar-btn close-btn" aria-label="Close CV preview">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable CV Paper Sheet */}
        <div className="cv-paper" id="printable-cv">
          {/* Header */}
          <header className="cv-header">
            <h1 className="cv-name">Chamod Nisal</h1>
            <h2 className="cv-role">Full Stack Developer – Intern</h2>
            <div className="cv-contact-row">
              <a href="mailto:chamodnisal2002@gmail.com" className="cv-contact-item">
                <Mail size={14} /> chamodnisal2002@gmail.com
              </a>
              <span className="cv-sep">|</span>
              <a href="tel:+94702168247" className="cv-contact-item">
                <Phone size={14} /> +94 70 216 8247
              </a>
              <span className="cv-sep">|</span>
              <span className="cv-contact-item">
                <MapPin size={14} /> Tangalle, Sri Lanka
              </span>
              <span className="cv-sep">|</span>
              <a href="https://www.linkedin.com/in/chamod-nisal-4360a5360/" target="_blank" rel="noreferrer" className="cv-contact-item">
                <Linkedin size={14} /> LinkedIn
              </a>
              <span className="cv-sep">|</span>
              <a href="https://github.com/nisal73" target="_blank" rel="noreferrer" className="cv-contact-item">
                <Github size={14} /> GitHub
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="cv-section">
            <h3 className="cv-section-title">PROFESSIONAL SUMMARY</h3>
            <p className="cv-summary-text">
              I am a motivated Information Technology undergraduate at the Institute of Technology, University of Moratuwa, with hands-on experience building full stack applications backed by relational databases. As a creative problem solver with a strong passion for learning new technologies.
            </p>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h3 className="cv-section-title">EDUCATION</h3>
            <div className="cv-entry">
              <div className="cv-entry-header">
                <div>
                  <strong className="cv-entry-title">Information Technology</strong>
                  <div className="cv-entry-sub">Institute of Technology, University of Moratuwa</div>
                </div>
                <div className="cv-entry-meta">
                  <span>Homagama, Sri Lanka</span>
                  <span>Jan 2025 – Present</span>
                </div>
              </div>
            </div>

            <div className="cv-entry mt-2">
              <div className="cv-entry-header">
                <div>
                  <strong className="cv-entry-title">Advanced Level – Physical Science | Ordinary Level</strong>
                  <div className="cv-entry-sub">H/Tangalle Boys' National School</div>
                </div>
                <div className="cv-entry-meta">
                  <span>Tangalle, Sri Lanka</span>
                  <span>2013 – 2022</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="cv-section">
            <h3 className="cv-section-title">TECHNICAL SKILLS</h3>
            <div className="cv-skills-table">
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Frontend</span>
                <span className="cv-skill-vals">HTML, CSS, JavaScript, React.js</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Backend</span>
                <span className="cv-skill-vals">PHP</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Design</span>
                <span className="cv-skill-vals">UI/UX Design (Figma)</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Database</span>
                <span className="cv-skill-vals">MySQL</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Version Control</span>
                <span className="cv-skill-vals">Git, GitHub</span>
              </div>
              <div className="cv-skill-row">
                <span className="cv-skill-cat">Programming</span>
                <span className="cv-skill-vals">Python, Java, PHP</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="cv-section">
            <h3 className="cv-section-title">PROJECTS</h3>
            
            <div className="cv-project-entry">
              <div className="cv-project-name">Sentinel Care – Smart Medical Hand Band System</div>
              <ul className="cv-bullets">
                <li>Developed a responsive React web application enabling caregivers to monitor and manage patients.</li>
                <li>Built patient management, health monitoring, medication, insights and settings interfaces with patient-specific dashboards and reusable components.</li>
                <li>Architected the application for future Firebase real-time integration with IoT health data, including heart rate, SpO2, temperature, activity, device status and health alerts.</li>
              </ul>
            </div>

            <div className="cv-project-entry mt-2">
              <div className="cv-project-name">Student Event Management System</div>
              <ul className="cv-bullets">
                <li>Built a full-stack event platform in PHP and MySQL where students register for events and admins manage them.</li>
                <li>Implemented hashed-password login, sessions and role-based access control for student and admin users.</li>
                <li>Designed a relational MySQL schema and used PDO prepared statements to prevent SQL injection.</li>
                <li>Added event capacity limits, duplicate-registration prevention, an admin registrations view and JavaScript form validation.</li>
              </ul>
            </div>

            <div className="cv-project-entry mt-2">
              <div className="cv-project-name">Financial Manager</div>
              <ul className="cv-bullets">
                <li>Developed a full-stack personal finance management application with secure user authentication.</li>
                <li>Implemented transaction and account CRUD operations, budget tracking, notifications and an interactive financial dashboard.</li>
                <li>Designed a relational MySQL database and applied user-level authorization to ensure secure data management.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="cv-section">
            <h3 className="cv-section-title">CERTIFICATIONS</h3>
            <div className="cv-cert-item">
              <strong>AI/ML Engineer – Stage 1</strong> – Center for Open and Distance Education, Faculty of Computing, SLIIT
            </div>
            <div className="cv-cert-item mt-1">
              <strong>Python for Beginners</strong> – Center for Open & Distance Learning (CODL), University of Moratuwa
              <div className="cv-cert-sub">Conducted by the Department of Computer Science & Engineering, Faculty of Engineering.</div>
            </div>
          </section>

          {/* Languages */}
          <section className="cv-section">
            <h3 className="cv-section-title">LANGUAGES</h3>
            <p className="cv-plain-text">Sinhala, English</p>
          </section>

          {/* References */}
          <section className="cv-section">
            <h3 className="cv-section-title">REFERENCES</h3>
            <div className="cv-references-grid">
              <div className="cv-ref-card">
                <strong>Mrs. Uthpala Athukorala</strong>
                <div>HOD / Senior Lecturer</div>
                <div>Institute of Technology, University of Moratuwa</div>
                <div className="cv-ref-contact">uthpalap@itum.mrt.ac.lk</div>
              </div>
              <div className="cv-ref-card">
                <strong>Mrs. Shashika Ruwanmini</strong>
                <div>Senior Lecturer</div>
                <div>Institute of Technology, University of Moratuwa</div>
                <div className="cv-ref-contact">
                  ruwanminis@itum.mrt.ac.lk | +94 77 855 8303
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CvModal;

