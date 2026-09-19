(() => {
  const key='u03-ethereum-progress-v1';
  const get=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
  const render=()=>{const done=get(),total=14,percent=Math.round(done.length/total*100);document.querySelectorAll('[data-eth-progress-count]').forEach(el=>el.textContent=`${done.length}/${total} recursos completados`);document.querySelectorAll('[data-eth-progress-bar]').forEach(el=>el.style.width=`${percent}%`)};
  document.querySelectorAll('[data-reset-eth-progress]').forEach(button=>button.addEventListener('click',()=>{if(confirm('¿Reiniciar el progreso guardado para la Unidad 3?')){localStorage.removeItem(key);render()}}));
  addEventListener('storage',render);render();
})();
