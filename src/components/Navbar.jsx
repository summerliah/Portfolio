import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/E.png';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    const currentPath = window.location.pathname;
    
    // If we're not on the home page, navigate to home page with section hash
    if (currentPath !== '/') {
      e.preventDefault();
      // Navigate to specific section
      window.location.href = `/#${sectionId}`;
      return;
    }

    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection('home');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height of the fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
        setCurrentSection(sectionId);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomThreshold = documentHeight - windowHeight - 10;

      // Check if we're at the very top
      if (scrollPosition < 100) {
        setCurrentSection('home');
        return;
      }

      // Check if we're at the bottom
      if (scrollPosition >= bottomThreshold) {
        setCurrentSection('contact');
        return;
      }

      // Check each section's position
      let currentActive = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.3) {
            currentActive = section === 'hero' ? 'home' : section;
          }
        }
      });
      setCurrentSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/"
          className={currentSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </Link>
        <Link 
          to={window.location.pathname === '/' ? '/#projects' : '/'}
          className={currentSection === 'projects' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          Projects
        </Link>
        <Link 
          to={window.location.pathname === '/' ? '/#about' : '/'}
          className={currentSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About Me
        </Link>
        <Link 
          to={window.location.pathname === '/' ? '/#contact' : '/'}
          className={currentSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;