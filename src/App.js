import React, { useState, useEffect } from 'react';
import ParticleEffect from './ParticleEffect';
import Navbar from './Navbar';
import ExperienceCard from './ExperienceCard';
import SkillsCard from './SkillsCard';
import ProjectsCard from './ProjectsCard';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const App = () => {
  const [isFullPage, setIsFullPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos >= window.innerHeight / 2) {
        setIsFullPage(true);
      } else {
        setIsFullPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div id="home" className="particle-container" style={{ opacity: isFullPage ? 0 : 1 }}>
        <ParticleEffect />
      </div>
      <div className="name-overlay" style={{ opacity: isFullPage ? 0 : 1 }}>
        <h1>Siddharth Singh Gour</h1>
        <h2>
          

        <TypeAnimation
  sequence={['Data Analyst', 1500, 'Product Analyst', 1500, 'Business Analyst', 1500]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
  speed={65}
/>
  
          
          </h2>
        <div className="intro">
          <p> 
            
            I help companies make sense of their data, find useful patterns, 
            and help them make better decisions.
          </p>
        </div>
        <div className="contact-info ">
          
          <p><div className='contact-grid' >
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          </div>
          </p>
        </div>
      </div>
      <div className="spacer" />
      <div className={`content-section ${isFullPage ? 'full-page' : ''}`}>
        <div className="content-scroll-area">
          <div id="experience"><ExperienceCard /></div>
          <div id="skills"><SkillsCard /></div>
         
          <div id="projects"><ProjectsCard /></div>
        </div>
      </div>
    </div>
  );
};

export default App;