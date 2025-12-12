import React, { useState } from 'react';
import './Projects.css';

// Import images
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';
import p13 from '../assets/p13.jpg';
import p14 from '../assets/p14.jpg';
import p15 from '../assets/p15.jpg';
import p16 from '../assets/p16.jpg';
import p17 from '../assets/p17.jpg';
import p18 from '../assets/p18.jpg';
import p19 from '../assets/p19.jpg';
import p20 from '../assets/p20.jpg';
import p21 from '../assets/p21.jpg';
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
    { id: 1, image: p7 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
    { id: 4, image: p4 },
    { id: 5, image: p5 },
    { id: 6, image: p6 },
    { id: 7, image: p1 },
    { id: 8, image: p8 },
    { id: 9, image: p9 },
    { id: 10, image: p10 },
    { id: 11, image: p11 },
    { id: 12, image: p12 },
    { id: 13, image: p13 },
    { id: 14, image: p14 },
    { id: 15, image: p15 },
    { id: 16, image: p16 },
    { id: 17, image: p17 },
    { id: 18, image: p18 },
    { id: 19, image: p19 },
    { id: 20, image: p20 },
    { id: 21, image: p21 },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 8);

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
