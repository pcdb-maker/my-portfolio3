import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import './index.css';  // Ensure your global styles are imported

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
    </>
  );
};

export default App;
