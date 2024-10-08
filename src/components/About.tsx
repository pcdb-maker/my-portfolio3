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

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 50px;
  max-width: 700px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

const PortraitContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 30% 70% 70% 30%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SpinningIconContainer = styled.div`
  position: absolute; /* Make sure it's relative to the AboutContainer */
  top: 5200px; 
  right: 850px;
  z-index: 10;
`;

const SpinningIcon = styled(motion.div)`
  width: 100px;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;
const TableData = styled.td`
  padding: 50px 0;
  return (
    <AboutSection id="about">
      <ProfileImage src="/path/to/profile.jpg" alt="Astrid Mottes" />
      <h2>About Me</h2>
      <BioText>
        Hello there! I'm a Graphic Designer & Illustrator based in Italy, passionate about helping brands stand out.
        I love design in all its forms and enjoy exploring new areas and learning new things every day.
      </BioText>
    </AboutSection>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableData>Jul 2017 - Aug 2017</TableData>
                <TableData>Graphic Designer</TableData>
                <TableData>Graphic Line Studio</TableData>
              </TableRow>
              <TableRow>
                <TableData>May 2019 - Jan 2024</TableData>
                <TableData>Web Designer</TableData>
                <TableData>t26 Italia</TableData>
              </TableRow>
              <HighlightedRow>
                <TableData>Feb 2024 - Present</TableData>
                <TableData>Graphic Designer & Illustrator</TableData>
                <TableData>Freelance</TableData>
              </HighlightedRow>
            </tbody>
          </Table>
        </TableContainer>
        
        {/* Separate spinning icon */}
        <SpinningIconContainer>
          <SpinningIcon
            style={{ rotate: `${rotation}deg` }}
          >
            <Icon />
          </SpinningIcon>
        </SpinningIconContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutMe;
