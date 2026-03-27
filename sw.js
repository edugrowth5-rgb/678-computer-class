const cacheName = 'sit-learning-v1';
const assets = [
  'index.html',
  'S678style.css',
  'S678engine.js',
  'Sdata6.js',
  'Sdata7.js',
  'Sdata8.js',
  'manifest.json'
];

// Install Service Worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching all assets');
      cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
