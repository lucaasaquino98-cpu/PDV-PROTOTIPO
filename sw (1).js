/* PDV Fácil · service worker
   Não guarda nada em cache (sempre a versão mais nova do sistema).
   Serve só para o navegador reconhecer o PDV como app instalável
   e mostrar uma página simples se a internet cair ao abrir. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode!=='navigate')return;
  e.respondWith(fetch(e.request).catch(()=>new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sem conexão</title>'+
    '<body style="margin:0;height:100vh;display:grid;place-items:center;background:#0b1220;color:#fff;font-family:system-ui,sans-serif;text-align:center">'+
    '<div><h1 style="margin:0 0 8px">Sem conexão</h1><p style="margin:0;color:#94a3b8">Verifique a internet e tente abrir novamente.</p></div>',
    {headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
