import React from 'react';
import { Container, Typography } from '@mui/material';
import knowledge from '../../static/knowledge.json';
import SkillItem from '../../components/SkillItens';

const Skills: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Conhecimentos
      </Typography>
      {knowledge.map(skill => (
        <SkillItem
          key={skill.id}
          name={skill.name}
          icon={skill.icon}
          type={skill.type}
          rating={skill.rating}
        />
      ))}
    </Container>
  );
};

export default Skills;
