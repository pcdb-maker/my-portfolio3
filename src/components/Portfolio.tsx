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

  &:hover {
    transform: scale(1.05);
  }
`;



const Portfolio: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <PortfolioSection ref={ref}>
      <ProjectCard
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Project 1</h3>
      </ProjectCard>
      <ProjectCard
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3>Project 2</h3>
      </ProjectCard>
    </PortfolioSection>
  );
};

export default Portfolio;
