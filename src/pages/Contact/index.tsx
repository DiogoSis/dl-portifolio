import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>Contato</Typography>
      <form>
        <Box mb={2}>
          <TextField label="Nome" name="name" fullWidth required />
        </Box>
        <Box mb={2}>
          <TextField label="Email" name="email" type="email" fullWidth required />
        </Box>
        <Box mb={2}>
          <TextField label="Mensagem" name="message" multiline rows={4} fullWidth required />
        </Box>
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
      </form>
    </Container>
  );
};

export default Contact;