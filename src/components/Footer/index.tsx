import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" p={2} bgcolor="text.secondary" color="white" textAlign="center" position="fixed" bottom={0} width="100%">
      <Typography variant="body2">&copy; 2024 Diogo de Assis Luna.</Typography>
    </Box>
  );
};

export default Footer;
