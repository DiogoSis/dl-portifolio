import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer open={isOpen} onClose={toggleSidebar}>
      <List>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/projects" onClick={toggleSidebar}>
          <ListItemText primary="Projetos" />
        </ListItem>
        <ListItem button component={Link} to="/skills" onClick={toggleSidebar}>
          <ListItemText primary="Conhecimentos" />
        </ListItem>
        <ListItem button component={Link} to="/certificates" onClick={toggleSidebar}>
          <ListItemText primary="Certificados" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={toggleSidebar}>
          <ListItemText primary="Contato" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
