import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Main container for the project page
const ProjectContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #EFE2BA; /* Same background color as Portfolio */
`;

// Project title styling with animation
const ProjectTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-top: -12px;
  font-family: 'Playfair Display', serif;
  margin-left: 10px;
  color: #000000;
  margin-bottom: 30px;
`;

// Project image styling (first large image)
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1150px; /* Ensure the image is wide enough */
  height: 647px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

  color: #333;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

// Back button to portfolio
const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: #F13C20;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #D64545;
  }
`;

// Button to link to the live project
const LiveProjectButton = styled.a`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: #4056A1;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: #32478B;
  }
`;

const Project1: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project 1 Title</ProjectTitle>
      <ProjectImage src="https://static.wixstatic.com/media/36e847_d60ecc5b5ba446d5a03ab4521b3409d9~mv2.webp" alt="Project 1 Image" />
      <ProjectDescription>
        This is a brief description of Project 1. It outlines the key objectives, tools used, and the overall approach taken in completing this project.
      </ProjectDescription>

      {/* Buttons to go back to portfolio or view the live project */}
      <BackButton to="/portfolio">Back to Portfolio</BackButton>
      <LiveProjectButton href="https://www.example.com" target="_blank">View Live Project</LiveProjectButton>
    </ProjectContainer>
  );
};

export default Project1;
