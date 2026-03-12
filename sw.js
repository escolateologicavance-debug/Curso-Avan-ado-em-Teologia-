const CACHE_NAME = 'avance-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './logo-192.png',
  './logo-512.png',
  './1.html',
  // Adicione aqui os demais (2.html, 3.html... até o 12.html)
];

// Instalação e Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercepta as requisições para servir o cache offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});