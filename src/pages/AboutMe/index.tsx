import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import InteractiveGallery from '../../components/InteractiveGallery';
import { allGalleryImages } from '../../exports/images';
import styles from './AboutMe.module.css';
import TimeLineLife from '../../components/TimeLineLife';

const AboutMe: React.FC = () => {
  return (
    <Container className={styles.content}>
      {/* Título Centralizado */}
      <Box className={styles.contentBox} display="flex" justifyContent="center">
        <Typography variant="h4" className={styles.title}>
          Me conhecendo um pouco mais
        </Typography>
      </Box>

      {/* Trajetória e Galeria */}
      <Grid container spacing={4} className={styles.contentBoxTimeLine}>
        {/* Timeline */}
        <Grid item xs={12} md={6}>
          <Box className={styles.timelineSection}>
            <Typography variant="h5" className={styles.sectionTitle}>
              Minha Jornada
            </Typography>
            <TimeLineLife />
          </Box>
        </Grid>

        {/* Galeria Interativa */}
        <Grid item xs={12} md={6}>
          <Box className={styles.gallerySection}>
            <InteractiveGallery 
              images={allGalleryImages} 
              title="Momentos Especiais"
            />
          </Box>
        </Grid>
      </Grid>

      {/* Texto Descritivo */}
      <Box className={styles.descriptionSection}>
        <Typography variant="h5" className={styles.sectionTitle}>
          Minha Trajetória
        </Typography>
        <Typography className={styles.description}>
          Minha trajetória na tecnologia começou em 2001, quando ganhei meu
          primeiro computador. Desde então, fiz cursos de informática e
          montagem, o que me levou a trabalhar consertando computadores e,
          depois, dando aulas. Em 2013, mudei para Cabo Frio e comecei a atuar
          no mercado de redes, seguido por uma experiência na Oi. Em 2017,
          ingressei na faculdade de Sistemas de Informação, mas em 2018 decidi
          pausar os estudos. Em 2020, retomei minha jornada, voltando para a Oi
          e iniciando estudos em programação. Atualmente, sou desenvolvedor na
          Clubflex e Segmedic, com o objetivo de me tornar o principal
          desenvolvedor em 2024.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;
