import assert from 'node:assert/strict';
import {metrics,ridge,gnnLayer,gnnStates,pagerank,betweenness,recurrentParams,recurrentStep,linearExplanation,sum} from '../unidades/u08-redes-neuronales-lstm-gnn-blockchain/assets/lab-math.mjs';
const near=(a,b,tol=1e-10)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
const m=metrics([1,2,3],[1,1,5]);near(m.rmse,Math.sqrt(5/3));near(m.mae,1);near(m.r2,-1.5);assert.equal(m.da,1);
const r=ridge([[1,3],[2,2],[3,1],[4,0]],[4,6,8,10],0.1);near(r.mu[0],2.5);near(r.scale[0],Math.sqrt(5/3));near(r.predict([2.5,1.5]),7);assert.equal(r.coefficients.length,3);
for(const [arch,gates] of [['LSTM',4],['GRU',3]]){assert.equal(recurrentParams(arch,8,32,2),gates*32*42);assert.equal(recurrentParams(arch,8,32,1),gates*32*41);}
const H=[[.9,.2],[.2,.8],[.7,.6],[.15,.25],[.55,.15],[.35,.7]],edges=[[0,1],[0,2],[1,2],[1,3],[2,4],[2,5],[3,5],[4,5]];
const gcn=gnnLayer(H,edges,'GCN');near(gcn.traces[0].weights[0],1/3);near(gcn.traces[0].weights[1],1/Math.sqrt(12));near(gcn.traces[0].weights[2],1/Math.sqrt(15));near(gcn.output[0][0],.521284621431743);assert.ok(Math.abs(sum(gcn.traces[0].weights)-1)>.1);
const sage=gnnLayer(H,edges,'GraphSAGE');sage.traces[0].aggregate.forEach((v,i)=>near(v,[.9,.2,.45,.7][i]));near(sage.output[0][0],.6935);near(sage.output[0][1],.4955);
for(const trace of gnnLayer(H,edges,'GAT').traces){near(sum(trace.weights),1);assert.ok(trace.ids.includes(trace.node));}
assert.deepEqual(gnnStates(H,edges,'GCN',0).states[0],H);
// Node relabeling must not alter messages apart from the same permutation.
const perm=[3,0,5,1,4,2],inv=perm.map((_,i)=>perm.indexOf(i)),Hp=perm.map(i=>H[i]),ep=edges.map(([u,v])=>[inv[u],inv[v]]);
for(const arch of ['GCN','GraphSAGE','GAT']){const a=gnnLayer(H,edges,arch).output,b=gnnLayer(Hp,ep,arch).output;perm.forEach((old,i)=>a[old].forEach((v,j)=>near(v,b[i][j])));}
const directed=[{s:0,t:1,w:2},{s:1,t:2,w:3},{s:2,t:1,w:1}];for(const weighted of [false,true])near(sum(pagerank(4,directed,weighted)),1);assert.deepEqual(betweenness(3,[{s:0,t:1},{s:1,t:2}]),[0,.5,0]);assert.deepEqual(pagerank(3,[]),[1/3,1/3,1/3]);
const gru=recurrentStep(.7,.2,0,'GRU');near(gru.h,(1-gru.z)*gru.g+gru.z*.2);const lstm=recurrentStep(.7,.2,.3,'LSTM');near(lstm.c,lstm.f*.3+lstm.i*lstm.g);near(lstm.h,lstm.o*Math.tanh(lstm.c));
const w=[-.75,.42,.55,.3,-.18],x=[.72,.66,.58,.62,.44],a=linearExplanation(w,x,Array(5).fill(.5),-.15),b=linearExplanation(w,x,Array(5).fill(.6),-.15);near(a.base,.02);near(a.output,.013);near(sum(a.phi),-.007);near(a.residual,0);near(a.output,b.output);near(b.base,.054);near(b.residual,0);
console.log('U8: métricas, ridge, parámetros, GCN/SAGE/GAT, invariancia por permutación, centralidad, recurrencia y SHAP correctos.');
