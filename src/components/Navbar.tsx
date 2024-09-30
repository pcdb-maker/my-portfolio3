import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const NavbarContainer = styled.nav`
  
  top: 0;
  width: 100%;
  margin: 0;
  background: #d8c3a5; /* Navbar background color */
  display: flex;
  justify-content: space-between; /* Aligns items to the left and right */
  align-items: center;
  padding: 20px 40px; /* Adjust padding as needed */
  z-index: 1000; /* Ensures the navbar is always above other elements */
  transition: background 0.3s;
  overflow: hidden; /* Prevent overflow */
  box-sizing: border-box; /* Include padding and border in element width/height */
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f; /* Logo text color */
  overflow: hidden; /* Prevents overflow */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px; /* Reduced gap between nav links */
  margin-left: -300px; /* Moves nav links closer to the logo */
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #e85a4f;
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
  color: #ffffff; /* Text color */
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
  return (
    <NavbarContainer>
      <Logo>Chloe Osborne <IconWrapper/> </Logo>
      <NavLinks>
        <NavLink to="header" smooth={true} duration={200}>
          Portfolio
        </NavLink>
        <NavLink to="services" smooth={true} duration={200}>
          Services
        </NavLink>
        <NavLink to="about" smooth={true} duration={200}>
          About
        </NavLink>
      </NavLinks>
      <ContactButton href="contact">
        Contact me
        <IconWrapper /> 
      </ContactButton>
    </NavbarContainer>
  );
};

