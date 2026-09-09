const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=__dirname+'/';
function harness(script, values, source){
 const els={};const make=id=>({id,value:String(values[id]??''),textContent:'',innerHTML:'',disabled:false,style:{},dataset:{},handlers:{},attrs:{},classList:{toggle(){}},setAttribute(k,v){this.attrs[k]=v},addEventListener(e,f){this.handlers[e]=f},parentElement:{setAttribute(){}},append(){}});
 const el=id=>els[id]??(els[id]=make(id));
 const document={getElementById:el,querySelector:s=>el(s.slice(1)),querySelectorAll:()=>[],addEventListener:(e,f)=>{document.ready=f},createElement:()=>make('new')};
 const context={document,window:{scrollTo(){}},console};vm.createContext(context);vm.runInContext(source ?? fs.readFileSync(root+script,'utf8'),context);
 return {el,context,click(id){assert(!el(id).disabled,'disabled '+id);el(id).handlers.click()},input(id,value){el(id).value=String(value);el(id).handlers.input?.()}};
}
function insurance(delay=150,age=5,reserve=150,oracle='ok'){
 return harness('assets/seguro.js',{delay,age,reserve,oracle,loss:80});
}
for(const [delay,age,reserve,paid,stage] of [[120,5,150,0,3],[130,5,150,100,3],[130,30,100,100,3],[130,31,100,0,1],[130,5,90,0,3],[130,5,0,0,3]]){
 const h=insurance(delay,age,reserve);h.click('next');h.click('next');if(age<=30)h.click('next');assert.equal(h.el('paid').textContent,paid);assert.equal(h.el('funds').textContent,reserve-paid);assert.equal(h.el('next').disabled,stage===3);
}
for(const source of ['missing','unauthorized']){const h=insurance(150,5,150,source);h.click('next');h.click('next');assert.equal(h.el('paid').textContent,0);assert.equal(h.el('next').disabled,false);h.el('oracle').value='ok';h.click('next');h.click('next');assert.equal(h.el('paid').textContent,100)}
const falseData=insurance(150,5,150,'false');falseData.click('next');falseData.click('next');falseData.click('next');assert.match(falseData.el('outcome').textContent,/incorrecto/);assert.equal(falseData.el('paid').textContent,100);falseData.click('reset');assert.equal(falseData.el('paid').textContent,0);assert.equal(falseData.el('reserve').disabled,false);
for(const [params,expected] of [[{actors:1,shared:'yes',authority:'no',open:'no',private:'yes'},'Base de datos'],[{actors:5,shared:'yes',authority:'yes',open:'no',private:'yes'},'Registro central'],[{actors:5,shared:'yes',authority:'no',open:'no',private:'yes'},'DLT permisionada'],[{actors:5,shared:'yes',authority:'no',open:'yes',private:'yes'},'datos sensibles fuera'],[{actors:5,shared:'yes',authority:'no',open:'yes',private:'no'},'pública programable']]){const h=harness('assets/decision.js',params);assert(h.el('result').innerHTML.includes(expected))}
// Exercise the real quiz script with stubbed elements; no browser assertions.
const quiz=harness('assets/evaluacion.js',{mode:'exam',count:1,category:'all',difficulty:'all'});quiz.context.window.U01_QUESTIONS=[{category:'Test',difficulty:'media',question:'Caso',options:['A','B'],answer:0,explanation:'Porque A'}];quiz.context.document.ready();
assert(quiz.el('summary').innerHTML.includes('Examen'));quiz.el('mode').value='practice';
const buttons=[{dataset:{option:'0'},setAttribute(){}},{dataset:{option:'1'},setAttribute(){}}];const card={dataset:{question:'0'},querySelectorAll:()=>buttons};const button=buttons[0];button.closest=()=>card;quiz.el('quiz').contains=()=>true;
quiz.el('quiz').handlers.click({target:{closest:()=>button}});assert(quiz.el('summary').innerHTML.includes('Examen'),'mode must remain fixed');assert(quiz.el('summary').innerHTML.includes('1/1'));quiz.click('finish');assert(quiz.el('summary').innerHTML.includes('100%'));quiz.el('quiz').handlers.click({target:{closest:()=>button}});assert(quiz.el('summary').innerHTML.includes('100%'),'completed quiz immutable');
const escrowHtml=fs.readFileSync(root+'simuladores/06-smart-contract-lab.html','utf8');
const escrowCode=[...escrowHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
const escrow=harness('',{amount:100,actor:'seller'},escrowCode);
// Buttons are bound by querySelectorAll in this old lab, so verify authorization by exposing the local action only in this test context.
const exposed=escrowCode.replace("render()})();","window.testAct=act;render()})();");
const e=harness('',{amount:100,actor:'seller'},exposed);
e.context.window.testAct('deposit');assert.equal(e.el('locked').textContent,0);assert.match(e.el('message').textContent,/no autorizado/);
e.el('actor').value='buyer';e.context.window.testAct('deposit');assert.equal(e.el('locked').textContent,100);
e.context.window.testAct('ship');assert.equal(e.el('state').textContent,'FUNDED');
e.el('actor').value='seller';e.context.window.testAct('ship');assert.equal(e.el('state').textContent,'DELIVERED');
e.el('actor').value='buyer';e.context.window.testAct('release');assert.equal(e.el('state').textContent,'RELEASED');assert.equal(e.el('locked').textContent,0);
console.log('PASS: 9 insurance scenarios, reset, 5 architecture cases and quiz session lifecycle.');
