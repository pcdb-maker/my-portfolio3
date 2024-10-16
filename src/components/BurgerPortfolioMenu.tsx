import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper for the burger icon
const BurgerWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 500px; // Adjust this value to move it higher up on the page
  right: 30px; // Adjust this value to ensure it’s aligned properly on the right
  z-index: 150;
  width: 60px;
  height: 60px;
  background-color: #E6584F;
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

  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: #e85a4f;
  border-radius: 25px;
  box-shadow: 10px 6px 14px rgba(0, 0, 0, 0.4), -1px 5px 3px rgba(0, 0, 0, 20);
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;
const BurgerLines = styled.div`
  height: 4px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;  /* Ensures all lines, including pseudo-elements, are the same width */
    height: 4px;
    background-color: white;
  }

  &:before {
    top: -10px; /* Space above the middle line */
    right: -5px;
    width:70%;
  
  }

  &:after {
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
      const showAt = 100;
      setVisible(scrollTop > showAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BurgerWrapper onClick={handleClick} visible={visible && !open}>
        <BurgerLines />
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
