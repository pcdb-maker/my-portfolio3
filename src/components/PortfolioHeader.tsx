// PortolioHeader.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #EFE2BA;
  font-family: 'Poppins', sans-serif;
  z-index: 10;
`;

const MainHeading = styled.h1`
  font-size: 80px; /* Large font size for main heading */
  color: #e85a4f;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
  font-size: 40px;
   
`;

const Fancy = styled.h1`
  font-size: 80px; /* Large font size for main heading */
  color: #4056A1;
  font-weight: 700;
  font-style: italic;
   font-family: 'Playfair Display', sans-serif;
  margin: 0;

    @media (max-width: 768px) {
  font-size: 40px;
 
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: #000000;
  align: center;
  margin: 10px 0 0;

   @media (max-width: 768px) {
  font-size: 15px;
 
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer id='portfolioHeader'>
      <MainHeading>Selected</MainHeading><Fancy>Works.</Fancy> 
      <SubHeading>✦ Take a look at some of my projects ✦</SubHeading>
      <SubHeading>This portfolio features a showcase of my recent projects and creative endeavors.</SubHeading>
      <SubHeading>Click on the cards for live demos, repositories
 and an explanation of the design process.</SubHeading>
    </HeaderContainer>

  );
};

export default Header;

