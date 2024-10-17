import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ReactComponent as CircleIcon } from '../assets/circle.svg';
import { ReactComponent as DiamondIcon } from '../assets/diamond.svg';
import { ReactComponent as ClubIcon } from '../assets/club.svg';
import { SVGProps } from 'react';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #d8c3a5;
  text-align: center;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
      
  }
`;

const HeroText = styled(motion.div)`
  font-size: 180px;
  font-weight: 800;
  color: #e85a4f;
  margin-top: -100px;
  z-index: 2;
  display: flex;
  letter-spacing: -10px;

   @media (max-width: 768px) {
       font-size: 70px;
       letter-spacing: -4px;
       margin-bottom: 20px;
  }
`;


const SubText = styled(motion.p)`
  font-size: 22px;
  font-weight: 300;
  color: #e85a4f;
  margin-top: 1px;
  max-width: 600px;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 26px;
     margin-bottom: 20px;
  }
`;

const DesignerText = styled(motion.span)`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  color: #e85a4f;
  margin-top: 10px;
  margin-bottom: 50px; /* Adjust this value */
  @media (max-width: 768px) {
    font-size: 28px;
     margin-bottom: 20px;
  }
`;

const IconWrapper = styled(motion.div)<SVGProps<SVGSVGElement>>`
  position: absolute;
  fill: #e85a4f;
  opacity: 0.4;
  z-index: 1;

  /* Media query for icons on smaller screens */
  @media (max-width: 768px) {
    width: 70px !important; /* Resize icons */
    height: 70px !important; /* Resize icons */
    top: 90%; /* Adjust position if necessary */
    left: 90%; /* Adjust position if necessary */
    opacity: 0.2; /* Optional adjustment for visibility */
  }
`;


// Updated Arrow Component with hover animation
const Arrow = styled(motion.div)`
  position: absolute;
  margin-bottom: -300px;
  left: 50%;
  transform: translateY(0%); /* Original Y-axis position */
  font-size: 62px;
  color: #e85a4f;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s ease, color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 80px;
    margin-top: 10px;
    margin-left: -20px;
    
  }

  /* Hover effect */
  &:hover {
    color: #b73225;
    transform: translateY(15px); /* Moves the arrow down by 15px on hover */
    @media (max-width: 768px) {
    none;
  }


  /* Returns to original position when hover ends */
  &:not(:hover) {
    transform: translateY(0%); /* Returns to original Y-axis position */
  }

  /* Click effect */
  &:active {
    transform: translateY(20px); /* Moves down slightly on click */
  }
`;

const scrollToPortfolioSection = () => {
  const portfolioSection = document.getElementById('portfolioHeader');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const icons = [
  { Component: ClubIcon, initialX: 20, initialY: 80, size: 50 },
  { Component: ClubIcon, initialX: 10, initialY: 10, size: 170 },
  { Component: ClubIcon, initialX: 80, initialY: 60, size: 200 },
  { Component: DiamondIcon, initialX: 35, initialY: 75, size: 30 },
  { Component: DiamondIcon, initialX: 80, initialY: 30, size: 65 },
  { Component: DiamondIcon, initialX: 5, initialY: 70, size: 100 },
  { Component: CircleIcon, initialX: 90, initialY: 10, size: 100 },

];


const greetings = ["Hello!", "こんにちは!", "¡Hola!", "Ciao!"];

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1.1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -10,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const containerVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.04 } },
};

const Hero: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateMovement = (initialX: number, initialY: number) => ({
    x: (mousePosition.x / window.innerWidth) * 20 - initialX,
    y: (mousePosition.y / window.innerHeight) * 20 - initialY,
  });

  return (
    <HeroSection>
      {icons.map(({ Component, initialX, initialY, size }, index) => (
        <IconWrapper
          as={Component}
          key={index}
          style={{
            top: `${initialY}%`,
            left: `${initialX}%`,
            width: `${size}px`,
            height: `${size}px`,
            transform: `translate(${calculateMovement(initialX, initialY).x}px, ${calculateMovement(initialX, initialY).y}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.5 }}
        />
      ))}
      <HeroText
        key={currentGreeting}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {greetings[currentGreeting].split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ color: "#b73225" }}
            style={{
              display: 'inline-block',
              margin: '0 0px',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </HeroText>
      <SubText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        I'm Chloe Osborne,
        <DesignerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Web Developer & Digital Artist.
        </DesignerText>
      </SubText>
      <Arrow
        onClick={scrollToPortfolioSection}
        whileHover={{ transform: 'translateY(15px)' }} // Moves the arrow down by 15px on hover
        whileTap={{ transform: 'translateY(20px)' }} // Moves down slightly on click
      >
        ↓
      </Arrow>
    </HeroSection>
  );
};

export default Hero;
