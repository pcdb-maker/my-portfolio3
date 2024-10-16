import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Original Navbar
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Footer from './components/Footer'; // Import Footer
import { scroller } from 'react-scroll';

// Function to conditionally render the correct navbar
const NavbarSelector: React.FC = () => {  
  return <Navbar />;
};

// Component to scroll to the correct hash location
const ScrollToHash: React.FC = () => {

  // Conditionally return ProjectNavBar for project pages, otherwise return the standard Navbar
  if (projectPaths.includes(location.pathname)) {
    return <ProjectNavBar />;
  }

  return <Navbar />;
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Conditional rendering of the navbar */}
      <NavbarSelector />
      
      {/* Component to scroll to hash on route change */}
      <ScrollToHash />

      <Routes>
        {/* Main page includes Hero, Portfolio, Services, About, and Footer */}
        <Route path="/" element={<>
          <Hero />
          <Portfolio />
          <Services />
          <Skills /> 
          <About />
          <Footer /> {/* Add Footer at the bottom of the main page */}
        </>} />

        {/* Project 1 page */}
        <Route path="/project1" element={<>
          <Project1 />
          <Footer /> {/* Add Footer to Project1 page */}
        </>} />

        {/* Project 2 page */}
        <Route path="/project2" element={<>
          <Project2 />
          <Footer /> {/* Add Footer to Project2 page */}
        </>} />
      </Routes>
    </Router>
  );
};

export default App;
