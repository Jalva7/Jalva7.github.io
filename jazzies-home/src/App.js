import React, { useState } from 'react';
import './App.css';

export default function JazziesHome() {
  const [activePage, setActivePage] = useState('home');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      {/* Header */}
      <header id="header-wrap">
        <div className="nav-title">
          <h1>Jazzie's Home</h1>
        </div>

        <nav className="nav-container">
          <ul className="onepage-nav">
            <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('home')}
                className="nav-link"
              >
                Home
              </button>
            </li>
            <li className={`nav-item ${activePage === 'skills' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('skills')}
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li className={`nav-item ${activePage === 'resume' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('resume')}
                className="nav-link"
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Home Page */}
        <div id="home" className={`page-content ${activePage === 'home' ? 'active' : ''}`}>
          <section className="about-section">
            <h2>About Me</h2>
            <div className="about-textbox">
              <p>Hey! I am Jazmin Alvarado and I am still learning how to code.</p>
              <p>I'm passionate about creating beautiful and functional websites. I want to continuously expand my skills in web development and software engineering.</p>
              <p>Welcome to my digital space where I showcase my journey, skills, and aspirations in the world of coding.</p>
            </div>
          </section>
        </div>

        {/* Skills Page */}
        <div id="skills" className={`page-content ${activePage === 'skills' ? 'active' : ''}`}>
          <h2>My Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">Attention to detail</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Adaptability</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Learning Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Web APIs</span>
              </div>
            </div>

            <div className="Goal">
              <h3>Goals</h3>
              <p>To become a proficient full-stack developer and contribute to exciting projects.</p>
            </div>
          </div>
        </div>

        {/* Resume Page */}
        <div id="resume" className={`page-content ${activePage === 'resume' ? 'active' : ''}`}>
          <h2>Resume</h2>
          
          <div className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
              <p>Add your educational background here</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Experience</h3>
            <div className="resume-item experience">
              <p>Add your work experience here</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Projects</h3>
            <div className="resume-item projects">
              <p>Add your projects here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}