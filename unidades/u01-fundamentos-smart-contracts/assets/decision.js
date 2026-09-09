(() => {
 const $=id=>document.getElementById(id),ids=['actors','shared','authority','open','private'];
 const presets={erp:[1,'yes','yes','no','yes'],logistics:[5,'yes','no','no','yes'],open:[8,'yes','no','yes','no']};
 function render(){const n=+$('actors').value,shared=$('shared').value==='yes',authority=$('authority').value==='yes',open=$('open').value==='yes',privateData=$('private').value==='yes';$('actorsV').textContent=n;
 let title,reason,limit,central=false;
 if(n===1||!shared){title='Base de datos';reason='No aparece una necesidad de mantener un registro verificable entre organizaciones independientes.';limit='Documentá auditoría, respaldo y permisos. Revisá esta elección si cambian los actores o el problema.';central=true;}
 else if(authority&&!open){title='Registro central con auditoría';reason='Los actores aceptan una autoridad operadora. Compará primero una base de datos con firmas, controles de acceso y auditoría.';limit='La dependencia del administrador debe ser aceptable y estar respaldada por responsabilidades explícitas.';central=true;}
 else if(open){title=privateData?'Red pública con datos sensibles fuera de la cadena':'Red pública programable';reason='La participación abierta es un requisito del caso. Evaluá reglas públicas de ejecución y verificación.';limit=privateData?'No publiques datos sensibles. Diseñá acceso externo y revisá filtraciones por metadatos: un hash no garantiza anonimato.':'Definí costos, permisos del contrato, activación de operaciones y gobernanza. Apertura no elimina intermediarios.';}
 else{title='DLT permisionada';reason='Varias organizaciones necesitan verificar operaciones sin ceder todo el control a un único administrador.';limit='Acordá identidades, endosos, acceso a datos, responsabilidades y salida del consorcio; compará Fabric y Corda según el proceso.';}
 $('result').innerHTML=`<h2>${title}</h2><p>${reason}</p><p><strong>Condición a revisar:</strong> ${limit}</p>`;
 const nodes=Array.from({length:n},(_,i)=>{const a=i*2*Math.PI/n-Math.PI/2;return {x:280+205*Math.cos(a),y:145+105*Math.sin(a)}});
 let lines=nodes.map((p,i)=>{const q=central?{x:280,y:145}:nodes[(i+1)%n];return n===1&&!central?'':`<line class="edge" x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}"/>`}).join('');
 if(central)lines+='<rect x="211" y="120" width="138" height="50" rx="10"/><text x="280" y="150" text-anchor="middle">Administrador</text>';
 $('network').innerHTML=lines+nodes.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="24"/><text x="${p.x}" y="${p.y+6}" text-anchor="middle">${i+1}</text>`).join('');
 $('diagram-note').textContent=central?'Los actores consultan un registro operado por la autoridad acordada.':'Vista conceptual de organizaciones que coordinan un registro. Las líneas representan coordinación; no modelan una topología ni consenso reales.';
 }
 function preset(name){ids.forEach((id,i)=>$(id).value=presets[name][i]);$('preset').value=name;render()}
 ids.forEach(id=>$(id).addEventListener('input',()=>{$('preset').value='custom';render()}));$('preset').addEventListener('change',()=>{if(presets[$('preset').value])preset($('preset').value)});$('reset').addEventListener('click',()=>preset('logistics'));render();
})();