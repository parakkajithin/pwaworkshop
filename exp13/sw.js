var cacheName='ppCache';
var filesToCache=[
    '/',
    '/logo.png',
    '/app.js',
    '/index.html',
    '/jquery-3.5.0.min.js',
    '/bs/css/bootstrap.min.css',
    'bs/js/bootstrap.min.js'
];
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
  
  /* Serve cached content when offline */
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });