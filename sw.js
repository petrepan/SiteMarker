const initialCache = "initial-cache";
const assets = [
  "/",
  "/index.html",
  "/app/control.js",
  "/app/index.js",
  "/app/toggler.js",
  "/public/style.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap",
  "https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xMIzIXKMnyrYk.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/webfonts/fa-solid-900.woff2"
];

//install service worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(initialCache).then((cache) => {
      cache.addAll(assets);
    })
  );
});

//activate service worker
self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then(keys => {
            
        })
    )
});

//fetch service worker
self.addEventListener("fetch", (e) => {
    e.respondWith(
        catches.match(e.request).then(catchRes => {
            return catchRes || fetch(e.request);
        })
    )
});
