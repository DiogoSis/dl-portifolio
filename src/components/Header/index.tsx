import React from 'react';
import styles from './styles.module.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className={`${styles.header} ${styles.fixedTop}`}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>☰</button>
      <div className={styles.titleHeader}>
        <h1>Diogo Luna <br/> (em construção)</h1>
        <h3>Apresentação de ideias e projetos</h3>
      </div>
    </header>
  );
}

export default Header;
