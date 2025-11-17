const CACHE_NAME = 'portfolio-v2.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css', 
  '/js/script.js',
  '/images/Mifoto1.png',
  '/images/congreso.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// NUEVO: Limpia caches viejos
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});