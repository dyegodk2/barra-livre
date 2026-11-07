// cache offline: tudo do app fica no celular
const C='barralivre-0253b792f5',F=["index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","fonts/barlow-latin-400-normal.woff2","fonts/barlow-latin-500-normal.woff2","fonts/barlow-latin-600-normal.woff2","fonts/barlow-condensed-latin-600-normal.woff2","fonts/barlow-condensed-latin-700-normal.woff2","fonts/barlow-condensed-latin-800-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const nav=e.request.mode==='navigate';e.respondWith(caches.match(nav?'index.html':e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
