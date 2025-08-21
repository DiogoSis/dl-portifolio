import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import CardCertificado from '../../components/CardCertificate';
import certificationsData from '../../static/certifications.json';
import formationsData from '../../static/formations.json';
import CardFormation from '../../components/CardFormacao';
import styles from './Certificates.module.css';

interface Certificate {
  id: number;
  courseName: string;
  startedAt: string;
  finishedAt: string;
  categoryCode: string;
  imageUrl: string;
  certificateUrl: string;
}
interface Formations {
  id: number;
  name: string;
  conclusion: string;
  certificate: string;
  area: string;
  materias: string[];
}

const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [formations, setFormations] = useState<Formations[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Todos',
  ]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCertificates(certificationsData);
    setFormations(formationsData);

    const uniqueCategories = [
      ...new Set(certificationsData.map(cert => cert.categoryCode)),
    ];
    setCategories(['Todos', ...uniqueCategories]);
  }, []);

  const handleCategoryChange = (category: string) => {
    if (category === 'Todos') {
      // Se "Todos" for selecionado, desativa outras categorias e ativa apenas "Todos"
      setSelectedCategories(['Todos']);
    } else {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(cat => cat !== category) // Remove categoria se já estiver selecionada
        : [...selectedCategories.filter(cat => cat !== 'Todos'), category]; // Adiciona categoria, removendo "Todos"

      setSelectedCategories(
        updatedCategories.length > 0 ? updatedCategories : ['Todos'] // Se não houver nenhuma selecionada, ativa "Todos"
      );
    }
  };

  const filteredCertificates = certificates.filter(
    cert =>
      selectedCategories.includes('Todos') ||
      selectedCategories.includes(cert.categoryCode)
  );

  return (
    <Container maxWidth="lg" className={styles.certificatesContainer}>
      {/* Header Section */}
      <Box className={styles.headerSection}>
        <Typography variant="h3" component="h1" className={styles.pageTitle}>
          Certificações
        </Typography>
        <Typography variant="h6" className={styles.pageSubtitle}>
          Minha jornada de aprendizado e certificações
        </Typography>
      </Box>

      {/* Formações Section */}
      <Box className={styles.sectionTitle}>
        <Typography variant="h4" component="h2">
          Cursos e Formações
        </Typography>
      </Box>
      
      <Grid container spacing={4} className={styles.contentGrid}>
        {formations.map(formation => (
          <Grid item key={formation.id} xs={12} sm={6} md={4}>
            <CardFormation {...formation} />
          </Grid>
        ))}
      </Grid>

      {/* Micro Certificações Section */}
      <Box className={styles.sectionTitle}>
        <Typography variant="h4" component="h2">
          Micro Certificações
        </Typography>
      </Box>

      {/* Filter Section */}
      <Box className={styles.filterSection}>
        <Box className={styles.filterButtons}>
          {categories.map(category => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category) ? 'contained' : 'outlined'
              }
              onClick={() => handleCategoryChange(category)}
              className={`${styles.filterButton} ${
                selectedCategories.includes(category) ? styles.active : ''
              }`}
            >
              {category}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Certificados Grid */}
      <Grid container spacing={4} className={styles.certificatesGrid}>
        {filteredCertificates.map(certificado => (
          <Grid item key={certificado.id} xs={12} sm={6} md={4}>
            <CardCertificado {...certificado} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certificates;
