import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '🏆',
      title: 'Industry Experience',
      description: 'Over 20 years of excellence in construction and infrastructure development'
    },
    {
      id: 2,
      icon: '💎',
      title: 'Quality Assurance',
      description: 'Stringent quality checks and premium materials for every project'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Timely Delivery',
      description: 'Commitment to meeting deadlines without compromising on quality'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Customer Focus',
      description: 'Dedicated support and transparent communication throughout the project'
    },
    {
      id: 5,
      icon: '🌱',
      title: 'Sustainable Practices',
      description: 'Eco-friendly construction methods for a greener tomorrow'
    },
    {
      id: 6,
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent and fair pricing'
    },
    {
      id: 7,
      icon: '👷',
      title: 'Expert Team',
      description: 'Skilled professionals with extensive industry expertise'
    },
    {
      id: 8,
      icon: '🔒',
      title: 'Safety First',
      description: 'Comprehensive safety protocols and compliance with regulations'
    }
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose <span className="highlight">VRM Groups</span></h2>
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
