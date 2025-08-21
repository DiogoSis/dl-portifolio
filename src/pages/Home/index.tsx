// External libraries
import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
  Reddit as RedditIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  KeyboardDoubleArrowDown as KeyboardDoubleArrowDownIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Internal components
import { AnimatedBackground } from '../../components/AnimateBackgound';
import BarTechIcons from '../../components/BarTechIcons';

// Assets
import fotoPerfil from '../../assets/photos/000.jpg';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateContact = () => {
    navigate('/contact');
  };
  const handleNavigateAbout = () => {
    navigate('/about');
  };

  return (
    <Box className={styles.homeContainer}>
      {/* section 1 */}
      <Box className={styles.contentContainer}>
        <Typography
          variant="h3"
          className={styles.title}
          fontFamily="sf pixelate"
        >
          Oi, eu sou <span className={styles.highlight}>Diogo</span>!
        </Typography>

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
            Desenvolvo aplicações com foco em entregar soluções de alta
            performance, trago uma visão{' '}
            <span className={styles.highlight}>técnica</span> integrada com{' '}
            <span className={styles.highlight}>UX</span> e{' '}
            <span className={styles.highlight}>Growth</span>, otimizando{' '}
            <span className={styles.highlight}>sistemas</span> web.
          </Typography>
        </Box>
      </Box>
      <KeyboardDoubleArrowDownIcon
        className={styles.arrowDown}
        fontSize="large"
        sx={{ mb: 3 }}
      />

      {/*curriculo*/}
      <Box className={styles.contentContainer}>
        <Typography variant="h5" className={styles.subTitle} sx={{ mb: 2 }}>
          Acesse meu Curriculo
        </Typography>

        <Button
          className={styles.contentContainerBox}
          variant="outlined"
          size="small"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          href="http://curriculo-generator-static.s3-website-us-east-1.amazonaws.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Curriculo</span>
        </Button>
      </Box>

      <KeyboardDoubleArrowDownIcon
        className={styles.arrowDown}
        fontSize="large"
        sx={{ mb: 3 }}
      />

      {/* section 2 */}
      <Box className={styles.contentContainer}>
        <Typography variant="h5" className={styles.subTitle} sx={{ mb: 2 }}>
          Conheça minha Trajetoria
        </Typography>

        <Button
          className={styles.contentContainerBox}
          variant="outlined"
          size="small"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          onClick={handleNavigateAbout}
        >
          <span>Sobre mim</span>
        </Button>
        <BarTechIcons />
      </Box>

      <KeyboardDoubleArrowDownIcon
        className={styles.arrowDown}
        fontSize="large"
        sx={{ mb: 3 }}
      />
      {/* section 3 */}
      <Box
        className={styles.contentContainer}
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h5" className={styles.subTitle} sx={{ mb: 2 }}>
          Minhas Redes
        </Typography>
        <Box
          className={styles.iconContainer}
          display="flex"
          justifyContent="center"
          marginBottom={4}
        >
          <Button
            href="https://linkedin.com/in/diogosis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" style={{ margin: '0 10px' }} />
          </Button>
          <Button
            href="https://github.com/DiogoSis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" style={{ margin: '0 10px' }} />
          </Button>
          <Button
            href="https://wa.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon fontSize="large" style={{ margin: '0 10px' }} />
          </Button>
          <Button
            href="https://t.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon fontSize="large" style={{ margin: '0 10px' }} />
          </Button>
          <Button
            href="https://www.reddit.com/user/Diogo-Dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RedditIcon fontSize="large" style={{ margin: '0 10px' }} />
          </Button>
        </Box>

        <Button
          variant="outlined"
          size="small"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          onClick={handleNavigateContact}
        >
          <span>Contact</span>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
