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
  padding: 50px 0;
  background-color: #EFE2BA;
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
  height: 400px;
  background: #fff;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
