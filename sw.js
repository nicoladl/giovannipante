importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4588074d749d2a411391.js",
    "revision": "c5a073abcb6a7f0a634f733dd818abc9"
  },
  {
    "url": "/_nuxt/7e8ce8c105734b32f4e6.js",
    "revision": "30e300653c57742a1f83a757124da37b"
  },
  {
    "url": "/_nuxt/9971b710cecccdad3961.js",
    "revision": "5e40e019e0fa17a4bbd7a481520b126f"
  },
  {
    "url": "/_nuxt/ae7911c1fe3be9badfc8.js",
    "revision": "63f476b1966baae656f694c425cf929a"
  },
  {
    "url": "/_nuxt/f87971dc40b136f4b75d.js",
    "revision": "2c920fdc27ef5ed3d80a4efca0818199"
  }
], {
  "cacheId": "giovannipante",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
