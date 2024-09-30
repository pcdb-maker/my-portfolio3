import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // For navigation between pages

// Main container for the project page
const ProjectContainer = styled.div`
  padding: 50px;
  background: #f4f4f9;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #EFE2BA; /* Background color matching the portfolio section */
`;

// Project title styling
const ProjectTitle = styled.h1`
  font-size: 3rem;
  color: #4056A1;
  margin-bottom: 30px;
`;

// Project image
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

// Text block
const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
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
      <p>Details about Project 1...</p>
      {/* Add more content, images, and animations here */}
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
