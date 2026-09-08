(() => {
  "use strict";
  const body = document.body;
  const themeKey = "defi-u01-theme";
  const progressKey = "defi-u01-progress-v2";
  let savedTheme = null;
  try { savedTheme = localStorage.getItem(themeKey); } catch (_) {}
  body.dataset.theme = savedTheme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  const themeButton = document.querySelector("[data-theme-toggle]");
  const syncTheme = () => {
    if (!themeButton) return;
    const light = body.dataset.theme === "light";
    themeButton.textContent = light ? "Tema oscuro" : "Tema claro";
    themeButton.setAttribute("aria-pressed", String(light));
  };
  themeButton?.addEventListener("click", () => {
    body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem(themeKey, body.dataset.theme); } catch (_) {}
    syncTheme();
  });
  syncTheme();

  const items = [...document.querySelectorAll("[data-progress-id]")];
  let completed = new Set();
  try { completed = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]")); } catch (_) {}

  function renderProgress() {
    const total = items.length;
    const known = new Set(items.map(item => item.dataset.progressId));
    const done = [...completed].filter(id => known.has(id)).length;
    const percent = total ? Math.round(done / total * 100) : 0;
    items.forEach(item => {
      const active = completed.has(item.dataset.progressId);
      item.classList.toggle("completed", active);
      const button = item.querySelector("[data-mark-complete]");
      if (button) {
        button.textContent = active ? "Completado" : "Marcar completado";
        button.setAttribute("aria-pressed", String(active));
      }
    });
    const bar = document.querySelector("[data-progress-bar]");
    if (bar) bar.style.width = `${percent}%`;
    const text = document.querySelector("[data-progress-text]");
    if (text) text.textContent = `${done} de ${total} recursos completados · ${percent}%`;
    const track = bar?.parentElement;
    if (track) {
      track.setAttribute("aria-valuemax", String(total));
      track.setAttribute("aria-valuenow", String(done));
    }
  }

  items.forEach(item => item.addEventListener("click", event => {
    const button = event.target.closest("[data-mark-complete]");
    if (!button) return;
    event.preventDefault();
    const id = item.dataset.progressId;
    completed.has(id) ? completed.delete(id) : completed.add(id);
    try { localStorage.setItem(progressKey, JSON.stringify([...completed])); } catch (_) {}
    renderProgress();
  }));

  document.querySelector("[data-reset-progress]")?.addEventListener("click", () => {
    completed.clear();
    try { localStorage.removeItem(progressKey); } catch (_) {}
    renderProgress();
  });
  renderProgress();
})();