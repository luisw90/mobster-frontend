(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".mob__container"),l=async()=>{(await(await fetch("http://localhost:3000/mobs/1/members")).json()).forEach(o=>{c.innerHTML+=`
    <article>
      <div class="mob__card">
        <h2 class="mob__item-name">${o.name}</h2>
        <p class="mob___item-linkedin-link">${o.linkedin}</p>
        <p class="mob___item-github-link">${o.github}</p>
      </div>
    </article>`})};l();
