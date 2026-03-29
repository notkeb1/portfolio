import { useEffect, useId, useState } from 'react';
import './App.css';
import pfpImage from './assets/pfp.png';
import furbeImage from './assets/furbe.png';
import semImage from './assets/sem.png';

const NAV_LINKS = [
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'My Projects' },
  { href: '#contact', label: 'Get in Touch' },
];

const STRENGTHS = [
  'React, JavaScript/TypeScript, HTML5, CSS3',
  'Responsive UI, accessibility, and performance optimization',
  
];

const PROJECTS = [
  {
    id: 'furbe',
    label: 'Furbe',
    image: furbeImage,
    alt: 'Furbe project preview',
    description:
      'FURBE is a thesis project mobile app that focus on scanning dog breeds and their moods (happy, sad, angry, scared)',
  },
  {
    id: 'sem',
    label: 'Semivra',
    image: semImage,
    alt: 'Semivra project preview',
    description:
      'Semivra is a startup technology team dedicated to helping others to grow through digital transformation. covering strategy, creative assets, and how search and marketing pieces fit together.',
  },
];

export default function App() {
  const currentYear = new Date().getFullYear();
  const [openProjectId, setOpenProjectId] = useState(null);
  const modalTitleId = useId();

  const openProject = PROJECTS.find((p) => p.id === openProjectId) ?? null;

  useEffect(() => {
    if (!openProjectId) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpenProjectId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openProjectId]);

  return (
    <div className="app">
      <header className="header">
        <h1>My Professional Portfolio</h1>
        <p className="header-tagline">
          Welcome to my personal website showcasing my skills and projects.
        </p>
      </header>

      <nav className="nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <main>
        <section id="about" className="section about">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-details">
              <p>
              I'm a motivated individual with experience in tech, project management, real estate, and customer service.
              I've had the opportunity to handle projects from beginning to end, established strong relationships with clients, 
              and promote properties on social media. In addition, 
              I'm studying computer science and exploring into web and mobile programming using Python, React, and Flutter. 
              I value establishing a balance between creativity and problem-solving, and I intend to use my tech, project management, 
              and customer service expertise to contribute wherever I go.
              </p>
              <p>Key strengths:</p>
              <ul>
                {STRENGTHS.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
              <div className="education-card">
                <strong>Education</strong>
                <p>BS Computer Science, Holy Angel University</p>
                <p>Graduated: 2026</p>
              </div>
            </div>

            <div className="about-photo">
              <img src={pfpImage} alt="Portrait in graduation attire" />
              <p>Class of 2026 / Computer Science   
                <br />
                Holy Angel University
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <p className="projects-intro">
          </p>
          <ul className="projects-list">
            {PROJECTS.map((project) => (
              <li key={project.id} className="projects-list-item">
                <button
                  type="button"
                  className="project-name-btn"
                  onClick={() => setOpenProjectId(project.id)}
                  aria-label={`Open ${project.label} project details`}
                >
                  <span className="project-name-label">{project.label}</span>
                  <span className="project-name-hint" aria-hidden="true">
                    View details
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Me</h2>
          <p className="contact-intro">
            Open to opportunities and collaboration. Reach out through the channel you prefer.
          </p>
          <div className="contact-card" role="group" aria-label="Contact options">
            <p className="contact-placeholder">
              Email: kcauguiran@gmail.com      
              <p>LinkedInL: https://www.linkedin.com/in/kcauguiran/ </p>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
      </footer>

      {openProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setOpenProjectId(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setOpenProjectId(null)}
              aria-label="Close project details"
            >
              ×
            </button>
            <h3 id={modalTitleId} className="project-modal-title">
              {openProject.label}
            </h3>
            <div className="project-modal-media">
              <img src={openProject.image} alt={openProject.alt} />
            </div>
            <p className="project-modal-description">{openProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}