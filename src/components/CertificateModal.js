import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import './CertificateModal.css';

const CertificateModal = ({ isOpen, onClose, initialCert, certificates = [] }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentCert = initialCert || certificates[0];
  if (!currentCert) return null;

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div className="cert-modal-container glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Controls Toolbar */}
        <div className="cert-modal-toolbar">
          <div className="toolbar-info">
            <span className="cert-badge">{currentCert.badge || 'Certificate'}</span>
            <h3 id="cert-modal-title" className="cert-active-title">
              {currentCert.title}
            </h3>
          </div>

          <div className="toolbar-actions">
            {/* Direct PDF Download */}
            <a
              href={currentCert.pdfUrl}
              download={currentCert.downloadName || `${currentCert.title}.pdf`}
              className="action-btn download-btn hover-lift"
              title="Download official PDF certificate"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* Fullscreen view in new tab */}
            <a
              href={currentCert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn fullscreen-btn"
              title="Open PDF in new tab"
            >
              <ExternalLink size={15} />
              <span>Open Fullscreen</span>
            </a>

            {/* Close Button */}
            <button 
              type="button" 
              onClick={onClose} 
              className="cert-modal-close" 
              aria-label="Close certificate preview"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport: Official PDF Viewer */}
        <div className="cert-modal-viewport">
          <div className="cert-pdf-wrapper">
            <iframe
              src={`${currentCert.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              title={`${currentCert.title} - Chamod Nisal`}
              className="cert-pdf-iframe"
            />

            {/* Mobile/Fallback Helper Bar */}
            <div className="cert-pdf-helper">
              <div className="helper-left">
                <CheckCircle2 size={15} className="text-success" />
                <span>Viewing <strong>{currentCert.downloadName}</strong></span>
              </div>
              <div className="helper-right">
                <a 
                  href={currentCert.pdfUrl} 
                  download={currentCert.downloadName || `${currentCert.title}.pdf`} 
                  className="helper-link"
                >
                  <Download size={13} /> Direct Download
                </a>
                <span className="dot">•</span>
                <a 
                  href={currentCert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="helper-link"
                >
                  <ExternalLink size={13} /> Full Window
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificateModal;
