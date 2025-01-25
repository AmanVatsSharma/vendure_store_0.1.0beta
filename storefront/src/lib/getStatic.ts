// import nextI18nextConfig from '@/next-i18next.config';
import { i18n } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import resources from '@/src/@types/resources';
import { GetServerSidePropsContext } from 'next';
import { channels, DEFAULT_CHANNEL_SLUG, DEFAULT_LOCALE } from './consts';
import { getContext } from './utils';

export interface ContextModel<T = Record<string, string>> {
    params: { locale: string; channel: string } & T;
}

export interface StaticPropsContext {
    locale: string;
    channel: string;
}

export const getAllPossibleWithChannels = () => {
    try {
        const paths: { params: { locale: string; channel: string } }[] = [];
        // For build time, we only generate the default path
        paths.push({ 
            params: { 
                channel: DEFAULT_CHANNEL_SLUG, 
                locale: DEFAULT_LOCALE 
            } 
        });
        return paths;
    } catch (error) {
        console.warn('Error generating paths:', error);
        return [{ 
            params: { 
                channel: DEFAULT_CHANNEL_SLUG, 
                locale: DEFAULT_LOCALE 
            } 
        }];
    }
};

const getStandardLocalePaths = () => {
    return getAllPossibleWithChannels();
};

export const localizeGetStaticPaths = <T>(
    existingPaths: Array<{
        params: T;
    }>,
) => {
    try {
        const allPaths = getAllPossibleWithChannels();
        return allPaths;
    } catch (error) {
        console.warn('Error localizing paths:', error);
        return [{ 
            params: { 
                channel: DEFAULT_CHANNEL_SLUG, 
                locale: DEFAULT_LOCALE 
            } 
        }];
    }
};

export async function getI18nProps(ctx: ContextModel, ns: Array<keyof typeof resources> = ['common']) {
    try {
        const locale = ctx?.params?.locale || DEFAULT_LOCALE;
        const props = {
            ...(await serverSideTranslations(locale, ns)),
        };
        return props;
    } catch (error) {
        console.warn('Error getting i18n props:', error);
        return {};
    }
}

export function makeStaticProps(ns: Array<keyof typeof resources>) {
    return async function getStaticProps(ctx: ContextModel) {
        try {
            const context = getContext(ctx);
            const i18nProps = await getI18nProps(context, ns);
            return {
                props: i18nProps,
                context: {
                    locale: DEFAULT_LOCALE,
                    channel: DEFAULT_CHANNEL_SLUG,
                } as StaticPropsContext,
                revalidate: 60, // Revalidate every minute
            };
        } catch (error) {
            console.warn('Error in static props:', error);
            return {
                props: {},
                context: {
                    locale: DEFAULT_LOCALE,
                    channel: DEFAULT_CHANNEL_SLUG,
                } as StaticPropsContext,
                revalidate: 60,
            };
        }
    };
}

export function makeServerSideProps(ns: Array<keyof typeof resources>) {
    return async function getServerSideProps(ctx: GetServerSidePropsContext) {
        try {
            const context = getContext(ctx);
            const i18nProps = await getI18nProps(context, ns);
            return {
                props: i18nProps,
                context: {
                    locale: context.params?.locale || DEFAULT_LOCALE,
                    channel: context.params?.channel || DEFAULT_CHANNEL_SLUG,
                } as StaticPropsContext,
            };
        } catch (error) {
            console.warn('Error in server props:', error);
            return {
                props: {},
                context: {
                    locale: DEFAULT_LOCALE,
                    channel: DEFAULT_CHANNEL_SLUG,
                } as StaticPropsContext,
            };
        }
    };
}

export const getStaticPaths = () => ({
    fallback: true, // Changed to true to allow dynamic generation
    paths: [], // Generate no pages at build time
});
