(() => {
  const key = 'u08-theme';
  const buttons = [...document.querySelectorAll('[data-theme-toggle]')];
  const apply = theme => {
    document.documentElement.dataset.theme = theme;
    buttons.forEach(button => {
      button.textContent = theme === 'light' ? 'Modo oscuro' : 'Modo claro';
      button.setAttribute('aria-pressed', String(theme === 'light'));
    });
  };
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  apply(saved === 'light' ? 'light' : 'dark');
  buttons.forEach(button => button.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    apply(theme);
    try { localStorage.setItem(key, theme); } catch {}
  }));
})();
