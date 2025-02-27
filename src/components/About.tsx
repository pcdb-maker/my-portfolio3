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

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  span {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 50px;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
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

  @media (max-width: 768px) {
    width: 200px;
    height: 270px;
  }
`;

const SpinningIconContainer = styled.div`
   @media (max-width: 375px) {
   top: 80px;
  right: 0px;
}

/* For Medium Phones: iPhone 12, Pixel 5 */
@media (min-width: 376px) and (max-width: 414px) {
   
   top: 5900px;
  right: 60px;
}

/* For Larger Phones/Phablets: Galaxy Note, iPhone 13 Pro Max */
@media (min-width: 415px) and (max-width: 768px) {
   
top: 6000px;
  right: 60px;

  
}

/* For Small Tablets: iPad Mini */
@media (min-width: 769px) and (max-width: 1024px) {
   top: 9000px;
  right: 550px;

  
    
  }
`;

const SpinningIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  svg {
    width: 100%;
    height: 100%;
    fill: #4056A1; /* Icon color */
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TableContainer = styled(motion.div)`
  max-width: 700px;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

const TableHeader = styled.th`
  padding: 40px 0;
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const TableData = styled.td`
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;

const HighlightedRow = styled.tr`
  background-color: #D79922; /* Highlight color for the last row */
`;

const AboutMe = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on scroll position, but no position change
      const scrollTop = window.pageYOffset;
      setRotation(scrollTop % 360); // Continuous rotation logic
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <AboutContainer id='about'>
      <Heading
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        More <span>about me</span>
      </Heading>

      <AboutText>
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      </AboutText>

          {/* Separate spinning icon */}
          <SpinningIconContainer>
          <SpinningIcon
            style={{ rotate: `${rotation}deg` }}
          >
            <Icon />
          </SpinningIcon>
        </SpinningIconContainer>

      <ContentWrapper>
        <PortraitContainer
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <PortraitImage src={Portrait} alt="Portrait" />
        </PortraitContainer>

        <TableContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Time</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Company</TableHeader>
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
        
    
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutMe;