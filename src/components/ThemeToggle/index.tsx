import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { 
  LightMode as LightModeIcon, 
  DarkMode as DarkModeIcon 
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={`Alternar para modo ${themeMode === 'light' ? 'escuro' : 'claro'}`}>
      <IconButton
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label="Alternar tema"
        size="large"
      >
        {themeMode === 'light' ? (
          <DarkModeIcon className={styles.icon} />
        ) : (
          <LightModeIcon className={styles.icon} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
