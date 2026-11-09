import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Play, 
  Info, 
  HeartPulse, 
  Activity, 
  Thermometer, 
  BatteryCharging, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  Bell, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Database
} from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ==========================================
  // 1. SENTINEL CARE SIMULATION STATE
  // ==========================================
  const [selectedPatientId, setSelectedPatientId] = useState(1);
  const [isAlertAcknowledged, setIsAlertAcknowledged] = useState(false);
  const [patientVitals, setPatientVitals] = useState({
    1: { name: 'Arthur Wickramasinghe', ward: 'Ward 4B - Bed 12', hr: 74, spo2: 98, temp: 36.7, activity: 'Resting', status: 'Stable', battery: 92 },
    2: { name: 'Malini Senanayake', ward: 'Ward 2A - Bed 05', hr: 82, spo2: 97, temp: 37.1, activity: 'Walking', status: 'Normal', battery: 85 }
  });
  const [medicationSentToast, setMedicationSentToast] = useState(false);
  const [anomalyMode, setAnomalyMode] = useState(false);

  // Trigger simulated health check
  const handleTriggerHealthCheck = () => {
    const current = patientVitals[selectedPatientId];
    const newHr = 72 + Math.floor(Math.random() * 8);
    const newSpo2 = 97 + Math.floor(Math.random() * 3);
    setPatientVitals({
      ...patientVitals,
      [selectedPatientId]: {
        ...current,
        hr: newHr,
        spo2: newSpo2,
        battery: Math.max(20, current.battery - 1)
      }
    });
  };

  const handleToggleAnomaly = () => {
    const nextAnomaly = !anomalyMode;
    setAnomalyMode(nextAnomaly);
    const current = patientVitals[selectedPatientId];
    if (nextAnomaly) {
      setPatientVitals({
        ...patientVitals,
        [selectedPatientId]: {
          ...current,
          hr: 118,
          temp: 38.6,
          spo2: 92,
          status: 'ALERT: Tachycardia & High Temp'
        }
      });
      setIsAlertAcknowledged(false);
    } else {
      setPatientVitals({
        ...patientVitals,
        [selectedPatientId]: {
          ...current,
          hr: 75,
          temp: 36.8,
          spo2: 98,
          status: 'Stable'
        }
      });
    }
  };

  const handleSendMedicationAlert = () => {
    setMedicationSentToast(true);
    setTimeout(() => setMedicationSentToast(false), 3000);
  };

  // ==========================================
  // 2. STUDENT EVENT MANAGEMENT SIMULATION STATE
  // ==========================================
  const [eventRole, setEventRole] = useState('student'); // 'student' or 'admin'
  const [eventsList, setEventsList] = useState([
    { id: 1, title: 'Web Development BootCamp 2026', host: 'IT Faculty', date: 'June 20, 2026', totalCapacity: 30, registeredCount: 28, isOpen: true },
    { id: 2, title: 'HCI Usability & Accessibility Workshop', host: 'HCI Lab ITUM', date: 'July 05, 2026', totalCapacity: 40, registeredCount: 39, isOpen: true },
    { id: 3, title: 'Annual ITUM Tech Hackathon', host: 'Student Council', date: 'August 12, 2026', totalCapacity: 20, registeredCount: 15, isOpen: true }
  ]);
  const [registeredStudentEvents, setRegisteredStudentEvents] = useState([1]);
  const [studentFormName, setStudentFormName] = useState('');
  const [selectedEventToRegister, setSelectedEventToRegister] = useState(2);
  const [eventFeedbackMsg, setEventFeedbackMsg] = useState({ type: '', text: '' });

  const handleStudentRegister = (e) => {
    e.preventDefault();
    if (!studentFormName.trim()) {
      setEventFeedbackMsg({ type: 'error', text: 'Please enter your student name/ID.' });
      return;
    }

    if (registeredStudentEvents.includes(selectedEventToRegister)) {
      setEventFeedbackMsg({ 
        type: 'error', 
        text: 'Duplicate registration prevented! You are already registered for this event.' 
      });
      return;
    }

    const targetEvt = eventsList.find(ev => ev.id === selectedEventToRegister);
    if (!targetEvt.isOpen || targetEvt.registeredCount >= targetEvt.totalCapacity) {
      setEventFeedbackMsg({ type: 'error', text: 'Registration closed! Event capacity has been reached.' });
      return;
    }

    // Successfully register
    setRegisteredStudentEvents([...registeredStudentEvents, selectedEventToRegister]);
    setEventsList(eventsList.map(ev => 
      ev.id === selectedEventToRegister 
        ? { ...ev, registeredCount: ev.registeredCount + 1 }
        : ev
    ));
    setEventFeedbackMsg({ 
      type: 'success', 
      text: `Registration confirmed for "${targetEvt.title}"! Status saved via simulated PDO session.` 
    });
    setStudentFormName('');
  };

  const handleAdminToggleStatus = (id) => {
    setEventsList(eventsList.map(ev => 
      ev.id === id ? { ...ev, isOpen: !ev.isOpen } : ev
    ));
  };

  // ==========================================
  // 3. FINANCIAL MANAGER SIMULATION STATE
  // ==========================================
  const [financeTransactions, setFinanceTransactions] = useState([
    { id: 1, text: 'Part-Time Web Dev Project', amount: 550, category: 'Income', type: 'income', date: '2026-06-01' },
    { id: 2, text: 'Hostel Rent & Utilities', amount: -150, category: 'Housing', type: 'expense', date: '2026-06-03' },
    { id: 3, text: 'Cloud Server & Domain Renewal', amount: -45, category: 'Services', type: 'expense', date: '2026-06-05' }
  ]);
  const [newTransText, setNewTransText] = useState('');
  const [newTransAmt, setNewTransAmt] = useState('');
  const [newTransCat, setNewTransCat] = useState('General');
  const monthlyBudgetLimit = 400;

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransText || !newTransAmt) return;
    const amt = parseFloat(newTransAmt);
    const newTx = {
      id: Date.now(),
      text: newTransText,
      amount: amt,
      category: newTransCat,
      type: amt >= 0 ? 'income' : 'expense',
      date: new Date().toISOString().split('T')[0]
    };
    setFinanceTransactions([newTx, ...financeTransactions]);
    setNewTransText('');
    setNewTransAmt('');
  };

  const handleDeleteTransaction = (id) => {
    setFinanceTransactions(financeTransactions.filter(tx => tx.id !== id));
  };

  // ==========================================
  // PROJECTS CATALOG (Direct from CV)
  // ==========================================
  const projectsData = [
    {
      id: 1,
      title: 'Sentinel Care – Smart Medical Hand Band System',
      github: 'https://github.com/nisal73',
      tags: ['React.js', 'Firebase IoT Data', 'UI/UX (Figma)', 'JavaScript', 'CSS3', 'Patient Vitals'],
      description: 'A responsive React web application enabling caregivers to monitor and manage patients in real time. Features patient-specific dashboards, vitals tracking, medication scheduling, and health anomaly alerts.',
      cvBullets: [
        'Developed a responsive React web application enabling caregivers to monitor and manage patients.',
        'Built patient management, health monitoring, medication, insights and settings interfaces with patient-specific dashboards and reusable components.',
        'Architected the application for future Firebase real-time integration with IoT health data, including heart rate, SpO2, temperature, activity, device status and health alerts.'
      ],
      features: [
        'Patient-specific dashboard with modular, reusable React UI components.',
        'Real-time health monitoring interfaces (Heart Rate, SpO2, Temperature, Activity).',
        'Caregiver medication reminders and live status updates.',
        'Designed for seamless Firebase real-time database ingestion with IoT hardware.'
      ],
      mockupType: 'sentinel',
      accentColor: '#06b6d4',
      badge: 'Flagship IoT React System'
    },
    {
      id: 2,
      title: 'Student Event Management System',
      github: 'https://github.com/nisal73/student_event_management',
      tags: ['PHP', 'MySQL', 'Role-Based Access', 'PDO Security', 'JavaScript Validation', 'Sessions'],
      description: 'A full-stack event platform built in PHP and MySQL where students register for campus events and administrators manage event lifecycles, capacity, and registrations.',
      cvBullets: [
        'Built a full-stack event platform in PHP and MySQL where students register for events and admins manage them.',
        'Implemented hashed-password login, sessions and role-based access control for student and admin users.',
        'Designed a relational MySQL schema and used PDO prepared statements to prevent SQL injection.',
        'Added event capacity limits, duplicate-registration prevention, an admin registrations view and JavaScript form validation.'
      ],
      features: [
        'Hashed-password authentication, session management, and role-based access control (Student / Admin).',
        'Relational MySQL database schema using PDO prepared statements against SQL injection.',
        'Event capacity limit enforcement and duplicate-registration prevention logic.',
        'Admin registrations overview and dynamic client-side JavaScript form validation.'
      ],
      mockupType: 'events',
      accentColor: '#ec4899',
      badge: 'Full-Stack PHP & MySQL'
    },
    {
      id: 3,
      title: 'Financial Manager',
      github: 'https://github.com/nisal73/Finance_Tracker',
      tags: ['PHP', 'MySQL', 'Full-Stack', 'CRUD Operations', 'Budget Tracking', 'UI/UX Design'],
      description: 'A full-stack personal finance management application with secure user authentication, transaction CRUD operations, budget tracking, notifications, and an interactive financial dashboard.',
      cvBullets: [
        'Developed a full-stack personal finance management application with secure user authentication.',
        'Implemented transaction and account CRUD operations, budget tracking, notifications and an interactive financial dashboard.',
        'Designed a relational MySQL database and applied user-level authorization to ensure secure data management.'
      ],
      features: [
        'Secure user authentication and user-level authorization ensuring private financial data isolation.',
        'Comprehensive transaction and account CRUD operations with live balance aggregations.',
        'Proactive budget tracking with threshold notification alerts.',
        'Interactive financial dashboard with breakdown charts and category summaries.'
      ],
      mockupType: 'finance',
      accentColor: '#6366f1',
      badge: 'Secure Financial Web App'
    }
  ];

  // ==========================================
  // RENDER INTERACTIVE MOCKUPS INSIDE MODAL
  // ==========================================
  const renderInteractiveMockup = (type) => {
    switch (type) {
      case 'sentinel': {
        const activePatient = patientVitals[selectedPatientId];
        return (
          <div className="mockup-container sentinel-mock">
            <div className="mockup-header-bar">
              <div className="header-left">
                <span className="window-title">Sentinel Care – Caregiver Telemetry Dashboard</span>
              </div>
              <div className="header-right">
                <span className="telemetry-live-badge">
                  <span className="live-dot"></span> LIVE IoT SYNC
                </span>
              </div>
            </div>

            <div className="mockup-body">
              {/* Patient Switcher Tabs */}
              <div className="patient-selector-bar">
                <span className="selector-label">Select Patient:</span>
                {[1, 2].map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedPatientId(id);
                      setAnomalyMode(false);
                    }}
                    className={`patient-pill ${selectedPatientId === id ? 'active' : ''}`}
                  >
                    {patientVitals[id].name} ({id === 1 ? 'Bed 12' : 'Bed 05'})
                  </button>
                ))}
              </div>

              {/* Patient Header Card */}
              <div className="patient-status-banner glass-panel">
                <div className="patient-main-info">
                  <h4 className="patient-name">{activePatient.name}</h4>
                  <span className="patient-ward">{activePatient.ward}</span>
                </div>
                <div className="patient-banner-status">
                  <span className={`status-pill ${activePatient.hr > 100 ? 'status-alert' : 'status-ok'}`}>
                    {activePatient.status}
                  </span>
                  <span className="device-battery">
                    <BatteryCharging size={14} /> Band: {activePatient.battery}%
                  </span>
                </div>
              </div>

              {/* Vitals Telemetry Grid */}
              <div className="vitals-grid mt-2">
                {/* Heart Rate */}
                <div className={`vital-card glass-panel ${activePatient.hr > 100 ? 'vital-alert' : ''}`}>
                  <div className="vital-header">
                    <span className="vital-label">Heart Rate</span>
                    <HeartPulse size={18} className="vital-icon heart-pulse-anim" />
                  </div>
                  <div className="vital-value-row">
                    <span className="vital-num">{activePatient.hr}</span>
                    <span className="vital-unit">BPM</span>
                  </div>
                  <div className="ecg-line-anim">
                    <span className="ecg-pulse"></span>
                  </div>
                </div>

                {/* SpO2 */}
                <div className="vital-card glass-panel">
                  <div className="vital-header">
                    <span className="vital-label">Oxygen (SpO2)</span>
                    <Activity size={18} className="vital-icon text-cyan" />
                  </div>
                  <div className="vital-value-row">
                    <span className="vital-num">{activePatient.spo2}%</span>
                    <span className="vital-unit">Optimal</span>
                  </div>
                  <span className="vital-sub">Normal: 95-100%</span>
                </div>

                {/* Temperature */}
                <div className={`vital-card glass-panel ${activePatient.temp > 38 ? 'vital-alert' : ''}`}>
                  <div className="vital-header">
                    <span className="vital-label">Temperature</span>
                    <Thermometer size={18} className="vital-icon text-amber" />
                  </div>
                  <div className="vital-value-row">
                    <span className="vital-num">{activePatient.temp}°C</span>
                    <span className="vital-unit">Body</span>
                  </div>
                  <span className="vital-sub">Activity: {activePatient.activity}</span>
                </div>
              </div>

              {/* Caregiver Actions Toolbar */}
              <div className="caregiver-toolbar mt-3">
                <button onClick={handleTriggerHealthCheck} className="cg-btn">
                  <Activity size={14} /> Refresh Vitals Check
                </button>
                <button onClick={handleSendMedicationAlert} className="cg-btn">
                  <Bell size={14} /> Send Medication Alert
                </button>
                <button 
                  onClick={handleToggleAnomaly} 
                  className={`cg-btn ${anomalyMode ? 'cg-btn-warning' : ''}`}
                >
                  <AlertTriangle size={14} /> {anomalyMode ? 'Restore Normal' : 'Simulate Health Alert'}
                </button>
              </div>

              {medicationSentToast && (
                <div className="mockup-toast success-toast animate-fade-in">
                  <CheckCircle2 size={16} /> Notification dispatched to patient's hand band: "Time for scheduled medication."
                </div>
              )}
            </div>
          </div>
        );
      }

      case 'events': {
        return (
          <div className="mockup-container events-mock">
            <div className="mockup-header-bar">
              <span className="window-title">Student Event Portal – PHP & MySQL Architecture</span>
              <div className="role-switch">
                <button 
                  onClick={() => setEventRole('student')} 
                  className={`role-btn ${eventRole === 'student' ? 'active' : ''}`}
                >
                  Student View
                </button>
                <button 
                  onClick={() => setEventRole('admin')} 
                  className={`role-btn ${eventRole === 'admin' ? 'active' : ''}`}
                >
                  Admin View
                </button>
              </div>
            </div>

            <div className="mockup-body">
              {eventRole === 'student' ? (
                <>
                  <div className="events-grid">
                    {eventsList.map((evt) => {
                      const isRegistered = registeredStudentEvents.includes(evt.id);
                      const isFull = evt.registeredCount >= evt.totalCapacity;
                      return (
                        <div key={evt.id} className="event-mock-card glass-panel">
                          <div className="event-mock-meta">
                            <span className="event-date"><Calendar size={13} /> {evt.date}</span>
                            <span className={`event-badge ${isFull ? 'badge-full' : ''}`}>
                              {evt.registeredCount}/{evt.totalCapacity} Seats Filled
                            </span>
                          </div>
                          <h4 className="event-title">{evt.title}</h4>
                          <p className="event-host">Organized by: {evt.host}</p>
                          
                          <div className="event-footer-action">
                            {isRegistered ? (
                              <span className="reg-confirmed-badge">
                                <CheckCircle2 size={14} /> Registered ✓
                              </span>
                            ) : isFull ? (
                              <span className="reg-full-badge">Capacity Reached</span>
                            ) : (
                              <button 
                                onClick={() => setSelectedEventToRegister(evt.id)}
                                className={`select-evt-btn ${selectedEventToRegister === evt.id ? 'selected' : ''}`}
                              >
                                {selectedEventToRegister === evt.id ? 'Selected to Register' : 'Select Event'}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Student Registration Form */}
                  <form onSubmit={handleStudentRegister} className="event-reg-form glass-panel mt-3">
                    <span className="form-legend">
                      <Lock size={14} /> Register with Duplicate Prevention & Session Auth
                    </span>
                    <div className="form-row">
                      <input
                        type="text"
                        value={studentFormName}
                        onChange={(e) => setStudentFormName(e.target.value)}
                        placeholder="Student ID / Full Name (e.g. IT25102)"
                        className="mock-input"
                        required
                      />
                      <button type="submit" className="mock-btn-submit">
                        Confirm Registration
                      </button>
                    </div>

                    {eventFeedbackMsg.text && (
                      <div className={`form-feedback mt-2 ${eventFeedbackMsg.type}`}>
                        {eventFeedbackMsg.type === 'error' ? <AlertTriangle size={14} /> : <CheckCircle2 size={14} />}
                        <span>{eventFeedbackMsg.text}</span>
                      </div>
                    )}
                  </form>
                </>
              ) : (
                /* Admin Dashboard View */
                <div className="admin-events-view">
                  <div className="admin-info-bar glass-panel">
                    <span className="admin-badge"><ShieldCheck size={14} /> Administrator Control Panel</span>
                    <span className="admin-sub">PDO Prepared Queries & Real-Time Capacity Control</span>
                  </div>

                  <div className="admin-table-container glass-panel mt-2">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Capacity</th>
                          <th>Registrations</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eventsList.map((ev) => (
                          <tr key={ev.id}>
                            <td><strong>{ev.title}</strong></td>
                            <td>{ev.totalCapacity}</td>
                            <td>{ev.registeredCount} ({Math.round((ev.registeredCount / ev.totalCapacity) * 100)}%)</td>
                            <td>
                              <span className={`table-status ${ev.isOpen ? 'open' : 'closed'}`}>
                                {ev.isOpen ? 'Open' : 'Closed'}
                              </span>
                            </td>
                            <td>
                              <button 
                                onClick={() => handleAdminToggleStatus(ev.id)}
                                className="admin-toggle-btn"
                              >
                                {ev.isOpen ? 'Close' : 'Open'}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }

      case 'finance': {
        const totalIncome = financeTransactions
          .filter(t => t.type === 'income')
          .reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = financeTransactions
          .filter(t => t.type === 'expense')
          .reduce((sum, t) => sum + Math.abs(t.amount), 0);
        const netBalance = totalIncome - totalExpense;
        const budgetPercent = Math.min(100, Math.round((totalExpense / monthlyBudgetLimit) * 100));

        return (
          <div className="mockup-container finance-mock">
            <div className="mockup-header-bar">
              <span className="window-title">Financial Manager – Full-Stack MySQL Dashboard</span>
            </div>
            <div className="mockup-body">
              {/* Stats Bar */}
              <div className="mock-grid-three">
                <div className="mock-stat-card glass-panel text-center">
                  <span className="stat-label">Net Balance</span>
                  <span className={`stat-value ${netBalance >= 0 ? 'text-success' : 'text-error'}`}>
                    ${netBalance.toFixed(2)}
                  </span>
                </div>
                <div className="mock-stat-card glass-panel text-center">
                  <span className="stat-label">Total Income</span>
                  <span className="stat-value text-success">+${totalIncome.toFixed(2)}</span>
                </div>
                <div className="mock-stat-card glass-panel text-center">
                  <span className="stat-label">Total Expense</span>
                  <span className="stat-value text-error">-${totalExpense.toFixed(2)}</span>
                </div>
              </div>

              {/* Monthly Budget Tracker Bar */}
              <div className="budget-progress-panel glass-panel mt-2">
                <div className="budget-header-row">
                  <span className="budget-label">Monthly Expense Budget Tracker (${totalExpense.toFixed(0)} / ${monthlyBudgetLimit})</span>
                  <span className={`budget-pct ${budgetPercent > 80 ? 'text-error' : 'text-primary'}`}>
                    {budgetPercent}% Used
                  </span>
                </div>
                <div className="budget-bar-bg">
                  <div 
                    className={`budget-bar-fill ${budgetPercent > 80 ? 'bar-alert' : ''}`}
                    style={{ width: `${budgetPercent}%` }}
                  ></div>
                </div>
                {budgetPercent > 80 && (
                  <small className="budget-alert-text">
                    <AlertTriangle size={12} /> Budget alert threshold reached (&gt;80%). Notification triggered!
                  </small>
                )}
              </div>

              {/* Form & List */}
              <div className="mock-two-col mt-3">
                <form onSubmit={handleAddTransaction} className="mock-form glass-panel">
                  <span className="form-legend">New Transaction (CRUD)</span>
                  <input
                    type="text"
                    value={newTransText}
                    onChange={(e) => setNewTransText(e.target.value)}
                    placeholder="Transaction description..."
                    className="mock-input"
                    required
                  />
                  <input
                    type="number"
                    value={newTransAmt}
                    onChange={(e) => setNewTransAmt(e.target.value)}
                    placeholder="Amount (+ for Income, - for Expense)"
                    className="mock-input"
                    required
                  />
                  <select 
                    value={newTransCat} 
                    onChange={(e) => setNewTransCat(e.target.value)}
                    className="mock-input mock-select"
                  >
                    <option value="General">Category: General</option>
                    <option value="Housing">Category: Housing</option>
                    <option value="Food & Living">Category: Food & Living</option>
                    <option value="Education">Category: Education</option>
                    <option value="Income">Category: Income</option>
                  </select>
                  <button type="submit" className="mock-btn-submit">
                    Save to Database
                  </button>
                </form>

                <div className="mock-list glass-panel">
                  <span className="list-title">Transaction Log</span>
                  <div className="mock-list-scroll">
                    {financeTransactions.map((tx) => (
                      <div key={tx.id} className={`mock-list-item ${tx.type}`}>
                        <div className="tx-info-block">
                          <span className="tx-text">{tx.text}</span>
                          <span className="tx-cat">{tx.category}</span>
                        </div>
                        <div className="tx-details">
                          <span className={tx.type === 'income' ? 'text-success' : 'text-error'}>
                            {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount)}
                          </span>
                          <button onClick={() => handleDeleteTransaction(tx.id)} className="tx-del-btn" title="Delete record">×</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">Featured Projects</h2>
        <p className="projects-subtitle text-center animate-fade-in">
          Explore the flagship software applications from my CV, spanning responsive React front-ends, 
          IoT health dashboards, and secure PHP/MySQL full-stack architectures. 
          Click <strong>"Launch Simulation"</strong> to interact with the working UI mockup.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article 
              key={project.id} 
              className="project-card glass-panel hover-lift animate-fade-in"
              style={{ '--accent': project.accentColor }}
            >
              {/* Card Banner */}
              <div 
                className="project-banner"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}dd 0%, #111827ee 100%)` }}
              >
                <div className="project-banner-icon">
                  {project.mockupType === 'sentinel' && <HeartPulse size={26} />}
                  {project.mockupType === 'events' && <Calendar size={26} />}
                  {project.mockupType === 'finance' && <DollarSign size={26} />}
                </div>
                <span className="project-badge-tag">{project.badge}</span>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* CV Highlights Bullets */}
                <div className="project-cv-highlights">
                  <span className="highlights-label">Key CV Achievements:</span>
                  <ul className="cv-card-bullets">
                    {project.cvBullets.slice(0, 2).map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-pill">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-action-link"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github size={16} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="project-action-btn"
                    aria-label={`Launch interactive mockup for ${project.title}`}
                  >
                    <Play size={14} /> Launch Simulation
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mockup Preview Lightbox Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div 
            className="modal-content glass-panel animate-fade-in" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div>
                <h3 id="modal-project-title" className="modal-title">{selectedProject.title}</h3>
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-github-link"
                >
                  <Github size={14} /> View Code Base <ArrowUpRight size={12} />
                </a>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="modal-close-btn"
                aria-label="Close details modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Grid: Info + Simulation */}
            <div className="modal-grid">
              <div className="modal-info-column">
                <h4 className="info-section-heading"><Info size={16} /> CV Project Specifications</h4>
                <p className="modal-desc">{selectedProject.description}</p>
                
                <h4 className="info-section-heading mt-3">CV Accomplishments:</h4>
                <ul className="features-bullets">
                  {selectedProject.cvBullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <h4 className="info-section-heading mt-3">Core Features:</h4>
                <ul className="features-bullets">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                <h4 className="info-section-heading mt-3">Technologies Stack:</h4>
                <div className="project-tags mt-1">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tech-pill">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Simulation Right Panel */}
              <div className="modal-preview-column">
                <span className="preview-instructions">
                  <strong>Live Prototype Simulation:</strong> Interact directly with the application interface below to experience the workflow and HCI system states.
                </span>
                {renderInteractiveMockup(selectedProject.mockupType)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
