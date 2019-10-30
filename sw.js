importScripts('/giovannipante/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/giovannipante/_nuxt/7e8ce8c105734b32f4e6.js",
    "revision": "30e300653c57742a1f83a757124da37b"
  },
  {
    "url": "/giovannipante/_nuxt/81eb5248114e88aacdc4.js",
    "revision": "43e8076749b0e5cc72c83a73a8f86e59"
  },
  {
    "url": "/giovannipante/_nuxt/9971b710cecccdad3961.js",
    "revision": "5e40e019e0fa17a4bbd7a481520b126f"
  },
  {
    "url": "/giovannipante/_nuxt/c702226dac35a56fd268.js",
    "revision": "04ca27b3e2e4ce12e40649af39fa28af"
  },
  {
    "url": "/giovannipante/_nuxt/e77e3fe912710f5e77a6.js",
    "revision": "be0a7fec83092bf6c06167ab0bf71689"
  }
], {
  "cacheId": "giovannipante",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/giovannipante/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/giovannipante/.*'), workbox.strategies.networkFirst({}), 'GET')
