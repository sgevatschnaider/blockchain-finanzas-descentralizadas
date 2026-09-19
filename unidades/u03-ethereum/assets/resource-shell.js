(() => {
  const resources=[
    ['01-cuenta-clave-direccion.html','Cuenta, clave y dirección'],['02-anatomia-transaccion.html','Anatomía de una transacción'],['03-eip1559-gas-lab.html','EIP-1559 Gas Lab'],['04-state-machine.html','Ethereum State Machine'],['05-evm-interactive.html','EVM Interactive Lab'],['06-smart-contract-lifecycle.html','Smart Contract Lifecycle'],['07-proof-of-stake.html','Proof of Stake'],['08-finality-fork-choice.html','Finality y Fork Choice'],['09-slashing-validator-economics.html','Slashing y economía'],['10-erc20-erc721-token-lab.html','ERC-20 y ERC-721'],['11-l1-l2-rollup-cost-lab.html','L1 vs L2'],['12-mev-block-building.html','MEV y Block Building']
  ];
  const file=decodeURIComponent(location.pathname.split('/').pop()||'');
  const inLab=location.pathname.includes('/simuladores/');
  const id=inLab?`lab:${file}`:location.pathname.includes('/recursos/')?'glosario':'cuestionario';
  const key='u03-ethereum-progress-v1';
  const get=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
  const style=document.createElement('link');style.rel='stylesheet';style.href='../assets/resource-shell.css';document.head.append(style);
  const nav=document.createElement('div');nav.className='eth-context';nav.setAttribute('role','navigation');nav.setAttribute('aria-label','Navegación de la Unidad 3');
  const index=resources.findIndex(item=>item[0]===file),prev=index>0?resources[index-1]:null,next=index>=0&&index<resources.length-1?resources[index+1]:null;
  nav.innerHTML=`<span class="eth-context__title">U3 · Ethereum</span><span class="eth-context__links"><a href="../index.html">Inicio</a><a href="../materiales/index.html">Presentaciones</a><a href="../simuladores/index.html">Laboratorios</a><a href="../recursos/glosario.html">Glosario</a><a href="../evaluacion/cuestionario.html">Evaluación</a>${prev?`<a href="${prev[0]}">← ${prev[1]}</a>`:''}${next?`<a href="${next[0]}">${next[1]} →</a>`:''}<button type="button" data-complete>Marcar completado</button></span>`;
  document.body.prepend(nav);
  const button=nav.querySelector('[data-complete]');
  const render=()=>{const done=get(),active=done.includes(id);button.classList.toggle('done',active);button.textContent=active?'✓ Completado':'Marcar completado'};
  button.addEventListener('click',()=>{const done=get(),nextDone=done.includes(id)?done.filter(x=>x!==id):[...done,id];localStorage.setItem(key,JSON.stringify(nextDone));render()});render();
})();
