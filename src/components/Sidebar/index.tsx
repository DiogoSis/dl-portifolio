import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ProjectIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/School';
import CertificatesIcon from '@mui/icons-material/EmojiEvents';
import ContactIcon from '@mui/icons-material/ContactMail';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer classes={{paper:styles.drawerPaper}} open={isOpen} onClose={toggleSidebar}>
      <List>
        <ListItem className={styles.listItem} button component={Link} to="/" onClick={toggleSidebar}>
          <HomeIcon className={styles.icon}/><ListItemText className={styles.listItemText} primary="Home" />
        </ListItem>
          <ListItem className={styles.listItem} button component={Link} to="/projects" onClick={toggleSidebar}>
          <ProjectIcon className={styles.icon}/><ListItemText className={styles.listItemText} primary="Projetos" />
        </ListItem>
        <ListItem className={styles.listItem} button component={Link} to="/skills" onClick={toggleSidebar}>
          <SkillsIcon className={styles.icon}/><ListItemText className={styles.listItemText} primary="Conhecimentos" />
        </ListItem>
        <ListItem className={styles.listItem} button component={Link} to="/certificates" onClick={toggleSidebar}>
          <CertificatesIcon className={styles.icon}/><ListItemText className={styles.listItemText} primary="Certificados" />
        </ListItem>
        <ListItem className={styles.listItem} button component={Link} to="/contact" onClick={toggleSidebar}>
          <ContactIcon className={styles.icon}/><ListItemText className={styles.listItemText} primary="Contato" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;