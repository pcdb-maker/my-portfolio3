import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const ProjectNavbarContainer = styled.nav`
  top: 0;
  width: 100%;
  margin: 0;
  background: #edf1ff;
  display: flex;
  justify-content: space-between; /* Aligns items to the left and right */
  align-items: center;
  padding: 20px 40px; /* Adjust padding as needed */
  z-index: 1000; /* Ensures the navbar is always above other elements */
  transition: background 0.3s;
  overflow: hidden; /* Prevent overflow */
  box-sizing: border-box; /* Include padding and border in element width/height */

  /* Adding the underline with a pseudo-element */
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%; /* Center the underline horizontally */
    transform: translateX(-50%);
    width: 1100px; /* Set your preferred underline length */
    border-bottom: 1.5px solid black; /* The underline */
  }
`;


const ProjectLogo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black; /* Changed logo text color to black */
  overflow: hidden; /* Prevents overflow */
  cursor: pointer; /* Cursor pointer for logo */
`;

const ProjectNavLinks = styled.div`
  display: flex;
  gap: 40px; /* Reduced gap between nav links */
  margin-left: -300px; /* Moves nav links closer to the logo */
`;

const ProjectNavLink = styled(Link)`
  font-size: 16px;
  color: black; /* Changed link text to black */
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px; /* Adjust spacing as needed */
  padding: 10px 30px; /* Button padding */
  font-size: 16px;
  font-weight: bold;
  color: #000000; /* Text color */
  background: #e85a4f; /* Button background color */
  border-radius: 25px; /* Rounded corners */
  box-shadow: 10px 6px 14px rgba(0, 0, 0, 0.4), -1px 5px 3px rgba(0, 0, 0, 20); /* Initial shadow */
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background: #d64545; /* Darker shade on hover */
    transform: translateY(3px); /* Slight downward movement */
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2); /* Reduced shadow to show 'pressed' effect */
  }

  &:active {
    transform: translateY(5px); /* Further downward movement on click */
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Even more reduced shadow on click */
  }
`;

const IconWrapper = styled(ClubIcon)`
  width: 16px; /* Smaller icon size */
  height: 16px;
  margin-left: 8px; /* Spacing between text and icon */
  transition: transform 0.3s ease;

  /* Spin animation on hover */
  ${ContactButton}:hover & {
    transform: rotate(360deg);
  }
`;

const Navbar: React.FC = () => {
  const handleLogoClick = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <ProjectNavbarContainer>
      <ProjectLogo onClick={handleLogoClick}>Chloe Osborne <IconWrapper/> </ProjectLogo>
      <ProjectNavLinks>
        <ProjectNavLink to="PortfolioHeader" smooth={true} duration={200}>
          Portfolio
        </ProjectNavLink>
        <ProjectNavLink to="services" smooth={true} duration={200}>
          Services
        </ProjectNavLink>
        <ProjectNavLink to="about" smooth={true} duration={200}>
          About
          </ProjectNavLink>
        </ProjectNavLinks>
      <ContactButton href="contact">
        Contact me
        <IconWrapper /> 
      </ContactButton>
    </ProjectNavbarContainer>
  );
};

export default Navbar;
