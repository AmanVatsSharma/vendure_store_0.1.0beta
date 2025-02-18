import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

interface Banner {
  imageUrl: string;
  text: string;
  link: string;
  alt: string;
}

interface FullWidthAutoScrollBannerProps {
  banners: Banner[];
  autoScrollInterval: number; // in seconds
}

const BannerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const BannerSlide = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const BannerTextOverlay = styled.div`
  position: relative;
  color: #fff;
  font-size: 2rem;
  z-index: 2;
  text-align: center;
  padding: 1rem;
  background: rgba(0,0,0,0.4);
  border-radius: 4px;
`;

const FullWidthAutoScrollBanner: React.FC<FullWidthAutoScrollBannerProps> = ({ banners, autoScrollInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = banners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, autoScrollInterval * 1000);
    return () => clearInterval(interval);
  }, [autoScrollInterval, total]);

  return (
    <BannerWrapper>
      <AnimatePresence>
        {banners.map((banner, index) =>
          index === currentIndex ? (
            <BannerSlide
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ backgroundImage: `url(${banner.imageUrl})` }}
            >
              <BannerTextOverlay>{banner.text}</BannerTextOverlay>
            </BannerSlide>
          ) : null
        )}
      </AnimatePresence>
    </BannerWrapper>
  );
};

export default FullWidthAutoScrollBanner; 