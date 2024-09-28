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
`;

const HeroText = styled(motion.div)`
  font-size: 180px;
  font-weight: 800;
  color: #e85a4f;
  margin-top: -100px;
  z-index: 2;
  display: flex;
  letter-spacing: -10px; /* Adjusted letter-spacing */
  @media (max-width: 768px) {
    font-size: 130px; /* Responsive font size for smaller screens */
  }
`;

const SubText = styled(motion.p)`
  font-size: 25px; /* Reduced size by 30% */
  color: #e85a4f; /* Text color for the subtext */
  margin-top: 20px;
  max-width: 600px;
  z-index: 2; /* Ensures text is on top of floating icons */
  @media (max-width: 768px) {
    font-size: 20px; /* Responsive font size for smaller screens */
  }
`;

const DesignerText = styled(motion.span)`
  display: block;
  font-family: 'Playfair Display', serif; /* Font family */
  font-size: 34px; /* Reduced size by 30% */
  color: #e85a4f;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 24px; /* Responsive font size for smaller screens */
  }
`;

const IconWrapper = styled(motion.div)<SVGProps<SVGSVGElement>>`
  position: absolute;
  fill: #e85a4f; /* Card icon color */
  opacity: 0.4; /* Makes the icons less prominent */
  z-index: 1; /* Places icons behind the text */
`;

const Arrow = styled(motion.div)`
  position: absolute;
  bottom: 30px; /* Positioned closer to the bottom */
  left: 50%;
  transform: translateX(-50%);
  font-size: 62px; /* Increased size by 30% (48px to 62px) */
  color: #e85a4f;
  cursor: pointer;
  z-index: 2;

  @keyframes jump {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-8px);
    }
  }

  /* Separate animation for when clicked */
  &:active {
    transform: translateX(-50%) scale(1.1); /* Scaling effect without shifting position */
  }
`;


// Scroll function to navigate to the portfolio section
const scrollToPortfolioSection = () => {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const icons = [
  { Component: HeartIcon, initialX: 3, initialY: 20, size: 50 },
  { Component: DiamondIcon, initialX: 93, initialY: 15, size: 50 },
  { Component: ClubIcon, initialX: 92, initialY: 70, size: 50 },
  { Component: HeartIcon, initialX: 20, initialY: 75, size: 20 },
  { Component: DiamondIcon, initialX: 7, initialY: 35, size: 30 },
  { Component: ClubIcon, initialX: 35, initialY: 80, size: 20 },
  { Component: HeartIcon, initialX: 55, initialY: 95, size: 25 },
  { Component: DiamondIcon, initialX: 7, initialY: 10, size: 20 },
];

const greetings = ["Hello!", "こんにちは", "¡Hola!", "Ciao!"]; // English, Japanese, Spanish, Italian

const Hero: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  // Cycle through greetings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position state on mouse move
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate icon movement based on mouse position
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {greetings[currentGreeting]}
      </HeroText>
      <SubText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        I'm Astrid Mottes,
        <DesignerText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Graphic Designer & Illustrator.
        </DesignerText>
      </SubText>
      {/* Animated arrow */}
      <Arrow
        onClick={scrollToPortfolioSection}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        ↓
      </Arrow>
    </HeroSection>
  );
};

export default Hero;
