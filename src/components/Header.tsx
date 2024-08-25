import React, { useState, useEffect } from 'react';

// const greetings = ["Hi! I'm Sergio", "Hola! Soy Sergio", "Hoi! Ik ben Sergio"];
const greetings = ["Hi! I'm Sergio"];

const Header: React.FC = () => {
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1 key={greeting} className="greeting">
        {greeting}
      </h1>
      <p>I'm an MSc Artificial Intelligence graduate from Vrije Universiteit Amsterdam with a background in Economics from Universiteit van Amsterdam. I have experience in research, software development, data analysis, and product management, and I'm passionate about using technology to drive innovation and solve real-world problems.</p>
    </header>
  );
};

export default Header;
