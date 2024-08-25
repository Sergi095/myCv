import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a 
        href="https://www.linkedin.com/in/sergiogutierrezmaury/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src="./assets/LI-In-Bug.png" alt="LinkedIn" />
      </a>
      <a 
        href="https://github.com/Sergi095" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src="./assets/Github_logo.png" alt="GitHub" />
      </a>
      <a 
        href="./assets/SergioCV.pdf" 
        download="Sergio_Gutierrez_CV.pdf" 
        aria-label="Download CV"
        className="download-cv"
      >
        Download My CV as PDF
      </a>
      <a 
        href="mailto:sergio.gutierrezmaury@gmail.com" 
        aria-label="Email"
        className="email-link"
      >
        Email Me
      </a>
    </footer>
  );
};

export default Footer;
