import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CardCertificado from '../../components/CardCertificate';
import certificationsData from '../../static/certifications.json';
import { AnimatedBackground } from '../../components/AnimateBackgound';

interface Certificate {
  id: number;
  courseName: string;
  startedAt: string;
  finishedAt: string;
  categoryCode: string;
  imageUrl: string;
  certificateUrl: string;
}

const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    setCertificates(certificationsData);
  }, []);

  return (
    <Container>      
      <Container>

        {/* animação */}
        <Box position="fixed" width="100%">
          <AnimatedBackground />
        </Box>

        {/* Formações */}
        <Typography variant="h3" marginTop={5}>Cursos e Formações</Typography>
        <Grid>Formações</Grid>

        {/* Cursos */}
        <Typography variant="h3" marginTop={2}>Cursos</Typography>
        <Grid 
          container 
          paddingTop={8} 
          spacing={4}
          alignItems="center"
        >
          {certificates.map((certificado) => (
            <Grid item key={certificado.id} spacing={3}>
              <CardCertificado {...certificado} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Certificates;
