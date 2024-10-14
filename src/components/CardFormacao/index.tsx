import React from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import styles from "./CardFormation.module.css";
import SchoolIcon from '@mui/icons-material/School';

interface FormationProps {
  name: string;
  conclusion: string;
  certificate: string;
  area: string;
  materias: string[];
}

const CardFormation: React.FC<FormationProps> = ({
  name,
  conclusion,
  certificate,
  area,
  materias,
}) => {
  return (
    <Box className={styles.card}>
      <Typography mb={2} className={styles.nome}>{name}</Typography>
      <Typography mb={2} className={styles.area}>{area}</Typography>

      <Box className={styles.dates}>
        <Typography variant="body2">Conclusão: {conclusion}</Typography>
      </Box>

      <Box>
        <Typography variant="body1" className={styles.materiasTitle}>Matérias:</Typography>
        <List className={styles.materiasList}>
            {materias.map((materia, index) => (
            <ListItem key={index} className={styles.materiaItem}>
                {materia}
            </ListItem>
            ))}
        </List>
      </Box>
      <Button 
          variant="contained" 
          size="small"
          href={certificate} 
          target="_blank" 
          className={styles.link}
        >
          <SchoolIcon className={styles.icon}/>
          Certificado
        </Button>
    </Box>
  );
};

export default CardFormation;
