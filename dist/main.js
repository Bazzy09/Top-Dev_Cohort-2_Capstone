(()=>{"use strict";function e(e,n){const c=document.createElement("div");c.classList.add("search-result");const a=document.createElement("img");a.src=n.image?n.image.medium:n.show.image?n.show.image.medium:"./img/placeholder.jpg",a.alt="Poster",a.id="poster";const o=document.createElement("h3");o.textContent=n.name||n.show.name||"Title N/A",o.classList.add("title"),o.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const l=document.createElement("div");l.textContent="Like";const m=document.createElement("div");m.textContent="3 likes",m.classList.add("likesCounter");const i=document.createElement("button");i.textContent="Comment",i.classList.add("comment");const r=document.createElement("button");r.textContent="Reservations",r.classList.add("reservation");const d=document.createElement("div");d.classList.add("search-result-poster"),d.appendChild(a);const u=document.createElement("div");u.classList.add("search-result-name"),u.appendChild(o);const h=document.createElement("div");h.classList.add("reaction-action");const g=document.createElement("div");g.classList.add("likes"),g.appendChild(s),g.appendChild(l);const p=document.createElement("div");p.classList.add("reaction"),p.appendChild(g),p.appendChild(m);const v=document.createElement("div");v.classList.add("actions"),v.appendChild(i),v.appendChild(r),h.appendChild(p),h.appendChild(v),c.appendChild(d),c.appendChild(u),c.appendChild(h),d.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",t(e,n)})),i.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",t(e,n),document.querySelector(".comment-form").classList.toggle("active")})),e.appendChild(c)}function t(e,t){const n=function(){const e=document.createElement("form");e.action="",e.className="comment-form";const t=document.createElement("label");t.htmlFor="comment-username",t.className="comment-username",t.textContent="Name";const n=document.createElement("input");n.type="text",n.id="comment-username",n.placeholder="Your name";const c=document.createElement("label");c.htmlFor="comment-insights",c.className="comment-insights",c.textContent="Insights";const a=document.createElement("textarea");a.id="comment-insights",a.placeholder="Your insights",a.rows="6";const o=document.createElement("button");o.type="submit",o.className="submit-comment",o.textContent="Comment";const s=[t,n,c,a,o];for(let t=0;t<s.length;t+=1)e.appendChild(s[t]);return e}(),c=document.createElement("div");c.className="full-details";const a=document.createElement("div");a.className="image-card";const o=document.createElement("img");o.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",o.alt="show poster";const s=document.createElement("div");s.className="show-info";const l=document.createElement("h1");l.className="showTitle",l.textContent=t.name||t.show.name;const m=document.createElement("h3");m.className="year",m.textContent=`Ended: ${t.ended||t.show.ended||"N/A"}`;const i=document.createElement("h3");i.className="genre",i.textContent=t.genres?t.genres.join(", "):t.show.genres?t.show.genres.join(", "):"Genres N/A";const r=document.createElement("h3");r.className="language",r.textContent=`Language: ${t.language||t.show.language||"N/A"}`;const d=document.createElement("h3");d.className="rating",d.textContent=t.rating?.average?`Rating: ${t.rating.average}/10`:t.show.rating?.average?`Rating: ${t.show.rating.average}/10`:"Rating: N/A";const u=document.createElement("div");u.className="show-summary";const h=document.createElement("h2");h.className="plot",h.textContent="Plot Summary";const g=document.createElement("div");g.className="summary",g.innerHTML=t.summary||t.show.summary||"Summary N/A",u.appendChild(h),u.appendChild(g);const p=[l,m,i,r,d,u];for(let e=0;e<p.length;e+=1)s.appendChild(p[e]);a.appendChild(o),a.appendChild(s),c.appendChild(a),c.appendChild(n),e.appendChild(c)}async function n(){try{const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json(),c=Math.floor(200*Math.random());return n.slice(c,c+20).forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}const c=document.querySelector(".hamburger"),a=document.querySelector(".nav-items"),o=document.querySelector(".search-button"),s=document.querySelectorAll("#tvshows"),l=document.querySelector("#home"),m=document.querySelector("#content");function i(){m.innerHTML=""}function r(){c.classList.remove("active"),a.classList.remove("active")}o.addEventListener("click",(t=>{t.preventDefault(),i(),async function(){try{const t=document.getElementById("search").value,n="https://api.tvmaze.com/";if(""!==t)return async function(t){const n=await t.json();return t.ok?(console.log(n),n.forEach((t=>{e(content,t)})),n):(console.log(n.Error),n.Error)}(await fetch(`${n}search/shows?q=${t}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),s.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),i(),async function(){try{console.log("Fetching TV shows...");const t=await fetch("https://api.tvmaze.com/shows"),n=await t.json();return n.forEach((t=>{e(content,t)})),n}catch(e){return console.log(e),e}}()})))),l.addEventListener("click",(e=>{e.preventDefault(),i(),n()}));const d=document.getElementsByClassName("nav-link");function u(e){for(let e=0;e<d.length;e+=1)d[e].classList.remove("active");e.target.classList.add("active")}n(),function(){for(let e=0;e<d.length;e+=1)d[e].addEventListener("click",u)}();const h=document.querySelector(".hamburger"),g=document.querySelectorAll(".nav-link");h.addEventListener("click",(function(){c.classList.toggle("active"),a.classList.toggle("active")})),g.forEach((e=>e.addEventListener("click",r))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||r()}))})();