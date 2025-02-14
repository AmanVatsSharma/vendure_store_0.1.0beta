import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ProductCard } from './DesktopNavigation/ProductsSellout/ProductCard';
import { CurrencyCode } from '@/src/zeus';

// Define types for product and collection
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  // ... any additional properties
}

interface Collection {
  id: string;
  name: string;
  products: Product[];
}

interface FeaturedScrollableProductsProps {
  collection: Collection;
}

// Styled components using Emotion
const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  color: #f16717; /* primary brand color */
  margin-bottom: 10px;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 10px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f16717;
    border-radius: 4px;
  }
`;

// The FeaturedScrollableProducts component
const FeaturedScrollableProducts: FC<FeaturedScrollableProductsProps> = ({ collection }) => {
  return (
    <Container>
      <Title>{collection.name}</Title>
      <ScrollContainer>
        {collection.products.map((product) => {
          const variant = {
            product: {
              name: product.name,
              slug: product.id,
              featuredAsset: product.imageUrl ? { preview: product.imageUrl } : undefined,
            },
            id: product.id,
            priceWithTax: product.price,
            currencyCode: CurrencyCode.USD,
            name: product.name,
            featuredAsset: product.imageUrl ? { preview: product.imageUrl } : undefined,
          };
          return <ProductCard key={product.id} variant={variant} />;
        })}
      </ScrollContainer>
    </Container>
  );
};

export default FeaturedScrollableProducts; 