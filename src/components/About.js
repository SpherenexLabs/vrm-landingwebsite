import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src={process.env.PUBLIC_URL + '/assets/About.jpg'} 
            alt="VRM Groups Construction" 
          />
        </div>
        
        <div className="about-content">
          <h2>About <span className="highlight vrm-brand"><span className="vrm-text">VRM</span> <span className="groups-text">Groups</span></span></h2>
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
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <div>
                <h4>2D & 3D Planning Elevation</h4>
                <p>Advanced design and visualization services</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l-5.5 9h11z M17.5 11L12 21l-5.5-10z M2 19h20v2H2z"/>
                </svg>
              </div>
              <div>
                <h4>Quality Materials</h4>
                <p>Premium construction materials for lasting results</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h4>Expert Team</h4>
                <p>Skilled professionals with extensive experience</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div>
                <h4>On-Time Delivery</h4>
                <p>Committed to meeting project deadlines</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <div>
                <h4>20+ Years Experience</h4>
                <p>Two decades of excellence in construction industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
