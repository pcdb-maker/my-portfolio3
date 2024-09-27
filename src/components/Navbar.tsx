import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #d8c3a5; /* Updated background color */
  display: flex;
  justify-content: flex-start; /* Aligns items to the left */
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: relative; /* Changed from fixed to relative */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e85a4f; /* Updated text color */
  cursor: pointer;
  margin-right: 30px; /* Spacing between logo and links */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px; /* Space between links */
`;

const NavLink = styled.li`
  cursor: pointer;
  font-size: 18px;
  color: #e85a4f; /* Text color */
  transition: all 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const ContactButton = styled.button`
  background-color: #e85a4f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: auto; /* Push the button to the right */
  transition: background 0.3s ease;

  &:hover {
    background-color: #F13C20;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Astrid Design</Logo>
      <NavLinks>
        <NavLink><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></NavLink>
        <NavLink><Link to="services" smooth={true} duration={500}>Services</Link></NavLink>
        <NavLink><Link to="about" smooth={true} duration={500}>About</Link></NavLink>
      </NavLinks>
      <ContactButton>Contact me</ContactButton>
    </NavbarContainer>
  );
};

export default Navbar;
