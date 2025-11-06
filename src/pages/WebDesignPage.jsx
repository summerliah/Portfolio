import React, { useState, useEffect } from 'react';
import '../styles/ProjectsPage.css';
import '../styles/animations.css';
import '../styles/expanded-view.css';
import webDesign1 from '../assets/1.png';
import webDesign2 from '../assets/2.png';
import webDesign4 from '../assets/4.png';

const WebDesignPage = () => {
  const [expandedView, setExpandedView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Force the page to start at the top when component mounts
  useEffect(() => {
    const element = document.documentElement;
    element.scrollTop = 0;
    // Trigger animations after a small delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);



  const projects = [
    {
      image: webDesign1,
      description: "PawConnect: Social Media for Pets is a mobile application designed to create a digital community for pet owners and animal lovers. The main concept of this project is to provide a platform where users can connect, share, and interact through their pets. Users can create pet profiles, post pictures or updates, exchange pet care tips, and engage with other pet enthusiasts."
    },
    {
      image: webDesign2,
      description: "ARquest: Bridging Digital and Real-World Learning for Kids is a mobile app that uses Augmented Reality (AR) to make learning fun and interactive. It helps children explore subjects like Math, Science, and Language Arts through 3D visuals and activities. The app also supports teachers in managing lessons and tracking progress, creating an engaging blend of digital and real-world education."
    },
    {
      image: webDesign4,
      description: "The ARquest Web Application is designed to support parents, teachers, and administrators in tracking and monitoring students’ learning progress. While the mobile app focuses on interactive learning through Augmented Reality (AR), the web application serves as the management and monitoring platform. Through the website, teachers can record and review students’ performance, assign lessons, and assess quiz results. Parents can view their child’s learning progress, ensuring they stay engaged and informed. Administrators can oversee overall system activity and manage user data efficiently."
    }
  ];

  return (
    <section className={`project-details-section ${isVisible ? 'animate-fadeIn' : ''}`}>
      <div className={`section-container ${isVisible ? 'animate-fadeInUp delay-100' : ''}`}>
        <h2 className={`${isVisible ? 'animate-fadeInUp delay-200' : ''}`}>Web Design Projects</h2>
        <div className="project-cards">
          {expandedView ? (
            <div className={`expanded-view ${isVisible ? 'animate-scaleIn delay-300' : ''}`}>
              <button 
                className={`close-button ${isVisible ? 'animate-fadeInUp delay-400' : ''}`}
                onClick={() => setExpandedView(false)}
              >
                Close
              </button>
              <div className="expanded-grid">
                {projects.map((project, index) => (
                  <div className="expanded-image" key={index}>
                    <img src={project.image} alt={`Web Design Project ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <div 
                className={`project-detail-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                key={index}
                onClick={() => setExpandedView(true)}
              >
                <div className={`project-image ${isVisible ? 'animate-scaleIn' : ''}`}
                     style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  <img src={project.image} alt={`Web Design Project ${index + 1}`} />
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default WebDesignPage;