import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Professional Portfolio</h1>
        <p>Welcome to my personal website showcasing my skills and projects.</p>
      </header>

      <nav className="nav">
        <a href="#about">About Me</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Get in Touch</a>
      </nav>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-details">
            <p>
              I am a motivated software engineer with a strong academic foundation and real-world project
              experience. I hold a Bachelor of Science in Computer Science (graduated 2024), and I enjoy
              building user-centric web applications using modern technologies.
            </p>
            <p>
              Key strengths:
            </p>
            <ul>
              <li>React, JavaScript/TypeScript, HTML5, CSS3</li>
              <li>Responsive UI, accessibility, and performance optimization</li>
              <li>Git workflows, testing, and Agile collaboration</li>
            </ul>
            <div className="education-card">
              <strong>Education</strong>
              <p>BS Computer Science, Your University</p>
              <p>Graduated: 2024</p>
            </div>
          </div>

          <div className="about-photo">
            <img src="/profile.jpg" alt="Graduation portrait" />
            <p>Class of 2024 / Computer Science</p>
          </div>
        </div>
      </section>
      <section id="projects" className="section projects">
        <h2>My Projects</h2>
        <p>Highlight your key projects with links and descriptions.</p>
      </section>
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Provide your contact information or a contact form.</p>
      </section>
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}