import React from 'react';
import './WhyChooseUs.css';

// Icon Components
const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
    <path d="m21 3 1 11h-2"></path>
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
    <path d="M3 4h8"></path>
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <TrophyIcon />,
      title: 'Industry Experience',
      description: 'Over 20 years of excellence in construction and infrastructure development'
    },
    {
      id: 2,
      icon: <DiamondIcon />,
      title: 'Quality Assurance',
      description: 'Stringent quality checks and premium materials for every project'
    },
    {
      id: 3,
      icon: <BoltIcon />,
      title: 'Timely Delivery',
      description: 'Commitment to meeting deadlines without compromising on quality'
    },
    {
      id: 4,
      icon: <HandshakeIcon />,
      title: 'Customer Focus',
      description: 'Dedicated support and transparent communication throughout the project'
    },
    {
      id: 5,
      icon: <LeafIcon />,
      title: 'Sustainable Practices',
      description: 'Eco-friendly construction methods for a greener tomorrow'
    },
    {
      id: 6,
      icon: <DollarIcon />,
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent and fair pricing'
    },
    {
      id: 7,
      icon: <UsersIcon />,
      title: 'Expert Team',
      description: 'Skilled professionals with extensive industry expertise'
    },
    {
      id: 8,
      icon: <ShieldIcon />,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and compliance with regulations'
    }
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose <span className="highlight vrm-brand"><span className="vrm-text">VRM</span> <span className="groups-text">Groups</span></span></h2>
      <p className="section-subtitle">
        Your trusted partner for all construction and infrastructure needs
      </p>
      
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
      
      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1000+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfaction Rate</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
