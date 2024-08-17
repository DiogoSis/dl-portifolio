import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <IconButton 
          className={styles.menuButton}
          edge="start" 
          aria-label="menu" 
          onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography className={styles.title} variant="h6">Diogo Luna</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
