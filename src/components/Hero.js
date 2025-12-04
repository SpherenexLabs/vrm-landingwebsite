import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-logo-container">
          <img 
            src="/assets/logoC.png" 
            alt="VRM Groups Logo" 
            className="hero-logo"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="brand-vrm">VRM</span>{' '}
            <span className="brand-groups">GROUPS</span>
          </h1>
          <h2 className="hero-subtitle">Building, Construction and Infrastructure</h2>
          <p className="hero-tagline">Sustainable Design Freedom</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
