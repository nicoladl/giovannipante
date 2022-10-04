importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11da31bed40b27f104d6.js",
    "revision": "8671dbfa000609a680f6512e9fc1e8eb"
  },
  {
    "url": "/_nuxt/7b29d0b9f229465dc03c.js",
    "revision": "b44fa23eac1202f46951dcc95d651d0f"
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
    "url": "/_nuxt/cbd06d7e9f1bf0c73863.js",
    "revision": "fbe3fb7b50621f01462f4dee82b997bf"
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
