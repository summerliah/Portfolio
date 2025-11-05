import React from 'react';
import '../styles/ProjectsPage.css';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product management, shopping cart, payment integration with Stripe, and an admin dashboard for inventory management. The platform supports multiple payment methods and provides a seamless shopping experience across all devices.',
      image: '/api/placeholder/600/400',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      category: 'Full Stack',
      status: 'Completed'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool designed for teams. Includes real-time updates, drag-and-drop task organization, file sharing, team chat, and progress tracking. Built with React and Firebase for real-time synchronization across all connected clients.',
      image: '/api/placeholder/600/400',
      link: '#',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      category: 'Frontend',
      status: 'Live'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application that provides detailed forecasts, historical data, and severe weather alerts. Features include location-based weather, interactive maps, weather charts, and customizable dashboards. Integrates with multiple weather APIs for accurate and comprehensive data.',
      image: '/api/placeholder/600/400',
      link: '#',
      technologies: ['JavaScript', 'Chart.js', 'REST API', 'Leaflet'],
      category: 'Frontend',
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and modern CSS. Features smooth animations, dark/light mode toggle, project filtering, and optimized performance. The design focuses on user experience and showcases projects in an engaging way.',
      image: '/api/placeholder/600/400',
      link: '#',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Responsive Design'],
      category: 'Frontend',
      status: 'Live'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1>My Projects</h1>
          <p>Explore my journey through code and design. Each project represents a unique challenge and learning experience.</p>
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="projects-filters">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Full Stack</button>
          <button className="filter-btn">Frontend</button>
          <button className="filter-btn">Design</button>
        </div>

        <div className="projects-grid-full">
          {allProjects.map((project, index) => (
            <div className="project-card-full" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-badge">{project.category}</div>
              </div>
              <div className="project-details">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                    Live Demo
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-code">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;