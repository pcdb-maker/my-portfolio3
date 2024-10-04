import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper for the burger icon
const BurgerWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 560px; 
  right: 30px;
  z-index: 150;
  width: 60px;
  height: 60px;
  background-color: #b73225;
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

const BurgerLines = styled.div<{ open: boolean }>`
  width: 35px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 35px;
    height: 4px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &:before {
    top: ${(props) => (props.open ? '0' : '-10px')};
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:after {
    bottom: ${(props) => (props.open ? '0' : '-10px')};
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 1px;
  right: 0;
  width: 300px;  /* Increased width for larger pop out */
  background-color: #333;
  border-radius: 15px 15px 15px 15px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

// Close button styling
const CloseButton = styled.div`
  font-size: 30px;
  font-family: 'Playfair Display';
  font-decoration: italic;
  color: #e85a4f;
  cursor: pointer;
  align-self: flex-end;
`;

// Internal links with larger, decorative text
const InternalLinks = styled(Link)`
  font-family: 'Playfair Display';
  font-style: italic;
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-top:-1px;
  margin-bottom:-1px;

  
  
  &:hover {
    color: #e85a4f;
  }
`;

// External links with regular styling
const ExternalLinks = styled.a`
  font-size: 15px;
  color: white;
  text-decoration: none;
  

  &:hover {
    color: #e85a4f;
  }
`;

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    document.body.style.overflow = open ? 'auto' : 'hidden'; // Prevent scrolling when the menu is open
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const showAt = 800; // Adjust this value to control when the menu appears
      setVisible(scrollTop > showAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BurgerWrapper onClick={handleClick} visible={visible && !open}>
        <BurgerLines open={open} />
      </BurgerWrapper>

      <Sidebar open={open}>
        <CloseButton onClick={handleClick}> X </CloseButton>
        {/* Internal Links */}
        <InternalLinks to="/portfolio">Portfolio</InternalLinks>
        <InternalLinks to="/services">Services</InternalLinks>
        <InternalLinks to="/about">About</InternalLinks>
        {/* External Links */}
        <ExternalLinks href="https://instagram.com" target="_blank">Instagram</ExternalLinks>
        <ExternalLinks href="https://behance.net" target="_blank">Behance</ExternalLinks>
        <ExternalLinks href="https://linkedin.com" target="_blank">LinkedIn</ExternalLinks>
      </Sidebar>
    </>
  );
};

export default BurgerMenu;
