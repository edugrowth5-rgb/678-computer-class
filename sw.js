const cacheName = 'it-smart-v' + new Date().getTime(); // Har baar naya version generate karega
const assets = [
  'index.html',
  'S678style.css',
  'S678engine.js',
  'Sdata6.js',
  'Sdata7.js',
  'Sdata8.js',
  'manifest.json'
];

// Install & Skip Waiting (Turant naya worker active karein)
self.addEventListener('install', evt => {
  self.skipWaiting(); 
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activate & Cleanup (Purana cache delete karein)
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch Strategy: Network First (Pehle internet se check karein, nahi toh cache se)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fetch(evt.request).catch(() => caches.match(evt.request))
  );
});
