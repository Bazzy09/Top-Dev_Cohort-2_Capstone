(()=>{"use strict";let e=[];class t{constructor(e,t,n,c){this.date=e,this.name=t,this.insight=n,this.movieId=c}}function n(t){const n=document.querySelector(".comment-records");n.innerHTML="";const c=e.filter((e=>e.movieId===t));for(let e=0;e<c.length;e+=1){const t=c[e],o=document.createElement("p");o.className="new-record",o.textContent=`${t.date} ${t.name}: ${t.insight}`,n.appendChild(o)}}function c(e,t){const n=document.createElement("div");n.classList.add("search-result");const c=document.createElement("img");c.src=t.image?t.image.medium:t.show.image?t.show.image.medium:"./img/placeholder.jpg",c.alt="Poster",c.id="poster";const a=document.createElement("h3");a.textContent=t.name||t.show.name||"Title N/A",a.classList.add("title"),a.id="title";const s=document.createElement("img");s.src="./img/like.png",s.alt="Like";const m=document.createElement("div");m.textContent="Like";const l=document.createElement("div");l.textContent="3 likes",l.classList.add("likesCounter");const r=document.createElement("button");r.textContent="Comment",r.classList.add("comment");const i=document.createElement("button");i.textContent="Reservations",i.classList.add("reservation");const d=document.createElement("div");d.classList.add("search-result-poster"),d.appendChild(c);const u=document.createElement("div");u.classList.add("search-result-name"),u.appendChild(a);const h=document.createElement("div");h.classList.add("reaction-action");const g=document.createElement("div");g.classList.add("likes"),g.appendChild(s),g.appendChild(m);const p=document.createElement("div");p.classList.add("reaction"),p.appendChild(g),p.appendChild(l);const v=document.createElement("div");v.classList.add("actions"),v.appendChild(r),v.appendChild(i),h.appendChild(p),h.appendChild(v),n.appendChild(d),n.appendChild(u),n.appendChild(h),d.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",o(e,t)})),r.addEventListener("click",(()=>{e.style.alignItems="normal",e.innerHTML="",o(e,t),document.querySelector(".comment-form").classList.toggle("active")})),e.appendChild(n)}function o(c,o){const a=function(){const e=document.createElement("div");e.className="comment-log-section";const t=document.createElement("h2");t.className="comment-header",t.textContent="Comments";const n=document.createElement("div");return n.className="comment-records",e.appendChild(t),e.appendChild(n),e}(),s=function(){const e=document.createElement("form");e.action="",e.className="comment-form";const t=document.createElement("label");t.textContent="Date",t.for="comment-date";const n=document.createElement("input");n.style.display="none",n.type="text",n.id="comment-date";const c=new Date,o=c.getDate(),a=c.getMonth()+1,s=c.getFullYear(),m=`${o.toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${s}`;n.value=m;const l=document.createElement("label");l.htmlFor="comment-username",l.className="comment-username",l.textContent="Name";const r=document.createElement("input");r.type="text",r.id="comment-username",r.placeholder="Your name",r.required=!0;const i=document.createElement("label");i.htmlFor="comment-insights",i.className="comment-insights",i.textContent="Insights";const d=document.createElement("textarea");d.id="comment-insights",d.placeholder="Your insights",d.rows="6",d.required=!0;const u=document.createElement("button");u.type="submit",u.className="submit-comment",u.textContent="Comment";const h=[n,l,r,i,d,u];for(let t=0;t<h.length;t+=1)e.appendChild(h[t]);return e}(),m=document.createElement("div");m.className="full-details";const l=document.createElement("div");l.className="image-card";const r=document.createElement("img");r.src=o.image?o.image.medium:o.show.image?o.show.image.medium:"./img/placeholder.jpg",r.alt="show poster";const i=document.createElement("div");i.className="show-info";const d=document.createElement("h1");d.className="showId",d.style.display="none",d.textContent=o.id||o.show.id;const u=document.createElement("h1");u.className="showTitle",u.textContent=o.name||o.show.name;const h=document.createElement("h3");h.className="year",h.textContent=`Ended: ${o.ended||o.show.ended||"N/A"}`;const g=document.createElement("h3");g.className="genre",g.textContent=o.genres?o.genres.join(", "):o.show.genres?o.show.genres.join(", "):"Genres N/A";const p=document.createElement("h3");p.className="language",p.textContent=`Language: ${o.language||o.show.language||"N/A"}`;const v=document.createElement("h3");v.className="rating",v.textContent=o.rating?.average?`Rating: ${o.rating.average}/10`:o.show.rating?.average?`Rating: ${o.show.rating.average}/10`:"Rating: N/A";const E=document.createElement("div");E.className="show-summary";const C=document.createElement("h2");C.className="plot",C.textContent="Plot Summary";const f=document.createElement("div");f.className="summary",f.innerHTML=o.summary||o.show.summary||"Summary N/A",E.appendChild(C),E.appendChild(f);const y=[d,u,h,g,p,v,E];for(let e=0;e<y.length;e+=1)i.appendChild(y[e]);l.appendChild(r),l.appendChild(i),m.appendChild(l),m.appendChild(a),m.appendChild(s),c.appendChild(m),function(){const t=JSON.parse(localStorage.getItem("commentStore"));e=t}(),n(document.querySelector(".showId").textContent),document.querySelector(".comment-form").addEventListener("submit",(c=>{const o=document.querySelector("#comment-username"),a=document.querySelector("#comment-insights");console.log("clicked"),c.preventDefault(),function(){const c=document.querySelector("#comment-date").value,o=document.querySelector("#comment-username").value,a=document.querySelector("#comment-insights").value,s=document.querySelector(".showId").textContent,m=new t(c,o,a,s);e.push(m),n(s),localStorage.setItem("commentStore",JSON.stringify(e))}(),o.value="",a.value=""}))}async function a(){try{const e=await fetch("https://api.tvmaze.com/shows"),t=await e.json(),n=Math.floor(200*Math.random());return t.slice(n,n+20).forEach((e=>{c(content,e)})),t}catch(e){return console.log(e),e}}const s=document.querySelector(".hamburger"),m=document.querySelector(".nav-items"),l=document.querySelector(".search-button"),r=document.querySelectorAll("#tvshows"),i=document.querySelector("#home"),d=document.querySelector("#content");function u(){d.innerHTML=""}function h(){s.classList.remove("active"),m.classList.remove("active")}l.addEventListener("click",(e=>{e.preventDefault(),u(),async function(){try{const e=document.getElementById("search").value,t="https://api.tvmaze.com/";if(""!==e)return async function(e){const t=await e.json();return e.ok?(console.log(t),t.forEach((e=>{c(content,e)})),t):(console.log(t.Error),t.Error)}(await fetch(`${t}search/shows?q=${e}`));console.log("No search input provided.")}catch(e){return console.log(e),e}}()})),r.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),u(),async function(){try{console.log("Fetching TV shows...");const e=await fetch("https://api.tvmaze.com/shows"),t=await e.json();return t.forEach((e=>{c(content,e)})),t}catch(e){return console.log(e),e}}()})))),i.addEventListener("click",(e=>{e.preventDefault(),u(),a()}));const g=document.getElementsByClassName("nav-link");function p(e){for(let e=0;e<g.length;e+=1)g[e].classList.remove("active");e.target.classList.add("active")}a(),function(){for(let e=0;e<g.length;e+=1)g[e].addEventListener("click",p)}();const v=document.querySelector(".hamburger"),E=document.querySelectorAll(".nav-link");v.addEventListener("click",(function(){s.classList.toggle("active"),m.classList.toggle("active")})),E.forEach((e=>e.addEventListener("click",h))),window.addEventListener("click",(function(e){e.target.closest(".hamburger")||e.target.closest(".nav-items")||h()}))})();