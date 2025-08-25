import React, { useState, useCallback } from 'react';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  // Navigation items for dynamic rendering
  const navItems = [
    { id: 'home', label: 'Home', ariaLabel: 'Home Page' },
    { id: 'skills', label: 'Skills', ariaLabel: 'Skills Page' },
    { id: 'resume', label: 'Resume', ariaLabel: 'Resume Page' }
  ];
  
  // handle navigation click with error handling
  const handleNavClick = useCallback((page) => {
    try {
      setIsLoading(true);
      setActivePage(page);

      //smooth scrolllllll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []); // Fixed: Added missing semicolon

  // Skills Data
  const skillsData = {
    technical: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Git', 'VS Code'],
    soft: ['Attention to Detail', 'Problem Solving', 'Teamwork', 'Adaptability', 'Communication'],
    learning: ['Node.js', 'Responsive Design', 'Web APIs', 'MySQL', 'Express.js']
  };

  // Resume Data
  const resumeData = {
    education: [
      { 
        degree: 'Bachelor of Science in Computer Science', 
        institution: 'University of North Georgia', 
        year: '2025' 
      },
    ],
    projects: [
      {
        name: 'Personal Portfolio Website',
        technologies: 'React, CSS3, JavaScript',
        description: 'A responsive portfolio showcasing my skills and projects with modern design principles.',
        status: 'In Progress'
      },
      {
        name: 'Runners Wish Website',
        technologies: 'undecided',
        description: 'A website designed to connect generous donors with passionate runners—support a cause by donating, or volunteer to run on behalf of someone who cant',
        status: 'In Progress'
      }
    ],
    experience: [
      {
        title: 'Assistant Sales Manager',
        company: 'Rue21',
        time: 'May 2022 - Aug 2023',
        responsibilities: [
          'Assisted in managing daily store operations',
          'Provided excellent customer service',
          'Trained and supervised new staff',
          'Maintained store inventory and merchandising standards'
        ]
      },
      {
        title: 'Fulfillment Associate',
        company: 'Amazon',
        time: 'May 2024- Aug 2024',
        responsibilities: [
          'Processed and fulfilled orders efficiently',
          'Maintained a clean and organized work environment',
          'Collaborated with team members to meet daily targets',
          'Ensured accuracy in order picking and packing'
        ]
      }
    ]
  };
  
  return (
    <div className="app">
      {/* Header */}
      <header className="header-wrap" role='banner'>
        <div className="nav-title">
          <h1>Jazzie's Home</h1>
        </div>

        <nav className="nav-container" role='navigation'>
          <ul className="onepage-nav">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${activePage === item.id ? 'active' : ''}`}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link"
                  aria-label={item.ariaLabel}
                  aria-current={activePage === item.id ? 'page' : undefined}
                  disabled={isLoading}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    
      {/* Main Content */}
      <main role='main'>
        {/* Home Page */}
        <div id="home" className={`nav-item ${activePage === 'home' ? 'active' : ''}`} 
        role="tabpanel" aria-labelledby="home-tab">
          <section className="about-section" aria-labelledby="about-heading">
            <h2 id='about-heading'>About Me</h2>
            <div className="about-textbox">
              <p>Hey! I am Jazmin Alvarado and I am still learning how to code.</p>
              <p>I'm passionate about creating beautiful and functional websites. I want to continuously expand my skills in web development and software engineering.</p>
              <p>Welcome to my digital space where I showcase my journey, skills, and aspirations in the world of coding.</p>
            </div>
            <div className="about-image">
              <img src="https://avatars.githubusercontent.com/u/127626646?v=4" alt="Jazmin Alvarado" />
            </div>
          </section>
        </div>

        {/* Skills Page */}
        <div id="skills" className={`page-content ${activePage === 'skills' ? 'active' : ''}`}
        role="tabpanel" aria-labelledby="skills-tab">
          <h2 id='skills-heading'>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-list" role='list'>
                {skillsData.technical.map((skill,index) => (
                  <span key={index} className='skill-tag' role='listitem'>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-list" role='list'>
                {skillsData.soft.map((skill, index) => (
                  <span key={index} className='skill-tag' role='listitem'>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Learning Skills</h3>
              <div className="skill-list" role='list'>
                {skillsData.learning.map((skill, index) => (
                  <span key={index} className='skill-tag' role='listitem'>{skill}</span>
                ))}
              </div>
            </div>

            <div className="Goal">
              <h3>Goals</h3>
              <p>To become a proficient full-stack developer and contribute to exciting projects.</p>
            </div>
          </div>
        </div>

        {/* Resume Page */}
        <div id="resume" className={`page-content ${activePage === 'resume' ? 'active' : ''}`}
        role='tabpanel' aria-labelledby="resume-tab">
          <h2 id='resume-heading'>Resume</h2>
          
          <div className="resume-section">
            <h3>Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="resume-item">
                <div className='resume-item-header'>
                  <h4>{edu.degree}</h4>
                  <span className='resume-year'>{edu.year}</span>
                </div>
                <p className='resume-institution'>{edu.institution}</p>
                <p className='resume-description'>{edu.description}</p>
              </div>
            ))}
          </div>

          <div className='resume-section'>
            <h3>Projects</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="resume-item projects">
                <div className='resume-item-header'>
                  <h4>{project.name}</h4>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
                </div>
                <p className='technologies'>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <p className='description'>{project.description}</p>
              </div>
            ))} 
          </div>

          <div className="resume-section">
            <h3>Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="resume-item experience">
                <div className='resume-item-header'>
                  <h4>{exp.title}</h4>
                  <span className='period'>{exp.time}</span>
                </div>
                <p className='company'>{exp.company}</p>
                <ul className='responsibilities'> {/* Fixed: Was 'responsibilites' */}
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> {/* Fixed: Added missing closing div for resume page */}
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <p>&copy; 2025 Jazmin Alvarado. All rights reserved.</p>
        <p>Built with React and passion for web development.</p>
      </footer>
    </div>
  );
}