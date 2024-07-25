/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const pwaConfig = {
    dest: 'public',

    disable: false,
    // disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    register: true,
    skipWaiting: true,
};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "aitoolsbazaar.s3.amazonaws.com",
            "aitoolsbazaar-images.s3.ap-south-1.amazonaws.com",
            "aitoolsbazaar-images.s3.amazonaws.com"
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Allow global CSS imports from node_modules
    cssModules: {
        mode: "global",
        allowGlobal: true,
    },
};

export default withPWA(pwaConfig)(nextConfig);
