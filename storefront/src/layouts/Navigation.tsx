import { LogoProMerchants } from '@/src/assets';
import { ContentContainer } from '@/src/components/atoms';
import { UserMenu } from '@/src/components/molecules/UserMenu';

import { Stack } from '@/src/components/atoms/Stack';
import styled from '@emotion/styled';
import { Link } from '@/src/components/atoms/Link';
import { useCart } from '@/src/state/cart';

// import { Cart } from '@/src/layouts/Cart';
// import { LanguageSwitcher } from '@/src/components';

import { CartDrawer } from '@/src/layouts/CartDrawer';
import { CollectionTileType, NavigationType } from '@/src/graphql/selectors';
import { RootNode } from '@/src/util/arrayToTree';
import { DesktopNavigation } from '@/src/components/organisms/DesktopNavigation';
import { SearchIcon, Menu, X } from 'lucide-react';
import { IconButton } from '@/src/components/molecules/Button';
import { AnnouncementBar } from '@/src/components/organisms/AnnouncementBar';
import { CategoryBar } from './CategoryBar';
import { NavigationSearch } from '@/src/components/organisms/NavgationSearch';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigationSearch } from '@/src/components/organisms/NavgationSearch/hooks';
import { useEffect, useRef, useState } from 'react';
import { Picker } from '@/src/components/organisms/Picker';
import { useTranslation } from 'next-i18next';

interface NavigationProps {
    navigation: RootNode<NavigationType> | null;
    categories: CollectionTileType[];
    changeModal?: {
        modal: boolean;
        channel: string;
        locale: string;
        country_name: string;
    };
}

export const Navigation: React.FC<NavigationProps> = ({ navigation, categories, changeModal }) => {
    const { t } = useTranslation('common');
    const { isLogged, cart } = useCart();
    const navigationSearch = useNavigationSearch();
    const searchRef = useRef<HTMLDivElement>(null);
    const searchMobileRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleOutsideClick = (event: MouseEvent) => {
        if (
            searchRef.current &&
            !searchRef.current.contains(event.target as Node) &&
            iconRef.current &&
            !iconRef.current.contains(event.target as Node) &&
            searchMobileRef.current &&
            !searchMobileRef.current.contains(event.target as Node)
        ) {
            navigationSearch.closeSearch();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // THIS SHOULD COME FROM PLUGIN
    const entries = [
        { text: t('announcements-bar')[0], href: '/collections/all' },
        { text: t('announcements-bar')[1], href: '/' },
        { text: t('announcements-bar')[2], href: '/' },
        { text: t('announcements-bar')[3], href: '/' },
    ];

    return (
        <>
            <AnnouncementBar entries={entries} secondsBetween={5} />
            <StickyContainer scrolled={isScrolled}>
                <ContentContainer>
                    <Stack itemsCenter justifyBetween gap="5rem" w100>
                        <Stack itemsCenter>
                            <Link ariaLabel={'Home'} href={'/'}>
                                <div style={{ maxWidth: '400px', flexShrink: 0 }}>
                                    <LogoProMerchants width={400} className='' />
                                </div>
                            </Link>
                            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} aria-label="Open mobile menu">
                                <Menu />
                            </MobileMenuButton>
                        </Stack>
                        <AnimatePresence>
                            {navigationSearch.searchOpen ? ( 
                                <DesktopNavigationContainer
                                    style={{ width: '100%' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    ref={searchRef}>
                                    <NavigationSearch {...navigationSearch} />
                                </DesktopNavigationContainer>
                            ) : (
                                <DesktopNavigation navigation={navigation} />
                            )}
                        </AnimatePresence>
                        <Stack gap="1rem" itemsCenter>
                            <IconButton
                                aria-label="Search products"
                                onClick={navigationSearch.toggleSearch}
                                ref={iconRef}>
                                <SearchIcon />
                            </IconButton>
                            <Picker changeModal={changeModal} />
                            <UserMenu isLogged={isLogged} />
                            <CartDrawer activeOrder={cart} />
                        </Stack>
                    </Stack>
                </ContentContainer>
                {navigationSearch.searchOpen && (
                    <MobileNavigationContainer ref={searchMobileRef}>
                        <NavigationSearch {...navigationSearch} />
                    </MobileNavigationContainer>
                )}
            </StickyContainer>

            {categories?.length > 0 ? <CategoryBar collections={categories} /> : null}

            <AnimatePresence>
                {isMobileMenuOpen && navigation && navigation.children && (
                    <MobileNavOverlay
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                    >
                        <CloseButton onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                            <X />
                        </CloseButton>
                        {navigation.children.map((child: any) => (
                            <MobileNavLink key={child.id} href={`/collections/${child.slug}`}>  
                                {child.name}
                            </MobileNavLink>
                        ))}
                    </MobileNavOverlay>
                )}
            </AnimatePresence>
        </>
    );
};

const StickyContainer = styled.nav<{ scrolled?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${p => p.scrolled ? '1rem' : '2rem'};
    transition: padding 0.3s ease;
    position: sticky;
    top: 0;
    background: ${p => p.theme.gray(0)};
    z-index: 2137;
    border-bottom: 1px solid ${p => p.theme.gray(100)};
    svg {
        max-height: 4rem;
    }
`;

const MobileNavigationContainer = styled.div`
    display: block;
    padding: 2.5rem 2rem 0 2rem;
    width: 100%;
    @media (min-width: ${p => p.theme.breakpoints.md}) {
        display: none;
    }
`;

const DesktopNavigationContainer = styled(motion.div)`
    display: none;
    @media (min-width: ${p => p.theme.breakpoints.md}) {
        display: block;
    }
`;

const MobileMenuButton = styled(IconButton)`
    display: none;
    @media (max-width: ${p => p.theme.breakpoints.md}) {
        display: block;
    }
`;

const MobileNavOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    z-index: 3000;
`;

const CloseButton = styled(IconButton)`
    align-self: flex-end;
    margin-bottom: 2rem;
`;

const MobileNavLink = styled(Link)`
    color: #fff;
    margin: 1rem 0;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
