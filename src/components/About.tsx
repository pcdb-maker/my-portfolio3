import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as Icon } from '../assets/club.svg'; // Updated icon import
import Portrait from '../assets/portrait.png'; // Updated portrait import

const AboutContainer = styled.div`
  background-color: #EFE2BA;
  color: black;
  padding: 100px 20px;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  span {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
  }
`;

`;

const About = () => {
  return (
    <AboutSection id="about">
      <ProfileImage src="/path/to/profile.jpg" alt="Astrid Mottes" />
      <h2>About Me</h2>
      <BioText>
        Hello there! I'm a Graphic Designer & Illustrator based in Italy, passionate about helping brands stand out.
        I love design in all its forms and enjoy exploring new areas and learning new things every day.
      </BioText>
    </AboutSection>
  );
};

export default About;
