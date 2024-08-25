import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './components/Cv.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/myCv" element={<Home />} /> 
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default App;