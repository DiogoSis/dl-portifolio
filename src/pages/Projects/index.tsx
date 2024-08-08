import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    link: 'https://github.com/seu-usuario/projeto1',
    image: 'link_da_imagem_do_projeto1'
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    link: 'https://github.com/seu-usuario/projeto2',
    image: 'link_da_imagem_do_projeto2'
  },
  // Adicione mais projetos aqui
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>Projetos</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
