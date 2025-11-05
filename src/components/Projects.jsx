import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.png';
import poster4 from '../assets/poster4.png';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Project 1',
      description: 'A modern web application showcasing advanced user interface design and smooth interactions.',
      image: poster1,
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'An innovative platform demonstrating creative solutions and seamless user experience.',
      image: poster2,
      link: '#'
    },
    {
      title: 'Project 4',
      description: 'A dynamic web application featuring responsive design and interactive elements.',
      image: poster4,
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="view-all-button">
            View All Projects
          </Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              className={`project-row ${index % 2 === 1 ? 'reverse' : ''}`}
              key={index}
            >
              <div className="project-image">
                <div className="poster-frame">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              <div className="project-text">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-actions">
                  <a href={project.link} className="project-link">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;