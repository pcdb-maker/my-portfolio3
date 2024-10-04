// PortolioHeader.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #EFE2BA;
  font-family: 'Poppins', sans-serif;
`;

const MainHeading = styled.h1`
  font-size: 80px; /* Large font size for main heading */
  color: #e85a4f;
  font-weight: 700;
  margin: 0;
`;

const Fancy = styled.h1`
  font-size: 80px; /* Large font size for main heading */
  color: #4056A1;
  font-weight: 700;
  font-style: italic;
   font-family: 'Playfair Display', sans-serif;
  margin: 0;
 
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: #000000;
  align: center;
  margin: 10px 0 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer id='header'>
      <MainHeading>Selected Works</MainHeading>
      <SubHeading>A showcase of my recent projects and creative endeavors.</SubHeading>
    </HeaderContainer>

  );
};

export default Header;
