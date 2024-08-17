import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import styles from "./Home.module.css";
import fotoPerfil from "../../assets/photos/000.jpg";
import ImageSlider from "../../components/Slider";

const Home: React.FC = () => {
  return (
    <Box className={styles.homeContainer}>
      <Typography variant="h3" className={styles.title}>
        Bem-vindo ao meu portfólio
      </Typography>

      <Box className={styles.contentContainer}>
        <Box>
          <Box className={styles.bannerContent}>
            <Avatar 
              alt="Diogo" 
              src={fotoPerfil} 
              className={styles.avatar}
              sx={{width:66, height:66}} 
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
            <ImageSlider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
