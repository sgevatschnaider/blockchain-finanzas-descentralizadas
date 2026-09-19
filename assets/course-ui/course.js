(() => {
  const key='blockchain-course-theme';
  const saved=localStorage.getItem(key);
  if(saved==='light') document.documentElement.dataset.courseTheme='light';
  document.querySelectorAll('[data-course-theme]').forEach(button=>button.addEventListener('click',()=>{
    const light=document.documentElement.dataset.courseTheme!=='light';
    document.documentElement.dataset.courseTheme=light?'light':'dark';
    localStorage.setItem(key,light?'light':'dark');
    button.textContent=light?'Tema oscuro':'Tema claro';
  }));
})();
