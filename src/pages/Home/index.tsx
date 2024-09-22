import React from "react";
import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import styles from "./Home.module.css";
import fotoPerfil from "../../assets/photos/000.jpg";
import { AnimatedBackground } from "../../components/AnimateBackgound";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateContact = () => {
    navigate("/contact");
  };
  const handleNavigateAbout = () => {
    navigate("/about")
  }

  return (
    <Box className={styles.homeContainer}>
      <Typography
        variant="h3"
        className={styles.title}
        fontFamily="sf pixelate"
      >
        Bem-vindo ao meu portfólio
      </Typography>
      <Box
        className={styles.contentContact}
        display="flex"
        flexDirection="column"
      >
        <Box
          className={styles.iconContainer}
          display="flex"
          justifyContent="center"
          marginBottom={4}
        >
          <a
            href="https://linkedin.com/in/diogosis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" style={{ margin: "0 10px" }} />
          </a>
          <a
            href="https://github.com/DiogoSis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" style={{ margin: "0 10px" }} />
          </a>
          <a
            href="https://wa.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon fontSize="large" style={{ margin: "0 10px" }} />
          </a>
          <a
            href="https://t.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon fontSize="large" style={{ margin: "0 10px" }} />
          </a>
          <a
            href="https://www.reddit.com/user/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RedditIcon fontSize="large" style={{ margin: "0 10px" }} />
          </a>
        </Box>
        <Button
          variant="outlined"
          size="small"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          onClick={handleNavigateContact}
        >
          Contact
        </Button>
      </Box>

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
              sx={{ width: 72, height: 72 }}
            />
            <Typography variant="body1" className={styles.description}>
              Olá, eu sou Diogo, desenvolvedor de software com foco em entregar
              soluções de alta performance.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Tenho experiência em TypeScript e React, otimizando aplicações e
              automatizando processos.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Como desenvolvedor Full Stack na Clubflex, trago uma visão técnica
              integrada com UX e Growth.
            </Typography>
            <Typography variant="body1" className={styles.description}>
              Casado e pai, estou sempre buscando aprender e me aperfeiçoar para
              liderar com eficiência.
            </Typography>
          </Box>

          {/* criar divisão */}
          <Divider style={{ margin: "2rem 0", background: "aliceblue" }} />

          <Box className={styles.slideConteiner}>
            <Typography variant="h5" className={styles.subTitle}>
              Conheça minha Trajetoria
            </Typography>
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              onClick={handleNavigateAbout}
            >
              Sobre mim
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
