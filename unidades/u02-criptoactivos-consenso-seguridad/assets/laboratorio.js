(() => {
  const files = [
    "01-claves-direcciones.html", "02-sha256-avalancha.html", "03-modelo-utxo.html",
    "04-transaccion-bitcoin.html", "05-mempool-fees-mineria.html", "06-merkle-tree-proof.html",
    "07-fork-chainwork-confirmaciones.html", "08-ataque-51.html", "09-lightning-network.html",
    "10-hodl-strategy-lab.html", "11-utxo-aging-hodl-waves.html", "12-coin-days-destroyed.html",
    "13-behavioral-bitcoin-lab.html", "14-hodl-risk-allocation-lab.html"
  ];
  const current = decodeURIComponent(location.pathname.split("/").pop());
  const index = Math.max(0, files.indexOf(current));
  const key = "u02-bitcoin-progress";
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(key) || "{}"); } catch {}
  document.documentElement.style.setProperty("--lab-progress", `${(index + 1) / files.length * 100}%`);
  const line = document.createElement("div");
  line.className = "lab-progress-line";
  document.body.append(line);
  const dock = document.createElement("div");
  dock.className = "lab-progress-dock";
  const previous = index ? `<a href="${files[index-1]}" aria-label="Laboratorio anterior">← Anterior</a>` : `<a href="index.html">Índice</a>`;
  const next = index < files.length - 1 ? `<a href="${files[index+1]}" aria-label="Laboratorio siguiente">Siguiente →</a>` : `<a href="../evaluacion/hodl-cuestionario.html">Cuestionario HODL →</a>`;
  dock.innerHTML = `${previous}<div class="lab-position" data-short="${index+1}/${files.length}">Laboratorio ${index+1} de ${files.length}</div><button type="button" data-complete>${progress[current] ? "Completada ✓" : "Marcar completada"}</button>${next}`;
  const button = dock.querySelector("button");
  button.classList.toggle("done", Boolean(progress[current]));
  button.addEventListener("click", () => {
    progress[current] = !progress[current];
    localStorage.setItem(key, JSON.stringify(progress));
    button.textContent = progress[current] ? "Completada ✓" : "Marcar completada";
    button.classList.toggle("done", progress[current]);
  });
  document.body.append(dock);
  document.addEventListener("keydown", event => {
    if (!event.altKey) return;
    if (event.key === "ArrowLeft" && index) location.href = files[index-1];
    if (event.key === "ArrowRight" && index < files.length - 1) location.href = files[index+1];
  });
})();
