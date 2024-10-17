import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ClubIcon } from '../assets/club.svg';

// Navbar styling remains unchanged
const NavbarContainer = styled.nav<{ open: boolean }>`
  top: 0;
  width: 100%;
  margin: 0;
  background: #d8c3a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: ${({ open }) => (open ? '100' : '0')};
  transition: background 0.3s, z-index 0.3s ease;
  box-sizing: border-box;
  border-bottom: none;

  @media (max-width: 1100px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #e85a4f; /* Correct color as per original design */
  margin-right: -250px;
  cursor: pointer;
   text-decoration: none !important; /* Force no underline */
  

  @media (max-width: 1100px) {
    font-size: 16px;
    margin-right: -10px;
     text-decoration: none !important; /* Force no underline */
    
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const NavLink = styled(RouterLink)`
  font-size: 16px;
  color: #e85a4f; /* Correct color as per design */
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #d64545; /* Color on hover */
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
  }
`;

const IconWrapper = styled(ClubIcon)`
  width: 16px;
  height: 16px;
  margin-left: 0px;
  transition: transform 0.3s ease;
  margin-left: 8px;
   text-decoration: none !important; /* Force no underline */
  

  ${ContactButton}:hover & {
    transform: rotate(360deg);
  }

  @media (max-width: 1100px) {
    margin-left: 4px;
  }
`;

const IconWrapperLogo = styled(ClubIcon)`
  width: 16px;
  height: 16px;
  margin-left: -10px;
  transition: transform 0.3s ease;
`;

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 40px;
  color: #e85a4f;

  @media (max-width: 1100px) {
    display: block;
    padding-left: 50px;
  }
`;

const BurgerWrapper = styled.div<{ visible: boolean; open: boolean }>`
  position: fixed;
  top: 15%;
  right: 70px;
  z-index: ${({ visible, open }) => (visible && !open ? '150' : open ? '200' : '0')};
  width: 30px;
  height: 30px;
  background-color: #e6584f;
  border-radius: 7.5px;
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

  @media (max-width: 1100px) {
    right: 45px;
  }
`;

const BurgerLines = styled.div`
  width: 17.5px !important;
  height: 2px !important;
  background-color: white !important;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 50% !important;
    height: 2px !important;
    background-color: white !important;
    transition: all 0.3s ease-in-out;
  }

  &:before {
    top: -10px !important;
    width: 70% !important;
    left: 0;
  }

  &:after {
    top: 10px !important;
    width: 70% !important;
    right: 0;
  }
`;

const Sidebar = styled.div<{ open: boolean; topMenuActive: boolean; burgerPosition: number | null }>`
  position: fixed;
  top: ${({ topMenuActive, burgerPosition }) => (topMenuActive ? '60px' : burgerPosition ? `${burgerPosition}px` : 'auto')};
  right: ${({ open }) => (open ? '90px' : '-300px')};
  height: 360px;
  width: 250px;
  background-color: #333;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  z-index: ${({ open }) => (open ? '300' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
  cursor: pointer;

  @media (max-width: 1100px) {
    right: ${({ open }) => (open ? '45px' : '-300px')};
  }
`;

const CloseButton = styled.div`
  font-size: 25px;
  font-family: 'Playfair Display';
  color: #e85a4f; /* Correct button color */
  cursor: pointer;
  align-self: flex-end;
  margin-top: 6px;
  margin-right: 10px;
`;

const InternalLinks = styled(RouterLink)`
  font-family: 'Playfair Display';
  font-style: italic;
  font-size: 30px !important; /* Ensure font size is consistent */
  color: white !important; /* Force white color */
  text-decoration: none !important;
  padding: 2px 0 !important; /* Consistent padding */
  margin-left: 10px;
  align-self: flex-start;
  
  &:hover {
    color: #e85a4f !important; /* Force hover color */
  }

  /* Ensuring that the 'Home' link has the same styles consistently */
  &.home-link {
    font-size: 10px !important;
    color: white !important;
    padding: 10px 0 !important;
    margin-left: 10px;
    text-decoration: none !important;
  }
`;

const RouterInternalLinks = styled(InternalLinks)`
  color: white !important; /* Ensures correct styling of links */
  padding: 10px 0 !important; /* Consistent padding */
  text-decoration: none !important; /* Force no underline */
  
  &:hover {
    color: #e85a4f !important;
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

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/'; // Check if on the homepage

  const toggleBurgerMenu = (fromNavbar: boolean) => {
    setOpen(!open);
    setTopMenuActive(fromNavbar);
  };

  const handleScrollBurgerClick = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTop();
        setOpen(false);
      }, 100);
    } else {
      scrollToTop();
      setOpen(false);
    }
  };

  return (
    <>
      <NavbarContainer open={open}>
{isHomePage ? (
  <a href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }} style={{ textDecoration: 'none' }}>
    <Logo>
      <IconWrapperLogo /> Chloe Osborne Designs
    </Logo>
  </a>
) : (
  <RouterLink to="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>
    <Logo>
      <IconWrapperLogo /> Chloe Osborne Designs
    </Logo>
  </RouterLink>
)}

        <NavLinks>
          {isHomePage ? (
            <>
              <NavLink to="/#portfolioHeader">Portfolio</NavLink>
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/#skills">Skills</NavLink>
              <NavLink to="/#about">About</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/#portfolioHeader">Portfolio</NavLink>
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/#skills">Skills</NavLink>
              <NavLink to="/#about">About</NavLink>
            </>
          )}
        </NavLinks>

        <ContactButton href="mailto:chloeprofessionaldevelopment@outlook.com">
          CONTACT ME
          <IconWrapper />
        </ContactButton>
        <BurgerIcon onClick={() => toggleBurgerMenu(true)}>☰</BurgerIcon>
      </NavbarContainer>

      <BurgerWrapper onClick={handleScrollBurgerClick} visible={visible && !open} open={open}>
        <BurgerLines />
      </BurgerWrapper>

      <Sidebar open={open} topMenuActive={topMenuActive} burgerPosition={burgerPosition}>
  <CloseButton onClick={() => toggleBurgerMenu(topMenuActive)}> X </CloseButton>
  {isHomePage ? (
    <>
      <InternalLinks 
        className="home-link-homepage"  /* Add a specific class to target the homepage 'Home' link */
        to="/" 
        onClick={(e) => { e.preventDefault(); scrollToTop(); setOpen(false); }}>
        Home
      </InternalLinks>
      <InternalLinks to="/#portfolioHeader">Portfolio</InternalLinks>
      <InternalLinks to="/#services">Services</InternalLinks>
      <InternalLinks to="/#skills">Skills</InternalLinks>
      <InternalLinks to="/#about">About</InternalLinks>
    </>
  ) : (
    <>
      <RouterInternalLinks 
        className="home-link-others" /* Add a specific class to target the 'Home' link on other pages */
        to="/" 
        onClick={handleHomeClick}>
        Home
      </RouterInternalLinks>
      <RouterInternalLinks to="/#portfolioHeader">Portfolio</RouterInternalLinks>
      <RouterInternalLinks to="/#services">Services</RouterInternalLinks>
      <RouterInternalLinks to="/#skills">Skills</RouterInternalLinks>
      <RouterInternalLinks to="/#about">About</RouterInternalLinks>
    </>
  )}
  <div>
    <ExternalLinks href="https://instagram.com" target="_blank">
      Instagram
    </ExternalLinks>
    <ExternalLinks href="https://behance.net" target="_blank">
      Behance
    </ExternalLinks>
    <ExternalLinks href="https://linkedin.com" target="_blank">
      LinkedIn
    </ExternalLinks>
  </div>
</Sidebar>

    </>
  );
};

export default Navbar;
