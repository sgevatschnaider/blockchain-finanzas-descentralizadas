import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

const makeParts = (stem, count) => Array.from(
  { length: count },
  (_, index) => `pdf/${stem}-parte-${String(index + 1).padStart(2, '0')}.pdf`,
);

const decks = [
  {
    title: 'Bitcoin desde el white paper',
    meta: '50 diapositivas · fundamentos, arquitectura y profundización técnica',
    pages: 50,
    parts: ['pdf/bitcoin-whitepaper-clase.pdf'],
    partSize: 50,
    fullPdf: 'pdf/bitcoin-whitepaper-clase.pdf',
    pptx: 'pptx/bitcoin-whitepaper-clase.pptx',
    googleId: '1o6oABbnty3ehYVfnqmkhqospVSH07hMjyXmkfMQzofk',
  },
  {
    title: 'Proof of Work y Proof of Stake',
    meta: '55 diapositivas · consenso y seguridad',
    pages: 55,
    parts: makeParts('proof-of-work-vs-proof-of-stake', 10),
    googleId: '1XWNwSKX5xmVt3d0Ss3RpMU47fz4OosS9d7Pv_kmN2Yg',
  },
  {
    title: 'Halving de Bitcoin',
    meta: '21 diapositivas · emisión e incentivos',
    pages: 21,
    parts: makeParts('halving-bitcoin', 4),
    googleId: '1GibJrI9oLleRvcawZT2TAdW8evqf7xtJVP9XS26nPms',
  },
  {
    title: 'Layer 2: Bitcoin y Ethereum',
    meta: '38 diapositivas · escalabilidad y Lightning',
    pages: 38,
    parts: makeParts('layer-2-bitcoin-ethereum', 7),
    googleId: '1kOaW2YhTGEx5L6Lc3afhhRmqAHeFD3-CshF9Rn4SBzo',
  },
  {
    title: 'HODL: protocolo, economía y comportamiento',
    meta: '28 diapositivas · estrategia, riesgo y custodia',
    pages: 28,
    parts: makeParts('hodl-protocolo-economia-comportamiento', 5),
    fullPdf: 'pdf/hodl-protocolo-economia-comportamiento.pdf',
    pptx: 'pptx/hodl-protocolo-economia-comportamiento.pptx',
    googleId: null,
  },
  {
    title: 'HODL y análisis on-chain',
    meta: '31 diapositivas · UTXO, Waves, CDD y conducta',
    pages: 31,
    parts: makeParts('hodl-analisis-onchain-finanzas-conductuales', 6),
    fullPdf: 'pdf/hodl-analisis-onchain-finanzas-conductuales.pdf',
    pptx: 'pptx/hodl-analisis-onchain-finanzas-conductuales.pptx',
    googleId: null,
  },
];

const elements = {
  list: document.querySelector('#deckList'),
  canvas: document.querySelector('#pdfCanvas'),
  range: document.querySelector('#pageRange'),
  status: document.querySelector('#status'),
  fallback: document.querySelector('#fallback'),
  loading: document.querySelector('#loading'),
  play: document.querySelector('#play'),
  speed: document.querySelector('#speed'),
  viewerStage: document.querySelector('#viewerStage'),
  full: document.querySelector('#full'),
  pdfMode: document.querySelector('#pdfMode'),
  slidesMode: document.querySelector('#slidesMode'),
  pdfView: document.querySelector('#pdfView'),
  slidesView: document.querySelector('#slidesView'),
  slidesFrame: document.querySelector('#slidesFrame'),
  googleOpen: document.querySelector('#googleOpen'),
  download: document.querySelector('#download'),
  downloadPptx: document.querySelector('#downloadPptx'),
  deckTitle: document.querySelector('#deckTitle'),
  deckEyebrow: document.querySelector('#deckEyebrow'),
  autoplayProgress: document.querySelector('#autoplayProgress'),
};

const context = elements.canvas.getContext('2d', { alpha: false });
let currentDeck = 0;
let currentPage = 1;
let loadedPart = -1;
let pdfDocument = null;
let renderTask = null;
let renderVersion = 0;
let playTimer = null;
let playing = false;
let mode = 'pdf';
let resizeTimer = null;
let touchStartX = null;

elements.list.innerHTML = decks.map((deck, index) => `
  <button class="deck-button" data-index="${index}" type="button">
    <span class="deck-number">0${index + 1}</span>
    <span><strong>${deck.title}</strong><small>${deck.meta}</small></span>
  </button>
`).join('');

function setLoading(isLoading) {
  elements.loading.classList.toggle('hidden', !isLoading);
}

function resetAutoplayProgress() {
  elements.autoplayProgress.classList.remove('running');
  elements.autoplayProgress.style.animationDuration = `${Number(elements.speed.value)}ms`;
  void elements.autoplayProgress.offsetWidth;
  if (playing) elements.autoplayProgress.classList.add('running');
}

function clearPlayTimer() {
  window.clearTimeout(playTimer);
  playTimer = null;
  elements.autoplayProgress.classList.remove('running');
}

function scheduleNext() {
  clearPlayTimer();
  if (!playing || mode !== 'pdf') return;
  resetAutoplayProgress();
  playTimer = window.setTimeout(() => changePage(1), Number(elements.speed.value));
}

function setPlaying(nextPlaying) {
  playing = nextPlaying && mode === 'pdf';
  elements.play.textContent = playing ? '⏸ Pausar' : '▶ Reproducir';
  elements.play.setAttribute('aria-pressed', String(playing));
  if (playing) scheduleNext();
  else clearPlayTimer();
}

async function loadPart(partIndex) {
  if (partIndex === loadedPart && pdfDocument) return;
  const requestedDeck = currentDeck;
  const file = decks[requestedDeck].parts[partIndex];
  elements.download.href = decks[requestedDeck].fullPdf || file;
  const loadedDocument = await pdfjsLib.getDocument(file).promise;
  if (requestedDeck !== currentDeck) return;
  pdfDocument = loadedDocument;
  loadedPart = partIndex;
}

async function renderPage() {
  if (mode !== 'pdf') return;
  const version = ++renderVersion;
  const partSize = decks[currentDeck].partSize || 6;
  const partIndex = Math.floor((currentPage - 1) / partSize);
  const localPage = (currentPage - 1) % partSize + 1;
  setLoading(true);
  elements.fallback.classList.add('hidden');

  try {
    await loadPart(partIndex);
    if (version !== renderVersion) return;
    if (renderTask) renderTask.cancel();

    const page = await pdfDocument.getPage(localPage);
    if (version !== renderVersion) return;
    const base = page.getViewport({ scale: 1 });
    const stage = document.querySelector('#stage');
    const availableWidth = Math.max(300, stage.clientWidth - 30);
    const availableHeight = Math.max(260, stage.clientHeight - 30);
    const scale = Math.min(availableWidth / base.width, availableHeight / base.height, 2.8);
    const viewport = page.getViewport({ scale });
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    elements.canvas.width = Math.floor(viewport.width * pixelRatio);
    elements.canvas.height = Math.floor(viewport.height * pixelRatio);
    elements.canvas.style.width = `${Math.floor(viewport.width)}px`;
    elements.canvas.style.height = `${Math.floor(viewport.height)}px`;
    renderTask = page.render({
      canvasContext: context,
      viewport,
      transform: pixelRatio === 1 ? null : [pixelRatio, 0, 0, pixelRatio, 0, 0],
    });
    await renderTask.promise;
    if (version !== renderVersion) return;

    elements.range.value = currentPage;
    elements.status.textContent = `Diapositiva ${currentPage} de ${decks[currentDeck].pages}`;
  } catch (error) {
    if (error?.name !== 'RenderingCancelledException') {
      console.error(error);
      elements.fallback.classList.remove('hidden');
      elements.status.textContent = 'Vista PDF no disponible';
      setPlaying(false);
    }
  } finally {
    if (version === renderVersion) {
      setLoading(false);
      if (playing) scheduleNext();
    }
  }
}

async function setPage(pageNumber) {
  const total = decks[currentDeck].pages;
  currentPage = pageNumber > total ? 1 : pageNumber < 1 ? total : pageNumber;
  clearPlayTimer();
  await renderPage();
}

function changePage(delta) {
  setPage(currentPage + delta);
}

function updateGoogleView() {
  const deck = decks[currentDeck];
  if (!deck.googleId) return;
  const previewUrl = `https://docs.google.com/presentation/d/${deck.googleId}/preview?slide=id.p`;
  const editUrl = `https://docs.google.com/presentation/d/${deck.googleId}/edit?usp=sharing`;
  if (elements.slidesFrame.dataset.deck !== String(currentDeck)) {
    elements.slidesFrame.src = previewUrl;
    elements.slidesFrame.dataset.deck = String(currentDeck);
  }
  elements.googleOpen.href = editUrl;
}

function setMode(nextMode) {
  mode = nextMode;
  const isPdf = mode === 'pdf';
  elements.pdfMode.classList.toggle('active', isPdf);
  elements.slidesMode.classList.toggle('active', !isPdf);
  elements.pdfMode.setAttribute('aria-pressed', String(isPdf));
  elements.slidesMode.setAttribute('aria-pressed', String(!isPdf));
  elements.pdfView.classList.toggle('hidden', !isPdf);
  elements.slidesView.classList.toggle('hidden', isPdf);
  document.querySelector('.viewer-toolbar').classList.toggle('viewer-toolbar--slides', !isPdf);
  document.querySelectorAll('#prev, #play, #next, .speed-control, #download').forEach((control) => {
    control.classList.toggle('control-hidden', !isPdf);
  });
  setPlaying(false);
  if (isPdf) requestAnimationFrame(renderPage);
  else updateGoogleView();
}

async function loadDeck(index) {
  setPlaying(false);
  currentDeck = index;
  currentPage = 1;
  loadedPart = -1;
  pdfDocument = null;
  const deck = decks[index];
  elements.range.max = deck.pages;
  elements.deckTitle.textContent = deck.title;
  elements.deckEyebrow.textContent = `Presentación ${index + 1} de ${decks.length}`;
  elements.status.textContent = 'Cargando…';
  elements.list.querySelectorAll('.deck-button').forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  elements.slidesFrame.removeAttribute('data-deck');
  const hasGoogleSlides = Boolean(deck.googleId);
  elements.slidesMode.disabled = !hasGoogleSlides;
  elements.slidesMode.title = hasGoogleSlides ? 'Abrir la versión publicada en Google Slides' : 'Esta presentación se ofrece en PDF y PPTX';
  elements.downloadPptx.classList.toggle('control-hidden', !deck.pptx);
  if (deck.pptx) elements.downloadPptx.href = deck.pptx;
  if (!hasGoogleSlides && mode === 'slides') setMode('pdf');
  if (mode === 'pdf') await renderPage();
  else updateGoogleView();
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await elements.viewerStage.requestFullscreen();
  } catch (error) {
    console.error(error);
    elements.status.textContent = 'El navegador no permitió pantalla completa';
  }
}

elements.list.addEventListener('click', (event) => {
  const button = event.target.closest('[data-index]');
  if (button) loadDeck(Number(button.dataset.index));
});
document.querySelector('#prev').addEventListener('click', () => changePage(-1));
document.querySelector('#next').addEventListener('click', () => changePage(1));
document.querySelector('#stagePrev').addEventListener('click', () => changePage(-1));
document.querySelector('#stageNext').addEventListener('click', () => changePage(1));
elements.play.addEventListener('click', () => setPlaying(!playing));
elements.speed.addEventListener('change', () => {
  if (playing) scheduleNext();
});
elements.range.addEventListener('input', () => setPage(Number(elements.range.value)));
elements.full.addEventListener('click', toggleFullscreen);
elements.pdfMode.addEventListener('click', () => setMode('pdf'));
elements.slidesMode.addEventListener('click', () => setMode('slides'));
document.querySelector('#returnPdf').addEventListener('click', () => setMode('pdf'));

document.addEventListener('fullscreenchange', () => {
  const isFullscreen = document.fullscreenElement === elements.viewerStage;
  elements.viewerStage.classList.toggle('is-fullscreen', isFullscreen);
  elements.full.textContent = isFullscreen ? '⤢ Salir de pantalla completa' : '⛶ Pantalla completa';
  if (mode === 'pdf') requestAnimationFrame(renderPage);
});

document.addEventListener('keydown', (event) => {
  if (event.target.matches('input, select, textarea')) return;
  if (event.key === 'ArrowLeft' && mode === 'pdf') changePage(-1);
  if (event.key === 'ArrowRight' && mode === 'pdf') changePage(1);
  if (event.key === 'Home' && mode === 'pdf') setPage(1);
  if (event.key === 'End' && mode === 'pdf') setPage(decks[currentDeck].pages);
  if (event.key === ' ' && mode === 'pdf') {
    event.preventDefault();
    setPlaying(!playing);
  }
  if (event.key.toLowerCase() === 'f') toggleFullscreen();
});

document.querySelector('#stage').addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
document.querySelector('#stage').addEventListener('touchend', (event) => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 55) changePage(distance > 0 ? -1 : 1);
  touchStartX = null;
}, { passive: true });

window.addEventListener('resize', () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    if (mode === 'pdf') renderPage();
  }, 160);
});

loadDeck(0);
