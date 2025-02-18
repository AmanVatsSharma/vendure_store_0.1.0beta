import { optimizeImage } from '@/src/util/optimizeImage';
import styled from '@emotion/styled';
import { ImgHTMLAttributes, forwardRef } from 'react';

type ImageType = ImgHTMLAttributes<HTMLImageElement> & {
    size: 'thumbnail' | 'tile' | 'popup' | 'detail' | 'full' | 'thumbnail-big';
};

export const ProductImage = forwardRef((props: ImageType, ref: React.ForwardedRef<HTMLImageElement>) => {
    const { size, src, ...rest } = props;
    const better_src = optimizeImage({ size, src });
    return <StyledProductImage {...rest} src={better_src} size={size} ref={ref} />;
});

type GridImageProps = ImgHTMLAttributes<HTMLImageElement> & { 
    isLandscape?: boolean;
};

export const ProductImageGrid = forwardRef(
    (props: GridImageProps, ref: React.ForwardedRef<HTMLImageElement>) => {
        const { src, isLandscape, ...rest } = props;
        const better_src = optimizeImage({ size: 'popup', src });
        return <StyledProductImageGrid {...rest} src={better_src} ref={ref} isLandscape={isLandscape} />;
    },
);

const StyledProductImageGrid = styled.img<{ isLandscape?: boolean }>`
    width: 100%;
    height: 48rem;
    object-fit: ${p => (p.isLandscape ? 'cover' : 'contain')};
    object-position: center;
    flex: 0 0 auto;
    background-color: ${({ theme }) => theme.imageBackground || '#f1f1f1'};
    transition: transform 0.3s ease;
    ${p => p.isLandscape && 'transform: scale(1.05);'}
`;

export const StyledProductImage = styled.img<{
    size: 'thumbnail' | 'tile' | 'popup' | 'detail' | 'full' | 'thumbnail-big';
}>`
    height: ${p =>
        p.size === 'tile'
            ? '36rem'
            : p.size === 'popup'
              ? '48rem'
              : p.size === 'detail'
                ? '60rem'
                : p.size === 'thumbnail-big'
                  ? '16rem'
                  : '8rem'};
    width: ${p =>
        p.size === 'tile'
            ? '24rem'
            : p.size === 'popup'
              ? '32rem'
              : p.size === 'detail'
                ? '52rem'
                : p.size === 'thumbnail-big'
                  ? '16rem'
                  : '8rem'};
    object-fit: contain;
    object-position: center;
    flex: 0 0 auto;
    ${({ theme }) => `border-radius: ${theme.borderRadius}`}
`;
