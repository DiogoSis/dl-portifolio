import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ContactForm from '../../components/Forms/ContactForm';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.headerSection}>
        <Typography variant="h3" component="h1" className={styles.pageTitle}>
          Contato
        </Typography>
        <Typography variant="h6" className={styles.pageSubtitle}>
          Vamos conversar sobre seu próximo projeto
        </Typography>
      </Box>

      <ContactForm />
    </Container>
  );
};

export default Contact;
