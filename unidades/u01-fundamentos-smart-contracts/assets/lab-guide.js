(() => {
  const labs = window.U01_LABS || [];
  const routes = window.U01_LAB_ROUTES || {};
  const STORAGE = 'u01-lab-guide-v1';
  const INTEGRATOR = [
    'Definí la fricción medible del proceso actual.',
    'Identificá actores y quién acepta o no un administrador único.',
    'Decidí qué documentos/datos se mantienen off-chain y qué evidencia se compromete.',
    'Explicá si una Merkle proof aporta algo al caso.',
    'Elegí modelo de estado y describí una transición relevante.',
    'Definí roles, precondiciones e invariantes del smart contract.',
    'Especificá el dato externo, su fuente y su antigüedad máxima.',
    'Modelá reserva/fondos suficientes para la obligación automatizada.',
    'Compará base central auditada, DLT permisionada y red pública.',
    'Escribí una condición concreta que haría abandonar la arquitectura elegida.'
  ];
  const blankLab = () => ({checks:{predict:false,baseline:false,failure:false,explain:false,transfer:false},notes:{prediction:'',params:'',result:'',explanation:'',limit:''}});
  function load(){try{return JSON.parse(localStorage.getItem(STORAGE))||{}}catch{return {}}}
  let state = load();
  state.route = state.route && routes[state.route] ? state.route : 'technical';
  state.mode = state.mode === 'teacher' ? 'teacher' : 'student';
  state.active = labs.some(x=>x.id===state.active) ? state.active : (routes[state.route]?.labs[0] || labs[0]?.id);
  state.labs = state.labs || {};
  state.integrator = state.integrator || {checks:{},note:''};
  for(const lab of labs) state.labs[lab.id] = Object.assign(blankLab(), state.labs[lab.id] || {}, {checks:Object.assign(blankLab().checks,(state.labs[lab.id]||{}).checks||{}),notes:Object.assign(blankLab().notes,(state.labs[lab.id]||{}).notes||{})});
  const save=()=>localStorage.setItem(STORAGE,JSON.stringify(state));
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pct=id=>{const c=state.labs[id].checks;return Math.round(100*Object.values(c).filter(Boolean).length/5)};
  const complete=id=>pct(id)===100;
  function updateGlobal(){const n=labs.filter(x=>complete(x.id)).length;const count=$('[data-global-count]'),bar=$('[data-global-bar]'),track=$('.guide-progress-track');if(count)count.textContent=`${n}/9`;if(bar)bar.style.width=`${100*n/9}%`;if(track)track.setAttribute('aria-valuenow',String(n));}
  function renderRoutes(){const host=$('[data-route-tabs]');host.innerHTML=Object.entries(routes).map(([id,r])=>`<button type="button" class="button ${state.route===id?'primary':''}" data-route="${id}" aria-pressed="${state.route===id}">${esc(r.title)} · ${esc(r.time)}</button>`).join('');host.onclick=e=>{const b=e.target.closest('[data-route]');if(!b)return;state.route=b.dataset.route;const ids=routes[state.route].labs;if(!ids.includes(state.active))state.active=ids[0];save();renderAll();};}
  function renderMode(){$$('[data-mode]').forEach(b=>{const on=b.dataset.mode===state.mode;b.classList.toggle('primary',on);b.setAttribute('aria-pressed',String(on));});$$('.teacher-only').forEach(el=>{el.hidden=state.mode!=='teacher'});}
  function renderGrid(){const r=routes[state.route];$('[data-route-title]').textContent=r.title;$('[data-route-subtitle]').textContent=`${r.subtitle} · ${r.time}. El progreso se conserva en este navegador.`;const host=$('[data-lab-grid]');host.innerHTML=r.labs.map(id=>{const l=labs.find(x=>x.id===id),p=pct(id);return `<article class="lab-station ${complete(id)?'completed':''} ${state.active===id?'active':''}" data-card="${id}"><div class="station-top"><span class="station-number">LAB ${esc(l.number)} · ${esc(l.category)}</span><span class="station-time">${esc(l.time)}</span></div><h3>${esc(l.title)}</h3><p>${esc(l.subtitle)}</p><p class="station-hypothesis">${esc(l.hypothesis)}</p><div class="station-progress"><div class="station-progress-track" aria-label="Progreso ${esc(l.title)}"><span style="width:${p}%"></span></div><strong>${p}%</strong></div><div class="station-actions"><button type="button" class="button ${state.active===id?'primary':''}" data-open-lab="${id}">Guiar experimento</button><a class="button" href="${esc(l.simulator)}" target="_blank" rel="noopener">Abrir aparte</a>${complete(id)?'<span class="guide-complete-badge">✓ COMPLETO</span>':''}</div></article>`}).join('');host.onclick=gridClick;}
  function gridClick(e){const b=e.target.closest('[data-open-lab]');if(!b)return;state.active=b.dataset.openLab;save();renderAll();setTimeout(()=>$('#mesa')?.scrollIntoView({behavior:'smooth',block:'start'}),0);}
  function list(items,ordered=true){return `<${ordered?'ol':'ul'}>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</${ordered?'ol':'ul'}>`}
  function renderGuide(){const l=labs.find(x=>x.id===state.active);if(!l)return;$('[data-active-title]').textContent=`${l.number} · ${l.title}`;$('[data-active-subtitle]').textContent=`${l.subtitle} · ${l.time}`;$('[data-frame-title]').textContent=l.title;const frame=$('[data-simulator-frame]');if(frame.getAttribute('src')!==l.simulator)frame.setAttribute('src',l.simulator);const direct=$('[data-open-direct]');direct.href=l.simulator;const host=$('[data-experiment-guide]');host.innerHTML=`
    <div class="station-top"><span class="station-number">LAB ${esc(l.number)} · ${esc(l.category)}</span><span class="station-time">${esc(l.time)}</span></div>
    <h3>${esc(l.question)}</h3>
    <div class="hypothesis-card"><strong>Hipótesis falsificable</strong><p>${esc(l.hypothesis)}</p></div>
    <div class="guide-block"><h4>Objetivos</h4>${list(l.objectives,false)}</div>
    <div class="guide-block"><h4>Experimento base</h4>${list(l.baseline,true)}</div>
    <div class="guide-block"><h4>🔎 Qué mirar</h4>${list(l.observe,false)}</div>
    <div class="guide-block failure-card"><h4>Provocá una falla o caso límite</h4>${list(l.failure,true)}<p><strong>Pregunta:</strong> ${esc(l.failure_question)}</p></div>
    <div class="guide-block transfer-card"><h4>Transferencia</h4><p>${esc(l.transfer)}</p></div>
    <div class="guide-block"><h4>Pasaporte del experimento</h4><div class="passport-grid">
      ${passportField(l,'prediction','Mi predicción')}${passportField(l,'params','Parámetros usados')}${passportField(l,'result','Resultado observado')}${passportField(l,'explanation','Mi explicación causal')}${passportField(l,'limit','Qué NO demuestra este experimento')}
    </div></div>
    <div class="guide-block"><h4>Evidencias para marcar</h4><div class="evidence-checks">
      ${check(l,'predict','Hice una predicción antes de ejecutar.')}${check(l,'baseline','Completé el experimento base con parámetros registrados.')}${check(l,'failure','Provoqué la falla o caso límite y observé qué cambió.')}${check(l,'explain','Puedo explicar la causa sin limitarme a describir la pantalla.')}${check(l,'transfer','Respondí la pregunta de transferencia.')}
    </div></div>
    <div class="guide-block"><div class="callout"><strong>Límite del modelo:</strong> ${esc(l.limit)}</div><div class="actions"><a class="button" href="${esc(l.theory)}">Revisar concepto</a><a class="button" href="glosario.html">Consultar glosario</a></div></div>
    <div class="guide-block teacher-only" ${state.mode==='teacher'?'':'hidden'}><div class="teacher-note"><strong>Respuesta esperada</strong><p>${esc(l.answer)}</p><strong>Error frecuente</strong><p>${esc(l.misconception)}</p><strong>Intervención docente</strong><p>${esc(l.teacher_prompt)}</p><strong>Evidencia de aprendizaje</strong><p>${esc(l.evidence)}</p></div></div>`;
    host.oninput=guideInput;host.onchange=guideInput;}
  function passportField(l,key,label){return `<label>${esc(label)}<textarea data-note="${key}" placeholder="Registrá evidencia breve…">${esc(state.labs[l.id].notes[key])}</textarea></label>`}
  function check(l,key,label){return `<label><input type="checkbox" data-check="${key}" ${state.labs[l.id].checks[key]?'checked':''}> <span>${esc(label)}</span></label>`}
  function guideInput(e){const l=labs.find(x=>x.id===state.active);if(e.target.matches('[data-note]'))state.labs[l.id].notes[e.target.dataset.note]=e.target.value;if(e.target.matches('[data-check]'))state.labs[l.id].checks[e.target.dataset.check]=e.target.checked;save();updateGlobal();renderGrid();}
  function renderIntegrator(){const host=$('[data-integrator-checks]');host.innerHTML=INTEGRATOR.map((t,i)=>`<label><input type="checkbox" data-integrator-check="${i}" ${state.integrator.checks[i]?'checked':''}><span>${esc(t)}</span></label>`).join('');const note=$('[data-integrator-note]');note.value=state.integrator.note||'';const status=$('[data-integrator-status]');const done=INTEGRATOR.filter((_,i)=>state.integrator.checks[i]).length;status.innerHTML=`<strong>${done}/10 decisiones justificadas.</strong> ${done===10&&note.value.trim().length>120?'Caso integrador listo para discusión.':'Completá el checklist y redactá una recomendación de al menos unas líneas con condición de abandono.'}`;host.onchange=e=>{if(!e.target.matches('[data-integrator-check]'))return;state.integrator.checks[e.target.dataset.integratorCheck]=e.target.checked;save();renderIntegrator()};note.oninput=()=>{state.integrator.note=note.value;save();const d=INTEGRATOR.filter((_,i)=>state.integrator.checks[i]).length;status.innerHTML=`<strong>${d}/10 decisiones justificadas.</strong> ${d===10&&note.value.trim().length>120?'Caso integrador listo para discusión.':'Completá el checklist y redactá una recomendación de al menos unas líneas con condición de abandono.'}`};}
  function renderAll(){renderRoutes();renderMode();renderGrid();renderGuide();renderIntegrator();updateGlobal();}
  $$('[data-mode]').forEach(b=>b.addEventListener('click',()=>{state.mode=b.dataset.mode;save();renderAll()}));
  $('[data-reset-guide]')?.addEventListener('click',()=>{if(!confirm('¿Reiniciar el pasaporte de los nueve laboratorios y el caso integrador en este navegador?'))return;localStorage.removeItem(STORAGE);location.reload()});
  renderAll();
})();
