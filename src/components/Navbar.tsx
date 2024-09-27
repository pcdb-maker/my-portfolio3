import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background 0.3s;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4056A1;
  cursor: pointer;
  &:hover {
    color: #D79922;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavLink = styled.li`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #D79922;
  }
`;

const ContactButton = styled.button`
  background-color: #D79922;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
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
