import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowDown, FileText, Sparkles, Briefcase } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import CvModal from './CvModal';
import './Home.css';

const Home = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const socialLinks = [
    {
      id: 'github',
      icon: <Github size={22} />,
      url: 'https://github.com/nisal73',
      label: 'GitHub Profile',
      title: 'GitHub'
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={22} />,
      url: 'https://www.linkedin.com/in/chamod-nisal-4360a5360/',
      label: 'LinkedIn Profile',
      title: 'LinkedIn'
    },
    {
      id: 'whatsapp',
      icon: <MessageSquare size={22} />,
      url: 'https://wa.me/94702168247',
      label: 'WhatsApp Chat',
      title: 'WhatsApp'
    },
    {
      id: 'email',
      icon: <Mail size={22} />,
      url: 'mailto:chamodnisal2002@gmail.com',
      label: 'Send Email',
      title: 'Email'
    }
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section section">
      <div className="home-container container">
        {/* Name and role at top */}
        <div className="home-header animate-fade-in">
          <h1 className="home-title">
            Hi, I'm <span className="text-gradient">Chamod Nisal</span>
          </h1>
          <div className="home-role-tag">
            <Briefcase size={16} className="role-icon" />
            <span className="role-title">Full Stack Developer – Intern</span>
          </div>
        </div>

        {/* Profile Image - Center & Bellow the Name */}
        <div className="home-visual animate-fade-in delay-100">
          <div className="image-frame-container">
            {/* Pulsing glow circles behind image */}
            <div className="glow-circle outer"></div>
            <div className="glow-circle inner"></div>
            
            {/* The Image itself */}
            <div className="image-wrapper">
              <img 
                src={`${process.env.PUBLIC_URL}/111.png`} 
                alt="Chamod Nisal profile" 
                className="profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x400/111827/ffffff?text=Chamod+Nisal";
                }}
              />
            </div>
          </div>
        </div>

        {/* Subtitle, description and CTAs below image */}
        <div className="home-details animate-fade-in delay-200">
          <h2 className="home-subtitle">
            Information Technology Undergraduate at <span className="highlight-text">Institute of Technology, University of Moratuwa</span>
          </h2>

          <p className="home-description">
            I am a motivated Information Technology undergraduate at the Institute of Technology, University of Moratuwa, 
            with hands-on experience building full stack applications backed by relational databases. As a creative problem solver 
            with a strong passion for learning new technologies, seeking an internship to apply and grow my technical capabilities 
            and teamwork skills through practical industry experience.
          </p>

          {/* Call to Actions */}
          <div className="home-actions">
            <button 
              onClick={() => handleScrollTo('projects')} 
              className="btn-primary hover-lift"
              aria-label="View projects section"
            >
              <Sparkles size={16} /> View Projects
            </button>
            <button 
              onClick={() => setIsCvOpen(true)} 
              className="btn-cv hover-lift"
              aria-label="View full curriculum vitae"
            >
              <FileText size={16} /> View Full CV
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn-secondary hover-lift"
              aria-label="View contact section"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="home-socials">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon-btn ${link.id}`}
                aria-label={link.label}
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span className="scroll-text">Explore More</span>
        <ArrowDown size={16} className="scroll-arrow" />
      </div>

      {/* CV Preview & Print Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
};

export default Home;
