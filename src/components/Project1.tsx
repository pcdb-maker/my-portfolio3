import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // For navigation between pages

// Main container for the project page
const ProjectContainer = styled.div`
  padding: 50px;
  background: #f4f4f9;
  text-align: center;
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
