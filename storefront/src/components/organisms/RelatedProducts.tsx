import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ProductCard } from './DesktopNavigation/ProductsSellout/ProductCard';
import { CurrencyCode } from '@/src/zeus';

// Define a common Product type. Note: In a future refactor, consider extracting this type into a shared file to avoid duplication.
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

// Styled components (duplicated from FeaturedScrollableProducts - consider merging into a shared component later)
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

// The RelatedProducts component
const RelatedProducts: FC<RelatedProductsProps> = ({ products, title = "Related Products" }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ScrollContainer>
        {products.map((product) => {
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

export default RelatedProducts; 