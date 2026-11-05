self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  // Deja pasar todo directo a internet sin guardar memoria vieja
});
