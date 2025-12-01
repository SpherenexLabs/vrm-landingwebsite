import React, { useState } from 'react';
import './Projects.css';

// Import images
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import p10 from '../assets/p10.jpeg';
import p11 from '../assets/p11.jpeg';
import p12 from '../assets/p12.jpeg';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    // Start animation after 0.5s
    setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    // Stop animation and return after 5s
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsHovered(false);
      }, 500);
    }, 5500);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <div 
      className={`project-story-card ${isHovered ? 'hovered' : ''} ${isAnimating ? 'animating' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Animation Layer */}
      {isHovered && (
        <div className="card-background">
          <img src={project.image} alt="Background" />
        </div>
      )}

      {/* Card Content */}
      <div className="card-content">
        <div className="card-image-wrapper">
          <img src={project.image} alt={`Project ${project.id}`} />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 1, image: p1 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
    { id: 4, image: p4 },
    { id: 5, image: p5 },
    { id: 6, image: p6 },
    { id: 7, image: p7 },
    { id: 8, image: p8 },
    { id: 9, image: p9 },
    { id: 10, image: p10 },
    { id: 11, image: p11 },
    { id: 12, image: p12 },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Featured <span className="highlight">Projects</span></h2>
        <p className="section-subtitle">
          Excellence delivered across diverse construction segments
        </p>
      </div>
      
      <div className="projects-full-grid">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="projects-cta">
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="btn btn-outline"
        >
          {showAll ? 'Show Less' : 'View All Projects'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
