if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ege2023-bbe9929c.js",revision:null},{url:"assets/index-73b2fa91.css",revision:null},{url:"assets/index-bd3b7e8c.js",revision:null},{url:"index.html",revision:"5fc6d9313e94a26401dccdc45620f1b2"},{url:"registerSW.js",revision:"2457d5cfe52a8039a51727ff32bb9936"},{url:"pwa-192x192.png",revision:"772127e74834e8db183a3e7b156aa5d2"},{url:"pwa-512x512.png",revision:"466f0ded971edc18c5319ec0a07f290e"},{url:"manifest.webmanifest",revision:"f5fba994ce83ea2c813407b8ec2c9ddd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
