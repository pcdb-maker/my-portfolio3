import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Main container for the project page
const ProjectContainer = styled.div`
  padding: 80px 20px;
  width: 100vw;
  overflow-x: hidden;
  margin: 10 auto;
  text-align: center;
  background-color: #D7C3A4;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

// Project title styling with animation
const ProjectTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-left: 10px;
  margin-top: -10px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Project image styling
const ProjectImage = styled.img`
  width: 90%;
  max-width: 900px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin: 20px auto;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

// InfoBox with rounded corners and two columns for text
const InfoBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

// Text container for the InfoBox
const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Text styling inside the InfoBox
const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 5px 0;
`;

// Button to link to the live project inside the InfoBox
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

// Two columns of text section
const TextColumns = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Playfair Display', serif;
  margin: 40px auto;
  width: 90%;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Left column with 50% width
const LeftColumn = styled.div`
  flex: 1;
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  font-style: italic;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

// Right column with 50% width
const RightColumn = styled.div`
  flex: 1;
  font-size: 1rem;
  color: #333;
  text-align: left;
  line-height: 1.6;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

// Image grid for the large images
const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin: 40px auto;
  width: 90%;
  max-width: 900px;
`;

// Individual image styling in the image grid
const GridImage = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 15px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

// Image grid for the two smaller side-by-side images
const SmallImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 40px auto;
  width: 90%;
  max-width: 900px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// Styling for smaller images
const SmallImage = styled.img`
  width: 100%;
  height: 323px;
  border-radius: 15px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

// Featured Works section container
const FeaturedWorksSection = styled.div`
  margin-top: 60px;
  padding: 40px 20px;
  background-color: #EFE2BA;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 20px 10px;
  }
`;

// Section title
const FeaturedTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

// Cards grid for featured works
const CardsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

// Card Container with Parallax and Sizing Styles
const ProjectCard = styled(motion.div)`
  width: 100%;
  max-width: 430px;
  background: #fff;
  margin: 0;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div.CircleLink {
    transform: rotate(360deg);
  }

  &:hover h1 {
    transition: transform 0.5s ease-in-out;
  }
`;

// Parallax Image inside the Card
const ParallaxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transition: transform 0.5s ease-in-out;
  border-radius: inherit;
`;

// Card Title
const CardTitle = styled.h1`
  position: absolute;
  bottom: 70px;
  left: 20px;
  font-size: 28px;
  color: white;
  font-family: 'Playfair Display', serif;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// Subtitle with a pop color and rounded background
const Subtitle = styled.div`
  font-size: 16px;
  padding: 5px 15px;
  background-color: #f13c20;
  border-radius: 15px;
  color: white;
  display: inline-block;
  margin-top: 10px;
  position: absolute;
  bottom: 40px;
  left: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Circle Link Icon with Spin on Hover
const CircleLink = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #e85a4f;
  transition: transform 0.4s ease-in-out;

  &:hover {
    background-color: #e85a4f;
    color: white;
    transform: rotate(360deg);
  }
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
        <span style={{ fontWeight: 'bold', fontStyle: 'normal' }}>Project</span>
        <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Title</span>
      </ProjectTitle>

      {/* Project Image */}
      <ProjectImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Image 1" />

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
        <LiveProjectButton href="https://www.example.com" target="_blank">
          View Live Project ✦
        </LiveProjectButton>
      </InfoBox>

      {/* Text Columns */}
      <TextColumns>
        <LeftColumn>Project Description Goes Here</LeftColumn>
        <RightColumn>Additional project details and information go here.</RightColumn>
      </TextColumns>

      {/* Image Grid */}
      <ImageGrid>
        <GridImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Image 1" />
        <GridImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Image 2" />
        <GridImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Image 3" />
      </ImageGrid>

      {/* Smaller Images Side-by-Side */}
      <SmallImageGrid>
        <SmallImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Small Image 1" />
        <SmallImage src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="Small Image 2" />
      </SmallImageGrid>

      {/* Featured Works Section */}
      <FeaturedWorksSection>
        <FeaturedTitle>Featured works</FeaturedTitle>
        <CardsGrid>
          <ProjectCard large={true}>
            <Link to="/project2">
              <ParallaxImage src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp" alt="project2" />
              <CardTitle>Opere d'Olio</CardTitle>
              <Subtitle>Packaging Design</Subtitle>
              <CircleLink className="CircleLink">→</CircleLink>
            </Link>
          </ProjectCard>
          <ProjectCard large={true}>
            <Link to="/project2">
              <ParallaxImage src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp" alt="project2" />
              <CardTitle>Opere d'Olio</CardTitle>
              <Subtitle>Packaging Design</Subtitle>
              <CircleLink className="CircleLink">→</CircleLink>
            </Link>
          </ProjectCard>
        </CardsGrid>
      </FeaturedWorksSection>
    </ProjectContainer>
  );
};

export default Project1;
