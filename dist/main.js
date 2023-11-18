(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("search-result");const c=document.createElement("img");c.src=t.image?t.image.medium:"./img/placeholder.jpg",c.alt="Poster",c.id="poster";const o=document.createElement("h3");o.textContent=t.name,o.classList.add("title"),o.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const a=document.createElement("div");a.textContent="Like";const i=document.createElement("div");i.textContent="3 likes";const l=document.createElement("button");l.textContent="Comment",l.classList.add("comment");const d=document.createElement("button");d.textContent="Reservations",d.classList.add("reservation");const r=document.createElement("div");r.classList.add("search-result-poster"),r.appendChild(c);const m=document.createElement("div");m.classList.add("search-result-name"),m.appendChild(o);const u=document.createElement("div");u.classList.add("reaction-action");const h=document.createElement("div");h.classList.add("likes"),h.appendChild(s),h.appendChild(a);const p=document.createElement("div");p.classList.add("reaction"),p.appendChild(h),p.appendChild(i);const v=document.createElement("div");v.classList.add("actions"),v.appendChild(l),v.appendChild(d),u.appendChild(p),u.appendChild(v),n.appendChild(r),n.appendChild(m),n.appendChild(u),e.appendChild(n)}const t=document.querySelector(".hamburger"),n=document.querySelector(".nav-items"),c=document.querySelector(".search-button"),o=document.querySelectorAll("#tvshows");function s(){t.classList.remove("active"),n.classList.remove("active")}c.addEventListener("click",(e=>{e.preventDefault(),async function(){try{const e=document.getElementById("search").value,t="https://api.tvmaze.com/";if(""!==e){return async function(e){const t=await e.json();return e.ok?(0===t.length?console.log("No movies found."):console.log(t),t):(console.log(t.Error),t.Error)}(await fetch(`${t}search/shows?q=${e}`))}console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),o.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),async function(t,n){try{console.log("Fetching TV shows...");const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json();console.log(n),n.forEach((t=>{e(undefined,t)}))}catch(e){return console.log(e),e}}()})))),async function(){const t=document.querySelector("#content");try{console.log("Fetching TV shows...");const n=await fetch("https://api.tvmaze.com/shows"),c=await n.json();return c.slice(0,15).forEach((n=>{e(t,n)})),c}catch(e){return console.log(e),e}}();const a=document.querySelector(".hamburger"),i=document.querySelectorAll(".nav-link");a.addEventListener("click",(function(){t.classList.toggle("active"),n.classList.toggle("active")})),i.forEach((e=>e.addEventListener("click",s))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||s()}))})();