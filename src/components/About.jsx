import React, { useEffect, useState } from 'react';
import '../styles/About.css';
import '../styles/animations.css';
import profileImage from '../assets/profile2.jpg';
import resume from '../assets/INTERNRESUME.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    // Optional: You can add tracking or analytics here
    console.log('Downloading resume...');
  };

  const workSkills = [
    { name: 'Figma', icon: '🎨' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Web Development', icon: '💻' },
    { name: 'Web Design', icon: '🎯' },
    { name: 'Sketch', icon: '✏️' },
    { name: 'XD', icon: '🎨' },
    { name: 'Video Editing', icon: '🎬' },
    { name: 'Mobile App', icon: '📱' }
  ];

  const services = [
    {
      title: 'UI/UX Design',
      image: '/path-to-uiux-image.jpg',
      link: '#'
    },
    {
      title: 'Web Design',
      image: '/path-to-webdesign-image.jpg',
      link: '#'
    },
    {
      title: 'Web Development',
      image: '/path-to-webdev-image.jpg',
      link: '#'
    }
  ];

  const education = [
    {
      institution: "National University, Dasmarinas",
      degree: "Bachelor's in Information Technology",
      period: "2022 - Present",
      status: "current"
    },
    {
      institution: "Senior High School",
      degree: "ICT Programming",
      period: "2020 - 2022",
      status: "completed"
    }
  ];

  const technicalSkills = [
    { name: 'UI/UX Design'},
    { name: 'Web Development',},
    { name: 'Figma' },
    { name: 'React'},
    { name: 'JavaScript'},
    { name: 'CSS/HTML'}
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Creativity',
    'Time Management'
  ];

  return (
    <section id="about" className="about-section">
      <div className={`about-container ${isVisible ? 'animate-fadeIn' : ''}`}>
        <div className={`about-content ${isVisible ? 'animate-fadeInUp delay-100' : ''}`}>
          <div className={`about-left ${isVisible ? 'animate-slideInLeft delay-200' : ''}`}>
            <div className="about-text">
              <h1 className={`about-title ${isVisible ? 'animate-fadeInUp delay-300' : ''}`}>About Me</h1>
              <p className={`about-description ${isVisible ? 'animate-fadeInUp delay-400' : ''}`}>
                Hello, I'm Erica Salem. Passionate and innovative UI/UX Designer with
                a focus on creating visually appealing and effective designs.
                Proficient in Figma and other design tools, I combine artistic talent with a strong
                understanding of design principles. Proven track record of delivering visually
                stunning and effective solutions.
              </p>
              
              <div className="education-section">
                <h2 className="education-title">Education</h2>
                <div className="education-content">
                  <h3>Bachelor's in Information Technology</h3>
                  <p className="education-school">National University, Dasmarinas</p>
                  <p className="education-year">2022 to Present</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="about-right">
            <div className="profile-image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
              <div className="profile-background-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;