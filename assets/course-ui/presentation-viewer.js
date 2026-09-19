import * as pdfjsLib from './vendor/pdf.min.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdf.worker.min.mjs',import.meta.url).href;

const root=document.querySelector('[data-presentation-app]');
if(!root) throw new Error('Falta data-presentation-app');
const manifestUrl=root.dataset.manifest||'decks.json';
const $=(selector)=>root.querySelector(selector);
const els={list:$('[data-deck-list]'),title:$('[data-viewer-title]'),subtitle:$('[data-viewer-subtitle]'),canvas:$('canvas'),stage:$('[data-viewer-stage]'),loading:$('[data-viewer-loading]'),fallback:$('[data-viewer-fallback]'),status:$('[data-viewer-status]'),range:$('[data-page-range]'),page:$('[data-page-number]'),prev:$('[data-prev]'),next:$('[data-next]'),play:$('[data-play]'),speed:$('[data-speed]'),full:$('[data-fullscreen]'),pdf:$('[data-download-pdf]'),pptx:$('[data-download-pptx]'),google:$('[data-google-slides]'),googleNote:$('[data-google-note]'),progress:$('[data-autoplay-progress]'),related:$('[data-related]')};
const ctx=els.canvas.getContext('2d',{alpha:false});
let decks=[],deck=null,pdf=null,page=1,renderTask=null,renderToken=0,timer=null,playing=false,resizeTimer=null;

const stop=()=>{playing=false;clearTimeout(timer);timer=null;els.play.textContent='▶ Reproducir';els.play.setAttribute('aria-pressed','false');els.progress.classList.remove('running')};
const startProgress=()=>{els.progress.classList.remove('running');els.progress.style.animationDuration=`${Number(els.speed.value)}ms`;void els.progress.offsetWidth;if(playing)els.progress.classList.add('running')};
const schedule=()=>{clearTimeout(timer);if(!playing)return;startProgress();timer=setTimeout(()=>setPage(page>=deck.slides?1:page+1),Number(els.speed.value))};
const setLoading=(value)=>els.loading.classList.toggle('hidden',!value);

async function render(){
  const token=++renderToken;setLoading(true);els.fallback.classList.add('hidden');
  try{
    const pdfPage=await pdf.getPage(page);if(token!==renderToken)return;
    if(renderTask)renderTask.cancel();
    const base=pdfPage.getViewport({scale:1});
    const width=Math.max(280,els.stage.clientWidth-28),height=Math.max(240,els.stage.clientHeight-28);
    const scale=Math.min(width/base.width,height/base.height,2.7),viewport=pdfPage.getViewport({scale}),ratio=Math.min(devicePixelRatio||1,2);
    els.canvas.width=Math.floor(viewport.width*ratio);els.canvas.height=Math.floor(viewport.height*ratio);els.canvas.style.width=`${Math.floor(viewport.width)}px`;els.canvas.style.height=`${Math.floor(viewport.height)}px`;
    renderTask=pdfPage.render({canvasContext:ctx,viewport,transform:ratio===1?null:[ratio,0,0,ratio,0,0]});await renderTask.promise;if(token!==renderToken)return;
    els.status.textContent=`Diapositiva ${page} de ${deck.slides}`;els.range.value=page;els.page.value=page;els.page.setAttribute('aria-valuemax',String(deck.slides));
  }catch(error){if(error?.name!=='RenderingCancelledException'){console.error(error);els.fallback.classList.remove('hidden');els.status.textContent='Vista previa no disponible';stop()}}
  finally{if(token===renderToken){setLoading(false);if(playing)schedule()}}
}
async function setPage(next){page=Math.min(deck.slides,Math.max(1,Number(next)||1));clearTimeout(timer);await render()}
function setLinks(){
  els.pdf.href=deck.pdf;els.pptx.href=deck.pptx;
  if(deck.googleSlides&&deck.googlePublic){els.google.href=deck.googleSlides;els.google.classList.remove('hidden');els.googleNote.textContent=''}
  else{els.google.removeAttribute('href');els.google.classList.add('hidden');els.googleNote.textContent=deck.googleSlides?'Google Slides creado; acceso público pendiente':''}
  els.related.innerHTML=(deck.relatedLabs||[]).map(l=>`<a href="../simuladores/${l.file}">LAB ${String(l.number).padStart(2,'0')} · ${l.title}</a>`).join('');
}
async function loadDeck(id,push=true){
  stop();deck=decks.find(item=>item.id===id)||decks[0];page=1;pdf=null;els.title.textContent=deck.title;els.subtitle.textContent=`${deck.subtitle} · ${deck.slides} diapositivas`;els.range.max=deck.slides;els.page.max=deck.slides;setLinks();
  els.list.querySelectorAll('[data-deck-id]').forEach(b=>{const active=b.dataset.deckId===deck.id;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
  if(push)history.replaceState(null,'',`${location.pathname}?deck=${encodeURIComponent(deck.id)}`);
  setLoading(true);try{pdf=await pdfjsLib.getDocument(deck.pdf).promise;if(pdf.numPages!==deck.slides)throw new Error(`Manifest ${deck.slides}; PDF ${pdf.numPages}`);await render()}catch(error){console.error(error);setLoading(false);els.fallback.classList.remove('hidden');els.status.textContent='Abra el PDF con el botón de descarga'}
}
function renderLibrary(){els.list.innerHTML=decks.map(d=>`<button class="deck-card" type="button" data-deck-id="${d.id}"><img src="${d.thumbnail}" alt="Portada de ${d.title}" loading="lazy"><span><strong>${String(d.order).padStart(2,'0')} · ${d.title}</strong><small>${d.slides} diapositivas</small></span></button>`).join('');els.list.addEventListener('click',e=>{const b=e.target.closest('[data-deck-id]');if(b)loadDeck(b.dataset.deckId)})}

const response=await fetch(manifestUrl);if(!response.ok)throw new Error(`No se pudo cargar ${manifestUrl}`);decks=await response.json();renderLibrary();
const requested=new URLSearchParams(location.search).get('deck');await loadDeck(requested||decks[0].id,false);
els.prev.addEventListener('click',()=>setPage(page-1));els.next.addEventListener('click',()=>setPage(page+1));els.range.addEventListener('input',()=>setPage(els.range.value));els.page.addEventListener('change',()=>setPage(els.page.value));els.play.addEventListener('click',()=>{playing=!playing;els.play.textContent=playing?'⏸ Pausar':'▶ Reproducir';els.play.setAttribute('aria-pressed',String(playing));playing?schedule():stop()});els.speed.addEventListener('change',()=>{if(playing)schedule()});els.full.addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():root.requestFullscreen());
document.addEventListener('keydown',e=>{if(e.target.matches('input,select,textarea'))return;if(e.key==='ArrowLeft')setPage(page-1);if(e.key==='ArrowRight')setPage(page+1);if(e.key===' '){e.preventDefault();els.play.click()}if(e.key.toLowerCase()==='f')els.full.click()});
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>pdf&&render(),180)});
