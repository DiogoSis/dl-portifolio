import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from './Contact.module.css';
import ComplimentsForm from '../../components/Forms/ComplimentsForm';
import SocialNetworksForm from '../../components/Forms/SocialForm';
import ConsultingForm from '../../components/Forms/ConsultingForm';
import JobOfferForm from '../../components/Forms/JobOfferForm';



const Contact: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <Box className={styles.container}>
      {!selectedOption && (
        <>
          <Typography variant="h4" gutterBottom>
            Contato, escolha uma das opções:
          </Typography>
          <Box className={styles.buttonContainer}>
            <Button variant="contained" onClick={() => handleOptionClick('compliments')}>Elogios ou Ideias</Button>
            <Button variant="contained" onClick={() => handleOptionClick('social')}>Me siga nas Redes</Button>
            <Button variant="contained" onClick={() => handleOptionClick('consulting')}>Consultoria para minha empresa</Button>
            <Button variant="contained" onClick={() => handleOptionClick('jobOffer')}>Oferta de Trabalho</Button>
          </Box>
        </>
      )}

      {selectedOption === 'compliments' && (
        <ComplimentsForm onBack={handleBack} />
      )}
      {selectedOption === 'social' && (
        <SocialNetworksForm onBack={handleBack} />
      )}
      {selectedOption === 'consulting' && (
        <ConsultingForm onBack={handleBack} />
      )}
      {selectedOption === 'jobOffer' && (
        <JobOfferForm onBack={handleBack} />
      )}
    </Box>
  );
};

export default Contact;
