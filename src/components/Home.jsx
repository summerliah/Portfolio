import React from 'react';
import '../styles/Hero.css';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" aria-hidden="true"></div>
            <img src={profile} alt="Profile" className="hero-image" />
          </div>
          <div className="decorative-star star-top" aria-hidden="true"></div>
          <div className="decorative-star star-right" aria-hidden="true"></div>
        </div>

        <div className="hero-content">
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">Erica Salem</span>
          </h1>
          <p className="title">Web Designer & Graphic Designer</p>

          <div className="cta-buttons">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;