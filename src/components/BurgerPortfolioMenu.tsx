import React, { useState } from 'react';
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
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
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

const BurgerLines = styled.div`
  width: 35px;
  height: 4px;
  position: relative;
  }

  &:before {
    top: -10px; /* Space above the middle line */
    right: -5px;
    width:70%;
  
  }

  &:after {
    top: 10px; /* Space below the middle line */
    left: -5px;
    width:70%;
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
  const handleClick = () => {
    setOpen(!open);
  };

  // Effect to monitor the state of the menu and handle scrolling
  useEffect(() => {
    // If menu is open, prevent scrolling
    document.body.style.overflow = open ? 'hidden' : 'auto';

    // Clean up overflow style when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]); // Run this effect every time `open` changes

  // Handle scroll event to show/hide burger menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const showAt = 800;
      setVisible(scrollTop > showAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
