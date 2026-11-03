// Service worker de RGV CASHFLOW: permite abrir la app sin conexión.
// Cambia el número de versión cuando quieras forzar que se renueve la copia guardada.
const CACHE = 'rgv-cashflow-v5';
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function store(req, res) {
  const copy = res.clone();
  caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Primero la red (así llegan las actualizaciones); sin conexión, la copia guardada.
    e.respondWith(
      fetch(req)
        .then((res) => store(req, res))
        .catch(() => caches.match(req).then((m) => m || caches.match('index.html')))
    );
  } else if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    // Tipografías: primero la copia guardada.
    e.respondWith(
      caches.match(req).then((m) => m || fetch(req).then((res) => store(req, res)))
    );
  }
});
