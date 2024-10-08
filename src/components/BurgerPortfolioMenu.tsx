import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper for the burger icon
const BurgerWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 30px; // Adjust this value to move it higher up on the page
  right: 30px; // Adjust this value to ensure it’s aligned properly on the right
  z-index: 150;
  width: 60px;
  height: 60px;
  background-color: #E6584F;
  border-radius: 15px;
const NavbarContainer = styled.nav`
  top: 0;
  width: 100%;
  margin: 0;
  background: #d8c3a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 1000;
  transition: background 0.3s;
  overflow: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjust padding for smaller screens */
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: none; /* Hide the links for smaller screens */
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #e85a4f;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: #e85a4f;
  border-radius: 25px;
  box-shadow: 10px 6px 14px rgba(0, 0, 0, 0.4), -1px 5px 3px rgba(0, 0, 0, 20);
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background: #d64545;
    transform: translateY(3px);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 5px 15px; /* Smaller padding for mobile */
    font-size: 14px; /* Smaller font size for mobile */
  }
`;


const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 1px;
  right: 0;
  height: 430px;
  width: 300px; 
  background-color: #333;
  border-radius: 15px 15px 15px 15px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

const CloseButton = styled.div`
  font-size: 40px;
  font-family: 'Playfair Display';
  color: #e85a4f;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 40px;
  margin-right: 50px;
`;

const InternalLinks = styled(Link)`
  font-family: 'Playfair Display';
  font-style: italic;
  font-size: 55px;
  color: white;
  text-decoration: none;
  margin-top: 10px; // Adjust these margins to reduce space
  margin-bottom: 10px;

  &:hover {
    color: #e85a4f;
  }
`;

const ExternalLinks = styled.a`
  font-size: 15px;
  color: white;
  text-decoration: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 25px;
  
  &:hover {
    color: #e85a4f;
  }
`;

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle click event to toggle menu
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #e85a4f;
  cursor: pointer;
`;

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>Chloe Osborne <IconWrapper /></Logo>
        <NavLinks>
          <NavLink to="header" smooth={true} duration={200}>Portfolio</NavLink>
          <NavLink to="services" smooth={true} duration={200}>Services</NavLink>
          <NavLink to="about" smooth={true} duration={200}>About</NavLink>
        </NavLinks>
        <ContactButton href="contact">Contact me<IconWrapper /></ContactButton>
        <BurgerIcon onClick={toggleBurgerMenu}>☰</BurgerIcon>
      </NavbarContainer>

      {/* Burger Menu */}
      <BurgerMenuContainer isOpen={isBurgerOpen}>
        <CloseButton onClick={toggleBurgerMenu}>X</CloseButton>
        <BurgerMenuLinks>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </BurgerMenuLinks>
        <BurgerMenuLinks>
          <a href="#instagram">Instagram</a>
          <a href="#behance">Behance</a>
          <a href="#linkedin">LinkedIn</a>
        </BurgerMenuLinks>
      </BurgerMenuContainer>
    </>
  );
};

export default Navbar;
