import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Certificates: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>Certificados</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Certificado 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Certificado 2" />
        </ListItem>
        {/* Adicione mais certificados aqui */}
      </List>
    </Container>
  );
};

export default Certificates;
