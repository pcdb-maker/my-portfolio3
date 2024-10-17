import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './PortfolioHeader'; // Import Header component

// Container for the entire portfolio section
const PortfolioSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 2px;
  background-color: #EFE2BA;
  overflow: hidden;
  position: relative;
  min-height: 320vh;
  z-index: 0;
`;

// Card Container with Parallax and Sizing Styles
const ProjectCard = styled(motion.div)<{ large?: boolean }>`
  width: ${(props) => (props.large ? '600px' : '400px')};
  height: ${(props) => (props.large ? '550px' : '400px')};
  background: #fff;
  margin: 20px;
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
  z-index: 1;

  &:hover img {
    transform: scale(1.1); /* Image zoom effect */
  }

  &:hover div.CircleLink {
    transform: rotate(360deg); /* Spin animation for icon on card hover */
  }

  &:hover h1 {
    transition: transform 0.5s ease-in-out;
  }

  @media (max-width: 1000px) {
    width: 90%;
    height: auto;
    margin: 20px 0;
    transition: none;
  }
`;

// Parallax Image inside the Card
const ParallaxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transition: transform 0.5s ease-in-out;

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
  transition: none; /* No hover effect on subtitle */
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
    transform: rotate(360deg); /* Spin animation */
  }
`;

const Portfolio: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Show the burger menu once the user scrolls past the hero section
  const isBurgerVisible = useTransform(scrollYProgress, [0.5, 0.5], [0, 1]);

  // Map the scroll position to the Y-axis of the cards
  const y1 = useTransform(scrollYProgress, [0, 1], [-20, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y6 = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <>
      <Header /> {/* Include the Header component at the top */}

      {/* BurgerMenu appears when the user scrolls to the Selected Works section */}
      <motion.div style={{ opacity: isBurgerVisible }}>
        <BurgerMenu />
      </motion.div>

      <PortfolioSection id="portfolio">

        {/* First Card */}
        <ProjectCard large={true} style={{ y: y1 }} transition={{ ease: [0.01, 0.1, 0.01, 0.1], duration: 0.01 }}>
          <Link to="/project2">
            <ParallaxImage src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp" alt="project2" />
            <CardTitle>Opere d'Olio</CardTitle>
            <Subtitle>Packaging Design</Subtitle>
            <CircleLink className="CircleLink">→</CircleLink>
          </Link>
        </ProjectCard>

        {/* Second Card */}
        <ProjectCard large={false} style={{ y: y2 }} transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.01 }}>
          <Link to="/project2">
            <ParallaxImage src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp" alt="project2" />
            <CardTitle>Opere d'Olio</CardTitle>
            <Subtitle>Packaging Design</Subtitle>
            <CircleLink className="CircleLink">→</CircleLink>
          </Link>
        </ProjectCard>

         {/* third Card */}
         <ProjectCard large={true} style={{ y: y3 }} transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.01 }}>
          <Link to="/project2">
            <ParallaxImage src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp" alt="project2" />
            <CardTitle>Opere d'Olio</CardTitle>
            <Subtitle>Packaging Design</Subtitle>
            <CircleLink className="CircleLink">→</CircleLink>
          </Link>
        </ProjectCard>

         {/* fourth Card */}
         <ProjectCard large={false} style={{ y: y4 }} transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.01 }}>
        <ProjectCard
          large={false}
          style={isMobile ? {} : { y: y2 }}
          transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.01 }}
        >
          <Link to="/project2">
            <ParallaxImage
              src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp"
              alt="project2"
            />
            <CardTitle>Opere d'Olio</CardTitle>
            <Subtitle>Packaging Design</Subtitle>
            <CircleLink className="CircleLink">&rarr;</CircleLink>
          </Link>
        </ProjectCard>

        {/* More Cards (3rd to 6th) */}
        {[y3, y4, y5, y6].map((yTransform, index) => (
          <ProjectCard
            key={index}
            large={index % 2 === 0}
            style={isMobile ? {} : { y: yTransform }}
            transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.01 }}
          >
            <Link to="/project2">
              <ParallaxImage
                src="https://static.wixstatic.com/media/36e847_9feb77b2a07c4d749bbcca75887be7ee~mv2.webp"
                alt="project2"
              />
              <CardTitle>Opere d'Olio</CardTitle>
              <Subtitle>Packaging Design</Subtitle>
              <CircleLink className="CircleLink">&rarr;</CircleLink>
            </Link>
          </ProjectCard>
        ))}
      </PortfolioSection>
    </>
  );
};

export default Portfolio;