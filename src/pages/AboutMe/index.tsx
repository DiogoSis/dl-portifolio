import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import ImageSlider from "../../components/Slider";
import { imageGalery1, imageGalery2, imageGalery3 } from "../../exports/images";
import styles from "./AboutMe.module.css";
import TimeLineLife from "../../components/TimeLineLife";

const AboutMe: React.FC = () => {
  return (
    <Container className={styles.content}>
      {/* Título Centralizado */}
      <Box className={styles.contentBox} display="flex" justifyContent="center">
        <Typography variant="h4" className={styles.title}>
          Me conhecendo um pouco mais
        </Typography>
      </Box>
      
      {/* Trajetória e Imagens */}
      <Grid container spacing={2} className={styles.contentBoxTimeLine}>
        {/* Timeline */}
        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <TimeLineLife />
        </Grid>
        
        {/* Imagens */}
        <Grid item xs={12} sm={6} md={4}>
          <Box className={styles.contentImag}>
            <ImageSlider images={imageGalery1} />
            <ImageSlider images={imageGalery2} />
            <ImageSlider images={imageGalery3} />
          </Box>
        </Grid>
      </Grid>

      {/* Texto */}
      <Box marginTop={4}>
        <Typography variant="h6" className={styles.subTitle}>
          Trajetoria
        </Typography>
        <Typography>
          Minha trajetória na tecnologia começou em 2001, quando ganhei meu
          primeiro computador. Desde então, fiz cursos de informática e
          montagem, o que me levou a trabalhar consertando computadores e,
          depois, dando aulas. Em 2013, mudei para Cabo Frio e comecei a atuar
          no mercado de redes, seguido por uma experiência na Oi. Em 2017,
          ingressei na faculdade de Sistemas de Informação, mas em 2018 decidi
          pausar os estudos. Em 2020, retomei minha jornada, voltando para a
          Oi e iniciando estudos em programação. Atualmente, sou desenvolvedor
          na Clubflex e Segmedic, com o objetivo de me tornar o principal
          desenvolvedor em 2024.
        </Typography>
      </Box>
    </Container>
  );
};


export default AboutMe;
