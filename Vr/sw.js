// Service worker minimal — juste pour satisfaire les critères d'installabilité
// (Quest Browser / Chrome exigent un SW avec un handler fetch actif).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
