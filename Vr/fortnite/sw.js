// Simple service worker for offline caching of Battle Isle assets
const CACHE_NAME = 'cq-battle-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon.svg'
];
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp=>resp||fetch(e.request)));
});
