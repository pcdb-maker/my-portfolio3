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
`;

const Project1: React.FC = () => {
  return (
    <ProjectContainer>
      <h1>Project 1 Title</h1>
      <p>Details about Project 1...</p>
      {/* Add more content, images, and animations here */}
    </ProjectContainer>
  );
};

export default Project1;
