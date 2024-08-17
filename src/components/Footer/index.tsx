import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      p={1} bgcolor="text.secondary" 
      color="white" 
      textAlign="center" 
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '100',
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Diogo de Assis Luna.
      </Typography>
    </Box>
  );
};

export default Footer;