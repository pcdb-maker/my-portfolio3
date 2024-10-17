import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ReactComponent as ClubIcon } from '../assets/club.svg';

// Navbar styling

const NavbarContainer = styled.nav<{ open: boolean }>`
  top: 0;
  width: 100%;
  margin: 0;
  background: #d8c3a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: ${({ open }) => (open ? '100' : '0')}; /* Dynamically set z-index */
  transition: background 0.3s, z-index 0.3s ease; /* Smooth transition for z-index */
  box-sizing: border-box;
  border-bottom: none; /* Ensure there's no border under the navbar */

  @media (max-width: 1100px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e85a4f;
  margin-right: -350px;

  @media (max-width: 1100px) {
    font-size: 16px;
    margin-right: -10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 1100px) {
    display: none; /* Hide links on mobile view */
  }
`;

const NavLink = styled(ScrollLink)`
  font-size: 16px;
  color: #e85a4f;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const RouterNavLink = styled(RouterLink)`
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
  padding: 15px 15px;
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

  @media (max-width: 1100px) {
    padding: 6px 16px;
    font-size: 10px;
    margin-right: -45px;
    margin-left: 6px;
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
  font-family: 'Playfair Display';
  color: #e85a4f;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 6px;
  margin-right: 10px;
`;

const InternalLinks = styled(ScrollLink)`
  font-family: 'Playfair Display';
  font-style: italic;
  font-size: 30px;
  color: white;
  text-decoration: none;
  margin-top: -80px;
  margin-bottom: -20px;
  margin-left: 10px;
  align-self: flex-start;

  &:hover {
    color: #e85a4f;
  }
`;

const RouterInternalLinks = styled(RouterLink)`
  font-family: 'Playfair Display';
  font-style: italic;
  font-size: 30px;
  color: white;
  text-decoration: none;
  margin-top: -80px;
  margin-bottom: -20px;
  margin-left: 10px;
  align-self: flex-start;

  &:hover {
    color: #e85a4f;
  }
`;

const ExternalLinks = styled.a`
  font-size: 15px;
  font-family: 'Playfair Display';
  font-style: italic;
  color: white;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 4px;

  &:hover {
    color: #e85a4f;
  }
`;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [topMenuActive, setTopMenuActive] = useState(false);
  const [burgerPosition, setBurgerPosition] = useState<number | null>(null);

  const location = useLocation(); // To get the current pathname

  const isOnePage = location.pathname === '/'; // Assuming '/' is your one-page app route

  const toggleBurgerMenu = (fromNavbar: boolean) => {
    setOpen(!open);
    setTopMenuActive(fromNavbar);
  };

  const handleScrollBurgerClick = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect(); // Get the burger button's position
    setBurgerPosition(rect.top);
    toggleBurgerMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const showAt = 600;
      setVisible(scrollTop > showAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarContainer open={open}>
        <Logo><IconWrapperLogo /> Chloe Osborne </Logo>
        <NavLinks>
          {isOnePage ? (
            <>
              <NavLink to="portfolioHeader" smooth={true} duration={200}>Portfolio</NavLink>
              <NavLink to="services" smooth={true} duration={200}>Services</NavLink>
              <NavLink to="skills" smooth={true} duration={200}>Skills</NavLink>
              <NavLink to="about" smooth={true} duration={200}>About</NavLink>
            </>
          ) : (
            <>
              <RouterNavLink to="/#portfolioHeader">Portfolio</RouterNavLink>
              <RouterNavLink to="/#services">Services</RouterNavLink>
              <RouterNavLink to="/#skills">Skills</RouterNavLink>
              <RouterNavLink to="/#about">About</RouterNavLink>
              <RouterNavLink to="/#portfolioHeader">Portfolio</RouterNavLink>
            </>
          )}
        </NavLinks>
        <ContactButton href="mailto:chloeprofessionaldevelopment@outlook.com">CONTACT ME<IconWrapper /></ContactButton>
        <BurgerIcon onClick={() => toggleBurgerMenu(true)}>☰</BurgerIcon>
      </NavbarContainer>

      <BurgerWrapper onClick={handleScrollBurgerClick} visible={visible && !open} open={open}>
        <BurgerLines />
      </BurgerWrapper>

      <Sidebar open={open} topMenuActive={topMenuActive} burgerPosition={burgerPosition}>
        <CloseButton onClick={() => toggleBurgerMenu(topMenuActive)}> X </CloseButton>
        {isOnePage ? (
          <>
            <InternalLinks to="portfolioHeader" smooth={true} duration={200}>Portfolio</InternalLinks>
            <InternalLinks to="services" smooth={true} duration={200}>Services</InternalLinks>
            <InternalLinks to="skills" smooth={true} duration={200}>Skills</InternalLinks>
            <InternalLinks to="about" smooth={true} duration={200}>About</InternalLinks>
          </>
        ) : (
          <>
            <RouterInternalLinks to="/#portfolioHeader">Portfolio</RouterInternalLinks>
            <RouterInternalLinks to="/#services">Services</RouterInternalLinks>
            <RouterInternalLinks to="/#skills">Skills</RouterInternalLinks>
            <RouterInternalLinks to="/#about">About</RouterInternalLinks>
          </>
        )}
        <div>
          <ExternalLinks href="https://instagram.com" target="_blank">Instagram</ExternalLinks>
          <ExternalLinks href="https://behance.net" target="_blank">Behance</ExternalLinks>
          <ExternalLinks href="https://linkedin.com" target="_blank">LinkedIn</ExternalLinks>
        </div>
      </Sidebar>
    </>
  );
};

export default Navbar;
