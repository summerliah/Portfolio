import React, { useState, useEffect } from 'react';
import '../styles/ProjectsPage.css';
import '../styles/expanded-view.css';
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.png';
import poster3 from '../assets/poster3.png';
import poster4 from '../assets/poster4.png';
import '../styles/Projects.css';

const GraphicDesignPage = () => {
  const [expandedView, setExpandedView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Force the page to start at the top when component mounts and trigger animation
  useEffect(() => {
    const element = document.documentElement;
    element.scrollTop = 0;
    
    // Trigger the animation after a small delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);


  const projects = [
    {
      image: poster1,
      description: "This poster visually represents the song “Until I Found You” by Stephen Sanchez, highlighting the theme of finding love after darkness and loneliness. The purple night sky with stars and a glowing moon creates a dreamy, romantic atmosphere. At the center, a silhouette of a couple dancing symbolizes love, connection, and joy. The faint line art of two faces adds depth, showing emotional intimacy. The quote “I was lost within the darkness but then I found her” captures the song’s message of hope and transformation through love."
    },
    {
      image: poster2,
      description: "This poster is an advertisement for Dior’s Luxury Perfume Collection, specifically featuring the Miss Dior fragrances. It promotes a 30% sale on a limited edition release, appealing to consumers who value elegance and exclusivity. The design uses a soft pink and white color scheme, which conveys femininity, romance, and sophistication—qualities associated with Dior’s brand identity. The large, bold “DIOR” logo at the top establishes brand recognition and luxury appeal. The floral accents and petal effects around the bottles emphasize the perfume’s delicate and fragrant nature. The two showcased bottles, with their sleek glass design and pink tones, visually represent beauty and refinement."
    },
    {
      image: poster3,
      description: "This poster promotes National University Dasmariñas, featuring its logo, colors, and slogan “Education that works.” It highlights the school’s commitment to practical, quality education that prepares students for success. The bulldog mascot symbolizes strength and school pride, while the contact details at the bottom provide easy access for inquiries."
    },
    {
      image: poster4,
      description: "This poster is a Christmas and New Year greeting from National University Dasmariñas Cavite. It features a festive design with a decorated Christmas tree, glowing lights, snowflakes, and gift boxes that create a joyful holiday atmosphere. The message “Merry Christmas and Happy New Year” is written in bold and elegant text to spread cheer and positivity. The bulldog mascot wearing a Santa hat adds a fun and school-spirited touch, symbolizing NU’s unity and festive celebration. Overall, the poster conveys warmth, happiness, and community spirit during the holiday season."
    }
  ];

  return (
    <section className="project-details-section">
      <div className="section-container">
        <h2>Graphic Design Projects</h2>
        <div className="project-cards">
          {expandedView ? (
            <div className={`expanded-view ${isVisible ? 'visible' : ''}`}>
              <button 
                className="close-button"
                onClick={() => setExpandedView(false)}
                style={{
                  animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none'
                }}
              >
                Close
              </button>
              <div className="expanded-grid">
                {projects.map((project, index) => (
                  <div className="expanded-image" key={index}>
                    <img src={project.image} alt={`Graphic Design Project ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <div 
                className="project-detail-card" 
                key={index}
                onClick={() => setExpandedView(true)}
              >
                <div className="project-image">
                  <img src={project.image} alt={`Graphic Design Project ${index + 1}`} />
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

export default GraphicDesignPage;
