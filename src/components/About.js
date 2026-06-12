import React from 'react';
import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const educationTimeline = [
    {
      period: '2024 - Present',
      degree: 'National Diploma in Technology (NDT) in Information Technology',
      institution: 'Institute of Technology, University of Moratuwa (ITUM)',
      description: 'Currently in Semester III. Core coursework includes Software Engineering, Human-Computer Interaction (HCI), Database Management Systems, Data Structures & Algorithms, and Web Application Development.',
      icon: <GraduationCap size={20} />
    },
    {
      period: '2021 - 2023',
      degree: 'G.C.E. Advanced Level (Physical Science Stream)',
      institution: 'High School Education',
      description: 'Focused on Combined Mathematics, Physics, and Chemistry. Developed strong logical reasoning and problem-solving fundamentals.',
      icon: <BookOpen size={20} />
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend & UI',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'JavaScript (ES6+)', level: 75 },
        { name: 'HTML5 & CSS3', level: 85 },
        { name: 'Responsive Layouts', level: 88 }
      ]
    },
    {
      title: 'Backend & DB',
      skills: [
        { name: 'Java / Spring Boot', level: 70 },
        { name: 'PHP', level: 65 },
        { name: 'Node.js / Express', level: 60 },
        { name: 'MySQL / SQL', level: 75 }
      ]
    },
    {
      title: 'HCI & UX Design',
      skills: [
        { name: 'Heuristic Evaluation', level: 80 },
        { name: 'User-Centered Design', level: 85 },
        { name: 'Web Accessibility (WCAG)', level: 75 },
        { name: 'Figma Mockups', level: 70 }
      ]
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">About Me</h2>
        
        <div className="about-grid">
          {/* Biography and Career Goals */}
          <div className="about-bio glass-panel hover-lift animate-fade-in">
            <h3 className="bio-title">
              <span className="icon-wrapper"><Heart size={20} /></span> My Journey
            </h3>
            <p className="bio-text">
              I am an Information Technology undergraduate at the **Institute of Technology, University of Moratuwa**. 
              My academic journey has shaped me into a developer who believes software should not just run correctly, 
              but also feel intuitive and responsive to the user.
            </p>
            <p className="bio-text">
              I have learned the importance of interface design rules, 
              usability heuristics, and accessibility guidelines. I strive to apply these criteria in every project I build, 
              ensuring clear user feedback, consistent component layouts, and support for all categories of end-users.
            </p>
            
            <h3 className="bio-title mt-4">
              <span className="icon-wrapper"><Award size={20} /></span> Career Aspirations
            </h3>
            <p className="bio-text">
              My immediate goal is to secure a software engineering internship where I can contribute to real-world projects 
              while refining my full-stack web capabilities. I aim to grow into a senior development role focused on 
              architecting scalable backend APIs and combining them with immersive, high-fidelity user interfaces.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="about-education">
            <h3 className="column-title">Education</h3>
            <div className="timeline">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="timeline-item glass-panel hover-lift">
                  <div className="timeline-icon-container">
                    {item.icon}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <h5 className="timeline-institution text-gradient">{item.institution}</h5>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="about-skills-container mt-5">
          <h3 className="column-title text-center">Technical & Design Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skills-card glass-panel hover-lift">
                <h4 className="skills-category-title text-gradient">{category.title}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
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

      </div>
    </section>
  );
};

export default About;
