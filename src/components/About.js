import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src={process.env.PUBLIC_URL + '/assets/building-construction.jpg'} 
            alt="VRM Groups Construction" 
          />
          <div className="about-badge">
            <span className="badge-number">20+</span>
            <span className="badge-text">Years Experience</span>
          </div>
        </div>
        
        <div className="about-content">
          <h2>About <span className="highlight">VRM Groups</span></h2>
          <p className="section-subtitle">
            Leading the Way in Construction Excellence
          </p>
          
          <p className="about-text">
            VRM Groups is a premier construction and infrastructure development company 
            dedicated to delivering exceptional building solutions. With over two decades 
            of experience, we've established ourselves as industry leaders in sustainable 
            construction practices.
          </p>
          
          <p className="about-text">
            Our commitment to quality, innovation, and customer satisfaction has made us 
            the preferred choice for residential, commercial, and industrial projects across 
            the region.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h4>Quality Materials</h4>
                <p>Premium construction materials for lasting results</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h4>Expert Team</h4>
                <p>Skilled professionals with extensive experience</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h4>On-Time Delivery</h4>
                <p>Committed to meeting project deadlines</p>
              </div>
            </div>
          </div>
          
          <a href="http://localhost:3000" className="btn btn-primary">Get Quote</a>
        </div>
      </div>
    </section>
  );
};

export default About;
