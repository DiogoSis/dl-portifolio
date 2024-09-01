import { Box } from '@mui/material';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { EffectCube, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: Promise<{ default: string }>[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const resolvedImages = await Promise.all(images);
      setLoadedImages(resolvedImages.map(img => img.default));
    };

    loadImages();
  }, [images])

  return (
    <Box className={styles.sliderContainer}>
      <Swiper 
        modules={[Pagination, EffectCube]}
        pagination={{clickable:true}}
        spaceBetween={5} 
        slidesPerView={1}
        effect='cube'
      >
        {loadedImages.map((image, index) => (
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
