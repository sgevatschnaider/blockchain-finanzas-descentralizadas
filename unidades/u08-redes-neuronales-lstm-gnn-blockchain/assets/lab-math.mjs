export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const mean=a=>a.length?a.reduce((s,v)=>s+v,0)/a.length:0;
export const sum=a=>a.reduce((s,v)=>s+v,0);
export const sd=a=>a.length>1?Math.sqrt(sum(a.map(v=>(v-mean(a))**2))/(a.length-1)):0;
export const sig=x=>1/(1+Math.exp(-x));
export const relu=a=>a.map(v=>Math.max(0,v));
export function seeded(seed=2026){let s=seed>>>0;return()=>{s=(1664525*s+1013904223)>>>0;return s/4294967296;};}
export function normal(rng){let u=0,v=0;while(!u)u=rng();while(!v)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
export function softmax(a){if(!a.length)return[];const m=Math.max(...a),e=a.map(v=>Math.exp(v-m)),s=sum(e);return e.map(v=>v/s);}
export function metrics(y,p){
  if(!y.length||y.length!==p.length)throw Error('Muestras incompatibles');
  const err=y.map((v,i)=>p[i]-v),sse=sum(err.map(v=>v*v)),sst=sum(y.map(v=>(v-mean(y))**2));
  return {n:y.length,rmse:Math.sqrt(sse/y.length),mae:mean(err.map(Math.abs)),da:mean(y.map((v,i)=>Number(Math.sign(v)===Math.sign(p[i])))),r2:sst?1-sse/sst:null};
}
export function ridge(X,y,lambda=.1){
  const q=X[0].length,mu=Array.from({length:q},(_,j)=>mean(X.map(x=>x[j]))),scale=mu.map((_,j)=>sd(X.map(x=>x[j]))||1);
  const A=X.map(x=>[1,...x.map((v,j)=>(v-mu[j])/scale[j])]),n=q+1,B=Array.from({length:n},()=>Array(n).fill(0)),b=Array(n).fill(0);
  A.forEach((x,i)=>{for(let j=0;j<n;j++){b[j]+=x[j]*y[i];for(let k=0;k<n;k++)B[j][k]+=x[j]*x[k];}});
  for(let j=1;j<n;j++)B[j][j]+=lambda;
  for(let i=0;i<n;i++){
    let pivot=i;for(let k=i+1;k<n;k++)if(Math.abs(B[k][i])>Math.abs(B[pivot][i]))pivot=k;
    [B[i],B[pivot]]=[B[pivot],B[i]];[b[i],b[pivot]]=[b[pivot],b[i]];
    const d=B[i][i];if(Math.abs(d)<1e-12)throw Error('Sistema singular');
    for(let j=i;j<n;j++)B[i][j]/=d;b[i]/=d;
    for(let k=0;k<n;k++)if(k!==i){const f=B[k][i];for(let j=i;j<n;j++)B[k][j]-=f*B[i][j];b[k]-=f*b[i];}
  }
  return {coefficients:b,mu,scale,predict:x=>b[0]+sum(x.map((v,j)=>b[j+1]*(v-mu[j])/scale[j]))};
}
export const recurrentParams=(arch,d,u,biases=2)=>(arch==='LSTM'?4:3)*u*(d+u+biases);
export const W=[[.8,.3],[.2,.9]];
export const WS=[[.50,.12],[.08,.55],[.35,.15],[.10,.30]];
export function matmul(v,m){return m[0].map((_,j)=>sum(v.map((x,i)=>x*m[i][j])));}
export function adjacency(n,edges){const a=Array.from({length:n},()=>[]);edges.forEach(([u,v])=>{if(!a[u].includes(v))a[u].push(v);if(!a[v].includes(u))a[v].push(u);});return a;}
export function gnnLayer(H,edges,arch){
  const adj=adjacency(H.length,edges),traces=[];
  const output=H.map((h,v)=>{
    const neighbors=adj[v],ids=[v,...neighbors];let weights,agg,out;
    if(arch==='GCN'){
      weights=ids.map(u=>1/Math.sqrt((adj[v].length+1)*(adj[u].length+1)));
      agg=h.map((_,j)=>sum(ids.map((u,k)=>weights[k]*H[u][j])));
      out=relu(matmul(agg,W));
    }else if(arch==='GraphSAGE'){
      const avg=h.map((_,j)=>mean(neighbors.map(u=>H[u][j])));
      weights=neighbors.map(()=>neighbors.length?1/neighbors.length:0);
      agg=[...h,...avg];out=relu(matmul(agg,WS));
    }else{
      const transformed=ids.map(u=>matmul(H[u],W)),own=transformed[0],a=[.6,-.4,.8,.3];
      const scores=transformed.map(x=>{const e=sum([...own,...x].map((v,j)=>v*a[j]));return e<0?.2*e:e;});
      weights=softmax(scores);agg=own.map((_,j)=>sum(transformed.map((x,k)=>weights[k]*x[j])));out=relu(agg);
    }
    traces.push({node:v,ids:arch==='GraphSAGE'?neighbors:ids,weights,aggregate:agg,output:out});
    return out;
  });
  return {output,traces};
}
export function gnnStates(H,edges,arch,layers){const states=[H.map(v=>v.slice())],traces=[];for(let i=0;i<layers;i++){const next=gnnLayer(states.at(-1),edges,arch);states.push(next.output);traces.push(next.traces);}return {states,traces};}
export function pagerank(n,edges,weighted=false,damping=.85){
  let p=Array(n).fill(1/n);const out=Array(n).fill(0);
  edges.forEach(e=>out[e.s]+=weighted?e.w:1);
  for(let step=0;step<200;step++){
    const dangling=sum(p.filter((_,i)=>!out[i])),q=Array(n).fill((1-damping)/n+damping*dangling/n);
    edges.forEach(e=>q[e.t]+=damping*p[e.s]*(weighted?e.w:1)/out[e.s]);
    const diff=sum(q.map((v,i)=>Math.abs(v-p[i])));p=q;if(diff<1e-12)break;
  }
  return p;
}
export function betweenness(n,edges){
  const adj=Array.from({length:n},()=>[]);edges.forEach(e=>adj[e.s].push(e.t));const C=Array(n).fill(0);
  for(let source=0;source<n;source++){
    const stack=[],pred=Array.from({length:n},()=>[]),sigma=Array(n).fill(0),dist=Array(n).fill(-1),queue=[source];sigma[source]=1;dist[source]=0;
    for(let qi=0;qi<queue.length;qi++){
      const v=queue[qi];stack.push(v);
      for(const w of adj[v]){if(dist[w]<0){queue.push(w);dist[w]=dist[v]+1;}if(dist[w]===dist[v]+1){sigma[w]+=sigma[v];pred[w].push(v);}}
    }
    const delta=Array(n).fill(0);
    while(stack.length){const w=stack.pop();for(const v of pred[w])delta[v]+=sigma[v]/sigma[w]*(1+delta[w]);if(w!==source)C[w]+=delta[w];}
  }
  return C.map(v=>v/((n-1)*(n-2)||1));
}
export function recurrentStep(x,h,c,arch){
  if(arch==='GRU'){
    const z=sig(1.05*x+.32*h-.42),r=sig(.6*x+.25*h+.08),g=Math.tanh(.92*x-.28+r*(.38*h));
    const next=(1-z)*g+z*h;return {z,r,g,h:next,c:null,p:sig(2.2*next-.25)};
  }
  const i=sig(1.15*x+.35*h-.55),f=sig(.55*x+.4*h+.15),o=sig(.7*x+.25*h-.1),g=Math.tanh(.9*x+.25*h-.3),cell=f*c+i*g,next=o*Math.tanh(cell);
  return {i,f,o,g,c:cell,h:next,p:sig(2.2*next-.25)};
}
export function linearExplanation(weights,values,mu,intercept){
  const base=intercept+sum(weights.map((w,i)=>w*mu[i])),phi=weights.map((w,i)=>w*(values[i]-mu[i])),output=intercept+sum(weights.map((w,i)=>w*values[i]));
  return {base,phi,output,residual:output-base-sum(phi)};
}
