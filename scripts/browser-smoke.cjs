const { chromium } = require('playwright');

const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const failures = [];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', (error) => failures.push(`pageerror: ${error.message}`));

  await page.goto(`${base}/index.html`, { waitUntil: 'domcontentloaded' });
  if (await page.locator('.course-card').count() !== 8) failures.push('campus: se esperaban 8 tarjetas');

  await page.goto(`${base}/unidades/u03-ethereum/`, { waitUntil: 'domcontentloaded' });
  if (await page.locator('.eth-stat').count() !== 4) failures.push('U3: métricas de portada incompletas');

  await page.goto(`${base}/unidades/u03-ethereum/simuladores/`, { waitUntil: 'domcontentloaded' });
  if (await page.locator('.eth-lab').count() !== 12) failures.push('U3: se esperaban 12 tarjetas de laboratorio');

  await page.goto(`${base}/unidades/u03-ethereum/simuladores/03-eip1559-gas-lab.html`, { waitUntil: 'domcontentloaded' });
  if (await page.locator('.eth-context').count() !== 1) failures.push('laboratorio: falta navegación contextual');
  await page.locator('[data-complete]').click();
  if (!(await page.locator('[data-complete]').getAttribute('class') || '').includes('done')) failures.push('laboratorio: progreso local no cambia');

  await page.goto(`${base}/unidades/u03-ethereum/materiales/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector('[data-deck-id]', { timeout: 30000 });
  if (await page.locator('[data-deck-id]').count() !== 6) failures.push('visor: se esperaban 6 decks');
  await page.locator('[data-deck-id="ethereum-02"]').click();
  await page.waitForFunction(() => document.querySelector('[data-viewer-title]')?.textContent.includes('Cuentas'));
  if (!(await page.locator('[data-google-note]').textContent()).includes('acceso público pendiente')) failures.push('visor: estado de Google Slides no visible');

  await page.goto(`${base}/unidades/u03-iot-ia-metaverso/`, { waitUntil: 'domcontentloaded' });
  await page.waitForURL(/u04-iot-ia-metaverso\/?$/);

  await browser.close();
  if (failures.length) {
    console.error(`Smoke test fallido:\n- ${failures.join('\n- ')}`);
    process.exit(1);
  }
  console.log('Smoke test correcto: campus, U3, 12 laboratorios, progreso, visor y redirección histórica.');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
