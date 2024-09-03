import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import CardCertificado from '../../components/CardCertificate';
import certificationsData from '../../static/certifications.json';
import { AnimatedBackground } from '../../components/AnimateBackgound';

// Defina o tipo para os certificados
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
  );
};

export default Certificates;
