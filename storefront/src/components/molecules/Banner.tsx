import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@/src/components/atoms/Link';

interface BannerProps {
  imageUrl: string;
  text: string;
  link: string;
  alt: string;
}

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const BannerText = styled.h2`
  position: relative;
  color: #fff;
  font-size: 2rem;
  z-index: 1;
  text-align: center;
  padding: 0 1rem;
`;

const Banner: React.FC<BannerProps> = ({ imageUrl, text, link, alt }) => {
  return (
    <Link href={link} aria-label={alt}>
      <BannerContainer style={{ backgroundImage: `url(${imageUrl})` }}>
        <BannerOverlay />
        <BannerText>{text}</BannerText>
      </BannerContainer>
    </Link>
  );
};

export default Banner; 