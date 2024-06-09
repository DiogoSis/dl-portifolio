import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/skills">Conhecimentos</Link></li>
          <li><Link to="/certificates">Certificados</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
