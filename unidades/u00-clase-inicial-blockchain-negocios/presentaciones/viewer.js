(() => {
  "use strict";
  const decks = {
    negocios: { title: "Blockchain y nuevos modelos de negocio", folder: "deck-negocios", total: 26, pptx: "blockchain-y-nuevos-modelos-de-negocio.pptx", pdf: "blockchain-y-nuevos-modelos-de-negocio.pdf" },
    fundamentos: { title: "Descentralización, consenso y oráculos", folder: "deck-fundamentos", total: 29, pptx: "descentralizacion-consenso-y-oraculos.pptx", pdf: "descentralizacion-consenso-y-oraculos.pdf" }
  };
  const params = new URLSearchParams(location.search);
  if (params.get("embed") === "1") document.body.classList.add("embedded-viewer");
  let deck = decks[params.get("deck")] ? params.get("deck") : "negocios";
  let slide = Math.min(decks[deck].total, Math.max(1, Number(params.get("slide")) || 1));
  let timer = null;
  const $ = (selector) => document.querySelector(selector);
  const image = $("#slide-image");
  const counter = $("#counter");
  const title = $("#deck-title");
  const thumbs = $("#thumbnails");
  const play = $("#play");
  const delay = $("#delay");
  const path = (number) => `${decks[deck].folder}/slide-${String(number).padStart(2, "0")}.webp`;
  function syncUrl() {
    const embed = params.get("embed") === "1" ? "&embed=1" : "";
    history.replaceState(null, "", `?deck=${deck}&slide=${slide}${embed}`);
  }
  function renderThumbs() {
    thumbs.innerHTML = Array.from({ length: decks[deck].total }, (_, index) => {
      const number = index + 1;
      return `<li><button type="button" data-slide="${number}" aria-current="${number === slide}"><img src="${path(number)}" alt="" loading="lazy"><span>${number}</span></button></li>`;
    }).join("");
    thumbs.querySelectorAll("[data-slide]").forEach((button) => button.addEventListener("click", () => setSlide(Number(button.dataset.slide))));
  }
  function render() {
    const data = decks[deck];
    title.textContent = data.title;
    image.src = path(slide);
    image.alt = `Diapositiva ${slide} de ${data.total}: ${data.title}`;
    counter.textContent = `${slide} / ${data.total}`;
    $("#pptx-link").href = data.pptx;
    $("#pdf-link").href = data.pdf;
    document.querySelectorAll("[data-deck]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.deck === deck)));
    thumbs.querySelectorAll("[data-slide]").forEach((button) => button.setAttribute("aria-current", String(Number(button.dataset.slide) === slide)));
    syncUrl();
  }
  function setSlide(value) {
    slide = Math.min(decks[deck].total, Math.max(1, value));
    render();
    thumbs.querySelector(`[data-slide="${slide}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
  function setDeck(value) { stop(); deck = value; slide = 1; renderThumbs(); render(); }
  function stop() { clearInterval(timer); timer = null; play.textContent = "▶ Reproducir"; play.setAttribute("aria-pressed", "false"); }
  function togglePlay() {
    if (timer) return stop();
    play.textContent = "❚❚ Pausar"; play.setAttribute("aria-pressed", "true");
    timer = setInterval(() => slide === decks[deck].total ? stop() : setSlide(slide + 1), Number(delay.value));
  }
  document.querySelectorAll("[data-deck]").forEach((button) => button.addEventListener("click", () => setDeck(button.dataset.deck)));
  $("#previous").addEventListener("click", () => setSlide(slide - 1));
  $("#next").addEventListener("click", () => setSlide(slide + 1));
  $("#first").addEventListener("click", () => setSlide(1));
  $("#last").addEventListener("click", () => setSlide(decks[deck].total));
  play.addEventListener("click", togglePlay);
  delay.addEventListener("change", () => { if (timer) { stop(); togglePlay(); } });
  $("#fullscreen").addEventListener("click", () => $("#viewer-root").requestFullscreen?.());
  $("#copy-link").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); $("#copy-link").textContent = "Enlace copiado"; setTimeout(() => $("#copy-link").textContent = "Copiar enlace", 1600); }
    catch (_) { $("#copy-link").textContent = "No se pudo copiar"; }
  });
  document.addEventListener("keydown", (event) => {
    if (["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
    if (event.key === "ArrowLeft") setSlide(slide - 1);
    if (event.key === "ArrowRight") setSlide(slide + 1);
    if (event.key === "Home") setSlide(1);
    if (event.key === "End") setSlide(decks[deck].total);
    if (event.key === " ") { event.preventDefault(); togglePlay(); }
  });
  image.addEventListener("touchstart", (event) => image.dataset.touchX = String(event.touches[0].clientX), { passive: true });
  image.addEventListener("touchend", (event) => { const delta = event.changedTouches[0].clientX - Number(image.dataset.touchX || 0); if (Math.abs(delta) > 45) setSlide(slide + (delta < 0 ? 1 : -1)); }, { passive: true });
  renderThumbs(); render();
})();
