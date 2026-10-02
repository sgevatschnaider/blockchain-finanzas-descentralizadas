import {init,$,fmt,lineChart,bind} from '../assets/lab-ui.mjs';
import {seeded,normal} from '../assets/lab-math.mjs';
import {LAB_I} from '../assets/lab-i18n.mjs';
const lab=init(LAB_I['01'],'01');
function build(asset){
  const rng=seeded(asset==='BTC'?42:84),data=[];let price=asset==='BTC'?30000:1800;
  for(let t=0;t<220;t++){const r=(t<70?.0009:t<145?-.00025:.00055)+(asset==='BTC'?.018:.023)*normal(rng);price*=Math.exp(r);data.push({t,price,r});}
  return data;
}
function render(){
  const asset=$('#asset').value,target=$('#target').value,L=+$('#window').value,data=build(asset),n=data.length;
  $('#point').min=L-1;$('#point').max=n-2;const t=Math.max(L-1,Math.min(n-2,+$('#point').value));$('#point').value=t;
  const cut1=154,cut2=187,plot=lineChart([{values:data.map(d=>d.price)}],{h:360,yLabel:lab.t('Precio sintético · USD','Synthetic price · USD'),xLabel:lab.t('Período','Period'),format:v=>fmt(v,0)});
  const first=t-L+1,xx=plot.x(first),right=plot.x(t),top=plot.pad,bottom=360-plot.pad;
  let marks='<rect x="'+xx+'" y="'+top+'" width="'+Math.max(3,right-xx)+'" height="'+(bottom-top)+'" fill="var(--danger)" opacity=".12"/>';
  [cut1,cut2].forEach((c,i)=>marks+='<line x1="'+plot.x(c)+'" y1="'+top+'" x2="'+plot.x(c)+'" y2="'+bottom+'" stroke="'+(i?'var(--warn)':'var(--accent2)')+'" stroke-dasharray="6 5"/>');
  marks+='<circle cx="'+plot.x(t)+'" cy="'+plot.y(data[t].price)+'" r="7" fill="var(--danger)"/><circle cx="'+plot.x(t+1)+'" cy="'+plot.y(data[t+1].price)+'" r="7" fill="var(--warn)"/>';
  $('#chart').innerHTML=marks+plot.svg;
  const counts={train:Math.max(0,cut1-L),validation:cut2-cut1,test:n-cut2};
  ['train','val','test'].forEach((id,i)=>{const p=[70,15,15][i];$('#'+id+'Bar').style.width=p+'%';$('#'+id+'Bar').textContent=p+'%';});
  $('#mFeat').textContent=L+' × 2';$('#mTrain').textContent=counts.train;$('#mVal').textContent=counts.validation;$('#mTest').textContent=counts.test;
  $('#wval').textContent=L;$('#pval').textContent='t='+t;
  const y=target==='return'?100*data[t+1].r:data[t+1].price;
  $('#formula').textContent='X['+t+']: '+L+' × 2\n[precio, retorno log %]\ny['+(t+1)+'] = '+fmt(y,2)+(target==='return'?' %':' USD');
  $('#interpret').textContent=lab.t('X contiene los períodos '+first+' a '+t+' inclusive. El punto amarillo es el objetivo t+1 y queda fuera de la ventana. El conjunto de cada muestra se asigna por la fecha del objetivo.','X includes periods '+first+' through '+t+'. The yellow point is the t+1 target, outside the window. Each sample is assigned by its target date.');
  const sample=data.slice(first,t+1).map(d=>({t:d.t,price:d.price,return_pct:100*d.r}));
  $('#matrixBody').innerHTML=sample.map(d=>'<tr><td>t='+d.t+'</td><td>'+fmt(d.price,2)+'</td><td>'+fmt(d.return_pct,3)+'</td><td>'+lab.t('Entrada X','Input X')+'</td></tr>').join('')+'<tr><td>t='+(t+1)+'</td><td colspan="2" class="target">'+fmt(y,3)+(target==='return'?' %':' USD')+'</td><td class="target">'+lab.t('Objetivo y','Target y')+'</td></tr>';
  lab.commit({kind:'synthetic-window',seed:asset==='BTC'?42:84,config:{asset,target,window:L,t},results:{shape:[L,2],counts,targetTime:t+1,target:y,targetUnit:target==='return'?'log-return %':'USD',sample}});
}
bind(['asset','target'],'change',render);bind(['window','point'],'input',render);
$('#reset').addEventListener('click',()=>{$('#asset').value='BTC';$('#target').value='return';$('#window').value=30;$('#point').value=120;render();});
lab.onUpdate(render);render();
