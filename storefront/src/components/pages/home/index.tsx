import styled from '@emotion/styled';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { Stack, ContentContainer } from '@/src/components/atoms';
import { HomePageSliders } from '@/src/components/organisms/HomePageSliders';
import { Hero } from '@/src/components/organisms/Hero';
import { Layout } from '@/src/layouts';
import type { getStaticProps } from './props';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import FeaturedScrollableProducts from '@/src/components/organisms/FeaturedScrollableProducts';

const Main = styled(Stack)`
    padding: 0 0 4rem 0;
`;

const SectionHeader = styled.div`
   margin-bottom: 1rem;
   h2 {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.text.main};
   }
`;

const FeaturedGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 2rem;
   padding: 2rem 0;
`;

const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease-in-out;
    &:hover {
         transform: translateY(-5px);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

const MotionCard = motion(Card);

const FeaturedProductCard: React.FC<{ product: any }> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <MotionCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      <ImageWrapper>
        <img
          src={product.productAsset?.preview}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ImageWrapper>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '0.5rem',
            }}
          >
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              {product.description && <SafeHtml html={product.description} />}
              {product.price && (
                <PriceTag>${Number(product.price).toFixed(2)}</PriceTag>
              )}
              {product.rating && (
                <Ratings>{'⭐'.repeat(Math.round(product.rating))}</Ratings>
              )}
              <ActionButtons>
                <ViewButton
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/products/${product.slug}`;
                  }}
                >
                  View Details
                </ViewButton>
                <CartButton
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Added to cart');
                  }}
                >
                  Add to Cart
                </CartButton>
              </ActionButtons>
            </ProductDetails>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionCard>
  );
};

export const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = props => {
    const { t } = useTranslation('homepage');
    const testimonials = [
         { quote: 'This store changed my shopping experience!', name: 'Alice' },
         { quote: 'Amazing products and stellar service.', name: 'Bob' },
         { quote: 'Modern, sleek design and easy navigation!', name: 'Carol' },
    ];

    return (
        <Layout navigation={props.navigation} categories={props.categories} pageTitle={t('seo.home')}>
            <Main w100 column gap="4rem">
                <Hero
                    cta={t('hero-cta')}
                    h1={t('hero-h1')}
                    h2={t('hero-h2')}
                    desc={t('hero-p')}
                    link="/collections/all"
                    image={
                        props.products?.find(p => p.slug.includes('laptop'))?.productAsset?.preview ??
                        (props.products[0]?.productAsset?.preview || '')
                    }
                />
                <ContentContainer>
                    <HomePageSliders sliders={props.sliders} seeAllText={t('see-all')} />
                </ContentContainer>
                {props.sliders && props.sliders.length > 0 && props.sliders[0] && (
                    <ContentContainer>
                        <FeaturedScrollableProducts collection={props.sliders[0]} />
                    </ContentContainer>
                )}
                {props.products && props.products.length > 0 && (
                    <ContentContainer>
                        <SectionHeader>
                            <h2>{t('featured-products', 'Featured Products')}</h2>
                        </SectionHeader>
                        <FeaturedGrid>
                            {props.products.map((product) => (
                                <FeaturedProductCard key={product.slug} product={product} />
                            ))}
                        </FeaturedGrid>
                    </ContentContainer>
                )}
                <ContentContainer>
                    <SectionHeader>
                        <h2>{t('testimonials', 'What our customers say')}</h2>
                    </SectionHeader>
                    <TestimonialGrid>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index}>
                                <p>"{testimonial.quote}"</p>
                                <strong>{testimonial.name}</strong>
                            </TestimonialCard>
                        ))}
                    </TestimonialGrid>
                </ContentContainer>
            </Main>
        </Layout>
    );
};

const TestimonialGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem 0;
`;

const TestimonialCard = styled.div`
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    text-align: center;
`;

const ImageWrapper = styled.div`
   width: 100%;
   height: 200px;
   overflow: hidden;
   border-radius: 8px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ratings = styled.div`
  margin: 0.5rem 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CartButton = styled.button`
  background: ${({ theme }) => (theme as any).colors?.secondary || '#0070f3'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;
  &:hover {
      background: ${({ theme }) => (theme as any).colors?.secondaryDark || '#005bb5'};
  }
`;

const ProductName = styled.h3`
   font-size: 1.2rem;
   font-weight: 600;
   margin: 0.5rem 0;
   color: ${({ theme }) => theme.text.main};
`;

const PriceTag = styled.span`
   display: block;
   font-size: 1rem;
   font-weight: 500;
   color: ${({ theme }) => (theme as any).colors?.primary ?? '#f16717'};
   margin-bottom: 0.5rem;
`;

const ViewButton = styled.button`
   background: ${({ theme }) => (theme as any).colors?.primary ?? '#f16717'};
   color: #fff;
   border: none;
   border-radius: 4px;
   padding: 0.5rem 1rem;
   cursor: pointer;
   font-size: 0.9rem;
   transition: background 0.2s ease;
   &:hover {
       background: ${({ theme }) => (theme as any).colors?.primaryDark ?? '#d1560f'};
   }
`;

const StyledSafeHtml = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text?.secondary || '#666'};
  margin: 0.5rem 0;
`;

const SafeHtml: React.FC<{ html: string }> = ({ html }) => {
  return <StyledSafeHtml dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
};
