const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const route = '/unidades/u08-redes-neuronales-lstm-gnn-blockchain/';

(async () => {
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:1440,height:1000}});
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const ready = (n, total) => page.waitForFunction(([p,t]) =>
    document.querySelector('[data-viewer-status]')?.textContent === 'Diapositiva ' + p + ' de ' + t &&
    document.querySelector('[data-viewer-loading]')?.classList.contains('hidden'), [n,total]);
  await page.goto(base + '/');
  assert.equal(await page.locator('.course-card').count(),9);
  await page.goto(base + route);
  assert.equal(await page.locator('.unit-stats>div').count(),4);
  await page.locator('[data-theme-toggle]').click();
  assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  await page.goto(base + route + 'materiales/');
  const manifest = await (await page.request.get(base + route + 'materiales/decks.json')).json();
  assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  for (const deck of manifest) {
    await page.locator('[data-deck-id="' + deck.id + '"]').click();
    await ready(1,deck.slides);
    assert.equal(await page.locator('[data-download-pdf]').getAttribute('href'),deck.pdf);
    assert.equal(await page.locator('[data-download-pptx]').getAttribute('href'),deck.pptx);
    for (const key of ['pdf','pptx']) {
      const response = await page.request.get(base + route + 'materiales/' + deck[key]);
      assert.equal(response.status(),200);
      const bytes = await response.body();
      assert.ok(key === 'pdf' ? bytes.subarray(0,5).toString() === '%PDF-' : bytes.subarray(0,2).toString() === 'PK');
    }
    await page.locator('[data-next]').click();
    await ready(2,deck.slides);
    await page.locator('[data-page-number]').fill(String(deck.slides));
    await page.locator('[data-page-number]').dispatchEvent('change');
    await ready(deck.slides,deck.slides);
    await page.locator('[data-viewer-title]').click();
    await page.keyboard.press('ArrowLeft');
    await ready(deck.slides-1,deck.slides);
  }
  await page.locator('[data-page-number]').fill('1');
  await page.locator('[data-page-number]').dispatchEvent('change');
  await ready(1,16);
  await page.locator('[data-speed]').selectOption('5000');
  await page.locator('[data-play]').click();
  await ready(2,16);
  await page.locator('[data-play]').click();
  assert.equal(await page.locator('[data-play]').getAttribute('aria-pressed'),'false');
  await page.locator('[data-fullscreen]').click();
  await page.waitForFunction(() => !!document.fullscreenElement);
  await page.evaluate(() => document.exitFullscreen());
  for (const width of [1440,390,320]) {
    await page.setViewportSize({width,height:1000});
    await page.goto(base + route);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'portada desborda');
    await page.goto(base + route + 'materiales/?deck=u08-04');
    await ready(1,16);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'visor desborda');
  }
  assert.deepEqual(errors,[]);
  await browser.close();
  console.log('U8 browser: cinco PDFs/PPTX, navegación, teclado, autoplay, fullscreen, tema y anchos 1440/390/320 correctos.');
})().catch(error => { console.error(error); process.exit(1); });
