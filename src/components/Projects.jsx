import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';
import '../styles/animations.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const featuredProjects = [
    {
      title: "Graphic Design Posters",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros dui, tincidunt at dictum sit amet, blandit ac mauris. Sed maximus accumsan orci, eget sodales.",
      icon: "📄",
      link: "/projects/graphic-design"
    },
    {
      title: "Mobile and Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros dui, tincidunt at dictum sit amet, blandit ac mauris. Sed maximus accumsan orci, eget sodales.",
      icon: "🖥️",
      link: "/projects/web-design"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className={`projects-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2>Featured Projects</h2>
        </div>
        
        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <div 
              className={`feature-card ${isVisible ? 'animate-scaleIn' : ''}`} 
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              key={index}>
              <div className="feature-icon">
                <div className="icon-circle">
                  {project.icon}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link 
                to={project.link} 
                className="project-view-button"
                onClick={(e) => {
                  // Prevent default scroll behavior
                  e.preventDefault();
                  // Navigate to the project page
                  window.location.href = project.link;
                }}
              >
                View Project <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;