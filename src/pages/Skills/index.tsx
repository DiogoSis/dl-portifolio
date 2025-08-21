import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import knowledge from '../../static/knowledge.json';
import SkillItem from '../../components/SkillItens';
import styles from './Skills.module.css';

// Interface para as skills
interface Skill {
  id: number;
  name: string;
  icon: string;
  type: string;
  rating: number;
}

// Agrupar skills por tipo
const groupSkillsByType = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

const Skills: React.FC = () => {
  const groupedSkills = groupSkillsByType(knowledge as Skill[]);
  
  return (
    <Container maxWidth="lg" className={styles.skillsContainer}>
      <Box className={styles.headerSection}>
        <Typography variant="h3" component="h1" className={styles.pageTitle}>
          Conhecimentos
        </Typography>
        <Typography variant="h6" className={styles.pageSubtitle}>
          Tecnologias e ferramentas que domino
        </Typography>
      </Box>

      <Box className={styles.skillsGrid}>
        {Object.entries(groupedSkills).map(([type, skills]) => (
          <Box key={type} className={styles.skillCategory}>
            <Typography variant="h5" component="h2" className={styles.categoryTitle}>
              {type}
            </Typography>
            <Box className={styles.skillsList}>
              {skills.map((skill: Skill) => (
                <SkillItem
                  key={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  type={skill.type}
                  rating={skill.rating}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
