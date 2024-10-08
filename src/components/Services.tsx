import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #C5CBE3;
`;

const Service = styled(motion.div)`
  background: #fff;
  width: 250px;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Services = () => {
  
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
