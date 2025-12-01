import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/assets/vrmlogo.png'} alt="VRM Groups" />
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li><a href="http://localhost:3000" className="btn-nav-cta">Get Quote</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
