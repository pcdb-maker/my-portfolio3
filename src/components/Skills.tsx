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
