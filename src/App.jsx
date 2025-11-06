import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import GraphicDesignPage from './pages/GraphicDesignPage'
import WebDesignPage from './pages/WebDesignPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Wrapper component to handle location-dependent logic
function PageContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    document.body.className = isHomePage ? 'home-page' : 'project-page';

    if (isHomePage) {
      const handleScroll = () => {
        const sections = ['hero', 'projects', 'about', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { top } = element.getBoundingClientRect();
            const elementTop = top + window.scrollY;
            if (scrollPosition >= elementTop && scrollPosition < elementTop + element.offsetHeight) {
              setActiveSection(section === 'hero' ? 'home' : section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <Projects />
            <About />
            <Contact />
          </main>
        } />
        <Route 
          path="/projects/graphic-design" 
          element={<GraphicDesignPage />}
        />
        <Route 
          path="/projects/web-design" 
          element={<WebDesignPage />}
        />
      </Routes>
    </div>
  );
}

// Main App component with Router
function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageContent />
    </Router>
  );
}

export default App