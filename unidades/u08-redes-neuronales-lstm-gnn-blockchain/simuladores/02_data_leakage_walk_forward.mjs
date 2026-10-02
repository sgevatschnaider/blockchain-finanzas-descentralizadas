import {init,$,fmt,lineChart} from '../assets/lab-ui.mjs';
import {seeded,normal,mean,sum,ridge,metrics} from '../assets/lab-math.mjs';
import {LAB_I} from '../assets/lab-i18n.mjs';
const lab=init(LAB_I['02'],'02');let leak=false,wf=true;
function data(H){
  const rng=seeded(991),r=[0,0];for(let t=2;t<310;t++)r.push(.35*r[t-1]-.12*r[t-2]+.004*Math.sin(t/13)+.012*normal(rng));
  const rows=[];
  for(let t=5;t<r.length-H;t++){
    const y=sum(r.slice(t+1,t+H+1)),x=[r[t],r[t-1],mean(r.slice(t-4,t+1)),Math.sin(t/13)];
    if(leak)x.push(.15*r[t]+.85*y);
    rows.push({t,end:t+H,x,y});
  }
  return rows;
}
function render(){
  const H=+$('#horizon').value,rows=data(H),cuts=wf?[130,165,200,235]:[Math.floor(rows.length*.72)],folds=[],predictions=[];
  cuts.forEach((cut,i)=>{
    const decision=rows[cut].t,train=rows.slice(0,cut).filter(r=>r.end<=decision),test=rows.slice(cut,wf?Math.min(cut+35,rows.length):rows.length),model=ridge(train.map(r=>r.x),train.map(r=>r.y));
    test.forEach(r=>predictions.push({t:r.t,targetEnd:r.end,y:r.y,p:model.predict(r.x),fold:i+1}));
    folds.push({fold:i+1,trainFirst:train[0].t,trainLast:train.at(-1).t,latestLabel:train.at(-1).end,testFirst:test[0].t,testLast:test.at(-1).t,purged:cut-train.length,nTrain:train.length,nTest:test.length,metrics:metrics(test.map(r=>r.y),test.map(r=>model.predict(r.x)))});
  });
  const y=predictions.map(r=>r.y),p=predictions.map(r=>r.p),m=metrics(y,p);
  $('#rmse').textContent=fmt(100*m.rmse,2)+' pp';$('#mae').textContent=fmt(100*m.mae,2)+' pp';$('#da').textContent=fmt(100*m.da,1)+'%';$('#r2').textContent=fmt(m.r2);
  const plot=lineChart([{values:y.map(v=>100*v)},{values:p.map(v=>100*v),color:'var(--accent2)'}],{h:350,xValues:predictions.map(r=>r.t),yLabel:lab.t('Retorno log acumulado · %','Cumulative log return · %'),xLabel:lab.t('Origen de predicción t','Forecast origin t')});
  $('#chart').innerHTML=plot.svg;
  $('#status').textContent=leak?lab.t('Información futura incluida','Future information included'):lab.t('Datos disponibles al corte','Data available at cutoff');
  $('#leakBtn').textContent='Leakage '+(leak?'ON':'OFF');$('#leakBtn').setAttribute('aria-pressed',String(leak));$('#leakBtn').className='btn '+(leak?'danger':'primary');
  $('#wfBtn').textContent='Walk-forward '+(wf?'ON':'OFF');$('#wfBtn').setAttribute('aria-pressed',String(wf));
  $('#featuresBox').textContent='[r(t), r(t-1), MA5(t), sin(t/13)'+(leak?', 0.15r(t)+0.85y(t,H) ⚠':'')+']';
  $('#splitName').textContent=wf?'Walk-forward':lab.t('Holdout temporal','Temporal holdout');
  $('#explain').textContent=leak?lab.t('La métrica mejora porque una entrada codifica el objetivo futuro. Walk-forward no corrige una variable contaminada. La predicción no puede reproducirse en tiempo real.','Metrics improve because an input encodes the future target. Walk-forward does not repair a contaminated feature. This prediction cannot be reproduced in real time.'):lab.t('La regresión ridge y el escalado se ajustan dentro de cada train. Sólo se incluyen etiquetas observadas al corte. Con H>1 los targets de evaluación se superponen: los errores no son independientes.','Ridge and scaling are fitted within each training fold. Only labels observed at the cutoff are included. For H>1, evaluation targets overlap: errors are not independent.');
  $('#foldBars').innerHTML=folds.map(f=>'<div><div class="note">Fold '+f.fold+' · train t='+f.trainFirst+'–'+f.trainLast+' · test t='+f.testFirst+'–'+f.testLast+'</div><div class="splitbar"><div class="train" style="width:'+100*f.nTrain/rows.length+'%">train</div><div class="empty" style="width:'+100*f.purged/rows.length+'%"></div><div class="test" style="width:'+100*f.nTest/rows.length+'%">test</div></div><div class="note">'+lab.t('Purga: ','Purged: ')+f.purged+' · RMSE '+fmt(100*f.metrics.rmse,2)+' pp</div></div>').join('');
  $('#foldTable').innerHTML=folds.map(f=>'<tr><td>'+f.fold+'</td><td>'+f.trainLast+'</td><td>'+f.latestLabel+'</td><td>'+f.testFirst+'</td><td>'+f.purged+'</td><td>'+fmt(100*f.metrics.rmse,2)+'</td></tr>').join('');
  lab.commit({kind:'fitted-ridge-on-synthetic-data',seed:991,config:{leakage:leak,walkForward:wf,horizon:H},results:{metrics:m,folds,predictions}});
}
$('#leakBtn').addEventListener('click',()=>{leak=!leak;render();});$('#wfBtn').addEventListener('click',()=>{wf=!wf;render();});$('#horizon').addEventListener('change',render);
$('#reset').addEventListener('click',()=>{leak=false;wf=true;$('#horizon').value='1';render();});lab.onUpdate(render);render();
