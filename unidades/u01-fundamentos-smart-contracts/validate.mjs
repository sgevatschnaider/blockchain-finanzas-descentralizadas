import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const failures = [];
const pass = msg => console.log(`✓ ${msg}`);
const fail = msg => failures.push(msg);

const labs = [
  "01-hash-lab.html",
  "02-merkle-lab.html",
  "03-utxo-account.html",
  "04-evm-explorer.html",
  "05-gas-lab.html",
  "06-smart-contract-lab.html",
  "07-tokenization-designer.html"
];
const questionFiles = [1,2,3,4,5].map(n => `data/questions-0${n}.js`);
const required = [
  "index.html", "evaluacion.html", "README.md", "Guía Unidad 1.pdf",
  "assets/u01.css", "assets/u01.js", "assets/evaluacion.js", "validate.mjs",
  "python/El_Impacto_de_las_Nuevas_Tecnologías_en_los_Negocios.ipynb",
  "python/Definiciones_con_ejemplos_Unidad_1_.ipynb",
  ...labs.map(name => `simuladores/${name}`),
  ...questionFiles,
  "html/merkle.html", "html/Cuestionario.html", "html/tokenizacion.html"
];

for (const rel of required) {
  const target = path.join(root, rel);
  if (!fs.existsSync(target) || fs.statSync(target).size === 0) fail(`Falta o está vacío: ${rel}`);
}
if (!failures.length) pass(`${required.length} recursos obligatorios presentes`);

const coreHtml = ["index.html", "evaluacion.html", ...labs.map(name => `simuladores/${name}`), "html/merkle.html", "html/Cuestionario.html", "html/tokenizacion.html"];
for (const rel of coreHtml) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const source = fs.readFileSync(file, "utf8");
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);
  const dup = ids.filter((id,i) => ids.indexOf(id) !== i);
  if (dup.length) fail(`${rel}: IDs repetidos (${[...new Set(dup)].join(", ")})`);

  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|data:|#|javascript:)/.test(raw)) continue;
    const clean = decodeURIComponent(raw.split(/[?#]/)[0]);
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    const exists = fs.existsSync(target) || fs.existsSync(path.join(target, "index.html"));
    if (!exists) fail(`${rel}: enlace local inexistente ${raw}`);
  }

  const inline = [...source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  inline.forEach((m,i) => {
    try { new vm.Script(m[1], { filename: `${rel}#${i+1}` }); }
    catch (error) { fail(`${rel}: JavaScript inline inválido (${error.message})`); }
  });
}
if (!failures.some(x => x.includes("enlace local") || x.includes("IDs repetidos"))) pass("HTML v2 sin enlaces locales rotos ni IDs duplicados");

for (const rel of ["assets/u01.js", "assets/evaluacion.js", ...questionFiles]) {
  try { new vm.Script(fs.readFileSync(path.join(root, rel), "utf8"), { filename: rel }); }
  catch (error) { fail(`${rel}: JavaScript inválido (${error.message})`); }
}
if (!failures.some(x => x.includes("JavaScript"))) pass("JavaScript externo e inline con sintaxis válida");

const context = { window: {} };
vm.createContext(context);
for (const rel of questionFiles) vm.runInContext(fs.readFileSync(path.join(root, rel), "utf8"), context);
const questions = context.window.U01_QUESTIONS || [];
if (questions.length !== 50) fail(`Banco de evaluación: ${questions.length}; se esperaban 50`);
else pass("Banco de evaluación: 50 preguntas");
const categories = new Set(questions.map(q => q.category));
if (categories.size !== 10) fail(`Categorías: ${categories.size}; se esperaban 10`);
else pass("Evaluación distribuida en 10 categorías");
questions.forEach((q,i) => {
  if (!q.question || !q.explanation || !q.category || !q.difficulty) fail(`Pregunta ${i+1}: metadatos incompletos`);
  if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 4) fail(`Pregunta ${i+1}: opciones inválidas`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) fail(`Pregunta ${i+1}: respuesta inválida`);
});

if (labs.length === 7) pass("7 laboratorios v2 declarados");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const name of labs) if (!index.includes(`simuladores/${name}`)) fail(`Portal no enlaza laboratorio: ${name}`);
if (!failures.some(x => x.startsWith("Portal"))) pass("Portal enlaza los 7 laboratorios");

for (const rel of ["index.html", "evaluacion.html", ...labs.map(n => `simuladores/${n}`)]) {
  const source = fs.readFileSync(path.join(root, rel), "utf8");
  if (/fonts\.googleapis\.com|soundjay\.com|slides\.google\.com/i.test(source)) fail(`${rel}: dependencia externa no permitida en núcleo v2`);
}
if (!failures.some(x => x.includes("dependencia externa"))) pass("Núcleo v2 sin dependencias de Google Fonts, SoundJay o Google Slides");

if (failures.length) {
  console.error("\nValidación fallida:");
  failures.forEach(x => console.error(`✗ ${x}`));
  process.exit(1);
}
console.log("\nUnidad 1 v2 validada sin omisiones estructurales.");
