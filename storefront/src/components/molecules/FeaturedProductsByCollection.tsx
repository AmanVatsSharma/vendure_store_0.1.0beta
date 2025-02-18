import React from 'react';
import styled from '@emotion/styled';
import { ProductTile } from '@/src/components/molecules/ProductTile';

interface FeaturedProductsByCollectionProps {
  collectionName: string;
  products: any[]; // Ideally, you would replace 'any' with your Product type
}

const Container = styled.div`
  padding: 2rem 0;
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.main};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FeaturedProductsByCollection: React.FC<FeaturedProductsByCollectionProps> = ({ collectionName, products }) => {
  return (
    <Container>
      <Header>Featured {collectionName}</Header>
      <Grid>
        {products.map((product: any) => (
          <ProductTile key={product.slug} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProductsByCollection; 