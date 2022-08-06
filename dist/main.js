(()=>{"use strict";var e={d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Z:()=>s,f:()=>a});const t=function(e,t,l,n){let i=document.getElementById("allTasks"),d=document.createElement("div");d.setAttribute("class","cardToDo"),d.style.backgroundImage="High"===l?"linear-gradient(to top left, red, crimson, darkred, rgb(190, 50, 50), darkred)":"linear-gradient(to top left, purple, rgb(0, 120, 175), rgb(0, 0, 100), rgb(0, 0, 100), rgb(0, 0, 100))";let o=document.createElement("input");o.setAttribute("class","inputTask"),o.setAttribute("id","inputTask"),o.value=e,o.disabled=!0,o.addEventListener("change",(function(){let e=this.nextSibling.firstChild.childNodes[0].textContent;a.forEach((t=>{t.task.forEach((t=>{t.date===e&&(t.txt=o.value)}))})),m.style.display="none",u.style.display="block",o.disabled=!0}));let c=document.createElement("input");c.setAttribute("class","checkbox"),c.setAttribute("id","checked"),c.type="checkbox",!0===t?(c.checked=!0,o.style.textDecoration="line-through",o.style.color="#555"):(c.checked=!1,o.style.textDecoration="none",o.style.color="white"),c.addEventListener("change",(function(){let e=this.parentNode.lastChild.childNodes[0].textContent;a.forEach((t=>{t.task.forEach((t=>{t.date===e&&(!1===t.check?t.check=!0:t.check=!1)}))})),!0===c.checked?(o.style.textDecoration="line-through",o.style.color="#555"):(o.style.textDecoration="none",o.style.color="white")}));let r=document.createElement("p");r.setAttribute("id","dateTask"),r.textContent=n;let s=document.createElement("div");s.setAttribute("class","imgToDo");let m=document.createElement("img");m.src="images/unlock.svg",m.setAttribute("class","imgTaskUnlock"),m.style.display="none",m.addEventListener("click",(function(){m.style.display="none",u.style.display="block",o.disabled=!0}));let u=document.createElement("img");u.src="images/lock.svg",u.setAttribute("class","imgTasklock"),u.addEventListener("click",(function(){m.style.display="block",u.style.display="none",o.disabled=!1}));let b=document.createElement("img");return b.src="images/trash.svg",b.setAttribute("class","imgTask"),b.addEventListener("click",(function(){this.parentNode.parentNode.remove()})),i.appendChild(d),d.appendChild(c),d.appendChild(o),d.appendChild(s),s.appendChild(r),s.appendChild(m),s.appendChild(u),s.appendChild(b),inputAddTask.value};let a=[];a.push({title:"ToDo List",date:"Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)",task:[{txt:"bla bla bla 1",check:!0,priority:"High",date:"Fri Aug 05 2022 15:09:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 2",check:!0,priority:"High",date:"Fri Aug 05 2022 15:10:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 10",check:!1,priority:"High",date:"Fri Aug 05 2022 15:18:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 13",check:!1,priority:"High",date:"Fri Aug 05 2022 15:21:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 14",check:!0,priority:"High",date:"Fri Aug 05 2022 15:22:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 3",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:11:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 4",check:!1,priority:"Low",date:"Fri Aug 05 2022 15:12:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 5",check:!1,priority:"Low",date:"Fri Aug 05 2022 15:13:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 6",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:14:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 7",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:15:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 8",check:!1,priority:"Low",date:"Fri Aug 05 2022 15:16:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 9",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:17:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 11",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:19:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 12",check:!0,priority:"Low",date:"Fri Aug 05 2022 15:20:00 GMT-0500 (Colombia Standard Time)"},{txt:"bla bla bla 15",check:!1,priority:"Low",date:"Fri Aug 05 2022 15:23:00 GMT-0500 (Colombia Standard Time)"}]}),r("Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)");let l=document.getElementById("addProjects"),n=document.getElementById("inputProjects"),i=document.getElementById("showAddProjects");i.addEventListener("click",(function(){i.style.display="none",l.style.display="flex"})),document.getElementById("btnAceptProject").addEventListener("click",(function(){i.style.display="flex",l.style.display="none";let e=String(new Date);(function(e){let t=document.getElementById("allProjects"),a=document.getElementById("inputProjects");document.getElementById("firstProject").addEventListener("click",(function(){document.getElementById("h2Task").textContent="ToDo List",document.getElementById("dateProject").textContent="Fri Aug 05 2022 15:08:27 GMT-0500 (Colombia Standard Time)";let e=document.getElementById("taskContent");document.getElementById("allTasks").remove();let t=document.createElement("div");t.setAttribute("id","allTasks"),e.appendChild(t),s(this.lastElementChild.textContent)}));let l=document.createElement("div");l.setAttribute("class","projects"),t.appendChild(l),l.addEventListener("click",(function(){c(),s(this.childNodes[1].textContent)}));let n=document.createElement("p");var i;n.textContent=(i=a.value).charAt(0).toUpperCase()+i.slice(1),l.appendChild(n);let d=document.createElement("h6");d.textContent=e,l.appendChild(d);let o=document.createElement("img");function c(){document.getElementById("h2Task").textContent=n.textContent,document.getElementById("dateProject").textContent=e;let t=document.getElementById("taskContent");document.getElementById("allTasks").remove();let a=document.createElement("div");a.setAttribute("id","allTasks"),t.appendChild(a)}o.src="images/xmark.svg",o.setAttribute("class","imgProject"),l.appendChild(o),o.addEventListener("click",(function(){this.parentNode.remove()})),c()})(e),a.push({title:n.value,date:e,task:[]}),n.value=""})),document.getElementById("btnCancelProject").addEventListener("click",(function(){n.value="",i.style.display="flex",l.style.display="none"}));let d=document.getElementById("addTask"),o=document.getElementById("showAddToDo");o.addEventListener("click",(function(){o.style.display="none",d.style.display="flex"}));let c=document.getElementById("inputAddTask");function r(e){a.forEach((a=>{a.date===e&&a.task.forEach((e=>{t(e.txt,e.check,e.priority,e.date)}))}))}document.getElementById("btnAceptTask").addEventListener("click",(function(){o.style.display="flex",d.style.display="none";let e=document.getElementById("priorityHigh"),l="";l=!0===e.checked?"High":"Low";let n=(i=c.value).charAt(0).toUpperCase()+i.slice(1);var i;let r=String(new Date);t(n,!1,l,r);let s=document.getElementById("dateProject");a.forEach((t=>{t.date===s.textContent&&(!0===e.checked?t.task.unshift({txt:c.value,check:!1,priority:"High",date:r}):t.task.push({txt:c.value,check:!1,priority:"Low",date:r}))})),c.value=""})),document.getElementById("btnCancelTask").addEventListener("click",(function(){c.value="",o.style.display="flex",d.style.display="none"}));const s=r})();