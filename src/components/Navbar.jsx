import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/">ES</Link>
      </div>
      <div className="nav-links">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
          Home
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          Projects
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          About Me
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;