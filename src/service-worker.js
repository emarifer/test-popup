self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// install new service worker when ok, then reload page.
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    };
});
