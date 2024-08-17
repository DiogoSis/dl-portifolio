import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { imageGalery } from '../../exports/images';
import { EffectCube, Pagination } from 'swiper/modules';

const ImageSlider: React.FC = () => {

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(imageGalery);
      setImages(loadedImages.map (img => img.default))
    }
    loadImages()
  }, [])

  return (
    <Box className={styles.sliderContainer}>
      <Swiper 
        modules={[Pagination, EffectCube]}
        pagination={{clickable:true}}
        spaceBetween={5} 
        slidesPerView={1}
        effect='cube'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box className={styles.imageContainer}>
              <img 
                src={image} 
                alt={`slide-${index}`} 
                className={styles.image} 
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
