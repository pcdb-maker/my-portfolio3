import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #d8c3a5; /* Navbar background color */
  display: flex;
  justify-content: space-between; /* Aligns items to the left and right */
  align-items: center;
  padding: 20px 40px;
  z-index: 1000;
  transition: background 0.3s;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f; /* Logo text color */
  margin-right: -500px; /* Adjusted spacing */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; /* Reduced gap between nav links */
  margin-left: 50px; /* Moves nav links closer to the logo */
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
  margin-left: 30px; /* Spacing adjustment */
  margin-right: 100px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; /* Text color */
  background: #e85a4f; /* Restored button color */
  border-radius: 25px; /* Rounded corners */
  box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.4), 0px 0px 14px rgba(0, 0, 0, 0.3); /* Increased shadow */
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    background: #d64545; /* Darker shade on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }
`;

const IconWrapper = styled(DiamondIcon)`
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
      <Logo>Astrid Design</Logo>
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
