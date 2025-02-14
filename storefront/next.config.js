/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    pageExtensions: ['page.tsx', 'page.ts'],
    swcMinify: true,
    reactStrictMode: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend-production-9170.up.railway.app',
                port: '',
                pathname: '/assets/**',
            },
        ],
    },
};

module.exports = nextConfig;
