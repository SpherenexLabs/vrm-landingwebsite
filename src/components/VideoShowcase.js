import React from 'react';
import './VideoShowcase.css';
import showcaseVideo from '../assets/WhatsApp Video 2025-12-04 at 19.03.17_a6d6ef3c.mp4';

const VideoShowcase = () => {
  return (
    <section className="video-showcase">
      <div className="video-showcase-container">
        <div className="video-header">
          <h2>Our <span className="highlight">Work in Action</span></h2>
          <p className="section-subtitle">
            Experience the quality and dedication that goes into every project
          </p>
        </div>
        
        <div className="video-wrapper">
          <video
            className="showcase-video"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src={showcaseVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
