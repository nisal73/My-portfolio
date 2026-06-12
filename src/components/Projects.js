import React from 'react';
import { DollarSign, Calendar, Truck, Car } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Finance Tracker Project',
      github: 'https://github.com/nisal73/Finance_Tracker',
      tags: ['React.js', 'CSS Grid', 'Local Storage', 'Analytical Charts'],
      description: 'A responsive personal finance tracking application designed to help users log their incomes and expenses, visualize expenditure ratios, and review a history of transaction details.',
      accentColor: '#6366f1',
      mockupType: 'finance'
    },
    {
      id: 2,
      title: 'Student Event Management Project',
      github: 'https://github.com/nisal73/student_event_management',
      tags: ['Java', 'Servlet', 'React', 'MySQL Database'],
      description: 'An academic portal developed to let university administrators publish campus events, workshops, and seminars, and allow students to sign up and manage bookings.',
      accentColor: '#ec4899',
      mockupType: 'events'
    },
    {
      id: 3,
      title: 'Vehicle Rental System',
      github: 'https://github.com/Nilanga7/Vehicle-Rental-System',
      tags: ['Spring Boot', 'Java', 'React.js', 'MySQL', 'REST API'],
      description: 'A comprehensive car rental booking system featuring client search, booking scheduling, rate details, and payment/invoice generation.',
      accentColor: '#06b6d4',
      mockupType: 'vehicle'
    },
    {
      id: 4,
      title: 'Shipment & Logistics Management',
      github: 'https://github.com/Randil-K/Shipment-and-Logestic-Managment-System',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Tracking API'],
      description: 'An enterprise logistics management dashboard engineered to register cargo, trace delivery milestones, manage truck dispatches, and review operational metrics.',
      accentColor: '#f59e0b',
      mockupType: 'shipment'
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">Featured Projects</h2>
        <p className="projects-subtitle text-center animate-fade-in">
          Here is a collection of backend, frontend, and database-driven solutions I have built.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article 
              key={project.id} 
              className="project-card glass-panel hover-lift animate-fade-in"
              style={{ '--accent': project.accentColor }}
            >
              {/* Card Header Gradient banner */}
              <div 
                className="project-banner"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}dd 0%, #111827ee 100%)` }}
              >
                <div className="project-banner-icon">
                  {project.mockupType === 'finance' && <DollarSign size={24} />}
                  {project.mockupType === 'events' && <Calendar size={24} />}
                  {project.mockupType === 'vehicle' && <Car size={24} />}
                  {project.mockupType === 'shipment' && <Truck size={24} />}
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Tech Pills */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
