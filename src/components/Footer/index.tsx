import React from 'react';
import styles from './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${styles.fixedBottom}`}>
      <p>&copy; 2024 Diogo de Assis Luna.</p>
    </footer>
  );
};

export default Footer;
