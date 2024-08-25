import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // List of projects with their details
const projects = [
    {
        title: 'React Development of Hoe Zeg Jij Iets Met',
        description: 'During my work at the Vrije Universiteit Amsterdam, I supported with the development of the online experiment using React.',
        link: 'https://hoezegjijietsmet.nl/' // Add the link for Project 1
    },
    {
        title: 'MSc Final Project: Sensory Heterogenious Predator Swarm vs Fully Sensing Prey Swarm',
        description: 'Applied a flocking algorithm to simulate predators capturing prey in a continuous space with minimal sensory input. This robotics thesis demonstrates how a partially sensing predator swarm can effectively track and capture moving targets. The full details can be found at the provided link.',
        link: 'https://sergi095.pythonanywhere.com/' // Add the link for Project 2
    },
    {
        title: 'Miscellaneous University Projects',
        description: 'Completed various projects as part of my MSc assignments, including neural networks, reinforcement learning algorithms, and experiments with robots for social AI applications.',
        link: 'https://github.com/Sergi095' // Project link
      }
];

  // Function to toggle the expansion of project details
  const toggleExpand = (index: number) => {
    if (expanded === index) {
      setExpanded(null); // Close the current item if it's clicked again
    } else {
      setExpanded(index); // Expand the new item, closing any other
    }
  };

  return (
    <section className="projects">
      <h2 style={{ textAlign: 'center', color: 'black' }}>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className={expanded === index ? 'expanded' : ''}>
            <h3 onClick={() => toggleExpand(index)} style={{ cursor: 'pointer' }}>
              {project.title}
            </h3>
            <div className="project-details" style={{overflow: 'auto'}}>
              <p>{project.description}</p>
              <p>Link:</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.link}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};


export default Projects;
