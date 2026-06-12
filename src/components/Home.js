import React from 'react';
import { MessageSquare, Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Home.css';

const Home = () => {
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
      url: 'https://wa.me/94716718620',
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
        {/* Name at top */}
        <div className="home-header animate-fade-in">
          <h1 className="home-title">
            Hi, I'm <span className="text-gradient">G.G. Chamod Nisal Kumara</span>
          </h1>
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
                alt="G.G. Chamod Nisal Kumara profile" 
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
            Undergraduate at <span className="highlight-text">Institute of Technology University of Moratuwa</span>
          </h2>

          <p className="home-description">
            I am a passionate software engineering student specializing in designing and developing interactive, 
            user-centered web applications.
          </p>

          {/* Call to Actions */}
          <div className="home-actions">
            <button 
              onClick={() => handleScrollTo('projects')} 
              className="btn-primary hover-lift"
              aria-label="View projects section"
            >
              View My Work
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn-secondary hover-lift"
              aria-label="View contact section"
            >
              Let's Connect
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
    </section>
  );
};

export default Home;
