import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@/src/components/atoms/Link';

interface Collection {
  name: string;
  slug: string;
}

interface HeaderCollectionsMenuProps {
  collections: Collection[];
}

const MenuContainer = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background: transparent;
`;

const CollectionItem = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.gray ? props.theme.gray(800) : '#333'};
  &:hover {
    color: ${props => props.theme.accent || '#f16717'};
  }
`;

const HeaderCollectionsMenu: React.FC<HeaderCollectionsMenuProps> = ({ collections }) => {
  return (
    <MenuContainer aria-label="Header Collections Menu">
      {collections.map((collection) => (
        <CollectionItem key={collection.slug}>
          <Link href={`/collections/${collection.slug}`} aria-label={collection.name}>
            {collection.name}
          </Link>
        </CollectionItem>
      ))}
    </MenuContainer>
  );
};

export default HeaderCollectionsMenu; 