import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="brand-vrm">VRM</span>{' '}
            <span className="brand-groups">GROUPS</span>
          </h1>
          <h2 className="hero-subtitle">Building, Construction and Infrastructure</h2>
          <p className="hero-description">
            Sustainable Design Freedom - Creating Tomorrow's Landmarks Today
          </p>
          <div className="hero-buttons">
            <a href="http://localhost:3000" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
