import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignored = new Set([".git", "node_modules", "tmp", "dist"]);
const errors = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function relative(file) { return path.relative(root, file).split(path.sep).join("/"); }
function fail(message) { errors.push(message); }
function cleanTarget(raw) {
  const noQuery = raw.split("?")[0];
  const [pathname, fragment = ""] = noQuery.split("#");
  try { return { pathname: decodeURIComponent(pathname), fragment: decodeURIComponent(fragment) }; }
  catch { return { pathname, fragment }; }
}

const files = walk(root);
for (const file of files.filter((item) => /\.(?:html?|md)$/i.test(item))) {
  const text = fs.readFileSync(file, "utf8");
  if (/\.html?$/i.test(file)) {
    const staticMarkup = text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    const ids = [...staticMarkup.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length) fail(`${relative(file)}: id duplicado (${[...new Set(duplicates)].join(", ")})`);
    for (const script of text.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      const attributes = script[1];
      if (/\bsrc\s*=|\btype\s*=\s*["'](?:module|application\/ld\+json|application\/json)/i.test(attributes)) continue;
      try { new Function(script[2]); }
      catch (error) { fail(`${relative(file)}: JavaScript inline inválido (${error.message})`); }
    }
  }
  const links = [...text.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const raw of links) {
    if (!raw || /^(?:https?:|mailto:|tel:|data:|javascript:|blob:|#)/i.test(raw) || raw.includes("{{") || raw.includes("${")) continue;
    const { pathname, fragment } = cleanTarget(raw);
    if (!pathname) continue;
    const target = pathname.startsWith("/") ? path.join(root, pathname) : path.resolve(path.dirname(file), pathname);
    if (!target.startsWith(root + path.sep) && target !== root) continue;
    if (!fs.existsSync(target)) {
      fail(`${relative(file)}: enlace inexistente -> ${raw}`);
      continue;
    }
    if (fragment && fs.statSync(target).isFile() && /\.html?$/i.test(target)) {
      const destination = fs.readFileSync(target, "utf8");
      const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`\\b(?:id|name)=["']${escaped}["']`, "i").test(destination)) fail(`${relative(file)}: ancla inexistente -> ${raw}`);
    }
  }
}

const u3 = path.join(root, "unidades/u03-ethereum");
const manifestPath = path.join(u3, "materiales/decks.json");
let decks = [];
try { decks = JSON.parse(fs.readFileSync(manifestPath, "utf8")); }
catch (error) { fail(`decks.json inválido: ${error.message}`); }
if (decks.length !== 6) fail(`U3: se esperaban 6 decks y hay ${decks.length}`);
const pdfjs = await import("../assets/course-ui/vendor/pdf.node.mjs");
for (const deck of decks) {
  for (const key of ["pdf", "pptx", "thumbnail"]) {
    const target = path.join(u3, "materiales", deck[key] || "");
    if (!deck[key] || !fs.existsSync(target)) fail(`U3 ${deck.id || "sin id"}: falta ${key}`);
  }
  if (!Number.isInteger(deck.slides) || deck.slides < 1) fail(`U3 ${deck.id}: conteo de slides inválido`);
  if (deck.googlePublic && !deck.googleEmbed) fail(`U3 ${deck.id}: Google público sin embed`);
  try {
    const bytes = new Uint8Array(fs.readFileSync(path.join(u3, "materiales", deck.pdf)));
    const pdf = await pdfjs.getDocument({ data: bytes, disableWorker: true }).promise;
    if (pdf.numPages !== deck.slides) fail(`U3 ${deck.id}: manifest ${deck.slides}, PDF ${pdf.numPages}`);
    await pdf.destroy();
  } catch (error) { fail(`U3 ${deck.id}: PDF ilegible (${error.message})`); }
}

const labs = fs.readdirSync(path.join(u3, "simuladores")).filter((name) => /^\d{2}-.*\.html$/i.test(name));
if (labs.length !== 12) fail(`U3: se esperaban 12 laboratorios y hay ${labs.length}`);
for (const lab of labs) {
  const text = fs.readFileSync(path.join(u3, "simuladores", lab), "utf8");
  if (!text.includes("../assets/resource-shell.js")) fail(`U3 ${lab}: falta shell compartido`);
}

const redirectRoots = [
  "unidades/u03-iot-ia-metaverso/index.html",
  "unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/index.html",
  "unidades/u05-indicadores-trading/index.html",
  "unidades/u06-python-blockchain-analytics/index.html"
];
for (const redirect of redirectRoots) {
  const text = fs.existsSync(path.join(root, redirect)) ? fs.readFileSync(path.join(root, redirect), "utf8") : "";
  if (!/http-equiv=["']refresh["']/i.test(text) || !/rel=["']canonical["']/i.test(text)) fail(`${redirect}: redirección incompleta`);
}

if (errors.length) {
  console.error(`Validación fallida (${errors.length}):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Validación correcta: ${files.length} archivos; 6 decks; 12 laboratorios; rutas y IDs verificados.`);
