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
      {/* Hero Section */}
      <Box className={styles.contentContainer}>
        <Typography
          variant="h3"
          className={styles.title}
          fontFamily="Inter"
        >
          Oi, eu sou <span className={styles.highlight}>Diogo</span>!
        </Typography>

        <Box className={styles.bannerContent}>
          <Avatar
            alt="Diogo"
            src={fotoPerfil}
            className={styles.avatar}
            sx={{ 
              width: 200, 
              height: 200,
              border: 'var(--border-extra-thick)',
              boxShadow: 'var(--shadow-brutal-lg)'
            }}
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

        {/* Action Buttons */}
        <Box className={styles.actionButtons}>
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            onClick={handleNavigateAbout}
            className="brutal-btn"
          >
            Sobre mim
          </Button>
          
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            href="http://curriculo-generator-static.s3-website-us-east-1.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn"
          >
            Currículo
          </Button>
          
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            onClick={handleNavigateContact}
            className="brutal-btn"
          >
            Contato
          </Button>
        </Box>

        {/* Tech Icons */}
        <Box className={styles.techIconsContainer}>
          <BarTechIcons />
        </Box>
      </Box>

      <KeyboardDoubleArrowDownIcon
        className={styles.arrowDown}
        fontSize="large"
      />

      {/* Social Links Section */}
      <Box className={styles.contentContainer}>
        <Typography variant="h5" className={styles.subTitle}>
          Conecte-se comigo
        </Typography>
        
        <Box className={styles.iconContainer}>
          <a
            href="https://linkedin.com/in/diogosis"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-social-link"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/DiogoSis"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-social-link"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://wa.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-social-link"
          >
            <WhatsAppIcon fontSize="large" />
          </a>
          <a
            href="https://t.me/21970669909?text=Oi%20estou%20vindo%20do%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-social-link"
          >
            <TelegramIcon fontSize="large" />
          </a>
          <a
            href="https://www.reddit.com/user/Diogo-Dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-social-link"
          >
            <RedditIcon fontSize="large" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
