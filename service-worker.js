var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './comparador.html',
        './converter.html',
        './elements.html',
        './generic.html',
        './OCR.html',
        './assets/css/main.css',
        './assets/css/main.css',
        './assets/css/noscript.css',
        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/main.js',
        './assets/js/util.js',
        './assets/images/AppIcons/29.png',
        './assets/images/AppIcons/40.png',
        './assets/images/AppIcons/57.png',
        './assets/images/AppIcons/60.png',
        './assets/images/AppIcons/80.png',
        './assets/images/AppIcons/87.png',
        './assets/images/AppIcons/114.png',
        './assets/images/AppIcons/120.png',
        './assets/images/AppIcons/180.png',
        './assets/images/AppIcons/512.png',
        './assets/images/AppIcons/1024.png',
    ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});