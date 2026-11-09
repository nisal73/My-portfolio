import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Heart, 
  Code2, 
  Database, 
  Layout, 
  GitBranch, 
  Terminal, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Languages, 
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';
import CvModal from './CvModal';
import './About.css';

const About = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const educationTimeline = [
    {
      period: 'Jan 2025 – Present',
      degree: 'Information Technology',
      institution: 'Institute of Technology, University of Moratuwa',
      location: 'Homagama, Sri Lanka',
      description: 'Hands-on coursework covering Software Engineering, Human-Computer Interaction (HCI), Database Management Systems, Data Structures & Algorithms, and Full-Stack Web Development. Specializing in responsive React front-ends backed by secure relational databases.',
      icon: <GraduationCap size={22} />
    },
    {
      period: '2013 – 2022',
      degree: 'Advanced Level – Physical Science | Ordinary Level',
      institution: "H/Tangalle Boys' National School",
      location: 'Tangalle, Sri Lanka',
      description: 'Studied Physical Science stream (Combined Mathematics, Physics, Chemistry). Built solid logical reasoning, analytical problem-solving fundamentals, and strong mathematical foundation.',
      icon: <BookOpen size={22} />
    }
  ];

  // Technical Skills mapped exactly from CV
  const technicalSkillGroups = [
    {
      category: 'Frontend',
      icon: <Layout size={20} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / Responsive UI', level: 92 }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database size={20} />,
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'MySQL (Relational Schemas)', level: 88 },
        { name: 'PDO Prepared Statements', level: 85 },
        { name: 'User Authentication & Sessions', level: 85 }
      ]
    },
    {
      category: 'Programming Languages',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'Python', level: 82 },
        { name: 'Java', level: 78 },
        { name: 'PHP', level: 85 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      category: 'Design & Version Control',
      icon: <GitBranch size={20} />,
      skills: [
        { name: 'UI/UX Design (Figma)', level: 88 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'HCI Usability Principles', level: 90 },
        { name: 'Wireframing & Prototyping', level: 85 }
      ]
    }
  ];

  // Certifications directly from CV
  const certifications = [
    {
      title: 'AI/ML Engineer – Stage 1',
      issuer: 'Centre for Open and Distance Education, Faculty of Computing, SLIIT',
      description: 'Foundations of Artificial Intelligence & Machine Learning, data preprocessing, machine learning algorithms, and real-world predictive modeling.',
      badge: 'SLIIT Certified'
    },
    {
      title: 'Python for Beginners',
      issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
      subnote: 'Conducted by the Department of Computer Science & Engineering, Faculty of Engineering.',
      description: 'Comprehensive introduction to Python programming syntax, control structures, functional design, data structures, and algorithmic logic.',
      badge: 'UoM Certified'
    }
  ];

  // References directly from CV
  const references = [
    {
      name: 'Mrs. Uthpala Athukorala',
      role: 'Head of Department (HOD) / Senior Lecturer',
      institution: 'Institute of Technology, University of Moratuwa',
      email: 'uthpalap@itum.mrt.ac.lk',
      phone: null
    },
    {
      name: 'Mrs. Shashika Ruwanmini',
      role: 'Senior Lecturer',
      institution: 'Institute of Technology, University of Moratuwa',
      email: 'ruwanminis@itum.mrt.ac.lk',
      phone: '+94 77 855 8303'
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">About Me</h2>
        
        {/* Row 1: Bio and Education */}
        <div className="about-grid">
          {/* Biography and Career Goals */}
          <div className="about-bio glass-panel hover-lift animate-fade-in">
            <h3 className="bio-title">
              <span className="icon-wrapper"><Heart size={20} /></span> Professional Summary
            </h3>
            <p className="bio-text">
              I am a motivated **Information Technology undergraduate** at the **Institute of Technology, University of Moratuwa**, 
              with hands-on experience building responsive React front ends and full-stack applications backed by relational databases.
            </p>
            <p className="bio-text">
              As a creative problem solver with a strong passion for learning new technologies, I focus on applying 
              **Human-Computer Interaction (HCI)** techniques to deliver software that is not only robust and secure 
              on the backend, but also highly intuitive, accessible, and enjoyable for users.
            </p>
            
            <h3 className="bio-title mt-4">
              <span className="icon-wrapper"><Award size={20} /></span> Internship Objective
            </h3>
            <p className="bio-text">
              Actively seeking an internship opportunity as a **Full Stack Developer** to apply and grow my technical 
              capabilities and teamwork skills through practical industry experience, contributing to impactful web systems.
            </p>

            <div className="about-quick-meta mt-4">
              <div className="meta-pill">
                <Languages size={15} /> <span>Languages: <strong>Sinhala, English</strong></span>
              </div>
              <div className="meta-pill">
                <MapPin size={15} /> <span>Location: <strong>Tangalle & Homagama, Sri Lanka</strong></span>
              </div>
            </div>

            <div className="about-cv-cta mt-4">
              <button onClick={() => setIsCvOpen(true)} className="btn-about-cv">
                <FileText size={16} /> Open Verified CV Document
              </button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="about-education">
            <h3 className="column-title">
              <span className="icon-wrapper mr-2"><GraduationCap size={24} /></span> Education
            </h3>
            <div className="timeline">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="timeline-item glass-panel hover-lift">
                  <div className="timeline-icon-container">
                    {item.icon}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-top-row">
                      <span className="timeline-period">{item.period}</span>
                      <span className="timeline-location"><MapPin size={12} /> {item.location}</span>
                    </div>
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <h5 className="timeline-institution text-gradient">{item.institution}</h5>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="about-skills-container mt-5">
          <div className="section-header-compact text-center">
            <h3 className="column-title text-center">Technical Skills</h3>
            <p className="section-desc-compact">
              Proficiencies across front-end engineering, back-end relational architecture, programming languages, and UI/UX design.
            </p>
          </div>

          <div className="skills-grid">
            {technicalSkillGroups.map((group, idx) => (
              <div key={idx} className="skills-card glass-panel hover-lift">
                <div className="skills-card-header">
                  <span className="group-icon">{group.icon}</span>
                  <h4 className="skills-category-title text-gradient">{group.category}</h4>
                </div>
                <div className="skills-list">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section (Direct from CV) */}
        <div className="about-certs-container mt-5">
          <div className="section-header-compact text-center">
            <h3 className="column-title text-center">Certifications</h3>
            <p className="section-desc-compact">
              Verified certifications from recognized academic and technology institutions.
            </p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card glass-panel hover-lift">
                <div className="cert-badge-row">
                  <span className="cert-tag"><Award size={14} /> {cert.badge}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-issuer text-gradient">{cert.issuer}</div>
                {cert.subnote && <div className="cert-subnote">{cert.subnote}</div>}
                <p className="cert-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic References Section (Direct from CV) */}
        <div id="references" className="about-references-container mt-5">
          <div className="section-header-compact text-center">
            <h3 className="column-title text-center">Academic References</h3>
            <p className="section-desc-compact">
              Academic mentors and department faculty at the Institute of Technology, University of Moratuwa.
            </p>
          </div>

          <div className="references-grid">
            {references.map((ref, idx) => (
              <div key={idx} className="reference-card glass-panel hover-lift">
                <div className="ref-avatar">
                  <UserCheck size={24} />
                </div>
                <div className="ref-details">
                  <h4 className="ref-name">{ref.name}</h4>
                  <div className="ref-role">{ref.role}</div>
                  <div className="ref-institution text-gradient">{ref.institution}</div>
                  
                  <div className="ref-contact-links">
                    <a href={`mailto:${ref.email}`} className="ref-link">
                      <Mail size={14} /> {ref.email}
                    </a>
                    {ref.phone && (
                      <a href={`tel:${ref.phone.replace(/\s+/g, '')}`} className="ref-link">
                        <Phone size={14} /> {ref.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CV Modal View */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
};

export default About;
