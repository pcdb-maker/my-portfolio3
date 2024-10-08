import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const BurgerWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 30px; // Adjust this value to move it higher up on the page
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

const IconWrapper = styled(ClubIcon)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  transition: transform 0.3s ease;

  ${ContactButton}:hover & {
    transform: rotate(360deg);
  }
`;

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: #e85a4f;

  @media (max-width: 768px) {
    display: block; /* Show burger icon on smaller screens */
  }
`;

const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

const BurgerMenuLinks = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }

  a:hover {
    color: #d79922; /* Highlighted color on hover */
  }
`;

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
