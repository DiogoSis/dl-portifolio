import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home 
              
            </Link>
          </li>
          <li><Link to="/projects" onClick={toggleSidebar}>Projetos</Link></li>
          <li><Link to="/skills" onClick={toggleSidebar}>Conhecimentos</Link></li>
          <li><Link to="/certificates" onClick={toggleSidebar}>Certificados</Link></li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
