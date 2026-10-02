export const $=selector=>document.querySelector(selector);
export const $$=selector=>[...document.querySelectorAll(selector)];
export const fmt=(v,d=3)=>Number.isFinite(v)?v.toFixed(d):'—';
export const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function download(name,content,type='application/json'){
  const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function init(I,id){
  const common={
    es:{glossary:'Glosario',article:'TikTok y GNN ↗',labs:'Laboratorios',unit:'Unidad 8',guide:'Guía completa',decks:'Presentaciones',theme:'Modo claro',themeDark:'Modo oscuro',fullscreen:'Pantalla completa',export:'Exportar registro',complete:'Marcar actividad realizada',completed:'Actividad registrada',record:'Registrá la configuración, el resultado y tu interpretación. El registro JSON conserva los valores del experimento.',author:'Material elaborado por el profesor Sergio Gevatschnaider.',next:'Laboratorio siguiente →',prev:'← Laboratorio anterior',reference:'Referencias y supuestos',exportSVG:'Descargar gráfico SVG',version:'Versión revisada · 2 oct 2026'},
    en:{glossary:'Glossary',article:'TikTok and GNN ↗',labs:'Laboratories',unit:'Unit 8',guide:'Complete guide',decks:'Presentations',theme:'Light mode',themeDark:'Dark mode',fullscreen:'Full screen',export:'Export record',complete:'Mark activity completed',completed:'Activity recorded',record:'Record settings, results and your interpretation. The JSON record preserves the experiment values.',author:'Material elaborado por el profesor Sergio Gevatschnaider.',next:'Next laboratory →',prev:'← Previous laboratory',reference:'References and assumptions',exportSVG:'Download SVG chart',version:'Revised version · 2 Oct 2026'}
  };
  let lang='es',theme='dark',listeners=[],state=null;
  try{lang=localStorage.getItem('u08-language')||'es';theme=localStorage.getItem('u08-theme')||'dark';}catch{}
  if(!['es','en'].includes(lang)||['hub','guide'].includes(id))lang='es';if(!['dark','light'].includes(theme))theme='dark';
  const t=(es,en)=>lang==='es'?es:en;
  function apply(){
    document.documentElement.lang=lang;document.documentElement.dataset.theme=theme;
    $$('[data-i18n]').forEach(el=>{const value=I[lang]?.[el.dataset.i18n]??common[lang][el.dataset.i18n];if(value!==undefined)el.textContent=value;});
    $$('[data-i18n-html]').forEach(el=>{const value=I[lang]?.[el.dataset.i18nHtml];if(value!==undefined)el.innerHTML=value;});
    $$('[data-action=lang]').forEach(b=>{b.textContent=lang==='es'?'EN':'ES';b.setAttribute('aria-label',t('Cambiar a inglés','Switch to Spanish'));});
    $$('[data-action=theme]').forEach(b=>{b.textContent=common[lang][theme==='dark'?'theme':'themeDark'];b.setAttribute('aria-pressed',String(theme==='light'));});
    const completed=readProgress()[id];$$('[data-complete]').forEach(b=>{b.textContent=common[lang][completed?'completed':'complete'];b.setAttribute('aria-pressed',String(!!completed));});
    $$('input,select').forEach(el=>{if(el.id){const label=el.closest('.control')?.querySelector('label');if(label)label.htmlFor=el.id;}});
    listeners.forEach(fn=>fn());
  }
  $$('[data-action=lang]').forEach(b=>b.addEventListener('click',()=>{lang=lang==='es'?'en':'es';try{localStorage.setItem('u08-language',lang);}catch{}apply();}));
  $$('[data-action=theme]').forEach(b=>b.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';try{localStorage.setItem('u08-theme',theme);}catch{}apply();}));
  $$('[data-fullscreen]').forEach(b=>b.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{b.textContent=t('Usá F11 para ampliar','Use F11 to expand');}}));
  document.addEventListener('fullscreenchange',()=>document.body.classList.toggle('lab-fullscreen',!!document.fullscreenElement));
  function readProgress(){try{return JSON.parse(localStorage.getItem('u08-lab-progress')||'{}');}catch{return{};}}
  $$('[data-complete]').forEach(b=>b.addEventListener('click',()=>{const p=readProgress();if(p[id])delete p[id];else p[id]={completedAt:new Date().toISOString()};try{localStorage.setItem('u08-lab-progress',JSON.stringify(p));}catch{}apply();}));
  $$('[data-export]').forEach(b=>b.addEventListener('click',()=>{if(state)download('U8_Lab_'+id+'_registro.json',JSON.stringify({author:common.es.author,lab:id,version:'2026-10-02',recordedAt:new Date().toISOString(),language:lang,...state},null,2));}));
  $$('[data-export-svg]').forEach(b=>b.addEventListener('click',()=>{
    const svg=$('.chart')?.cloneNode(true);if(!svg)return;svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    const css=getComputedStyle(document.body);let source=svg.outerHTML.replace(/var\((--[a-z0-9-]+)\)/g,(_,key)=>css.getPropertyValue(key).trim());
    source=source.replace('class="chart"','style="background:'+css.getPropertyValue('--panel').trim()+';font-family:Arial,sans-serif"');
    download('U8_Lab_'+id+'_grafico.svg',source,'image/svg+xml');
  }));
  window.addEventListener('error',e=>{const b=$('[data-error]');if(b){b.hidden=false;b.textContent=t('Error de ejecución: ','Runtime error: ')+e.message;}});
  window.addEventListener('unhandledrejection',e=>{const b=$('[data-error]');if(b){b.hidden=false;b.textContent=t('Error: ','Error: ')+String(e.reason);}});
  apply();
  return {lang:()=>lang,t,onUpdate:fn=>listeners.push(fn),commit:data=>{state=data;window.U8_STATE=JSON.parse(JSON.stringify(data));window.U8_READY=true;}};
}
export function lineChart(series,{w=900,h=380,pad=64,xLabel='t',yLabel='',xValues,format=v=>fmt(v,2),min,max}={}){
  const all=series.flatMap(s=>s.values);min=min??Math.min(...all);max=max??Math.max(...all);if(max===min){max+=1;min-=1;}
  const margin=(max-min)*.08;min-=margin;max+=margin;const n=series[0].values.length,x=i=>pad+(w-2*pad)*i/Math.max(1,n-1),y=v=>h-pad-(h-2*pad)*(v-min)/(max-min);
  let svg='';
  for(let i=0;i<5;i++){const val=min+(max-min)*i/4,yy=y(val);svg+='<line x1="'+pad+'" y1="'+yy+'" x2="'+(w-pad)+'" y2="'+yy+'" stroke="var(--grid)"/><text x="'+(pad-12)+'" y="'+(yy+6)+'" text-anchor="end" fill="var(--muted)" font-size="17">'+esc(format(val))+'</text>';}
  for(let i=0;i<5;i++){const idx=Math.round((n-1)*i/4);svg+='<text x="'+x(idx)+'" y="'+(h-pad+29)+'" text-anchor="middle" fill="var(--muted)" font-size="17">'+esc(xValues?xValues[idx]:idx)+'</text>';}
  svg+='<text x="'+pad+'" y="23" fill="var(--muted)" font-size="17">'+esc(yLabel)+'</text><text x="'+(w-pad)+'" y="'+(h-10)+'" text-anchor="end" fill="var(--muted)" font-size="17">'+esc(xLabel)+'</text>';
  const paths=series.map(s=>s.values.map((v,i)=>(i?'L':'M')+fmt(x(i),2)+','+fmt(y(v),2)).join(' '));
  series.forEach((s,i)=>svg+='<path d="'+paths[i]+'" fill="none" stroke="'+(s.color||'var(--accent)')+'" stroke-width="3"'+(s.dash?' stroke-dasharray="7 5"':'')+'/>');
  return {svg,x,y,pad,w,h};
}
export function coefficientRows(rows){return rows.map(r=>'<div class="coefficient"><div class="row"><strong>'+esc(r.name)+'</strong><span class="pill">'+fmt(r.weight)+'</span></div><div><b style="width:'+Math.min(100,Math.max(0,100*r.weight))+'%"></b></div></div>').join('');}
export function bind(ids,event,fn){ids.forEach(id=>$('#'+id).addEventListener(event,fn));}
