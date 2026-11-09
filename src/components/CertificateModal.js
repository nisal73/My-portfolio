import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Eye, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  FileText,
  Copy,
  Check,
  Building2,
  Sparkles
} from 'lucide-react';
import './CertificateModal.css';

const CertificateModal = ({ isOpen, onClose, initialCert, certificates = [] }) => {
  const [selectedCertId, setSelectedCertId] = useState(initialCert ? initialCert.id : (certificates[0] ? certificates[0].id : null));
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'credential'
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (initialCert) {
      setSelectedCertId(initialCert.id);
    }
  }, [initialCert]);

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

  const currentCert = certificates.find(c => c.id === selectedCertId) || initialCert || certificates[0];
  if (!currentCert) return null;

  const handleCopyId = (id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div className="cert-modal-container glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Certificate Switcher Header Tabs */}
        <div className="cert-modal-header">
          <div className="cert-tabs">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCertId(cert.id)}
                className={`cert-tab-btn ${selectedCertId === cert.id ? 'active' : ''}`}
              >
                <Award size={15} />
                <span className="tab-title">{cert.shortTitle || cert.title}</span>
                <span className="tab-badge">{cert.badge}</span>
              </button>
            ))}
          </div>

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

        {/* Toolbar & Controls Bar */}
        <div className="cert-modal-toolbar">
          <div className="toolbar-info">
            <h3 id="cert-modal-title" className="cert-active-title">
              {currentCert.title}
            </h3>
            <div className="cert-meta-badges">
              <span className="meta-badge issuer-badge">
                <Building2 size={13} /> {currentCert.shortIssuer || currentCert.issuer}
              </span>
              <span className="meta-badge date-badge">
                <Calendar size={13} /> {currentCert.issueDate}
              </span>
              {currentCert.certId && (
                <button 
                  type="button"
                  className="meta-badge id-badge hover-lift"
                  onClick={() => handleCopyId(currentCert.certId)}
                  title="Click to copy credential ID"
                >
                  <ShieldCheck size={13} />
                  <span>ID: <strong>{currentCert.certId}</strong></span>
                  {copiedId ? <Check size={12} className="text-success" /> : <Copy size={12} />}
                </button>
              )}
            </div>
          </div>

          <div className="toolbar-actions">
            {/* View Mode Switcher */}
            <div className="view-mode-toggle">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`toggle-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                title="View original official PDF"
              >
                <Eye size={14} /> PDF
              </button>
              <button
                type="button"
                onClick={() => setViewMode('credential')}
                className={`toggle-btn ${viewMode === 'credential' ? 'active' : ''}`}
                title="View digital verified certificate"
              >
                <Sparkles size={14} /> Digital
              </button>
            </div>

            {/* Verification Link if exists */}
            {currentCert.verifyUrl && (
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn verify-btn"
                title="Verify certificate on official university portal"
              >
                <ShieldCheck size={15} />
                <span>Verify Online</span>
              </a>
            )}

            {/* Direct PDF Download */}
            <a
              href={currentCert.pdfUrl}
              download={currentCert.downloadName || `${currentCert.title}.pdf`}
              className="action-btn download-btn"
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
            </a>
          </div>
        </div>

        {/* Modal Main Viewport */}
        <div className="cert-modal-viewport">
          {viewMode === 'pdf' ? (
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
                  <span>Verified Official PDF Document</span>
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
          ) : (
            /* Digital Credential Certificate Presentation */
            <div className="cert-credential-card-wrapper">
              <div className="digital-certificate-paper">
                <div className="cert-border-outer">
                  <div className="cert-border-inner">
                    
                    {/* Header Seal & Institution */}
                    <div className="digital-cert-header">
                      <div className="cert-ornament-top">
                        <Award size={36} className="ornament-icon" />
                      </div>
                      <h4 className="cert-type-headline">CERTIFICATE OF COMPLETION</h4>
                      <p className="cert-intro">This is to certify that</p>
                      <h2 className="cert-recipient-name">Chamod Nisal</h2>
                      <p className="cert-fulfillment">
                        has successfully pursued studies and fulfilled all academic requirements for
                      </p>
                    </div>

                    {/* Program Title Banner */}
                    <div className="digital-cert-body">
                      <div className="cert-program-banner">
                        <h3 className="cert-program-title text-gradient">{currentCert.title}</h3>
                      </div>
                      
                      <div className="cert-issuing-org">
                        <p className="cert-conducted-by">Conducted by</p>
                        <p className="cert-org-name">{currentCert.issuer}</p>
                        {currentCert.subnote && (
                          <p className="cert-subnote-text">{currentCert.subnote}</p>
                        )}
                      </div>

                      {/* Covered Skills */}
                      {currentCert.skills && (
                        <div className="cert-skills-covered">
                          <span className="skills-label">Core Competencies:</span>
                          <div className="skills-tags">
                            {currentCert.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="cert-skill-pill">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Verification & Seal */}
                    <div className="digital-cert-footer">
                      <div className="cert-footer-col">
                        <span className="footer-label">Issue Date:</span>
                        <strong className="footer-value">{currentCert.issueDate}</strong>
                      </div>

                      <div className="cert-footer-col cert-seal-col">
                        <div className="official-seal">
                          <ShieldCheck size={28} />
                          <span>VERIFIED</span>
                        </div>
                      </div>

                      <div className="cert-footer-col text-right">
                        <span className="footer-label">Credential Verification:</span>
                        <strong className="footer-value code-font">{currentCert.certId}</strong>
                        {currentCert.verifyUrl && (
                          <a 
                            href={currentCert.verifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cert-verify-anchor"
                          >
                            open.uom.lk/verify <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CertificateModal;

