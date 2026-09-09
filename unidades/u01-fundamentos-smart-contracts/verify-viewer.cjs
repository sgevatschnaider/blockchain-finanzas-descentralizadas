const fs=require('fs'),vm=require('vm'),assert=require('assert');
const path=require('path'),root=__dirname;
async function run(){
const els={}, timers=new Map();let seq=0;
function make(id=''){return {id,value:'',textContent:'',disabled:false,checked:false,hidden:false,style:{},dataset:{},attrs:{},children:[],events:{},classList:{add(){},toggle(){}},setAttribute(k,v){this.attrs[k]=String(v)},removeAttribute(k){delete this.attrs[k];if(k==='src')this.src=''},append(...c){this.children.push(...c)},replaceChildren(){this.children=[]},addEventListener(e,f){this.events[e]=f}}}
const el=id=>els[id]??(els[id]=make(id));
const document={getElementById:el,createElement:()=>make(),body:make(),querySelectorAll:()=>[],addEventListener(){}};
const storage=new Map();const window={U01_MATERIAL_CONFIG:{googleSlidesUrl:''},addEventListener(){}};
const ctx={window,document,URL,URLSearchParams,location:{search:'?page=3',href:'https://example.org/visor.html?page=3'},history:{replaceState(){}},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},navigator:{clipboard:{writeText:async()=>{}}},fetch:async name=>({ok:true,json:async()=>JSON.parse(fs.readFileSync(path.join(root,name)))}),setTimeout:f=>{timers.set(++seq,f);return seq},clearTimeout:id=>timers.delete(id),console};
el('zoom').value='fit';el('delay').value='20000';
vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(root,'assets/visor.js'),'utf8'),ctx);
await new Promise(setImmediate);
const click=id=>{assert(!el(id).disabled,id+' disabled');el(id).events.click()};
const change=(id,v)=>{el(id).value=v;el(id).events.change({target:el(id)})};
assert.equal(el('page-number').value,3);click('next');assert.equal(el('page-number').value,4);
change('page-number',999);assert.equal(el('page-number').value,18);assert(el('next').disabled);
change('page-number',0);assert.equal(el('page-number').value,1);assert(el('previous').disabled);
change('chapter-select',8);assert.equal(el('page-number').value,8);
change('zoom','200');assert.equal(el('page-image').style.width,'1600px');
click('play');assert.equal(timers.size,1);const task=[...timers.values()][0];timers.clear();task();assert.equal(el('page-number').value,9);assert.equal(timers.size,1);
click('mode-pdf');assert.equal(timers.size,0);assert.equal(el('page-controls').hidden,true);assert.match(el('pdf-frame').src,/#page=9/);
change('document-select','original');assert.equal(el('page-number').max,2);assert.match(el('pdf-frame').src,/Guía%20Unidad%201.pdf/);
click('mode-pages');change('page-number',2);click('play');let t=[...timers.values()][0];timers.clear();t();assert.equal(el('play').attrs['aria-pressed'],'false');
el('loop').checked=true;click('play');t=[...timers.values()][0];timers.clear();t();assert.equal(el('page-number').value,1);
click('mode-google');assert.equal(timers.size,0);assert.equal(el('google-frame').hidden,true);
const norm=window.U01ViewerLinks.normalizeGoogle;
assert.match(norm('https://docs.google.com/presentation/d/abc_123/edit?usp=sharing').embed,/abc_123\/preview$/);
assert.match(norm('https://docs.google.com/presentation/d/e/2PACX-abc/pub').embed,/\/embed\?/);
assert.match(norm('https://docs.google.com/presentation/u/0/d/abc/edit').embed,/abc\/preview$/);
for(const bad of ['javascript:alert(1)','https://docs.google.com.evil.test/presentation/d/abc/edit','https://docs.google.com/document/d/abc/edit','http://docs.google.com/presentation/d/abc','https://evil@docs.google.com/presentation/d/abc'])assert.throws(()=>norm(bad));
el('google-url').value='https://docs.google.com/presentation/d/abc/edit';el('google-form').events.submit({preventDefault(){}});assert.match(el('google-frame').src,/abc\/preview$/);assert(storage.size===1);click('google-clear');assert.equal(storage.size,0);assert.equal(el('google-frame').hidden,true);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'materiales/documentos.json')));
for(const d of Object.values(manifest)){assert(fs.existsSync(path.join(root,decodeURIComponent(d.pdf))));for(let i=1;i<=d.pages;i++)assert(fs.existsSync(path.join(root,d.folder,`pagina-${String(i).padStart(2,'0')}.webp`)));}
console.log('PASS: viewer navigation, bounds, zoom, playback, pause, loop, PDF switching, Google URL validation, local persistence and all page assets. DOM harness; not a browser rendering test.');
}
module.exports=run();
