import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
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
    setIsActive(prev => !prev);
  };

  return (
    <Box
      className={`${styles.skillItem} ${isActive ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={icon} alt={name} className={styles.icon} />
      <Box className={styles.textContainer}>
        <Typography variant="body1" className={styles.skillName}>
          {name}
        </Typography>
        <Typography variant="body2" className={styles.skillType}>
          {type}
        </Typography>
      </Box>
      <Box className={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          index < safeRating ? (
            <StarIcon key={index} className="filled" />
          ) : (
            <StarBorderIcon key={index} className="empty" />
          )
        ))}
      </Box>
    </Box>
  );
};

export default SkillItem;
