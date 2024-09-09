import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./CardCertificado.module.css";
import SchoolIcon from '@mui/icons-material/School';


interface CertificadoProps {
    id: number;
    courseName: string;
    startedAt: string;
    finishedAt: string;
    categoryCode: string;
    imageUrl: string;
    certificateUrl: string;
}

const CardCertificado: React.FC<CertificadoProps> = ({ 
    courseName,
    startedAt,
    finishedAt,
    categoryCode,
    imageUrl,
    certificateUrl,
}) => {
    return (
      <Box className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
        <Typography style={{ fontWeight: "bold" }} className={styles.nome}>
          {courseName}
        </Typography>
        <Typography className={styles.categoria}>
          {categoryCode}
        </Typography>
        <Box className={styles.dates}>
          <Typography variant="body2">Início: {startedAt}</Typography>
          <Typography variant="body2">Fim: {finishedAt}</Typography>
        </Box>
        <Button 
          variant="contained" 
          size="small"
          href={certificateUrl} 
          target="_blank" 
          className={styles.link}
        >
          <SchoolIcon className={styles.icon}/>
          Certificado
        </Button>
      </Box>
    );
};

export default CardCertificado;
