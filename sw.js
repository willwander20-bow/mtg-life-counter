// Network-first with cache fallback: updates show up as soon as you are online,
// and the app still opens with no signal.
var CACHE = 'life-counter-v3';
var FILES = ['./', 'index.html', 'keywords.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    // cache: 'no-cache' makes the browser check with the server every time instead of
    // trusting the host's 10-minute cache, so a fresh publish shows up straight away.
    fetch(e.request, { cache: 'no-cache' }).then(function (res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () { return caches.match(e.request); })
  );
});
