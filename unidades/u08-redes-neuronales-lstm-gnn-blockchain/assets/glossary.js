(() => {
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const root=document.documentElement, data=JSON.parse($('#glossary-data').textContent), cards=$$('.glossary-card');
  const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const read=k=>{try{return localStorage.getItem(k);}catch{return null;}}, save=(k,v)=>{try{localStorage.setItem(k,v);}catch{}};
  const params=new URLSearchParams(location.search);
  let lang=['es','en'].includes(params.get('lang'))?params.get('lang'):(read('u08-language')==='en'?'en':'es');
  let theme=read('u08-theme')==='light'?'light':'dark',letter=params.get('inicial')||'';
  const t=(es,en)=>lang==='es'?es:en;
  const records=new Map(data.terms.map(x=>[x.id,x])), index=new Map(data.terms.map(x=>[x.id,norm([x.term,x.category,x.es,x.en,x.example.es,x.example.en,x.caution.es,x.caution.en,x.tags,x.formula].join(' '))]));
  document.documentElement.classList.add('js');
  $('#search').value=params.get('q')||'';
  if([...$('#category').options].some(o=>o.value===params.get('area')))$('#category').value=params.get('area');
  const initials=[...new Set(data.terms.map(x=>norm(x.term)[0].toUpperCase()))].sort();
  $('#alphabet').innerHTML='<button class="btn" type="button" data-letter="" aria-pressed="false"></button>'+initials.map(x=>'<button class="btn" type="button" data-letter="'+x+'" aria-pressed="false">'+x+'</button>').join('');
  if(!initials.includes(letter))letter='';
  function urlState(){
    const p=new URLSearchParams();if($('#search').value.trim())p.set('q',$('#search').value.trim());if($('#category').value)p.set('area',$('#category').value);if(letter)p.set('inicial',letter);if(lang==='en')p.set('lang','en');
    try{history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash);}catch{}
  }
  function filter(){
    const q=norm($('#search').value.trim()),area=$('#category').value;
    let visible=0;
    for(const card of cards){const d=records.get(card.id);const show=(!q||index.get(card.id).includes(q))&&(!area||d.category===area)&&(!letter||norm(d.term).startsWith(letter.toLowerCase()));card.hidden=!show;if(show)visible++;
      const el=card.querySelector('.term-name');el.textContent=d.term;
      const at=q?norm(d.term).indexOf(q):-1;if(at>=0)el.innerHTML=esc(d.term.slice(0,at))+'<mark>'+esc(d.term.slice(at,at+q.length))+'</mark>'+esc(d.term.slice(at+q.length));
    }
    $('#resultCount').textContent=t(`${visible} de ${data.terms.length} términos visibles`,`${visible} of ${data.terms.length} terms visible`);
    $('#empty').hidden=visible>0;
    $('#activeFilter').textContent=[area?(lang==='es'?area:$('#category').selectedOptions[0].textContent):'',letter?t('Inicial '+letter,'Initial '+letter):''].filter(Boolean).join(' · ');
    $$('[data-letter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.letter===letter)));
    window.U8_GLOSSARY_STATE={lang,theme,query:$('#search').value,category:area,letter,visible,total:data.terms.length};
    urlState();
  }
  function apply(){
    root.lang=lang;root.dataset.theme=theme;document.title=t('Glosario · Unidad 8 · Redes neuronales y blockchain','Glossary · Unit 8 · Neural networks and blockchain');
    $$('[data-es][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
    $('#search').placeholder=t('Buscar concepto, ejemplo o etiqueta…','Search concept, example or tag…');
    $('#lang').textContent=lang==='es'?'EN':'ES';$('#lang').setAttribute('aria-label',t('Cambiar a inglés','Switch to Spanish'));
    $('#theme').textContent=theme==='dark'?t('Modo claro','Light mode'):t('Modo oscuro','Dark mode');$('#theme').setAttribute('aria-pressed',String(theme==='light'));
    $('#alphabet [data-letter=""]').textContent=t('Todos','All');filter();
  }
  function jump(){
    let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const card=document.getElementById(id);if(!card?.classList.contains('glossary-card'))return;
    if(card.hidden){$('#search').value='';$('#category').value='';letter='';filter();}
    card.open=true;requestAnimationFrame(()=>card.scrollIntoView({block:'start'}));
  }
  $('#search').addEventListener('input',filter);$('#category').addEventListener('change',filter);
  $('#alphabet').addEventListener('click',e=>{const b=e.target.closest('[data-letter]');if(b){letter=b.dataset.letter;filter();}});
  $('#resetFilters').addEventListener('click',()=>{$('#search').value='';$('#category').value='';letter='';try{history.replaceState(null,'',location.pathname);}catch{}filter();$('#search').focus();});
  $('#lang').addEventListener('click',()=>{lang=lang==='es'?'en':'es';save('u08-language',lang);apply();});
  $('#theme').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';save('u08-theme',theme);apply();});
  $('#expand').addEventListener('click',()=>cards.filter(c=>!c.hidden).forEach(c=>c.open=true));
  $('#collapse').addEventListener('click',()=>cards.forEach(c=>c.open=false));
  $('#print').addEventListener('click',()=>window.print());
  let printState=null;window.addEventListener('beforeprint',()=>{printState=cards.map(c=>c.open);cards.filter(c=>!c.hidden).forEach(c=>c.open=true);});window.addEventListener('afterprint',()=>{if(printState)cards.forEach((c,i)=>c.open=printState[i]);printState=null;});
  window.addEventListener('hashchange',jump);
  $$('[data-copy-term]').forEach(b=>b.addEventListener('click',async()=>{const url='https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/recursos/glosario.html#'+b.dataset.copyTerm;try{await navigator.clipboard.writeText(url);$('#copyStatus').textContent=t('Enlace al término copiado.','Term link copied.');}catch{$('#copyStatus').textContent=t('Enlace al término: ','Term link: ')+url;}}));
  if(location.protocol==='file:')$$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(!h.startsWith('#')&&!/^(https?:|mailto:)/.test(h)){const unit='https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/recursos/';a.href=new URL(h,unit).href;}});
  apply();jump();window.U8_GLOSSARY_READY=true;
})();
