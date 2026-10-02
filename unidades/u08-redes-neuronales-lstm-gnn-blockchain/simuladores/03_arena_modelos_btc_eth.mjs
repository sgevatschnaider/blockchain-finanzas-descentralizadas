import {init,$,fmt,bind} from '../assets/lab-ui.mjs';
import {seeded,normal,mean,sd,sum,metrics} from '../assets/lab-math.mjs';
import {LAB_I} from '../assets/lab-i18n.mjs';
const lab=init(LAB_I['03'],'03');
const profiles=[{name:'Naive / cash',coeff:[0,0,0],noise:0},{name:'AR',coeff:[1,0,0],noise:.0004},{name:'Random Forest',coeff:[.75,.9,.7],noise:.0011},{name:'XGBoost',coeff:[.9,1,.8],noise:.0009},{name:'LSTM',coeff:[.8,.85,1],noise:.0015},{name:'GRU',coeff:[.85,.8,.9],noise:.0013}];
function benchmark(asset,H,features,cost){
  const rng=seeded(asset==='BTC'?4242:8484),r=[0],tech=[],on=[],N=300;
  for(let t=0;t<N;t++){tech.push(Math.sin(t/11));on.push(Math.cos(t/17));}
  for(let t=0;t<N-1;t++)r.push(.30*r[t]+.005*tech[t]+(asset==='ETH'?.008:.006)*on[t]+(asset==='ETH'?.021:.016)*normal(rng));
  const origins=Array.from({length:90},(_,i)=>180+i),truth=origins.map(t=>sum(r.slice(t+1,t+H+1)));
  return profiles.map((profile,k)=>{
    const noiseRng=seeded(900+k),pred=origins.map(t=>{
      const terms=[.30*r[t],.005*tech[t],(asset==='ETH'?.008:.006)*on[t]];
      return H*(sum(terms.map((v,j)=>features[j]?v*profile.coeff[j]:0))+profile.noise*normal(noiseRng));
    }),m=metrics(truth,pred);
    // Las métricas económicas usan decisiones espaciadas H períodos para evitar
    // sumar como independientes retornos futuros que se superponen.
    let equity=1,peak=1,maxDD=0,previous=0;const net=[],trades=[];
    for(let i=0;i<origins.length;i+=H){
      const position=Math.sign(pred[i]),ret=position*Math.expm1(truth[i])-cost*Math.abs(position-previous);
      equity*=1+ret;peak=Math.max(peak,equity);maxDD=Math.max(maxDD,1-equity/peak);net.push(ret);trades.push({t:origins[i],position,net:ret});previous=position;
    }
    return {name:profile.name,...m,da:k===0?null:m.da,sh:sd(net)?mean(net)/sd(net)*Math.sqrt(365/H):null,dd:maxDD,predictions:pred,truth,origins,trades};
  });
}
function render(){
  const asset=$('#asset').value,H=+$('#horizon').value,features=['market','technical','onchain'].map(id=>$('#'+id).checked),cost=+$('#cost').value/10000;
  ['marketV','techV','onV'].forEach((id,i)=>$('#'+id).textContent=features[i]?'ON':'OFF');$('#costV').textContent=+$('#cost').value+' bp';
  const rows=benchmark(asset,H,features,cost),best=[...rows].sort((a,b)=>a.rmse-b.rmse)[0],base=rows[0].rmse;
  $('#tbody').innerHTML=rows.map((r,k)=>'<tr><td><strong>'+r.name+'</strong></td><td>'+fmt(100*r.rmse,3)+'</td><td>'+fmt(100*r.mae,3)+'</td><td>'+(r.da===null?'—':fmt(100*r.da,1)+'%')+'</td><td>'+fmt(r.sh,2)+'</td><td>'+fmt(100*r.dd,1)+'%</td><td>'+fmt(100*(1-r.rmse/base),1)+'%</td></tr>').join('');
  const w=900,h=390,p=65,gap=(w-2*p)/rows.length,max=Math.max(...rows.map(r=>100*r.rmse))*1.2;let svg='';
  for(let i=0;i<5;i++){const v=max*i/4,y=h-p-(h-2*p)*v/max;svg+='<line x1="'+p+'" y1="'+y+'" x2="'+(w-p)+'" y2="'+y+'" stroke="var(--grid)"/><text x="'+(p-12)+'" y="'+(y+6)+'" text-anchor="end" fill="var(--muted)" font-size="17">'+fmt(v,1)+'</text>';}
  rows.forEach((r,i)=>{const bh=(h-2*p)*100*r.rmse/max,x=p+gap*(i+.5),y=h-p-bh;svg+='<rect x="'+(x-gap*.3)+'" y="'+y+'" width="'+gap*.6+'" height="'+bh+'" rx="6" fill="'+(r.name===best.name?'var(--accent2)':'var(--accent)')+'"/><text x="'+x+'" y="'+(y-10)+'" text-anchor="middle" fill="var(--text)" font-size="18">'+fmt(100*r.rmse,2)+'</text><text x="'+x+'" y="'+(h-p+29)+'" text-anchor="middle" fill="var(--muted)" font-size="16">'+['Naive','AR','RF','XGB','LSTM','GRU'][i]+'</text>';});
  svg+='<text x="'+p+'" y="22" fill="var(--muted)" font-size="17">RMSE · pp</text>';$('#chart').innerHTML=svg;
  $('#bestMsg').textContent=lab.t('Menor RMSE en estos perfiles sintéticos: '+best.name+'. Las métricas se calculan sobre las mismas 90 observaciones. Los nombres identifican perfiles de pronóstico, no algoritmos entrenados.','Lowest RMSE among these synthetic profiles: '+best.name+'. Metrics use the same 90 observations. Names identify forecast profiles, not trained algorithms.');
  lab.commit({kind:'fixed-causal-forecast-profiles-not-trained-algorithms',seed:asset==='BTC'?4242:8484,config:{asset,horizon:H,features,costBps:10000*cost},results:{rows}});
}
bind(['asset','horizon','market','technical','onchain'],'change',render);bind(['cost'],'input',render);
$('#reset').addEventListener('click',()=>{$('#asset').value='BTC';$('#horizon').value='1';$('#market').checked=true;$('#technical').checked=true;$('#onchain').checked=false;$('#cost').value=10;render();});
lab.onUpdate(render);render();
