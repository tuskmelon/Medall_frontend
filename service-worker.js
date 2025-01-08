// service-worker.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Set the Workbox debug mode to see helpful messages during development
workbox.setConfig({ debug: true });

// Precache static assets during installation
workbox.precaching.precacheAndRoute([
    '/',
]);

// Cache images using CacheFirst strategy
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'images-cache',
    })
);

// Cache videos using CacheFirst strategy
workbox.routing.registerRoute(
    /\.(?:mp4|webm)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'videos-cache',
    })
);
