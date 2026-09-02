import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const failures = [];
const pass = message => console.log(`✓ ${message}`);
const fail = message => failures.push(message);

const required = [
  "index.html", "glosario.html", "cuestionario.html", "README.md",
  "assets/modulo-00.css", "assets/modulo-00.js", "data/business-extension.js",
  "presentaciones/index.html", "presentaciones/viewer.js",
  "presentaciones/blockchain-y-nuevos-modelos-de-negocio.pptx",
  "presentaciones/blockchain-y-nuevos-modelos-de-negocio.pdf",
  "presentaciones/descentralizacion-consenso-y-oraculos.pptx",
  "presentaciones/descentralizacion-consenso-y-oraculos.pdf",
  ...Array.from({ length: 6 }, (_, index) => `simuladores/0${index + 1}-${[
    "coordinacion-ledger", "espectro-descentralizacion", "consenso-bizantino",
    "riesgo-oraculos", "selector-arquitectura", "tokenizacion-smart-contracts"
  ][index]}.html`)
];

for (const relative of required) {
  const target = path.join(root, relative);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) fail(`Falta o está vacío: ${relative}`);
}
if (!failures.length) pass(`${required.length} recursos obligatorios presentes`);

for (const [folder, expected] of [["deck-negocios", 26], ["deck-fundamentos", 29]]) {
  const deckPath = path.join(root, "presentaciones", folder);
  const slides = fs.readdirSync(deckPath).filter(name => /^slide-\d{2}\.webp$/.test(name));
  if (slides.length !== expected) fail(`${folder}: ${slides.length} diapositivas; se esperaban ${expected}`);
  else pass(`${folder}: ${expected} diapositivas`);
}

const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
const htmlFiles = walk(root).filter(file => file.endsWith(".html"));

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) fail(`${path.relative(root, file)}: IDs repetidos (${[...new Set(duplicates)].join(", ")})`);

  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|data:|#|javascript:)/.test(raw)) continue;
    const clean = raw.split(/[?#]/)[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    const exists = fs.existsSync(target) || fs.existsSync(path.join(target, "index.html"));
    if (!exists) fail(`${path.relative(root, file)}: enlace local inexistente ${raw}`);
  }

  const inlineScripts = [...source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  inlineScripts.forEach((match, index) => {
    try { new vm.Script(match[1], { filename: `${path.relative(root, file)}#${index + 1}` }); }
    catch (error) { fail(`${path.relative(root, file)}: JavaScript inline inválido (${error.message})`); }
  });
}
if (!failures.some(item => item.includes("enlace local") || item.includes("IDs repetidos"))) pass(`${htmlFiles.length} páginas HTML sin enlaces locales rotos ni IDs repetidos`);

for (const file of walk(root).filter(target => target.endsWith(".js"))) {
  try { new vm.Script(fs.readFileSync(file, "utf8"), { filename: path.relative(root, file) }); }
  catch (error) { fail(`${path.relative(root, file)}: JavaScript inválido (${error.message})`); }
}
if (!failures.some(item => item.includes("JavaScript"))) pass("JavaScript externo e inline con sintaxis válida");

const context = { window: {} };
vm.createContext(context);
const extension = fs.readFileSync(path.join(root, "data/business-extension.js"), "utf8");
vm.runInContext(extension, context);
const glossary = fs.readFileSync(path.join(root, "glosario.html"), "utf8");
const quiz = fs.readFileSync(path.join(root, "cuestionario.html"), "utf8");
const glossaryBank = glossary.match(/<script>(window\.GLOSSARY_COUNT=[\s\S]*?)<\/script>/)?.[1];
const quizBank = quiz.match(/<script>(window\.QUIZ_COUNT=[\s\S]*?)<\/script>/)?.[1];
if (!glossaryBank || !quizBank) fail("No se pudieron localizar los bancos de contenido");
else {
  vm.runInContext(glossaryBank, context);
  vm.runInContext(quizBank, context);
  const terms = [...context.window.GLOSSARY_TERMS, ...context.window.MODULE0_TERMS];
  const questions = [...context.window.QUIZ_QUESTIONS, ...context.window.MODULE0_QUESTIONS];
  const uniqueTerms = new Set(terms.map(item => item.name.toLocaleLowerCase("es")));
  if (terms.length !== 125 || uniqueTerms.size !== 125) fail(`Glosario: ${terms.length} entradas, ${uniqueTerms.size} únicas; se esperaban 125`);
  else pass("Glosario: 125 términos únicos");
  if (questions.length !== 90) fail(`Cuestionario: ${questions.length} preguntas; se esperaban 90`);
  else pass("Cuestionario: 90 preguntas explicadas");
  questions.forEach((item, index) => {
    if (!Array.isArray(item.options) || item.options.length !== 4 || item.answer < 0 || item.answer > 3 || !item.explanation) fail(`Pregunta ${index + 1}: estructura inválida`);
  });
}

if (failures.length) {
  console.error("\nValidación fallida:");
  failures.forEach(item => console.error(`✗ ${item}`));
  process.exit(1);
}
console.log("\nMódulo 0 validado sin omisiones.");
