// workbox-entry.js – central re-export file (edit to include only needed parts)

export * from 'workbox-core';
export * from 'workbox-precaching';
export * from 'workbox-routing';
export * from 'workbox-strategies';
export * from 'workbox-expiration';
export * from 'workbox-cacheable-response';

// Optional: named exports for convenience
export const {
  precacheAndRoute,
  cleanupOutdatedCaches,
  matchPrecache
} = await import('workbox-precaching');

export const { registerRoute } = await import('workbox-routing');

export const {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst
} = await import('workbox-strategies');

export const { ExpirationPlugin } = await import('workbox-expiration');

export const { CacheableResponsePlugin } = await import('workbox-cacheable-response');

export const { clientsClaim } = await import('workbox-core');