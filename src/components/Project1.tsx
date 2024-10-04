import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Main container for the project page
const ProjectContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #EFE2BA; /* Same background color as Portfolio */
`;

// Project title styling with animation
const ProjectTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-top: -12px;
  font-family: 'Playfair Display', serif;
  margin-left: 10px;
  color: #000000;
  margin-bottom: 30px;
`;

// Project image styling (first large image)
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1150px; /* Ensure the image is wide enough */
  height: 647px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

// White Box with rounded corners and two columns for text
const InfoBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1112px; /* Match the image width */
  margin: 20px auto 0 auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

// Text container for the left-aligned text in the InfoBox
const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
`;

// Text styling for the two columns inside the info box
const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 5px 0;
`;

// Button to link to the live project inside the info box
const LiveProjectButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  font-size: 1rem;
  color: white;
  background-color: #e85a4f;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 10px 6px 14px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background: #D64545;
    transform: translateY(3px);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

// Two columns of text sectionRight Text Column with more details about the project. It can have a longer description here that spans multiple lines.

const TextColumns = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Playfair Display', serif;
  margin: 40px 0;
  width: 100%;
  max-width: 1150px;
`;

const LeftColumn = styled.div`
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  margin-left: 30px; 
`;

const RightColumn = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: left;
  line-height: 1.6;
  margin-left: 80px; 
`;

// Image grid for the large images
const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
`;

const GridImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1150px; /* New size for the large images */
  height: 647px;
  margin-left:25px;
  border-radius: 15px;
`;

// Image grid for the two smaller side-by-side images
const SmallImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  
  justify-items: left;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: -20px;
  gap: 10px;
`;

const SmallImage = styled.img`
  width: 92%;
  max-width: calc(1150px / 2); /* Half the width of the large images */
  height: 323px; /* Half the height of the large images */
  border-radius: 15px;
`;

const Project1: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  return (
    <ProjectContainer>
      {/* Animated Project Title */}
      <ProjectTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
      >
        Project 1 Title
      </ProjectTitle>

      {/* Project Image */}
      <ProjectImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" />

      {/* White Box with fade-in animation on scroll */}
      <InfoBox
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <InfoTextContainer>
          <InfoText><strong>Year</strong> ✦ 2023</InfoText>
          <InfoText><strong>Agency</strong> ✦ t26 Italia</InfoText>
        </InfoTextContainer>
        <InfoTextContainer>
          <InfoText><strong>Client</strong> ✦ Costa d'Oro</InfoText>
          <InfoText><strong>Service</strong> ✦ Packaging Design</InfoText>
        </InfoTextContainer>

        {/* Live Project Button */}
        <LiveProjectButton href="https://www.example.com" target="_blank">
          View Live Project ✦
    </ProjectContainer>
  );
};

export default Project1;
