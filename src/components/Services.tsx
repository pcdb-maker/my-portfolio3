import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// Import your SVG icons (Replace with actual icon paths)
import { ReactComponent as Icon1 } from '../assets/club.svg'; // for white icons
import { ReactComponent as Icon2 } from '../assets/circle.svg'; // for white icons

const ServicesContainer = styled.div`
  background-color: #28282F;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

/* For Larger Laptops and Desktops: */
@media (min-width: 1441px) {
  body {
    height: 100vh;
  }
}

`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  color: white;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const ServiceItemContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center; /* Center everything */
  gap: 40px; /* Add space between icon and text */

  @media (max-width: 700px) {
     gap: 1px; 

  }
`;

const ServiceText = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-style: italic;
  letter-spacing: 0.05em;
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const IconContainer = styled.div<{ color?: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Target all paths inside SVG and apply color */
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${({ color }) => color}; /* Apply color to paths */
    }
  }
`;

const Services = () => {
  const services = ['Brand Identity', 'Web Design', 'Motion Graphic', 'Packaging Design'];

  return (
    <ServicesContainer>
      <Heading id='services'>SERVICES</Heading>
      {services.map((service, index) => (
        <ServiceScrollItem key={index} service={service} index={index} />
      ))}
    </ServicesContainer>
  );
};

// Updated ServiceScrollItem to include span for custom icons
const ServiceScrollItem = ({ service, index }: { service: string, index: number }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const moveDirection = index % 2 === 0 ? '-50px' : '50px';
  
  // Define custom span icons for black ones
  const customSpanIcon = (
    <span style={{ margin: '0 20px', color: '#EFE1B9', fontSize: '40px' }}>♦</span>
  );

  // Determine if it's an SVG icon or span
  const Icon = index % 2 === 0 ? Icon1 : Icon2; // Only works for white icons

  // Assign a different color based on index
  const iconColor = index % 2 === 0 ? '#F13C20' : '#4056A1'; // Custom colors for icons

  const wordVariants = {
    hidden: { opacity: 0.2, x: moveDirection },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 50, mass: 0.5 }},
  };

  return (
    <ServiceItemContainer ref={ref} initial="hidden" animate={controls} variants={wordVariants}>
      {index % 2 === 0 && (
        <IconContainer color={iconColor}>
          <Icon />
        </IconContainer>
      )}
      <ServiceText variants={wordVariants}>{service}</ServiceText>
      {index % 2 !== 0 && (
        <IconContainer color={iconColor}>
          {index === 1 ? customSpanIcon : <Icon />} {/* Use span icon for black ones */}
        </IconContainer>
      )}
    </ServiceItemContainer>
  );
};

export default Services;