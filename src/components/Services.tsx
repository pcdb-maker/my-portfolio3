import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
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
  return (
    <ServicesSection id ='services'>
      <Service
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Brand Identity</h3>
      </Service>
      <Service
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h3>Web Design</h3>
      </Service>
      <Service
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h3>Motion Graphics</h3>
      </Service>
    </ServicesSection>
    </ServiceItemContainer>
  );
};

export default Services;
