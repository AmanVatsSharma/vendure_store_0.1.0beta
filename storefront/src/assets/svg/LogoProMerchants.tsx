/* @Web - Premium Modern Logo for ProMerchants using Image */
import React from 'react';
import Image from 'next/image';

interface SvgProps {
    width?: number;
    height?: number;
    className?: string;
}

export const LogoProMerchants: React.FC<SvgProps> = ({ width, height, className }) => {
    // If height is not provided, calculate it based on the width to maintain aspect ratio
    const computedHeight = height || (width ? Math.round(width * (24 / 200)) : 24);
    
    return (
        <Image
            src="https://backend-production-9170.up.railway.app/assets/preview/b9/logo_010_2_nbg__preview.png?preset=medium"
            alt="AWE Logo"
            width={width || 200}
            height={computedHeight}
            style={{
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block'
            }}
            className={className ?? ''}
            priority // Load this image immediately as it's important for branding
        />
    );
};
