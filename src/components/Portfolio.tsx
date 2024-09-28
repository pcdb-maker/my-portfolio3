import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header component

// Container for the entire portfolio section
const PortfolioSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 2px; /* Adjust padding as needed */
  background-color: #EFE2BA; /* Background color */
  overflow: hidden; /* Prevent overflow issues */
  position: relative; /* Allow absolute positioning inside */
  min-height: 320vh; /* Increase section height to prevent overlap */
  z-index: 0; /* Ensures correct stacking context */
`;

// Card Container with Parallax and Sizing Styles
const ProjectCard = styled(motion.div)<{ large?: boolean }>`
  width: ${(props) => (props.large ? '600px' : '400px')};
  height: ${(props) => (props.large ? '550px' : '400px')};
  background: #fff;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  z-index: 1; /* Ensure cards appear above the background */
`;

// Parallax Image inside the Card
const ParallaxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Portfolio: React.FC = () => {
  // Capture scroll position using useScroll
  const { scrollYProgress } = useScroll();

    // Map the scroll position to the Y-axis of the cards
    const y1 = useTransform(scrollYProgress, [0, 1], [10, 100]); // Adjust [0, 200] for desired movement
    const y2 = useTransform(scrollYProgress, [0, 1], [200, 5]);
    const y3 = useTransform(scrollYProgress, [0, 1], [200, 10]);
    const y4 = useTransform(scrollYProgress, [0, 1], [10, 100]);
    const y5 = useTransform(scrollYProgress, [0, 1], [100, 10]);
    const y6 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  

  return (
    <>
      <Header /> {/* Include the Header component at the top */}
      <PortfolioSection id="portfolio">
        {/* First Card */}
        <ProjectCard
          large={true}
          style={{ y: y1 }} // Applying the y1 transform value
        >
          <Link to="/project1">
            <ParallaxImage
              src="https://static.wixstatic.com/media/36e847_d60ecc5b5ba446d5a03ab4521b3409d9~mv2.webp"
              alt="project1"
            />
          </Link>
        </ProjectCard>
        
        {/* Second Card */}
        <ProjectCard
          large={false}
          style={{ y: y2 }} // Applying the y2 transform value
        >
          <Link to="/project2">
            <ParallaxImage
              src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp"
              alt="project2"
            />
          </Link>
        </ProjectCard>

 {/* Third Card */}
 <ProjectCard
          large={false}
          style={{ y: y3 }} // Applying the y3 transform value
        >
          <Link to="/project2">
            <ParallaxImage
              src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp"
              alt="project2"
            />
          </Link>
        </ProjectCard>

        {/* Forth Card */}
  );
};

export default Portfolio;
