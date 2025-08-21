import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  Grid,
  Card,
  CardMedia,
  Fade,
  Backdrop,
} from '@mui/material';
import {
  Close as CloseIcon,
  NavigateBefore as PrevIcon,
  NavigateNext as NextIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './InteractiveGallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface InteractiveGalleryProps {
  images: Promise<{ default: string }>[];
  title?: string;
}

const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({
  images,
  title = 'Galeria',
}) => {
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);

  // Carregar imagens dinamicamente
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = images.map(async (imgPromise, index) => {
          const module = await imgPromise;
          return {
            src: module.default,
            alt: `Imagem ${index + 1}`,
            title: `Foto ${index + 1}`,
            description: `Momento especial #${index + 1}`,
          };
        });

        const resolvedImages = await Promise.all(imagePromises);
        setLoadedImages(resolvedImages);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [images]);

  const handlePrevImage = useCallback(() => {
    if (selectedImage === null) return;
    const newIndex =
      selectedImage === 0 ? loadedImages.length - 1 : selectedImage - 1;
    setSelectedImage(newIndex);
    setZoom(1);
  }, [selectedImage, loadedImages.length]);

  const handleNextImage = useCallback(() => {
    if (selectedImage === null) return;
    const newIndex =
      selectedImage === loadedImages.length - 1 ? 0 : selectedImage + 1;
    setSelectedImage(newIndex);
    setZoom(1);
  }, [selectedImage, loadedImages.length]);

  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  }, []);

  // Navegação por teclado
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!isModalOpen || selectedImage === null) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'Escape':
          handleCloseModal();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
      }
    },
    [isModalOpen, selectedImage, handlePrevImage, handleNextImage, handleZoomIn, handleZoomOut]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    setZoom(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setZoom(1);
  };

  if (loading) {
    return (
      <Box className={styles.loadingContainer}>
        <Typography>Carregando galeria...</Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.galleryContainer}>
      <Typography variant="h5" className={styles.galleryTitle}>
        {title}
      </Typography>

      {/* Grid de Imagens */}
      <Grid container spacing={2} className={styles.imageGrid}>
        {loadedImages.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className={styles.imageCard}
                onClick={() => handleImageClick(index)}
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt={image.alt}
                  className={styles.thumbnailImage}
                />
                <Box className={styles.imageOverlay}>
                  <ZoomInIcon className={styles.zoomIcon} />
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal da Imagem */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth={false}
        fullScreen
        className={styles.imageModal}
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
            },
          },
        }}
      >
        <Box className={styles.modalContent}>
          {/* Controles Superiores */}
          <Box className={styles.modalControls}>
            <Box className={styles.imageInfo}>
              {selectedImage !== null && (
                <>
                  <Typography variant="h6" className={styles.imageTitle}>
                    {loadedImages[selectedImage]?.title}
                  </Typography>
                  <Typography variant="body2" className={styles.imageCounter}>
                    {selectedImage + 1} de {loadedImages.length}
                  </Typography>
                </>
              )}
            </Box>

            <Box className={styles.controlButtons}>
              <IconButton onClick={handleZoomOut} className={styles.controlBtn}>
                <ZoomOutIcon />
              </IconButton>
              <Typography className={styles.zoomLevel}>
                {Math.round(zoom * 100)}%
              </Typography>
              <IconButton onClick={handleZoomIn} className={styles.controlBtn}>
                <ZoomInIcon />
              </IconButton>
              <IconButton onClick={handleCloseModal} className={styles.closeBtn}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Imagem Principal */}
          <Box className={styles.imageContainer}>
            <AnimatePresence mode="wait">
              {selectedImage !== null && (
                <motion.img
                  key={selectedImage}
                  src={loadedImages[selectedImage]?.src}
                  alt={loadedImages[selectedImage]?.alt}
                  className={styles.modalImage}
                  style={{ transform: `scale(${zoom})` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: zoom }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  draggable={false}
                />
              )}
            </AnimatePresence>

            {/* Botões de Navegação */}
            <IconButton
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevImage}
            >
              <PrevIcon />
            </IconButton>

            <IconButton
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNextImage}
            >
              <NextIcon />
            </IconButton>
          </Box>

          {/* Informações da Imagem */}
          {selectedImage !== null && loadedImages[selectedImage]?.description && (
            <Fade in={isModalOpen}>
              <Box className={styles.imageDescription}>
                <Typography variant="body1">
                  {loadedImages[selectedImage]?.description}
                </Typography>
              </Box>
            </Fade>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default InteractiveGallery;
