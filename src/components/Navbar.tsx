import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as ClubIcon } from '../assets/club.svg'; // Import Diamond SVG

const NavbarContainer = styled.nav`
  top: 0;
  width: 100%;
  background: #d8c3a5; /* Navbar background color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 1000; /* Ensures the navbar is always above other elements */
  transition: background 0.3s ease;
  position: relative;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f;
`;

const NavLinks = styled.div<{ open: boolean }>`
  display: flex;
  gap: 40px;
  margin-left: -300px;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')}; /* Hide links on mobile unless menu is open */
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 200px;
    height: auto;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
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
  margin-left: 20px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: #e85a4f;
  border-radius: 25px;
  box-shadow: 10px 6px 14px rgba(0, 0, 0, 0.4), -1px 5px 3px rgba(0, 0, 0, 0.2);
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

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; /* Burger menu only visible on mobile */
  }
`;

const BurgerLine = styled.div`
  height: 3px;
  background-color: #e85a4f;
  border-radius: 5px;
`;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <NavbarContainer>
      <Logo>Chloe Osborne <IconWrapper /> </Logo>

      {/* Burger menu for mobile */}
      <BurgerMenu onClick={toggleMenu}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerMenu>

      <NavLinks open={open}>
        <NavLink to="header" smooth={true} duration={200}>
          Portfolio
        </NavLink>
        <NavLink to="services" smooth={true} duration={200}>
          Services
        </NavLink>
        <NavLink to="about" smooth={true} duration={200}>
          About
        </NavLink>
      </NavLinks>

      <ContactButton href="contact">
        Contact me
        <IconWrapper />
      </ContactButton>
    </NavbarContainer>
    </>
  );
};

export default Navbar;
