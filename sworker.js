self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(Cache=>{
            return Cache.addAll(["./","./style.css","./images/whats64.png","./images/whats512.png"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})