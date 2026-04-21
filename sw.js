
 const CACHE_NAME = "finance-app-v3";
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});    
