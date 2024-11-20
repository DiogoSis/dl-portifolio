import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CardCertificado from "../../components/CardCertificate";
import certificationsData from "../../static/certifications.json";
import formationsData from "../../static/formations.json";
import { AnimatedBackground } from "../../components/AnimateBackgound";
import CardFormation from "../../components/CardFormacao";

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Todos"]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCertificates(certificationsData);
    setFormations(formationsData);

    const uniqueCategories = [
      ...new Set(certificationsData.map((cert) => cert.categoryCode)),
    ];
    setCategories(["Todos", ...uniqueCategories]);
  }, []);

  const handleCategoryChange = (category: string) => {
    if (category === "Todos") {
      // Se "Todos" for selecionado, desativa outras categorias e ativa apenas "Todos"
      setSelectedCategories(["Todos"]);
    } else {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category) // Remove categoria se já estiver selecionada
        : [...selectedCategories.filter((cat) => cat !== "Todos"), category]; // Adiciona categoria, removendo "Todos"

      setSelectedCategories(
        updatedCategories.length > 0 ? updatedCategories : ["Todos"] // Se não houver nenhuma selecionada, ativa "Todos"
      );
    }
  };

  const filteredCertificates = certificates.filter(
    (cert) =>
      selectedCategories.includes("Todos") ||
      selectedCategories.includes(cert.categoryCode)
  );

  return (
    <Container>
      {/* Animação */}
      <Box position="fixed" width="100%">
        <AnimatedBackground />
      </Box>

      {/* Formações */}
      <Typography variant="h3" marginTop={5}>
        Cursos e Formações
      </Typography>
      <Grid container spacing={4}>
        {formations.map((formation) => (
          <Grid item key={formation.id} xs={12} sm={6} md={4}>
            <CardFormation {...formation} />
          </Grid>
        ))}
      </Grid>

      {/* Cursos */}
      <Typography variant="h3" marginTop={2}>
        Micro Certificações
      </Typography>

      {/* Categorias */}
      <Box display="flex" flexWrap="wrap" marginTop={2}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategories.includes(category) ? "contained" : "outlined"
            }
            onClick={() => handleCategoryChange(category)}
            sx={{
              marginRight: 1,
              marginBottom: 1,
              textTransform: "none",
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Renderizar os certificados filtrados */}
      <Grid container paddingTop={8} spacing={4} alignItems="center">
        {filteredCertificates.map((certificado) => (
          <Grid item key={certificado.id} xs={12} sm={6} md={4}>
            <CardCertificado {...certificado} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certificates;
