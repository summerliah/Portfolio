import React, { useEffect } from 'react';
import '../styles/Hero.css';
import profile from '../assets/profile7.png';

const Home = () => {
  useEffect(() => {
    // Handle hash in URL for section navigation
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          const offset = 80; // Height of the fixed navbar
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure elements are rendered
      }
    }
  }, []);
  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" aria-hidden="true"></div>
            <img src={profile} alt="Erica Salem - Web & Graphic Designer" className="hero-image" />
            <div className="profile-background-circle"></div>
          </div>
          
          <div className="decorative-star star-top" aria-hidden="true"></div>
          <div className="decorative-star star-right" aria-hidden="true"></div>
          <div className="decorative-star star-bottom" aria-hidden="true"></div>
        </div>

        <div className="hero-content">
          <div className="content-wrapper">
            <h1>
              <span className="greeting animate-slide-up">Hello, I'm</span>
              <span className="name animate-slide-up delay-1">Erica Salem</span>
            </h1>
            
            <p className="title animate-slide-up delay-2">Web Designer & Graphic Designer</p>
            
            <p className="description animate-slide-up delay-2">
              Creating beautiful, functional designs that tell your story and connect with your audience.
            </p>

            <div className="cta-buttons animate-slide-up delay-2">
              <a href="#projects" className="cta-button primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="cta-button secondary">
                <span>Get in Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;