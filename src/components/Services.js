import React from 'react';
import './Services.css';
import buildingMaterialsImg from '../assets/building-materials.png';
import electricalSolutionsImg from '../assets/electrical-solutions.jpg';
import plumbingWorksImg from '../assets/plumbing-works.png';
import finishingInteriorsImg from '../assets/finishing.webp';
import concreteWorksImg from '../assets/concrete-works.webp';
import infrastructureImg from '../assets/infrastructure.jpg';
import interiorDesignImg1 from '../assets/interior-design.webp';
import interiorDesignImg2 from '../assets/modularkitchen1.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Building Materials',
      description: 'Premium quality cement, steel, bricks, and aggregates for all construction needs',
      icon: '🏗️',
      image: buildingMaterialsImg,
      items: ['Cement', 'Steel', 'Bricks', 'Sand', 'Aggregates']
    },
    {
      id: 2,
      title: 'Electrical Solutions',
      description: 'Complete electrical infrastructure including wiring, switches, and fixtures',
      icon: '⚡',
      image: electricalSolutionsImg,
      items: ['Wiring', 'Switches', 'Lighting', 'Distribution Boards', 'Safety Equipment']
    },
    {
      id: 3,
      title: 'Plumbing Works',
      description: 'Comprehensive plumbing solutions with quality pipes, fittings, and fixtures',
      icon: '🔧',
      image: plumbingWorksImg,
      items: ['Pipes', 'Fittings', 'Fixtures', 'Valves', 'Water Systems']
    },
    {
      id: 4,
      title: 'Finishing & Interiors',
      description: 'Paint, waterproofing, windows, and complete interior finishing services',
      icon: '🎨',
      image: finishingInteriorsImg,
      items: ['POP & Painting', 'Waterproofing', 'Windows', 'Doors', 'Flooring']
    },
    {
      id: 5,
      title: 'Concrete Works',
      description: 'Ready-mix concrete and specialized concrete solutions for all applications',
      icon: '🏢',
      image: concreteWorksImg,
      items: ['Ready-Mix', 'Precast', 'Custom Mix', 'Reinforcement', 'Formwork']
    },
    {
      id: 6,
      title: 'Infrastructure',
      description: 'Large-scale infrastructure development and civil engineering projects',
      icon: '🌉',
      image: infrastructureImg,
      items: ['Residential', 'Commercial', 'Hospitals', 'Colleges', 'Site Development']
    },
    {
      id: 7,
      title: 'Interior Design & Furniture (Playwood, PVC, Aluminium)',
      description: 'Custom modular furniture and interior design solutions for modern living',
      icon: '🪑',
      images: [interiorDesignImg1, interiorDesignImg2],
      items: ['Modular Kitchen', 'Grocery Unit', 'Study Tables', 'Wardrobes', 'TV Units']
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
            <div className="service-icon">
              {service.images ? (
                <div className="dual-images">
                  <img src={service.images[0]} alt={`${service.title} 1`} />
                  <img src={service.images[1]} alt={`${service.title} 2`} />
                </div>
              ) : service.image ? (
                <img src={service.image} alt={service.title} />
              ) : (
                service.icon
              )}
            </div>
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
