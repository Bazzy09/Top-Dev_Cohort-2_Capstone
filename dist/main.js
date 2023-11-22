(()=>{"use strict";function e(e,t){const n=document.createElement("div");n.classList.add("search-result");const a=document.createElement("img");a.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",a.alt="Poster",a.id="poster";const c=document.createElement("h3");c.textContent=t.name||t.show.name||"Title N/A",c.classList.add("title"),c.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const o=document.createElement("div");o.textContent="Like";const l=document.createElement("div");l.textContent="3 likes";const i=document.createElement("button");i.textContent="Comment",i.classList.add("comment");const d=document.createElement("button");d.textContent="Reservations",d.classList.add("reservation");const r=document.createElement("div");r.classList.add("search-result-poster"),r.appendChild(a);const m=document.createElement("div");m.classList.add("search-result-name"),m.appendChild(c);const u=document.createElement("div");u.classList.add("reaction-action");const h=document.createElement("div");h.classList.add("likes"),h.appendChild(s),h.appendChild(o);const g=document.createElement("div");g.classList.add("reaction"),g.appendChild(h),g.appendChild(l);const p=document.createElement("div");p.classList.add("actions"),p.appendChild(i),p.appendChild(d),u.appendChild(g),u.appendChild(p),n.appendChild(r),n.appendChild(m),n.appendChild(u),n.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",function(e,t){const n=document.createElement("div");n.className="full-details";const a=document.createElement("div");a.className="image-card";const c=document.createElement("img");c.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",c.alt="show poster";const s=document.createElement("div");s.className="show-info";const o=document.createElement("h1");o.className="showTitle",o.textContent=t.name||t.show.name;const l=document.createElement("h3");l.className="year",l.textContent=`Ended: ${t.ended||t.show.ended||"N/A"}`;const i=document.createElement("h3");i.className="genre",i.textContent=t.genres?t.genres.join(", "):t.show.genres?t.show.genres.join(", "):"Genres N/A";const d=document.createElement("h3");d.className="language",d.textContent=`Language: ${t.language||t.show.language||"N/A"}`;const r=document.createElement("h3");r.className="rating",r.textContent=t.rating?.average?`Rating: ${t.rating.average}/10`:t.show.rating?.average?`Rating: ${t.show.rating.average}/10`:"Rating: N/A";const m=document.createElement("div");m.className="show-summary";const u=document.createElement("h2");u.className="plot",u.textContent="Plot Summary";const h=document.createElement("div");h.className="summary",h.innerHTML=t.summary||t.show.summary||"Summary N/A",m.appendChild(u),m.appendChild(h);const g=[o,l,i,d,r,m];for(let e=0;e<g.length;e+=1)s.appendChild(g[e]);a.appendChild(c),a.appendChild(s),n.appendChild(a),e.appendChild(n)}(e,t)})),e.appendChild(n)}async function t(){try{const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json(),a=Math.floor(200*Math.random());return n.slice(a,a+20).forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}const n=document.querySelector(".hamburger"),a=document.querySelector(".nav-items"),c=document.querySelector(".search-button"),s=document.querySelectorAll("#tvshows"),o=document.querySelector("#home"),l=document.querySelector("#content");function i(){l.innerHTML=""}function d(){n.classList.remove("active"),a.classList.remove("active")}c.addEventListener("click",(async t=>{t.preventDefault(),i(),async function(){try{const t=document.getElementById("search").value,n="https://api.tvmaze.com/";if(""!==t)return async function(t){const n=await t.json();return t.ok?(console.log(n),n.forEach((t=>{e(content,t)})),n):(console.log(n.Error),n.Error)}(await fetch(`${n}search/shows?q=${t}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),s.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),i(),async function(){try{console.log("Fetching TV shows...");const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json();return n.forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}()})))),o.addEventListener("click",(e=>{e.preventDefault(),i(),t()}));let r=document.getElementsByClassName("nav-link");function m(e){for(let e=0;e<r.length;e+=1)r[e].classList.remove("active");e.target.classList.add("active")}t(),function(){for(let e=0;e<r.length;e+=1)r[e].addEventListener("click",m)}();const u=document.querySelector(".hamburger"),h=document.querySelectorAll(".nav-link");u.addEventListener("click",(function(){n.classList.toggle("active"),a.classList.toggle("active")})),h.forEach((e=>e.addEventListener("click",d))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||d()}))})();