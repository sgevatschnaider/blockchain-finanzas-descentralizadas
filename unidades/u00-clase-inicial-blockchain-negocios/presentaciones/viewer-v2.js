(() => {
  "use strict";

  const decks = {
    negocios: {
      title: "Blockchain y nuevos modelos de negocio",
      folder: "deck-negocios",
      total: 26,
      pdf: "blockchain-y-nuevos-modelos-de-negocio.pdf",
      pptx: "blockchain-y-nuevos-modelos-de-negocio.pptx",
      chapters: []
    },
    fundamentos: {
      title: "Descentralización, consenso y oráculos",
      folder: "deck-fundamentos",
      total: 29,
      pdf: "descentralizacion-consenso-y-oraculos.pdf",
      pptx: "descentralizacion-consenso-y-oraculos.pptx",
      chapters: [
        { label: "Tres preguntas", slide: 2 },
        { label: "Descentralización", slide: 4 },
        { label: "Consenso", slide: 9 },
        { label: "Oráculos", slide: 19 },
        { label: "Síntesis", slide: 28 }
      ]
    }
  };

  const params = new URLSearchParams(location.search);
  const embedded = params.get("embed") === "1";
  if (embedded) document.body.classList.add("embedded-viewer");

  let deck = decks[params.get("deck")] ? params.get("deck") : "negocios";
  let slide = clampSlide(Number(params.get("slide")) || 1);
  let playing = false;
  let timer = null;
  let touchX = null;
  let toastTimer = null;

  const $ = selector => document.querySelector(selector);
  const image = $("#slide-image");
  const stage = $("#stage");
  const counter = $("#counter");
  const chapterLabel = $("#chapter-label");
  const title = $("#deck-title");
  const thumbs = $("#thumbnails");
  const chapters = $("#chapters");
  const play = $("#play");
  const loop = $("#loop");
  const delay = $("#delay");
  const progress = $("#slide-progress");
  const progressStart = $("#progress-start");
  const progressEnd = $("#progress-end");
  const errorBox = $("#slide-error");
  const errorPdf = $("#error-pdf-link");
  const toast = $("#toast");

  function currentDeck() { return decks[deck]; }
  function clampSlide(value) { return Math.min(decks[deck].total, Math.max(1, Number(value) || 1)); }
  function slidePath(number) { return `${currentDeck().folder}/slide-${String(number).padStart(2, "0")}.webp`; }

  function activeChapter() {
    const items = currentDeck().chapters;
    if (!items.length) return null;
    return [...items].reverse().find(item => slide >= item.slide) || items[0];
  }

  function syncUrl() {
    const next = new URL(location.href);
    next.searchParams.set("deck", deck);
    next.searchParams.set("slide", String(slide));
    if (embedded) next.searchParams.set("embed", "1");
    else next.searchParams.delete("embed");
    next.searchParams.delete("autoplay");
    history.replaceState(null, "", `${next.pathname}${next.search}${next.hash}`);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function renderChapters() {
    const items = currentDeck().chapters;
    chapters.innerHTML = items.map(item => `<button type="button" data-chapter-slide="${item.slide}">${item.label}</button>`).join("");
    chapters.querySelectorAll("[data-chapter-slide]").forEach(button => {
      button.addEventListener("click", () => navigate(Number(button.dataset.chapterSlide)));
    });
  }

  function renderThumbs() {
    thumbs.innerHTML = Array.from({ length: currentDeck().total }, (_, index) => {
      const number = index + 1;
      return `<li><button type="button" data-slide="${number}" aria-label="Ir a la diapositiva ${number}"><img src="${slidePath(number)}" alt="" loading="lazy"><span>${number}</span></button></li>`;
    }).join("");
    thumbs.querySelectorAll("[data-slide]").forEach(button => {
      button.addEventListener("click", () => navigate(Number(button.dataset.slide)));
    });
  }

  function centerActiveThumb() {
    const button = thumbs.querySelector(`[data-slide="${slide}"]`);
    if (!button) return;
    const left = button.offsetLeft - (thumbs.clientWidth - button.offsetWidth) / 2;
    thumbs.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }

  function preload(number) {
    if (number < 1 || number > currentDeck().total) return;
    const img = new Image();
    img.src = slidePath(number);
  }

  function updateChapterState() {
    const current = activeChapter();
    chapterLabel.textContent = current ? current.label : "Navegación por diapositivas";
    chapters.querySelectorAll("[data-chapter-slide]").forEach(button => {
      const chapterSlide = Number(button.dataset.chapterSlide);
      const item = currentDeck().chapters.find(entry => entry.slide === chapterSlide);
      button.dataset.active = String(Boolean(current && item && current.slide === item.slide));
    });
  }

  function render() {
    const data = currentDeck();
    title.textContent = data.title;
    image.alt = `Diapositiva ${slide} de ${data.total}: ${data.title}`;
    image.src = slidePath(slide);
    counter.textContent = `${slide} / ${data.total}`;
    progress.min = "1";
    progress.max = String(data.total);
    progress.value = String(slide);
    progressStart.textContent = "1";
    progressEnd.textContent = String(data.total);
    $("#pdf-link").href = data.pdf;
    $("#pptx-link").href = data.pptx;
    errorPdf.href = data.pdf;
    $("#previous").disabled = slide === 1;
    $("#next").disabled = slide === data.total && loop.getAttribute("aria-pressed") !== "true";

    document.querySelectorAll("[data-deck]").forEach(button => {
      button.setAttribute("aria-selected", String(button.dataset.deck === deck));
    });
    thumbs.querySelectorAll("[data-slide]").forEach(button => {
      button.setAttribute("aria-current", String(Number(button.dataset.slide) === slide));
    });

    updateChapterState();
    syncUrl();
    preload(slide + 1);
    preload(slide - 1);

    try {
      if (window.parent !== window) {
        window.parent.postMessage({ type: "module0:viewer", deck, slide, total: data.total, title: data.title }, location.origin);
      }
    } catch (_) {}
  }

  function setSlide(value, { scrollThumb = true } = {}) {
    slide = clampSlide(value);
    stage.classList.add("is-loading");
    errorBox.hidden = true;
    image.hidden = false;
    render();
    if (scrollThumb) centerActiveThumb();
  }

  function navigate(value) {
    setSlide(value);
    if (playing) schedule();
  }

  function setDeck(value) {
    if (!decks[value] || value === deck) return;
    stopPlayback();
    deck = value;
    slide = 1;
    renderChapters();
    renderThumbs();
    setSlide(1, { scrollThumb: false });
  }

  function updatePlayUi() {
    play.textContent = playing ? "❚❚ Pausar" : "▶ Reproducir";
    play.setAttribute("aria-pressed", String(playing));
  }

  function stopPlayback({ quiet = false } = {}) {
    clearTimeout(timer);
    timer = null;
    const wasPlaying = playing;
    playing = false;
    updatePlayUi();
    if (wasPlaying && !quiet) showToast("Reproducción pausada");
  }

  function schedule() {
    clearTimeout(timer);
    if (!playing) return;
    const wait = Math.max(1500, Number(delay.value) || 5000);
    timer = setTimeout(() => {
      if (!playing) return;
      if (slide < currentDeck().total) {
        setSlide(slide + 1);
        schedule();
        return;
      }
      if (loop.getAttribute("aria-pressed") === "true") {
        setSlide(1);
        schedule();
        return;
      }
      stopPlayback({ quiet: true });
      showToast("Presentación finalizada");
    }, wait);
  }

  function togglePlayback() {
    if (playing) {
      stopPlayback();
      return;
    }
    playing = true;
    updatePlayUi();
    schedule();
    showToast("Reproducción automática iniciada");
  }

  function toggleLoop() {
    const active = loop.getAttribute("aria-pressed") === "true";
    loop.setAttribute("aria-pressed", String(!active));
    loop.textContent = !active ? "↻ Repetir: sí" : "↻ Repetir: no";
    $("#next").disabled = slide === currentDeck().total && active;
    if (playing) schedule();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(location.href);
      showToast("Enlace copiado");
    } catch (_) {
      const input = document.createElement("input");
      input.value = location.href;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      try { document.execCommand("copy"); showToast("Enlace copiado"); }
      catch (_) { showToast("No se pudo copiar el enlace"); }
      input.remove();
    }
  }

  document.querySelectorAll("[data-deck]").forEach(button => button.addEventListener("click", () => setDeck(button.dataset.deck)));
  $("#previous").addEventListener("click", () => navigate(slide - 1));
  $("#next").addEventListener("click", () => {
    if (slide === currentDeck().total && loop.getAttribute("aria-pressed") === "true") navigate(1);
    else navigate(slide + 1);
  });
  $("#first").addEventListener("click", () => navigate(1));
  $("#last").addEventListener("click", () => navigate(currentDeck().total));
  play.addEventListener("click", togglePlayback);
  loop.addEventListener("click", toggleLoop);
  delay.addEventListener("change", () => { if (playing) schedule(); });
  progress.addEventListener("input", () => navigate(Number(progress.value)));
  $("#copy-link").addEventListener("click", copyLink);
  $("#fullscreen").addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await $("#viewer-root").requestFullscreen?.();
    } catch (_) { showToast("Pantalla completa no disponible en este navegador"); }
  });

  image.addEventListener("load", () => {
    stage.classList.remove("is-loading");
    errorBox.hidden = true;
    image.hidden = false;
  });
  image.addEventListener("error", () => {
    stage.classList.remove("is-loading");
    image.hidden = true;
    errorBox.hidden = false;
  });

  image.addEventListener("pointerdown", event => { touchX = event.clientX; });
  image.addEventListener("pointerup", event => {
    if (touchX === null) return;
    const delta = event.clientX - touchX;
    touchX = null;
    if (Math.abs(delta) > 45) navigate(slide + (delta < 0 ? 1 : -1));
  });
  image.addEventListener("pointercancel", () => { touchX = null; });

  document.addEventListener("keydown", event => {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName) && event.key !== "Escape") return;
    if (event.key === "ArrowLeft") navigate(slide - 1);
    else if (event.key === "ArrowRight") navigate(slide + 1);
    else if (event.key === "Home") navigate(1);
    else if (event.key === "End") navigate(currentDeck().total);
    else if (event.key === " ") { event.preventDefault(); togglePlayback(); }
    else if (event.key.toLowerCase() === "f") $("#fullscreen").click();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && playing) stopPlayback({ quiet: true });
  });

  renderChapters();
  renderThumbs();
  setSlide(slide, { scrollThumb: false });
  updatePlayUi();

  if (params.get("autoplay") === "1") {
    playing = true;
    updatePlayUi();
    schedule();
  }
})();
