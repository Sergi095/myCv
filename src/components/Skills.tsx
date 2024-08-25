import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const skills = {
    Knowledge: ['Machine Learning', 'Data Science', 'Deep Learning', 'Evolutionary Algorithms'],
    Software: ['Python', 'Stata', 'R', 'LaTeX', 'SQL', 'Tableau', 'Excel', 'Qualtrics', 'Git', 'JavaScript', 'TypeScript', 'Linux', 'React'],
    Languages: ['Spanish', 'English', 'Dutch', 'Papiamento'],
  };

  const toggleExpand = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="skills">
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="skill-categories-row">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className={`skill-category ${expandedCategory === category ? 'expanded' : ''}`}>
              <h3 onClick={() => toggleExpand(category)} style={{ cursor: 'pointer' }}>
                {category}
              </h3>
              <div className={`skill-bubbles ${expandedCategory === category ? 'expanded' : ''}`}>
                {expandedCategory === category && items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-bubble">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
