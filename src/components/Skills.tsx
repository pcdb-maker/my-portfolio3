
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  width: 70%; /* Reduced width */
  max-width: 800px; /* Maximum width to avoid the bars being too long */
const SkillLabel = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;


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
