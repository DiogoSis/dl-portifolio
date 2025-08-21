import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import styles from './Loading.module.css';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'linear';
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Carregando...',
  size = 'medium',
}) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 24;
      case 'large':
        return 60;
      default:
        return 40;
    }
  };

  return (
    <Box className={styles.loadingContainer}>
      <CircularProgress size={getSize()} />
      {message && (
        <Typography variant="body2" className={styles.loadingMessage}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
