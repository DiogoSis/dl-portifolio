import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ProjectIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/School';
import CertificatesIcon from '@mui/icons-material/EmojiEvents';
import ContactIcon from '@mui/icons-material/ContactMail';
import ArchitectureIcon from '@mui/icons-material/Architecture';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {

  const menuItems = [
    {text: 'Home', icon:<HomeIcon />, path: '/'},
    {text: 'Sobre mim', icon:<ArchitectureIcon />, path: '/about'},
    {text: 'Projetos', icon:<ProjectIcon />, path: '/projects'},
    {text: 'Conhecimentos', icon:<SkillsIcon />, path: '/skills'},
    {text: 'Certificados', icon:<CertificatesIcon />, path: '/certificates'},
    {text: 'Contato', icon:<ContactIcon />, path: '/contact'}
  ]

  return (
    <Drawer classes={{paper:styles.drawerPaper}} open={isOpen} onClose={toggleSidebar}>
      <List>
        {menuItems.map(({ text, icon, path}) => (
          <ListItem
            key={text}
            className={styles.listItem}
            component={Link}
            to={path}
            onClick={toggleSidebar}
            aria-label={text}
          >
            <ListItemButton>
              <span className={styles.icon}>{icon}</span>
              <ListItemText className={styles.listItemText} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;