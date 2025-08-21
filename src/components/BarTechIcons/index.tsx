import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styles from './BarTechIcons.module.css';
import iconsData from '../../static/codeIcons.json';

const BarTechIcons: React.FC = () => {
  const [icons, setIcons] = useState<
    {
      name: string;
      url: string;
    }[]
  >([]);
  useEffect(() => {
    const allIcons = [...iconsData, ...iconsData];
    setIcons(allIcons);
  }, []);

  return (
    <Box className={styles.techContainer}>
      <Box className={styles.iconTrack}>
        {icons.map(icon => (
          <img
            key={icon.name}
            src={icon.url}
            alt={icon.name}
            className={styles.techIcon}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BarTechIcons;
