import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, AlertCircle, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Exact contact details from CV
  const contactMethods = [
    {
      id: 'email',
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'chamodnisal2002@gmail.com',
      url: 'mailto:chamodnisal2002@gmail.com',
      actionText: 'Send Email'
    },
    {
      id: 'phone',
      icon: <Phone size={22} />,
      label: 'Phone Number',
      value: '+94 70 216 8247',
      url: 'tel:+94702168247',
      actionText: 'Call Now'
    },
    {
      id: 'whatsapp',
      icon: <MessageSquare size={22} />,
      label: 'WhatsApp',
      value: '+94 70 216 8247',
      url: 'https://wa.me/94702168247',
      actionText: 'Message on WhatsApp'
    },
    {
      id: 'location',
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Tangalle, Sri Lanka',
      url: 'https://maps.google.com/?q=Tangalle,+Sri+Lanka',
      actionText: 'View on Map'
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      value: 'chamod-nisal-4360a5360',
      url: 'https://www.linkedin.com/in/chamod-nisal-4360a5360/',
      actionText: 'View Profile'
    },
    {
      id: 'github',
      icon: <Github size={22} />,
      label: 'GitHub',
      value: 'github.com/nisal73',
      url: 'https://github.com/nisal73',
      actionText: 'View Repositories'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message must be provided';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network dispatch with HCI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">Get In Touch</h2>
        <p className="contact-subtitle text-center animate-fade-in">
          Looking for a dedicated Full Stack Developer Intern? Have a project idea or inquiry? 
          Feel free to connect directly through any channel below or submit the contact form.
        </p>

        <div className="contact-grid">
          {/* Direct channels links list */}
          <div className="contact-channels animate-fade-in">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.url}
                target={method.id !== 'phone' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="channel-card glass-panel hover-lift"
              >
                <div className={`channel-icon-wrapper ${method.id}`}>
                  {method.icon}
                </div>
                <div className="channel-info">
                  <span className="channel-label">{method.label}</span>
                  <span className="channel-value">{method.value}</span>
                  <span className="channel-action">{method.actionText} →</span>
                </div>
              </a>
            ))}
          </div>

          {/* Form panel container */}
          <div className="contact-form-panel glass-panel animate-fade-in delay-100">
            {submitSuccess && (
              <div className="success-toast-overlay glass-panel animate-fade-in" role="alert">
                <CheckCircle2 size={32} className="success-icon" />
                <div className="success-toast-content">
                  <h4 className="success-toast-title">Message Sent Successfully!</h4>
                  <p className="success-toast-desc">
                    Thank you for reaching out, Chamod Nisal will respond to you promptly.
                  </p>
                </div>
                <button onClick={() => setSubmitSuccess(false)} className="success-toast-close" aria-label="Dismiss message">×</button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="actual-contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe / Hiring Manager"
                  className={`form-input-field ${errors.name ? 'input-error' : ''}`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="error-message">
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className={`form-input-field ${errors.email ? 'input-error' : ''}`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="error-message">
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Full Stack Internship Opportunity / Project Collaboration"
                  className={`form-input-field ${errors.subject ? 'input-error' : ''}`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="error-message">
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here (minimum 10 characters)..."
                  rows="5"
                  className={`form-input-field text-area-field ${errors.message ? 'input-error' : ''}`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <span id="message-error" className="error-message">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="form-submit-btn hover-lift"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="submit-spinner-loader"></div>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
