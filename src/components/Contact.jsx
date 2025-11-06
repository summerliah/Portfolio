import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';
import '../styles/animations.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className={`${isVisible ? 'animate-fadeInUp' : ''}`}>Connect With Me</h2>
        <p className={`connect-text ${isVisible ? 'animate-fadeInUp delay-100' : ''}`}>
          Let's connect and discuss creative opportunities! Feel free to reach out!
        </p>
        <div className="contact-content">
          <div className={`contact-left ${isVisible ? 'animate-slideInLeft delay-200' : ''}`}>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>ericasalem57@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Dasmariñas, Cavite City</span>
              </div>
              <div className="contact-item">
                <strong>Contact Number:</strong>
                <span>09993608348</span>
              </div>
            </div>
          </div>
          
          <div className={`contact-right ${isVisible ? 'animate-slideInRight delay-200' : ''}`}>
            <div className="social-media-container">
              <h3 className={`section-subtitle ${isVisible ? 'animate-fadeInUp delay-300' : ''}`}>Social Media</h3>
              <div className={`social-links ${isVisible ? 'animate-fadeInUp delay-400' : ''}`}>
                <a href="https://www.linkedin.com/in/erica-salem-534419395" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-button">
                    <span>LinkedIn</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/ericaasalem" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-button">
                    <span>Facebook</span>
                  </div>
                </a>
                <a href="mailto:ericasalem57@gmail.com" className="social-link">
                  <div className="social-button">
                    <span>Email</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;