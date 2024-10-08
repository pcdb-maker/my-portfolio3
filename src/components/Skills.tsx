import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  height: 100vh;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  color: white; /* White for the heading */
`;

const SkillBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  width: 70%; /* Reduced width */
  max-width: 800px; /* Maximum width to avoid the bars being too long */
  margin: 20px auto; /* Center the bars horizontally */
`;

const SkillLabel = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: white; /* White for skill text */
  margin-bottom: 10px;
`;

const Bar = styled(motion.div)`
  width: 100%;
  background-color: #C5CBE3; /* Light blue */
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: #D79922; /* Gold for the progress bar */
  border-radius: 10px;
`;

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 80 },
    { name: 'CSS/HTML', level: 95 },
  ];

  return (
    <SkillsContainer>
      <Heading>My Skills</Heading>
      {skills.map((skill, index) => (
        <SkillScrollItem key={index} skill={skill} />
      ))}
    </SkillsContainer>
  );
};

const SkillScrollItem = ({ skill }: { skill: { name: string; level: number } }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: `${skill.level}%` });
    } else {
      controls.start({ width: '0%' });
    }
  }, [controls, inView, skill.level]);

  return (
    <SkillBarContainer ref={ref}>
      <SkillLabel>{skill.name}</SkillLabel>
      <Bar>
        <Progress
          initial={{ width: '0%' }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </Bar>
    </SkillBarContainer>
  );
};

export default Skills;
