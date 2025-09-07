import React, { useState, useCallback } from 'react';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  // Navigation items for dynamic rendering
  const navItems = [
    { id: 'home', label: 'Home', ariaLabel: 'Home Page' },
    { id: 'skills', label: 'Skills', ariaLabel: 'Skills Page' },
    { id: 'resume', label: 'Resume', ariaLabel: 'Resume Page' },
    { id: 'blog', label: 'Blog', ariaLabel: 'Blog Page' }
  ];
  
  // handle navigation click with error handling
  const handleNavClick = useCallback((page) => {
    try {
      setIsLoading(true);
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, []);

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
        year: 'Fall 2025',
        description: 'On my final semester, focusing on my senior project.'
      },
    ],
    projects: [
      {
        name: 'Creative Challenges',
        technologies: 'React, CSS3, JavaScript, HTML5, MySQL2, Express.js',
        description: 'A web application that offers creative challenges to inspire and engage users in various activities including design, art, writing, and photography. This project is for my senior project course at UNG.',
        status: 'In Progress'
      },
      {
        name: 'Personal Portfolio Website',
        technologies: 'React, CSS3, JavaScript',
        description: 'A responsive portfolio showcasing my skills and projects with modern design principles. This very website!',
        status: 'Constantly Updating'
      },
      {
        name: 'Runners Wish Website',
        technologies: 'undecided',
        description: 'A website designed to connect generous donors with passionate runners—support a cause by donating, or volunteer to run on behalf of someone who can\'t.',
        status: 'In Progress'
      }
    ],
    experience: [
      {
        title: 'Fulfillment Associate',
        company: 'Amazon',
        time: 'May 2024 - Aug 2024',
        responsibilities: [
          'Processed and fulfilled orders efficiently',
          'Maintained a clean and organized work environment',
          'Collaborated with team members to meet daily targets',
          'Ensured accuracy in order picking and packing'
        ]
      },
      {
        title: 'Assistant Sales Manager',
        company: 'Rue21',
        time: 'Jan 2023 - Aug 2023',
        responsibilities: [
          'Assisted in managing daily store operations',
          'Trained and supervised new staff',
          'Maintained store inventory and merchandising standards',
          'Monitored inventory levels, maintained store standards, and implemented visual merchandising strategies to align with Rue21\'s brand identity',
        ]
      },
      {
        title: 'Sales Associate',
        company: 'Rue21',
        time: 'May 2022 - Jan 2023',
        responsibilities: [
          'Greeted and assisted customers with their shopping needs',
          'Operated cash registers and handled transactions',
          'Operational successes included handling transactions accurately, assisting with inventory, and preventing losses through diligent adherence to policies'
        ]
      }     
    ]
  };
  
  return (
    <div className="app">
      {/* Header */}
      <header className="header-wrap" role='banner'>
        <div className="header-container">
          <div className="nav-title">
            <h1>JazminA</h1>
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
        </div>
      </header>
    
      {/* Main Content */}
      <main role='main'>
        {/* Home Page */}
        <div className={`page-content ${activePage === 'home' ? 'active' : ''}`} 
             role="tabpanel" aria-labelledby="home-tab">
          <section className="about-section" aria-labelledby="about-heading">
            <div className="hero-content">
              <h1 className="hero-title">Developing & Learning</h1>
              <p className="hero-subtitle">
                Hello, I'm Jazmin Alvarado, a web developer focusing 
                on frontend development with modern technologies.
              </p>
              
              <div className="nav-actions">
                <button
                  onClick={() => handleNavClick('skills')}
                  className="nav-button"
                >
                  View Skills →
                </button>
                <button
                  onClick={() => handleNavClick('resume')}
                  className="nav-button"
                >
                  See Resume →
                </button>
                <button
                  onClick={() => handleNavClick('blog')}
                  className="nav-button"
                  >
                    Read Blog →
                  </button>
              </div>
            </div>
            
            <div className="about-details">
              <div className="about-text">
                <h3>Know Me</h3>
                <p>
                  I am still learning how to code and I am passionate about creating 
                  beautiful and functional websites. I want to continuously expand 
                  my skills in Web Development and UX Design. I am also interested in exploring software engineering.
                </p>
                <p>
                  Welcome to my digital space where I showcase my journey, 
                  skills, and aspirations in the world of coding.
                </p>
              </div>
              
              <div className="about-image">
                <img src="https://avatars.githubusercontent.com/u/127626646?v=4" alt="Jazmin Alvarado" />
              </div>
            </div>
            
            <div className="scroll-hint">Scroll Down ↓</div>
          </section>
        </div>

        {/* Skills Page */}
        <div className={`page-content ${activePage === 'skills' ? 'active' : ''}`}
             role="tabpanel" aria-labelledby="skills-tab">
          <div className="skills-container">
            <h2 className="page-title">Skills & Expertise</h2>
            
            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="skill-category">
                  <h3>
                    {category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 'Currently Learning'}
                  </h3>
                  <div className="skill-list" role='list'>
                    {skills.map((skill, index) => (
                      <span key={index} className='skill-tag' role='listitem'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="Goal">
                <h3>Current Focus</h3>
                <p>
                  To become a proficient full-stack developer and contribute to 
                  exciting projects that make a positive impact on people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Page */}
        <div className={`page-content ${activePage === 'resume' ? 'active' : ''}`}
             role='tabpanel' aria-labelledby="resume-tab">
          <div className="resume-container">
            <h2 className="page-title">Experience</h2>
            
            {/* Education Section */}
            <div className="resume-section">
              <div className="resume-scroll-hint">Scroll Down ↓</div>
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

            {/* Projects Section */}
            <div className='resume-section'>
              <h3>Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="resume-item">
                  <div className='resume-item-header'>
                    <h4>{project.name}</h4>
                    <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className='technologies'>
                    <strong>Tech Stack:</strong> {project.technologies}
                  </p>
                  <p className='description'>{project.description}</p>
                </div>
              ))} 
            </div>
            
            {/* Experience Section */}
            <div className="resume-section">
              <h3>Work Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="resume-item">
                  <div className='resume-item-header'>
                    <h4>{exp.title}</h4>
                    <span className='period'>{exp.time}</span>
                  </div>
                  <p className='company'>{exp.company}</p>
                  <ul className='responsibilities'>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Page */}
        <div className={`page-content ${activePage === 'blog' ? 'active' : ''}`}
             role='tabpanel' aria-labelledby="blog-tab" >
          <div className="blog-container">
            <h2 className="page-title">Blog</h2>
            <div className="blog-section">
              <h3>Welcome</h3>
              <p>Welcome to my blog! Here, I share my progress and experiences related to web development, 
              coding challenges, and my journey in the tech world. Stay tuned for updates!</p>

              <p>Currently, I'm working on setting up my blog platform. Although I just started this blog, I am also working on a 
              senior project that will be taking up most of my time. In the meantime, feel free to check out <a href="https://github.com/Jalva7" target="_blank" rel="noopener noreferrer">my GitHub</a> for some 
              of my projects and code snippets.</p>
              </div>
            </div>
          </div>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <p>© 2025 Jazmin Alvarado</p>
        <p>Built with React</p>
      </footer>
    </div>
  );
}