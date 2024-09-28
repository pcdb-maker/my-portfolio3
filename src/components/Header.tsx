// Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #f7f3e9; /* Header background color */
  font-family: 'Poppins', sans-serif;
`;

const MainHeading = styled.h1`
  font-size: 48px; /* Large font size for main heading */
  color: #e85a4f;
  font-weight: 700;
  margin: 0;
`;

const SubHeading = styled.p`
  font-size: 24px; /* Smaller font size for subheading */
  color: #4056a1;
  margin: 10px 0 0;
`;

const Header: React.FC = () => {
