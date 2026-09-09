(() => {
 const $=id=>document.getElementById(id), bank=window.U01_GLOSSARY;
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 [...new Set(bank.map(t=>t.category))].sort().forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;$('area').append(o)});
 function render(){const query=norm($('search').value.trim()),area=$('area').value, cards=$('view').value==='cards';const list=bank.filter(t=>(area==='all'||t.category===area)&&norm([t.term,t.definition,t.example,t.category].join(' ')).includes(query));
 $('results').textContent=list.length ? `${list.length} de ${bank.length} términos` : 'No hay coincidencias. Probá otra palabra o elegí todas las áreas.';
 $('terms').innerHTML=list.map(t=>`<article><span class="tag">${t.category}</span><h2>${t.term}</h2>${cards?'<p>¿Cómo lo explicarías y qué no garantiza?</p><details><summary>Mostrar explicación</summary>':''}<p>${t.definition}</p><p><strong>Ejemplo.</strong> ${t.example}</p><p><strong>No confundir.</strong> ${t.limit}</p><a class="lab-link" href="${t.link}">Aplicar este concepto</a>${cards?'</details>':''}</article>`).join('');}
 ['search','area','view'].forEach(id=>$(id).addEventListener('input',render));render();
})();