import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="slow-splash-container">
      <div className="slow-splash-content">
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="VRM Groups"
          className="slow-logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + '/assets/vrmlogo.png';
          }}
        />
        <h1 className="slow-title">VRM GROUPS</h1>
        <p className="slow-subtitle">Building, Construction and Infrastructure</p>
        <div className="slow-loading">
          <div className="slow-dot"></div>
          <div className="slow-dot"></div>
          <div className="slow-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
