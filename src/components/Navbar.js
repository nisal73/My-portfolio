import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import CvModal from './CvModal';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About & Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'references', label: 'References' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Track scroll position to update active nav link (HCI Principle: Visibility of System Status)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // offset

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar glass-panel">
        <div className="navbar-container container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            <span className="logo-text text-gradient">Chamod Nisal</span>
            <span className="logo-badge">Full Stack</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-btn ${activeSection === link.id ? 'active' : ''}`}
                  aria-label={`Scroll to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme & Actions */}
          <div className="navbar-actions">
            <button
              onClick={() => setIsCvOpen(true)}
              className="nav-cv-btn"
              aria-label="View Curriculum Vitae"
            >
              <FileText size={15} /> CV
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={19} className="sun-icon" /> : <Moon size={19} className="moon-icon" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-nav-menu ${isOpen ? 'open' : ''} glass-panel`}>
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`mobile-nav-btn ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mobile-cv-li">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCvOpen(true);
                }}
                className="mobile-cv-btn"
              >
                <FileText size={16} /> View Full CV
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
};

export default Navbar;
