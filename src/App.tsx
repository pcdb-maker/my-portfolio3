import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Project1 from './components/Project1'; // Import new project components
import Project2 from './components/Project2';
import './index.css'; // Ensure your global styles are imported

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will remain consistent across all pages */}
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Portfolio />
          <Services />
          <About />
        </>} />
        <Route path="/project1" element={<Project1 />} /> {/* Project 1 page */}
        <Route path="/project2" element={<Project2 />} /> {/* Project 2 page */}
      </Routes>
    </Router>
  );
};

export default App;
