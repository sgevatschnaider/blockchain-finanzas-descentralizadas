import {init,$,fmt,bind,lineChart} from '../assets/lab-ui.mjs';
import {recurrentParams} from '../assets/lab-math.mjs';
import {LAB_I} from '../assets/lab-i18n.mjs';
const lab=init(LAB_I['04'],'04');
function render(){
 const arch=$('#arch').value,d=+$('#inputdim').value,u=+$('#units').value,drop=+$('#dropout').value,E=+$('#epochs').value,b=+$('#biases').value,gates=arch==='LSTM'?4:3;
 $('#iv').textContent=d;$('#uv').textContent=u;$('#dv').textContent=fmt(drop,2);$('#ev').textContent=E;
 const train=[],val=[];
 for(let e=1;e<=E;e++){const capacity=u/32,speed=20/(1+Math.sqrt(capacity)*.3)*(1+drop*1.7),floor=.075+.21*drop,overfit=Math.max(0,e-(30+45*drop))*capacity*.0022*(1-drop);train.push(floor+.9*Math.exp(-e/speed)+.004*Math.sin(e*.45));val.push(floor+.10+.9*Math.exp(-e/speed)+overfit+.009*Math.sin(e*.35));}
 const best=val.indexOf(Math.min(...val))+1,gap=val.at(-1)-train.at(-1),count=recurrentParams(arch,d,u,b),chart=lineChart([{values:train,color:'var(--accent)'},{values:val,color:'var(--accent2)'}],{h:360,xValues:Array.from({length:E},(_,i)=>i+1),xLabel:lab.t('Época','Epoch'),yLabel:lab.t('Loss sintética · adimensional','Synthetic loss · dimensionless')});
 chart.svg+='<line x1="'+chart.x(best-1)+'" y1="40" x2="'+chart.x(best-1)+'" y2="296" stroke="var(--warn)" stroke-dasharray="6 6"/><circle cx="'+chart.x(best-1)+'" cy="'+chart.y(val[best-1])+'" r="6" fill="var(--warn)"/>';
 $('#chart').innerHTML=chart.svg;$('#params').textContent=count.toLocaleString(lab.lang()==='es'?'es-AR':'en-US');$('#best').textContent=best;$('#gap').textContent=fmt(gap);$('#status').textContent=gap>.18?lab.t('Brecha alta','Large gap'):lab.t('Brecha moderada','Moderate gap');
 $('#countFormula').textContent=gates+' × '+u+' × ('+d+' + '+u+' + '+b+') = '+count+'\n'+lab.t('Entrada','Input')+': '+gates*u*d+' · '+lab.t('Recurrencia','Recurrent')+': '+gates*u*u+' · Bias: '+gates*u*b;
 $('#msg').textContent=lab.t('La línea amarilla marca el mínimo de validación observado (época '+best+'). Es una ilustración de selección de checkpoint; no hay entrenamiento ni early stopping ejecutado. Dropout modifica una fórmula pedagógica, no las capas internas de PyTorch.','The yellow line marks the observed validation minimum (epoch '+best+'). This illustrates checkpoint selection; no training or early stopping is executed. Dropout modifies a teaching formula, not internal PyTorch layers.');
 lab.commit({kind:'synthetic-learning-curves-exact-parameter-count',config:{arch,inputDim:d,units:u,dropout:drop,epochs:E,biasVectors:b,layers:1,directions:1,outputHead:false},results:{parameters:count,inputWeights:gates*u*d,recurrentWeights:gates*u*u,biasParameters:gates*u*b,bestEpoch:best,gap,train,val}});
}
bind(['arch','biases'],'change',render);bind(['inputdim','units','dropout','epochs'],'input',render);
$('#reset').addEventListener('click',()=>{$('#arch').value='LSTM';$('#inputdim').value=8;$('#units').value=32;$('#dropout').value=.2;$('#epochs').value=60;$('#biases').value=2;render();});lab.onUpdate(render);render();
