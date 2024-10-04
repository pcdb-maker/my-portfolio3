import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Original Navbar
import ProjectNavBar from './components/ProjectNavBar'; // Custom Navbar for project pages
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Footer from './components/Footer'; // Import Footer

// Function to conditionally render the correct navbar
const NavbarSelector: React.FC = () => {
  const location = useLocation();

  // List of paths where the ProjectNavBar should be shown
  const projectPaths = ['/project1', '/project2'];

  // Conditionally return ProjectNavBar for project pages, otherwise return the standard Navbar
  if (projectPaths.includes(location.pathname)) {
    return <ProjectNavBar />;
  }

  return <Navbar />;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Conditional rendering of the navbar */}
      <NavbarSelector />
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