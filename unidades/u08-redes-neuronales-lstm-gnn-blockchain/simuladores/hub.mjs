import {init,$,esc} from '../assets/lab-ui.mjs';
init({es:{},en:{}},'hub');document.documentElement.lang='es';
const response=await fetch('labs.json');if(!response.ok)throw Error('No se pudo cargar el catálogo');const {labs}=await response.json();
function render(){let p={};try{p=JSON.parse(localStorage.getItem('u08-lab-progress')||'{}');}catch{}
 $('#progress').textContent=labs.filter(l=>p[l.id]).length+' / 8 actividades registradas';
 $('#cards').innerHTML=labs.map(l=>'<a class="lab-card" href="'+l.file+'"><div class="number">'+l.id+'</div><div><h2>'+esc(l.title)+'</h2><p>'+esc(l.description)+'</p><div class="tags"><span>'+l.minutes+' min</span><span>'+esc(l.type)+'</span>'+(p[l.id]?'<span class="status-complete">✓ Actividad registrada</span>':'')+'</div></div></a>').join('');}
window.addEventListener('pageshow',render);window.addEventListener('storage',render);render();
