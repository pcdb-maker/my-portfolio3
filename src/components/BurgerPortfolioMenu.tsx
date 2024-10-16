import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

  z-index: 150;
  border-radius: 15px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e85a4f;
    transform: scale(1.05);
  }
`;

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
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;  /* Ensures all lines, including pseudo-elements, are the same width */
    height: 4px;
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
      </BurgerWrapper>
      <Sidebar open={open}>
        <CloseButton onClick={handleClick}> X </CloseButton>
        <InternalLinks to="/portfolio">Portfolio</InternalLinks>
        <InternalLinks to="/services">Services</InternalLinks>
        <InternalLinks to="/about">About</InternalLinks>
        <div>
        <ExternalLinks href="https://instagram.com" target="_blank">Instagram</ExternalLinks>
        <ExternalLinks href="https://behance.net" target="_blank">Behance</ExternalLinks>
        <ExternalLinks href="https://linkedin.com" target="_blank">LinkedIn</ExternalLinks>
        </div>
      </Sidebar>
    </>
  );
};

export default BurgerMenu;
