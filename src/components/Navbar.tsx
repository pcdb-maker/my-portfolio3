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
  padding: 30px 40px;
  z-index: 100;
  transition: background 0.3s;
  
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f; /* Logo text color */
  margin-right: -500px; /* Adjusted spacing */
  overflow: hidden;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; /* Reduced gap between nav links */
  margin-left: 50px; /* Moves nav links closer to the logo */
  overflow: hidden;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #e85a4f;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline; /* Underline on hover */
    overflow: hidden;
  }
`;

const ContactButton = styled.a`
 
  align-items: center;
  justify-content: center;
  margin-left: 10px; /* Spacing adjustment */
  margin-right: 90px;
  padding: 10px 40px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; /* Text color */
  background: #e85a4f; /* Restored button color */
  border-radius: 25px; /* Rounded corners */
  box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.4), 0px 0px 14px rgba(0, 0, 0, 0.3); /* Initial shadow */
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    background: #d64545; /* Darker shade on hover */
    transform: translateY(3px); /* Slight downward movement */
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2); /* Reduced shadow to show 'pressed' effect */
    overflow: hidden;
  }

  &:active {
    transform: translateY(5px); /* Further downward movement on click */
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Even more reduced shadow on click */
    overflow: hidden;
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
        <NavLink to="portfolio" smooth={true} duration={500}>
          Portfolio
        </NavLink>
        <NavLink to="services" smooth={true} duration={500}>
          Services
        </NavLink>
        <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
      </NavLinks>
      <ContactButton href="#contact">
        Contact me
        <IconWrapper /> {/* Diamond SVG icon next to text */}
      </ContactButton>
    </NavbarContainer>
  );
};

export default Navbar;
