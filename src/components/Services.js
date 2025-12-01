import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Building Materials',
      description: 'Premium quality cement, steel, bricks, and aggregates for all construction needs',
      icon: '🏗️',
      items: ['Cement', 'Steel', 'Bricks', 'Sand', 'Aggregates']
    },
    {
      id: 2,
      title: 'Electrical Solutions',
      description: 'Complete electrical infrastructure including wiring, switches, and fixtures',
      icon: '⚡',
      items: ['Wiring', 'Switches', 'Lighting', 'Distribution Boards', 'Safety Equipment']
    },
    {
      id: 3,
      title: 'Plumbing Works',
      description: 'Comprehensive plumbing solutions with quality pipes, fittings, and fixtures',
      icon: '🔧',
      items: ['Pipes', 'Fittings', 'Fixtures', 'Valves', 'Water Systems']
    },
    {
      id: 4,
      title: 'Finishing & Interiors',
      description: 'Paint, waterproofing, windows, and complete interior finishing services',
      icon: '🎨',
      items: ['Painting', 'Waterproofing', 'Windows', 'Doors', 'Flooring']
    },
    {
      id: 5,
      title: 'Concrete Works',
      description: 'Ready-mix concrete and specialized concrete solutions for all applications',
      icon: '🏢',
      items: ['Ready-Mix', 'Precast', 'Custom Mix', 'Reinforcement', 'Formwork']
    },
    {
      id: 6,
      title: 'Infrastructure',
      description: 'Large-scale infrastructure development and civil engineering projects',
      icon: '🌉',
      items: ['Roads', 'Bridges', 'Drainage', 'Earthwork', 'Site Development']
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Our <span className="highlight">Services</span></h2>
      <p className="section-subtitle">
        Comprehensive construction solutions tailored to your needs
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-items">
              {service.items.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
