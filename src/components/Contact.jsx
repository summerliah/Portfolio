import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Replace with actual form submission logic
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and creative projects. 
              Whether you have a project in mind or just want to say hello, 
              feel free to reach out!
            </p>
            
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

          <form onSubmit={handleSubmit} className="contact-form">
            {submitStatus === 'success' && (
              <div className="alert success">
                ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert error">
                ❌ Sorry, there was an error sending your message. Please try again or email me directly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, questions, or how I can help you..."
                rows="6"
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="submit-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="loading">⏳</span> Sending Message...
                </>
              ) : (
                'Send Message 📧'
              )}
            </button>
          </form>
        </div>

        <div className="social-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a 
              href="https://linkedin.com/in/ericasalem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <span>💼 LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ericasalem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <span>⚡ GitHub</span>
            </a>
            <a 
              href="https://dribbble.com/ericasalem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <span>🎨 Dribbble</span>
            </a>
            <a 
              href="https://twitter.com/ericasalem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <span>🐦 Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;