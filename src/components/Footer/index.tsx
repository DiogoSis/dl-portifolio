import React from 'react';
import { Box, Typography } from '@mui/material';
import DigitalSign from '../DigitalSign';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      p={1}
      bgcolor="text.secondary"
      color="white"
      textAlign="center"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '100',
      }}
    >
      <Box>
        <DigitalSign text="<< -- site em criação -- || -- sempre aberto a ideias -- << -- <<" />
      </Box>
      <Typography variant="body2">&copy; 2024 Diogo de Assis Luna.</Typography>
    </Box>
  );
};

export default Footer;
