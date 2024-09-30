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
  letter-spacing: -10px;
  @media (max-width: 768px) {
    font-size: 100px;
    letter-spacing: -5px;
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
    font-size: 18px;
  }
`;

const DesignerText = styled(motion.span)`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  color: #e85a4f;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IconWrapper = styled(motion.div)<SVGProps<SVGSVGElement>>`
  position: absolute;
  fill: #e85a4f;
  opacity: 0.4;
  z-index: 1;
`;

// Updated Arrow Component with hover animation
const Arrow = styled(motion.div)`
  position: absolute;
  margin-bottom: -300px;
  left: 50%;
  transform: translateX(-10%); /* Consistent X-axis positioning */
  font-size: 62px;
  color: #e85a4f;
  cursor: pointer;
  z-index: 2;
  transition: transform 1s ease, color 0.3s ease; /* Added transition for transform and color */

  /* Separate hover effect to ensure no position change */
  &:hover {
    color: #b73225; /* Change color on hover */
    transform: translateX(-70%) rotate(15deg); /* Keep translateX(-50%) to avoid movement */
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
  { Component: ClubIcon, initialX: 20, initialY: 70, size: 50 },
  { Component: ClubIcon, initialX: 10, initialY: 0, size: 170 },
  { Component: ClubIcon, initialX: 80, initialY: 40, size: 200 },
  { Component: DiamondIcon, initialX: 25, initialY: 55, size:30 },
  { Component: DiamondIcon, initialX: 80, initialY: 10, size: 65 },
  { Component: DiamondIcon, initialX: 5, initialY: 50, size: 100 },
  { Component: CircleIcon, initialX: 90, initialY: 10, size: 100 },
];

const greetings = ["Hello!", "こんにちは!", "¡Hola!", "Ciao!"]; // English, Japanese, Spanish, Italian

// Define individual letter animation sequence
const letterVariants = {
  hidden: { opacity: 0, y: 10 }, // Start off-screen
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1.1, // Slight bounce effect
    transition: {
      delay: i * 0.1, // Reduced delay for faster animation
      duration: 0.4, // Reduced duration for faster animation
      ease: "easeInOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -10,
    transition: {
      delay: i * 0.08, // Reduced delay for faster animation
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
      staggerChildren: 0.04, // Reduced stagger for faster animation
      delayChildren: 0.1, // Reduced initial delay
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
    }, 4000); // Reduced timing to 4 seconds between words
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
        key={currentGreeting} // Adding key to force re-render
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
            whileHover={{ color: "#b73225" }} // Darker shade on hover
            style={{
              display: 'inline-block',
              margin: '0 0px', // Adjusted margins to reduce space between letters
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
          Web Development & Digital Artist.
        </DesignerText>
      </SubText>
      <Arrow
        onClick={scrollToPortfolioSection}
        whileHover={{ scale: 1.1 }} // Minor scaling effect on hover
        whileTap={{ scale: 0.9 }} // Scale effect only on click
      >
        ↓
      </Arrow>
    </HeroSection>
  );
};

export default Hero;

