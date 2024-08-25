import React, { useState } from 'react';

const WorkExperience: React.FC = () => {
  // Track the index of the currently expanded item
  const [expanded, setExpanded] = useState<number | null>(null);

  // List of job titles with their details
  const jobExperiences = [
    {
      title: 'Research Support & Software Development ',
      company: 'Vrije Universiteit Amsterdam',
      location: 'Amsterdam, The Netherlands',
      date: '02/23 - 08/24',
      responsibilities: ['I collaborated closely with psychology researchers to bring their experiments to life. My role involved building custom software solutions and managing servers for both online and lab‑based experiments.']
    },
    {
      title: 'Data Analyst Internship',
      company: 'AGUROTECH B.V.',
      location: 'Amsterdam, The Netherlands',
      date: '02/22 - 06/22',
      responsibilities: ['I contributed to improving the main model of the company in predictive soil moisture. Specifically, I developed an additional feature for the model.']
    },
    {
      title: 'Data Product Assistant ',
      company: 'EUROPEAN TOILETRY BROKERS (ETB) B.V.',
      location: 'Amsterdam, The Netherlands',
      date: '05/21 - 10/21',
      responsibilities: ['I was responsible for ensuring that all product data was accurately maintained in the system (SAP), while also identifying and highlighting any inaccuracies, and improving data quality.']
    }
  ];

  // Function to toggle the expansion of job details
  const toggleExpand = (index: number) => {
    if (expanded === index) {
      setExpanded(null); // Close the current item if it's clicked again
    } else {
      setExpanded(index); // Expand the new item, closing any other
    }
  };

  return (
    <section className="work-experience">
      <h2 style={{ textAlign: 'center', color: 'black' }}>Work Experience</h2>
      <ul>
        {jobExperiences.map((job, index) => (
          <li key={index} className={expanded === index ? 'expanded' : ''}>
            <h3 onClick={() => toggleExpand(index)}>{job.title}</h3>
            <div className="job-details" style={{overflow: 'auto'}}>
              <p>{job.company} • {job.date} • {job.location}</p>
              <ul>
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
