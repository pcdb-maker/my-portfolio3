import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 50px;
  background-color: #EFE2BA;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const BioText = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutSection>
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
