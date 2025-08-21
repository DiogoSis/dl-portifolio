import React from 'react';
import styles from './DigitalSign.module.css';
import Box from '@mui/material/Box';

interface DigitalSingProps {
  text: string;
}

const DigitalSing: React.FC<DigitalSingProps> = ({ text }) => {
  return (
    <Box className={styles.digitalSign}>
      <span>{text}</span>
    </Box>
  );
};

export default DigitalSing;
