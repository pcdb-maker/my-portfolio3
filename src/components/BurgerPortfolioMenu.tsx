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

const BurgerLines = styled.div`
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
    width: 100%;  /* Ensures all lines, including pseudo-elements, are the same width */
    height: 4px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
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
