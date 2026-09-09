(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  if (params.get('embed') === '1') document.body.classList.add('embedded-material');
  const storageKey = 'u01-google-slides';
  let documents, chapters, doc = 'desarrollo', page = 1, mode = 'pages', timer = null, playing = false;
  const status = message => { $('viewer-status').textContent = message; };
  const current = () => documents[doc];
  const imagePath = n => `${current().folder}/pagina-${String(n).padStart(2,'0')}.webp`;
  function stop() { clearTimeout(timer); timer = null; playing = false; $('play').textContent = 'Reproducir'; $('play').setAttribute('aria-pressed','false'); }
  function schedule() {
    clearTimeout(timer);
    if (!playing) return;
    timer = setTimeout(() => {
      if (page < current().pages) navigate(page + 1);
      else if ($('loop').checked) navigate(1);
      else { stop(); status('Lectura finalizada.'); }
    }, Number($('delay').value));
  }
  function syncUrl() {
    const url = new URL(location.href);
    url.searchParams.set('doc',doc); url.searchParams.set('page',String(page));
    url.searchParams.set('mode',mode);
    history.replaceState(null,'',url);
  }
  function zoom() {
    const value = $('zoom').value;
    $('page-stage').classList.toggle('zoomed',value !== 'fit');
    $('page-image').style.width = value === 'fit' ? '' : `${Number(value) * 8}px`;
  }
  function render() {
    const item = current();
    $('page-number').value = page; $('page-number').max = item.pages;
    $('page-total').textContent = `/ ${item.pages}`;
    $('previous').disabled = page === 1; $('next').disabled = page === item.pages;
    $('download-pdf').href = item.pdf; $('open-pdf').href = `${item.pdf}#page=${page}`;
    $('page-image').alt = `${item.title}. Página ${page} de ${item.pages}. Versión textual disponible en «Leer este tema».`;
    $('page-image').hidden = false; $('image-error').hidden = true;
    $('page-image').src = imagePath(page);
    $('page-stage').scrollTop = 0; $('page-stage').scrollLeft = 0;
    document.querySelectorAll('[data-page]').forEach(button => {
      if (Number(button.dataset.page) === page) button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
    });
    const active = doc === 'desarrollo' ? [...chapters].reverse().find(ch => page >= ch.page) : null;
    $('chapter-select').value = active ? String(active.page) : String(page);
    if (doc === 'desarrollo' && page === item.pages) $('chapter-select').value = String(item.pages);
    $('chapter-reading').href = doc === 'original' ? 'guia-estudio.html' : active ? `desarrollo.html#capitulo-${chapters.indexOf(active)+1}` : 'desarrollo.html';
    if (mode === 'pdf') $('pdf-frame').src = `${item.pdf}#page=${page}&view=FitH`;
    status(`${item.title} · Página ${page} de ${item.pages}${active ? ' · '+active.title : ''}`);
    syncUrl(); zoom();
  }
  function navigate(number) {
    page = Math.max(1,Math.min(current().pages,Math.floor(Number(number) || 1)));
    render(); if (playing) schedule();
  }
  function selectDocument(value, initialPage=1) {
    stop(); doc = documents[value] ? value : 'desarrollo'; $('document-select').value = doc;
    $('chapter-select').replaceChildren();
    const options = doc === 'desarrollo' ? [{title:'Portada',page:1},{title:'Índice',page:2},...chapters,{title:'Referencias',page:current().pages}] : [{title:'Presentación de la unidad',page:1},{title:'Objetivos y plan de trabajo',page:2}];
    for (const ch of options) { const o = document.createElement('option'); o.value = ch.page; o.textContent = ch.title; $('chapter-select').append(o); }
    $('thumbnails').replaceChildren();
    for (let n=1;n<=current().pages;n++) {
      const li=document.createElement('li'), button=document.createElement('button'), img=document.createElement('img'), label=document.createElement('span');
      button.type='button'; button.dataset.page=n; button.setAttribute('aria-label',`Ir a la página ${n}`);
      img.src=imagePath(n); img.alt=''; img.loading='lazy'; label.textContent=n;
      button.append(img,label); button.addEventListener('click',()=>navigate(n)); li.append(button); $('thumbnails').append(li);
    }
    navigate(initialPage);
  }
  function setMode(value) {
    stop(); mode=['pages','pdf','google'].includes(value) ? value : 'pages';
    for(const name of ['pages','pdf','google']) { $(`${name}-panel`).hidden=name!==mode; $(`mode-${name}`).setAttribute('aria-pressed',String(name===mode)); }
    $('page-controls').hidden = mode !== 'pages';
    if(mode!=='pdf') $('pdf-frame').removeAttribute('src');
    if(mode==='google') loadGoogle(); else $('google-frame').removeAttribute('src');
    render();
  }
  function normalizeGoogle(raw) {
    const url=new URL(raw.trim());
    if(url.protocol!=='https:' || url.hostname!=='docs.google.com' || url.port || url.username || url.password) throw Error('Usá un enlace HTTPS de docs.google.com/presentation.');
    const match=url.pathname.match(/^\/presentation\/(?:u\/\d+\/)?d\/(e\/)?([A-Za-z0-9_-]+)(?:\/|$)/);
    if(!match) throw Error('No se reconoce el enlace de Google Slides. Copiá la URL de la presentación o de «Publicar en la Web».');
    const base=`https://docs.google.com/presentation/d/${match[1]||''}${match[2]}`;
    return {open:base+(match[1]?'/pub':'/edit'),embed:base+(match[1]?'/embed?start=false&loop=false&delayms=10000':'/preview'),published:Boolean(match[1])};
  }
  // Exportación acotada para validar enlaces sin cargar servicios externos.
  window.U01ViewerLinks={normalizeGoogle};
  let googleUrl=window.U01_MATERIAL_CONFIG?.googleSlidesUrl || '';
  try { googleUrl=localStorage.getItem(storageKey)||googleUrl; } catch(_) {}
  function loadGoogle() {
    $('google-frame').removeAttribute('src'); $('google-frame').hidden=true; $('google-actions').hidden=true;
    if(!googleUrl) { $('google-status').textContent='No hay una presentación de Google Slides configurada. El desarrollo completo y la guía original están disponibles en Páginas y PDF.'; return; }
    try {
      const value=normalizeGoogle(googleUrl); $('google-url').value=googleUrl;
      $('google-open').href=value.open; $('google-actions').hidden=false;
      $('google-frame').src=value.embed; $('google-frame').hidden=false;
      $('google-status').textContent=value.published ? 'Enlace publicado configurado. Google puede restringir su acceso si cambia la publicación.' : 'Presentación configurada. Si Google solicita permiso, abrí el enlace en otra pestaña e iniciá sesión con una cuenta autorizada.';
    } catch(error) { $('google-status').textContent=error.message; }
  }
  $('google-form').addEventListener('submit',event=>{
    event.preventDefault();
    try { const raw=$('google-url').value.trim(); normalizeGoogle(raw); googleUrl=raw; let saved=true; try {localStorage.setItem(storageKey,raw);} catch(_){saved=false;} loadGoogle(); if(!saved) $('google-status').textContent+=' No se pudo guardar el enlace; permanecerá durante esta visita.'; }
    catch(error){$('google-status').textContent=error.message;}
  });
  $('google-clear').addEventListener('click',()=>{try{localStorage.removeItem(storageKey);}catch(_){} googleUrl=window.U01_MATERIAL_CONFIG?.googleSlidesUrl||''; $('google-url').value=googleUrl; loadGoogle();});
  $('fullscreen').addEventListener('click',async()=>{
    try {if(document.fullscreenElement) await document.exitFullscreen(); else if($('viewer').requestFullscreen) await $('viewer').requestFullscreen(); else throw Error();}
    catch(_){status('Pantalla completa no disponible. Abrí el visor en una pestaña y usá la pantalla completa del navegador.');}
  });
  $('copy-link').addEventListener('click',async()=>{
    const url=new URL(location.href);url.searchParams.delete('embed');
    try {await navigator.clipboard.writeText(url.href);status('Enlace copiado a esta página del documento.');}
    catch(_){status('Copiá este enlace: '+url.href);}
  });
  $('page-image').addEventListener('error',()=>{stop();$('page-image').hidden=true;$('image-error').hidden=false;status('No se pudo cargar la imagen. Usá Abrir PDF o Leer como texto.');});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  window.addEventListener('pagehide',stop);
  async function init() {
    const controls=[...document.querySelectorAll('#page-controls button,#page-controls input,#page-controls select,#document-select,.viewer-tabs button')];controls.forEach(e=>e.disabled=true);
    try {
      const results=await Promise.all(['materiales/documentos.json','materiales/capitulos.json'].map(async url=>{const r=await fetch(url);if(!r.ok)throw Error();return r.json();}));
      [documents,chapters]=results;
      controls.forEach(e=>e.disabled=false);
      selectDocument(params.get('doc'),params.get('page')); setMode(params.get('mode'));
      $('document-select').addEventListener('change',e=>selectDocument(e.target.value));
      $('chapter-select').addEventListener('change',e=>navigate(e.target.value));
      $('page-number').addEventListener('change',e=>navigate(e.target.value));
      $('previous').addEventListener('click',()=>navigate(page-1));$('next').addEventListener('click',()=>navigate(page+1));
      $('zoom').addEventListener('change',zoom);
      for(const value of ['pages','pdf','google']) $(`mode-${value}`).addEventListener('click',()=>setMode(value));
      const toggle=()=>{if(playing)stop();else{playing=true;$('play').textContent='Pausar';$('play').setAttribute('aria-pressed','true');schedule();}};
      $('play').addEventListener('click',toggle);$('delay').addEventListener('change',schedule);
      $('page-stage').addEventListener('keydown',e=>{
        if(mode!=='pages')return;
        if(['ArrowLeft','ArrowRight','Home','End',' '].includes(e.key)) e.preventDefault();
        if(e.key==='ArrowLeft')navigate(page-1);if(e.key==='ArrowRight')navigate(page+1);if(e.key==='Home')navigate(1);if(e.key==='End')navigate(current().pages);if(e.key===' ')toggle();
      });
    } catch(_) {status('No se pudo cargar el índice. Podés descargar el PDF y abrir la lectura completa con los enlaces disponibles.');}
  }
  init();
})();
