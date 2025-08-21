import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './SkillItem.module.css';

interface SkillItemProps {
  name: string;
  icon: string;
  type: string;
  rating: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, type, rating }) => {
  const [isActive, setIsActive] = useState(false);
  const safeRating = Math.max(1, Math.min(rating, 5));

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    setIsActive(prev => !prev); // Alterna o estado ativo
  };

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      mb={2}
      className={`${styles.skillItem} ${isActive ? styles.active : ''}`} // Adicionando a classe active
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Adiciona o evento de clique
    >
      <img src={icon} alt={name} className={styles.icon} />
      <Box className={styles.textContainer}>
        <Typography variant="body1" style={{ fontWeight: 'bolder' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="white">
          {type}
        </Typography>
      </Box>
      <Box className={styles.starContainer}>
        {[...Array(safeRating)].map((_, index) => (
          <StarIcon key={index} style={{ color: '#FFD700' }} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillItem;
