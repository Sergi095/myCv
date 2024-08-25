import React, { useState } from 'react';

const Education: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // List of education entries with their details
  const educationEntries = [
    {
      degree: 'MSc in Artificial Intelligence',
      institution: 'Vrije Universiteit Amsterdam',
      dateRange: '2021 - 2024',
      details: ['Specialization Track: Artificial Intelligence', 'Thesis: Sensory Heterogenious Predator Swarm vs Fully Sensing Prey Swarm', 'Thesis Grade: 8.5/10']
    },
    {
      degree: 'BSc in Economics and Business Economics',
      institution: 'Universiteit van Amsterdam',
      dateRange: '2017 - 2021',
      details: ['Major: Economics', 'Minor: Data Science and Artificial Intelligence', 'Thesis:  Beliefs About Climate Change: Measuring People Accuracy of CO2 Emissions of the Products They Consume More Often and Their Willingness to Change', 'Thesis Grade: 8.0/10']
    },
    // {
    //   degree: 'Degree 3',
    //   institution: 'Institution Name 3',
    //   dateRange: 'Date - Date',
    //   details: ['Detail 5', 'Detail 6']
    // }
  ];

  // Function to toggle the expansion of education details
  const toggleExpand = (index: number) => {
    if (expanded === index) {
      setExpanded(null); // Close the current item if it's clicked again
    } else {
      setExpanded(index); // Expand the new item, closing any other
    }
  };

  return (
    <section className="education-section">
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      <ul>
        {educationEntries.map((entry, index) => (
          <li key={index} className={expanded === index ? 'expanded' : ''}>
            <h3 onClick={() => toggleExpand(index)} style={{ cursor: 'pointer' }}>
              {entry.degree}
            </h3>
            <div className="education-details" style={{overflow:'auto'}}>
              <p>{entry.institution} • {entry.dateRange}</p>
              <ul>
                {entry.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
