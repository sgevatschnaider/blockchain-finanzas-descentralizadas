(() => {
  "use strict";
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const key = "defi-module-00-theme";
  let saved = null;
  try { saved = localStorage.getItem(key); } catch (_) {}
  root.dataset.theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  function syncThemeLabel() {
    if (!themeButton) return;
    const light = root.dataset.theme === "light";
    themeButton.textContent = light ? "Tema oscuro" : "Tema claro";
    themeButton.setAttribute("aria-pressed", String(light));
  }
  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem(key, root.dataset.theme); } catch (_) {}
    syncThemeLabel();
  });
  syncThemeLabel();

  const progressItems = [...document.querySelectorAll("[data-progress-id]")];
  const progressBar = document.querySelector("[data-progress-bar]");
  const progressText = document.querySelector("[data-progress-text]");
  const progressKey = "defi-module-00-progress";
  let completed = new Set();
  try { completed = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]")); } catch (_) {}
  function renderProgress() {
    progressItems.forEach((item) => item.classList.toggle("completed", completed.has(item.dataset.progressId)));
    const total = progressItems.length;
    const done = [...completed].filter((id) => progressItems.some((item) => item.dataset.progressId === id)).length;
    const percentage = total ? Math.round(done / total * 100) : 0;
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${done} de ${total} recursos completados`;
  }
  progressItems.forEach((item) => item.addEventListener("click", (event) => {
    const mark = event.target.closest("[data-mark-complete]");
    if (!mark) return;
    event.preventDefault();
    const id = item.dataset.progressId;
    completed.has(id) ? completed.delete(id) : completed.add(id);
    try { localStorage.setItem(progressKey, JSON.stringify([...completed])); } catch (_) {}
    mark.textContent = completed.has(id) ? "Completado" : "Marcar como completado";
    renderProgress();
  }));
  progressItems.forEach((item) => {
    const mark = item.querySelector("[data-mark-complete]");
    if (mark && completed.has(item.dataset.progressId)) mark.textContent = "Completado";
  });
  renderProgress();
})();
