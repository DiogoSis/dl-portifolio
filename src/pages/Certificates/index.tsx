import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CardCertificado from "../../components/CardCertificate";
import certificationsData from "../../static/certifications.json";
import formationsData from "../../static/formations.json"
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
      setSelectedCategories(["Todos"]);
    } else {
      const updateCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories.filter (cat => cat !== "Todos"), category];

      setSelectedCategories(
        updateCategories.length > 0 ? updateCategories : ["Todos"]
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
      <Container>
        {/* animação */}
        <Box position="fixed" width="100%">
          <AnimatedBackground />
        </Box>

        {/* Formações */}
        <Typography variant="h3" marginTop={5}>
          Cursos e Formações
        </Typography>
        <Grid container spacing={4}>
          {formations.map((formations) => (
            <Grid item key={formations.id} xs={12} sm={6} md={4} >
              <CardFormation {...formations} />
            </Grid>
          ))}

        </Grid>

        {/* Cursos */}
        <Typography variant="h3" marginTop={2}>
          Cursos
        </Typography>

        {/* Checkbox de categorias */}
        <Box>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category}
            />
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
    </Container>
  );
};

export default Certificates;
