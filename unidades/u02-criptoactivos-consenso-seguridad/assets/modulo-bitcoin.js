(() => {
  const key = "u02-bitcoin-progress";
  const labIds = [
    "01-claves-direcciones.html","02-sha256-avalancha.html","03-modelo-utxo.html",
    "04-transaccion-bitcoin.html","05-mempool-fees-mineria.html","06-merkle-tree-proof.html",
    "07-fork-chainwork-confirmaciones.html","08-ataque-51.html","09-lightning-network.html",
    "10-hodl-strategy-lab.html","11-utxo-aging-hodl-waves.html","12-coin-days-destroyed.html",
    "13-behavioral-bitcoin-lab.html","14-hodl-risk-allocation-lab.html"
  ];

  const read = () => {
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch { return {}; }
  };

  const write = progress => {
    try { localStorage.setItem(key, JSON.stringify(progress)); }
    catch {}
  };

  const updateProgress = () => {
    const progress = read();
    const completed = labIds.filter(id => Boolean(progress[id])).length;
    const total = labIds.length;
    const pct = total ? completed / total * 100 : 0;

    document.querySelectorAll("[data-progress-count]").forEach(el => {
      el.textContent = `${completed}/${total}`;
    });

    document.querySelectorAll("[data-progress-bar]").forEach(el => {
      el.style.width = `${pct}%`;
      el.setAttribute("aria-valuenow", String(completed));
      el.setAttribute("aria-valuemin", "0");
      el.setAttribute("aria-valuemax", String(total));
    });

    document.querySelectorAll("[data-lab-id]").forEach(el => {
      const done = Boolean(progress[el.dataset.labId]);
      el.classList.toggle("completed", done);
      el.setAttribute("data-completed", done ? "true" : "false");
    });

    document.querySelectorAll("[data-mark-lab]").forEach(button => {
      const id = button.dataset.markLab;
      const done = Boolean(progress[id]);
      button.classList.toggle("is-complete", done);
      button.setAttribute("aria-pressed", done ? "true" : "false");
      button.textContent = done ? "✓ Dominado" : "✓ Ya puedo explicarlo";
    });

    document.querySelectorAll("[data-mastery-state]").forEach(el => {
      const done = Boolean(progress[el.dataset.masteryState]);
      el.classList.toggle("is-complete", done);
      el.textContent = done ? "Dominado ✓" : "Pendiente";
    });
  };

  const toggleLab = id => {
    if (!labIds.includes(id)) return;
    const progress = read();
    progress[id] = !progress[id];
    write(progress);
    updateProgress();
  };

  document.querySelectorAll("[data-mark-lab]").forEach(button => {
    if (button.dataset.progressBound === "true") return;
    button.dataset.progressBound = "true";
    button.addEventListener("click", () => toggleLab(button.dataset.markLab));
  });

  window.addEventListener("storage", event => {
    if (event.key === key) updateProgress();
  });

  window.BitcoinModule = { key, labIds, read, write, toggleLab, updateProgress };
  updateProgress();
})();