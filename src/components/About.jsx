import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-left">
          <div className="profile-image">
            <img src="/profile.jpg" alt="Your Name" />
          </div>
        </div>
        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hello! I'm a passionate developer with expertise in web development.
            I love creating intuitive and efficient solutions to complex problems.
            <span className="about-highlight">Let's build something amazing together!</span>
          </p>
          <h3 className="skills-title">Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">UI/UX</span>
            {/* Add more skills */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;