// next-pwa.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false,
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts',
                expiration: {
                    maxEntries: 4,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                },
            },
        },
        {
            urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'font-awesome',
                expiration: {
                    maxEntries: 1,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                },
            },
        },
        {
            urlPattern: /\/api\/.*\/*.*/i,
            handler: 'NetworkFirst',
            method: 'GET',
            options: {
                cacheName: 'api-cache',
                expiration: {
                    maxEntries: 200,
                    maxAgeSeconds: 24 * 60 * 60, // 1 day
                },
                networkTimeoutSeconds: 10, // fall back to cache after 10s
            },
        },
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico|avif|woff2?|eot|ttf|otf|mp4|webm|mp3|wav|m4a|aac|oga|ogg)$/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'static-assets',
                expiration: {
                    maxEntries: 1000,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
            },
        },
        {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'cdnjs-cache',
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
            },
        },
        {
            urlPattern: /^https:\/\/.*\.(?:googleapis|gstatic)\.com\/.*$/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-cache',
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                },
            },
        },
        {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*$/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'jsdelivr-cache',
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                },
            },
        },
    ],
});

module.exports = withPWA({
    reactStrictMode: true,
});
