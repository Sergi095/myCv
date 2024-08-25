import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="menu">
      <button
        className={activeSection === 'work' ? 'active' : ''}
        onClick={() => setActiveSection('work')}
      >
        Work Experience
      </button>
      <button
        className={activeSection === 'education' ? 'active' : ''}
        onClick={() => setActiveSection('education')}
      >
        Education
      </button>
      <button
        className={activeSection === 'projects' ? 'active' : ''}
        onClick={() => setActiveSection('projects')}
      >
        Projects
      </button>
      <Link to="/about">About Me</Link>
    </nav>
  );
};

export default Menu;