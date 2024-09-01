import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import styles from "./Home.module.css";
import fotoPerfil from "../../assets/photos/000.jpg";
import ImageSlider from "../../components/Slider";
import { AnimatedBackground } from "../../components/AnimateBackgound";
import { imageGalery1, imageGalery2, imageGalery3 } from "../../exports/images";

const Home: React.FC = () => {
  return (
    <Box className={styles.homeContainer}>
      <Typography variant="h3" className={styles.title}>
        Bem-vindo ao meu portfólio
      </Typography>
      <Box className={styles.contentContainer}>
        <Box>
          <Box className={styles.bannerContent}>
            <Box className={styles.backgroudAnimate}>
              <AnimatedBackground />
            </Box>
            <Avatar 
              alt="Diogo" 
              src={fotoPerfil} 
              className={styles.avatar}
              sx={{width:72, height:72}} 
            />
            <Typography variant="body1" className={styles.description}>
              Olá, eu sou Diogo, desenvolvedor de software com foco em entregar soluções de alta performance.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Tenho experiência em TypeScript e React, otimizando aplicações e automatizando processos.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Como desenvolvedor Full Stack na Clubflex, trago uma visão técnica integrada com UX e Growth.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Casado e pai, estou sempre buscando aprender e me aperfeiçoar para liderar com eficiência.
            </Typography>
          </Box>
          <Box className={styles.slideConteiner}>
            <Typography variant="h5" className={styles.subTitle}>
              Me conhecendo um pouco mais
            </Typography>
            <Box className={styles.contentImag}>
              <ImageSlider images={imageGalery1}/>
              <ImageSlider images={imageGalery2}/>
              <ImageSlider images={imageGalery3}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
