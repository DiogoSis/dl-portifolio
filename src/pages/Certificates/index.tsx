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
        <Typography variant="h3" marginTop={5}>Cursos e Formações</Typography>
        <Box></Box>
      </Container>
      <Container>
        <Typography variant="h3">Diplomas e Certificados</Typography>
        <Box position="fixed" width="100%">
          <AnimatedBackground />
        </Box>
        <Grid 
          container 
          paddingTop={8} 
          spacing={4}
          justifyContent="center"
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
