import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe: React.FC = () => {
  return (
    <div
      className="about-me"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center items horizontally in the container
        height: '100vh',
        textAlign: 'center', // Center text inside the container
        margin: 0, // Remove any default margins
        padding: 0, // Remove any default padding
        // paddingLeft: '600px',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Developing this part</h1>
      <p style={{ marginBottom: '20px' }}>
        This section is under development. Please check back later for more information.
      </p>
      <Link to="/myCv/" style={{ textDecoration: 'underline', color: '#3498db' }}>
        Back to CV
      </Link>
    </div>
  );
};

export default AboutMe;
