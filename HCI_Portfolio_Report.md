# INSTITUTE OF TECHNOLOGY, UNIVERSITY OF MORATUWA
## NATIONAL DIPLOMA IN TECHNOLOGY
### SEMESTER III - CONTINUOUS ASSESSMENT 02
### IS 2304 - HUMAN COMPUTER INTERACTION

---

# REACT PORTFOLIO DEVELOPMENT WITH HCI TECHNIQUES

* **Student Name:** G.G. Chamod Nisal Kumara
* **Index Number:** [INSERT YOUR INDEX NUMBER HERE]
* **Module:** IS 2304 Human Computer Interaction
* **Date:** June 12, 2026

---

## Table of Contents
1. **Introduction**
   * 1.1 Objective of the Portfolio
   * 1.2 Introduction to HCI and Its Importance in Web Design
2. **Technologies Used**
   * 2.1 Front-End Architecture
   * 2.2 Routing and Icon Libraries
   * 2.3 Style and Theme Orchestration
3. **HCI Techniques and Rules Applied**
   * 3.1 User-Centered Design (UCD) Process
   * 3.2 Jakob Nielsen’s Usability Heuristics Applied
   * 3.3 Accessibility and Responsiveness Features
4. **Project Descriptions**
   * 4.1 Finance Tracker Project
   * 4.2 Student Event Management Project
   * 4.3 Vehicle Rental System
   * 4.4 Shipment & Logistics Management System
5. **Evaluation & Reflection**
   * 5.1 Ensuring Good User Experience (UX)
   * 5.2 Challenges Faced and Solutions
   * 5.3 Future Improvements
6. **Conclusion**
7. **Learning Outcomes**
   * 7.1 Internship Goal Alignment
8. **Deployed Website Link**

---

## 1. Introduction

### 1.1 Objective of the Portfolio
The primary objective of this project is to develop and deploy a professional, responsive personal portfolio website using React.js. The portfolio acts as a digital resume designed to showcase the technical skills, academic background, and practical software projects of G.G. Chamod Nisal Kumara. Furthermore, the website serves as a practical implementation of Human-Computer Interaction (HCI) concepts, demonstrating how interface design heuristics can optimize usability and user experience (UX) to make candidates stand out to potential internship providers.

### 1.2 Introduction to HCI and Its Importance in Web Design
Human-Computer Interaction (HCI) is a multidisciplinary field focused on the design, evaluation, and implementation of interactive computing systems for human use. In web design, HCI principles are crucial because they shift the focus from merely "building functional code" to "designing for the user." Applying HCI concepts ensures that interfaces are intuitive, accessible, efficient, and pleasant to navigate. A portfolio lacking sound HCI planning results in high cognitive load, poor accessibility, and friction—which can lead to recruiters leaving the site prematurely. By integrating HCI, we ensure maximum readability, accessibility, and logical flow.

---

## 2. Technologies Used

### 2.1 Front-End Architecture
* **React.js (v19)**: Selected for its component-driven architecture, enabling modular, reusable, and maintainable code structure. React's virtual DOM updates the UI efficiently, supporting rapid interactive elements like simulation dashboards.
* **HTML5 & CSS3**: Native semantic HTML elements form the bedrock of the document structure, while custom vanilla CSS manages styling configurations, layouts, and animations.

### 2.2 Routing and Icon Libraries
* **React Router (`react-router-dom`)**: Used for client-side navigation framework setup (`HashRouter`), satisfying the navigation constraints of the assignment while maintaining a single-page app architecture.
* **Lucide React (`lucide-react`)**: Provides clean, consistent, and scalable SVG vector icons that visually guide the user without slowing down page load times.

### 2.3 Style and Theme Orchestration
* **CSS Custom Properties (Variables)**: Utilized to create a dual-theme system (Dark/Light mode). Changing variables dynamically updates colors globally across the DOM tree.
* **Glassmorphism**: Backdrop blur filters (`backdrop-filter: blur(12px)`) combined with semi-transparent background colors give a modern, premium aesthetic.

---

## 3. HCI Techniques and Rules Applied

### 3.1 User-Centered Design (UCD) Process
We began by analyzing the target users: **Technical Recruiters, Engineering Managers, and University Evaluators**. 
* **User Persona Goals**: Quickly find the candidate's name, profile photo, current education details (ITUM), check core technical projects, find direct links to source code on GitHub, and establish contact.
* **Design Response**: The layout presents a clear vertical hierarchy:
  1. **Home**: High-contrast name and photo, plus social badges for instant connection.
  2. **About**: Academic status at ITUM and categorized skills matrix.
  3. **Projects**: A clean dashboard grid detailing the 4 target projects.
  4. **Contact**: Direct contact buttons and a message dispatch form.

### 3.2 Jakob Nielsen’s Usability Heuristics Applied
At least three of Nielsen's ten heuristics were implemented during development:

#### Heuristic #1: Visibility of System Status
* **Active Section Indicator**: The navigation bar monitors the user's scroll depth. As they scroll through sections (Home, About, Projects, Contact), the corresponding navigation menu button lights up, orienting the user.
* **Form Submission States**: When the contact form is submitted, a spinner loading indicator replaces the "Send" text. Once processed, a modal notification slides in to confirm success.
* **Simulation Sandbox Output**: The Shipment tracker displays a visual 4-step progress line detailing tracking status based on tracking input IDs.

#### Heuristic #4: Consistency and Standards
* **Visual Symmetry**: Buttons, form inputs, and section banners share consistent border-radius (12px/16px) and padding proportions.
* **Recognizable Icon Conventions**: Standard, universally recognized glyphs (e.g. Mail for email, Phone for telephone, Message for WhatsApp, ArrowUpRight for external links) prevent users from having to guess button actions.
* **Color Accents**: Indigo and Cyan highlight primary actions, while green and red consistently represent success/income and error/expense respectively.

#### Heuristic #8: Aesthetic and Minimalist Design
* **De-cluttered Layout**: We avoid walls of text. Information is spaced out with margins, using custom grids and cards.
* **Visual Modals for Details**: Rather than crowding the Projects section with text descriptions, each project displays a summary. Clicking "Launch Simulation" opens an overlay modal with detailed specs and an interactive sandbox interface. This keeps the primary page clean.

#### Heuristic #3: User Control and Freedom
* **Modal Escapes**: The Project simulation, CV preview, and Certificate preview modals feature visible `X` close buttons, ESC keyboard shortcuts, and close when clicking outside the modal box, allowing users to exit easily at any time.
* **Dual View Switchers**: Users have total control to switch between official PDF documents and high-contrast digital credential views.
* **Theme Switching**: Users can toggle between Dark and Light mode at any time using the header toggle button.

### 3.3 Accessibility and Responsiveness Features
* **Color Contrast**: Text colors pass contrast ratios (WCAG AA standards) in both Light and Dark themes to support users with low-vision.
* **Semantic HTML**: Standard structure tags (`<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) are used to aid screen-readers.
* **Alt Texts**: Every image (such as `111.png` and icons) includes detailed alternative text tags.
* **Keyboard Focus**: Interactive links and inputs have styled focus outlines.
* **Fluid Layouts**: The site uses CSS Flexbox and media query break-points to automatically resize elements for mobile devices, tablets, and desktop monitors.

---

## 4. Project Descriptions

*Note for Submissions: Please run the local app, click "Launch Simulation" on each project, take a screenshot of the mockup window, and paste it under the respective section below!*

### 4.1 Sentinel Care – Smart Medical Hand Band System
* **GitHub Link**: [nisal73](https://github.com/nisal73)
* **Core Stack**: React.js, Firebase (IoT Integration), UI/UX (Figma), JavaScript, CSS3
* **CV Description**: A responsive React web application enabling caregivers to monitor and manage patients. Features patient management, health monitoring, medication scheduling, insights, and settings interfaces with patient-specific dashboards and reusable modular components.
* **HCI Aspect**: Employs Jakob Nielsen’s Heuristic #1 (*Visibility of System Status*) through simulated real-time IoT vital telemetry (Heart Rate with animated ECG pulse line, SpO2 blood oxygen, body temperature, and device battery level). Features caregiver alert triggers and simulated vital anomaly handling with clear feedback.

### 4.2 Student Event Management System
* **GitHub Link**: [nisal73/student_event_management](https://github.com/nisal73/student_event_management)
* **Core Stack**: PHP, MySQL, Role-Based Access Control, PDO Prepared Statements, JavaScript
* **CV Description**: A full-stack event platform built in PHP and MySQL where students register for events and admins manage them. Implemented hashed-password login, sessions, role-based access control, relational MySQL schema with PDO prepared statements against SQL injection, event capacity limits, duplicate-registration prevention, and JavaScript form validation.
* **HCI Aspect**: Features a role-switch simulator (Student View vs. Administrator Control Panel). Demonstrates error prevention (Heuristic #5) by actively checking and preventing duplicate registrations and enforcing event capacity constraints.

### 4.3 Financial Manager
* **GitHub Link**: [nisal73/Finance_Tracker](https://github.com/nisal73/Finance_Tracker)
* **Core Stack**: PHP, MySQL, Full-Stack, CRUD Operations, Budget Tracking, UI/UX (Figma)
* **CV Description**: A full-stack personal finance management application with secure user authentication, transaction and account CRUD operations, budget tracking, notifications, and an interactive financial dashboard backed by a relational MySQL database with user-level authorization.
* **HCI Aspect**: Features an interactive personal finance dashboard with real-time Net Balance, Income, and Expense calculations, category tagging, and an automated budget threshold tracker that displays visual alerts when expenses exceed 80% of the monthly limit.

---

## 5. Evaluation & Reflection

### 5.1 Ensuring Good User Experience (UX)
To ensure a high-quality experience, the site was evaluated against usability guidelines:
1. **Speed & Efficiency**: Keeping DOM size small and asset counts minimal ensures fast page loads.
2. **Cognitive Load Reduction**: Storing the light/dark theme preference in `localStorage` ensures that users do not have to re-select their theme on return visits.
3. **Simplicity**: Contact links (WhatsApp/Phone/Email) launch their respective applications automatically, saving manual copy-paste actions.

### 5.2 Challenges Faced and Solutions
* **Challenge**: Presenting screenshots of projects when codebases are primarily administrative or backend-focused.
* **Solution**: Instead of pasting static, low-resolution screenshots, we wrote fully interactive **UI Mockups in React** inside a lightbox preview modal. This showcases front-end engineering proficiency and makes the portfolio more engaging.
* **Challenge**: Preventing broken routes or page reloads when deploying single-page navigation to static host platforms.
* **Solution**: Configured React Router using `HashRouter` which prefixes paths with `#`, ensuring that the hosting server redirects requests correctly without throwing 404 errors.

### 5.3 Future Improvements
* **Automated Email Integration**: Transition from a simulated client form to an active email service like EmailJS or a Serverless backend form handler.
* **Dynamic GitHub Integration**: Use the GitHub REST API to pull repository stars, issues, and commit counts automatically.

---

## 6. Conclusion
The IS 2304 Continuous Assessment 02 portfolio successfully implements a premium, interactive personal portfolio website for G.G. Chamod Nisal Kumara using React.js. By placing Human-Computer Interaction (HCI) at the core of the design process, the website achieves high usability, aesthetic appeal, and accessibility. The interactive sandbox mockups provide a unique way to showcase projects, making the portfolio a powerful tool for upcoming internship recruitment cycles.

---

## 7. Learning Outcomes

### 7.1 Internship Goal Alignment
This project directly supports professional and academic development goals by:
1. **Demonstrating Technical Readiness**: Showcases proficiency in modern frontend frameworks (React.js), styling systems, responsive frameworks, and source version control (Git).
2. **Applying HCI Theories**: Bridging the gap between conceptual HCI guidelines (Nielsen's Heuristics, WCAG compliance) and active software execution.
3. **Product Design Mindset**: Showcasing project deliverables in a user-friendly manner, reflecting preparation for agile, user-first engineering environments.

---

## 8. Deployed Website Link

The React portfolio website is live, fully deployed, and accessible at the following URL:
* **Live Deployment Link**: [https://nisal73.github.io/My-portfolio](https://nisal73.github.io/My-portfolio)
* **GitHub Repository Link**: [https://github.com/nisal73/My-portfolio](https://github.com/nisal73/My-portfolio)
