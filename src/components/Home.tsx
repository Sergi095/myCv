import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Skills from './Skills';
import Footer from './Footer';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Projects from './Projects';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('work');

  const sectionIndex = (section: string) => {
    switch (section) {
      case 'work':
        return 0;
      case 'education':
        return 1;
      case 'projects':
        return 2;
      default:
        return 0;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="cv-container">
      <Header />
      <Menu activeSection={activeSection} setActiveSection={handleSectionChange} />
      <main className="content">
        <div
          className="sections-container"
          style={{ transform: `translateX(-${sectionIndex(activeSection) * 100}%)` }}
        >
          <div className={`section ${activeSection === 'work' ? 'active' : ''}`}>
            <WorkExperience />
          </div>
          <div className={`section ${activeSection === 'education' ? 'active' : ''}`}>
            <Education />
          </div>
          <div className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
            <Projects />
          </div>
        </div>
      </main>
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
