import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  padding: 50px;
  background: #f4f4f9;
  text-align: center;
`;

const Project2: React.FC = () => {
  return (
    <ProjectContainer>
      <h1>Project 2 Title</h1>
      <p>Details about Project 2...</p>
      {/* Add more content, images, and animations here */}
    </ProjectContainer>
  );
};

export default Project2;
