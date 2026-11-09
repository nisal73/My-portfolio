import React, { useState, useEffect } from 'react';
import { ChevronUp, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-panel">
      <div className="footer-container container">
        <div className="footer-left">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <span className="text-gradient font-bold">Chamod Nisal</span>. All Rights Reserved.
          </p>
          <p className="footer-role">
            Full Stack Developer – Intern • Tangalle & Homagama, Sri Lanka
          </p>
        </div>

        <div className="footer-right">
          <p className="footer-affiliation">
            Institute of Technology, University of Moratuwa
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top button (HCI: User Control & Freedom) */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn glass-panel ${showScroll ? 'visible' : ''}`}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
