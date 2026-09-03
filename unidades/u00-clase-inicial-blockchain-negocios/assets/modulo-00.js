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
    const progressTrack = progressBar?.parentElement;
    if (progressTrack) {
      progressTrack.setAttribute("aria-valuemax", String(total));
      progressTrack.setAttribute("aria-valuenow", String(done));
    }
    progressItems.forEach((item) => {
      const mark = item.querySelector("[data-mark-complete]");
      if (!mark) return;
      mark.textContent = completed.has(item.dataset.progressId) ? "Completado" : (item.classList.contains("deck-choice") ? "Marcar como completado" : "Marcar completado");
      mark.setAttribute("aria-pressed", String(completed.has(item.dataset.progressId)));
    });
  }
  progressItems.forEach((item) => item.addEventListener("click", (event) => {
    const mark = event.target.closest("[data-mark-complete]");
    if (!mark) return;
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

  const inlineDecks = {
    negocios: {
      title: "Blockchain y nuevos modelos de negocio",
      count: "26 diapositivas",
      description: "Coordinación, plataformas, smart contracts, tokenización y aplicaciones en finanzas, salud, logística, PropTech e InsurTech.",
      pptx: "presentaciones/blockchain-y-nuevos-modelos-de-negocio.pptx",
      pdf: "presentaciones/blockchain-y-nuevos-modelos-de-negocio.pdf"
    },
    fundamentos: {
      title: "Descentralización, consenso y oráculos",
      count: "29 diapositivas",
      description: "Control distribuido, fallas bizantinas, quórums, resistencia Sybil y el problema de conectar contratos con hechos externos.",
      pptx: "presentaciones/descentralizacion-consenso-y-oraculos.pptx",
      pdf: "presentaciones/descentralizacion-consenso-y-oraculos.pdf"
    }
  };
  const inlineFrame = document.querySelector("#inline-presentation");
  function selectInlineDeck(name) {
    const data = inlineDecks[name];
    if (!data || !inlineFrame) return;
    inlineFrame.src = `presentaciones/index.html?deck=${name}&embed=1`;
    inlineFrame.title = `Presentación: ${data.title}`;
    document.querySelector("[data-inline-title]").textContent = data.title;
    document.querySelector("[data-inline-count]").textContent = data.count;
    document.querySelector("[data-inline-description]").textContent = data.description;
    document.querySelector("[data-fullscreen-viewer]").href = `presentaciones/index.html?deck=${name}`;
    document.querySelector("[data-pdf-download]").href = data.pdf;
    document.querySelector("[data-pptx-download]").href = data.pptx;
    document.querySelectorAll("[data-inline-deck]").forEach((button) => {
      const selected = button.dataset.inlineDeck === name;
      button.setAttribute("aria-selected", String(selected));
      button.closest(".deck-choice")?.classList.toggle("active", selected);
    });
  }
  document.querySelectorAll("[data-inline-deck]").forEach((button) => button.addEventListener("click", () => selectInlineDeck(button.dataset.inlineDeck)));
})();
