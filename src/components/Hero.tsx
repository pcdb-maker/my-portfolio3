import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4056A1;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
`;

const HeroText = styled(motion.h1)`
  font-size: 100px;
  font-weight: bold;
  margin: 0;
`;

const SubText = styled(motion.p)`
  font-size: 24px;
  margin-top: 20px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroText
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello!
      </HeroText>
      <SubText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm Astrid Mottes, Graphic Designer & Illustrator.
      </SubText>
    </HeroSection>
  );
};

export default Hero;
