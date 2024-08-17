import React from 'react';
import { Box, Typography } from '@mui/material';
import contrucao from '../../assets/pagina-construcao.png';

const Home: React.FC = () => {
  return (
    <Box textAlign="center" p={3}>
      <img src={contrucao} alt="Diogo" style={{ maxWidth: '100%' }} />
      <Typography variant="h3">Bem-vindo ao meu portfólio</Typography>
      <Typography variant="body1">
        Olá, eu sou Diogo. Sou um desenvolvedor de software com experiência em TypeScript e apaixonado por seguir os princípios de design e padrões de codificação estabelecidos por Robert Martin. Estou sempre em busca de escrever código legível, eficiente e não redundante.
      </Typography>
    </Box>
  );
};

export default Home;