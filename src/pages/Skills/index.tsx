import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Design Patterns',
  // Adicione mais habilidades aqui
];

const Skills: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>Conhecimentos</Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Skills;