import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

export function validateU08(root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')) {
  const unit = path.join(root, 'unidades/u08-redes-neuronales-lstm-gnn-blockchain');
  const material = path.join(unit, 'materiales');
  const decks = JSON.parse(fs.readFileSync(path.join(material, 'decks.json'), 'utf8'));
  const expected = [18, 16, 19, 20, 16];
  if (decks.length !== 5) throw new Error('U8: se esperaban cinco presentaciones');
  const ids = new Set();
  decks.forEach((deck, i) => {
    if (ids.has(deck.id)) throw new Error('U8: identificador duplicado');
    ids.add(deck.id);
    if (deck.order !== i || deck.slides !== expected[i]) throw new Error('U8: orden o conteo incorrecto');
    ['pdf', 'pptx', 'thumbnail'].forEach(key => {
      const target = path.resolve(material, deck[key] || '');
      if (!target.startsWith(material + path.sep) || !fs.existsSync(target)) throw new Error('U8: recurso inválido ' + key);
    });
    const pdf = fs.readFileSync(path.join(material, deck.pdf)).toString('latin1');
    if (!pdf.startsWith('%PDF-') || !pdf.slice(-2048).includes('%%EOF')) throw new Error('U8: PDF incompleto');
    if ((pdf.match(/\/Type\s*\/Page\b/g) || []).length !== deck.slides) throw new Error('U8: páginas del PDF inconsistentes');
  });
  const verify = spawnSync('python3', ['-c', `
import sys,json,zipfile,re,xml.etree.ElementTree as ET
from pathlib import Path
material=Path(sys.argv[1]);decks=json.loads((material/'decks.json').read_text())
author='Material elaborado por el profesor Sergio Gevatschnaider.'
for deck in decks:
 with zipfile.ZipFile(material/deck['pptx']) as z:
  assert z.testzip() is None
  slides=[n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide[0-9]+.xml',n)]
  notes=[n for n in z.namelist() if re.fullmatch(r'ppt/notesSlides/notesSlide[0-9]+.xml',n)]
  assert len(slides)==deck['slides'] and len(notes)==deck['slides']
  for n in slides+notes:
   assert author in ''.join(ET.fromstring(z.read(n)).itertext()),n
print('PPTX: integridad, diapositivas, notas y autoría correctas')
`, material], {encoding:'utf8'});
  if (verify.status !== 0) throw new Error(verify.stderr || 'U8: verificación PPTX fallida');
  const labsDir = path.join(unit, 'simuladores');
  const catalog = JSON.parse(fs.readFileSync(path.join(labsDir, 'labs.json'), 'utf8'));
  if(catalog.labs.length !== 8) throw new Error('U8: se esperaban ocho laboratorios');
  for(const lab of catalog.labs) {
    const html = fs.readFileSync(path.join(labsDir,lab.file),'utf8');
    if(!html.includes(catalog.author)||!html.includes('../assets/lab.css')) throw new Error('U8: autoría o estilo ausente en '+lab.id);
    const module = path.join(labsDir,lab.file.replace(/\.html$/,'.mjs'));
    if(spawnSync(process.execPath,['--check',module]).status!==0) throw new Error('U8: módulo inválido '+lab.id);
    if(lab.activities.length<2) throw new Error('U8: actividad incompleta '+lab.id);
  }
  for(const deck of decks)for(const lab of deck.relatedLabs)if(!fs.existsSync(path.join(labsDir,lab.file)))throw new Error('U8: laboratorio relacionado ausente');
  const guide = fs.readFileSync(path.join(unit,'recursos/Guia_U8_Simuladores_Sergio_Gevatschnaider.pdf')).toString('latin1');
  if(!guide.startsWith('%PDF-')||(guide.match(/\/Type\s*\/Page\b/g)||[]).length!==33) throw new Error('U8: guía PDF inconsistente');
  const content = JSON.parse(fs.readFileSync(path.join(unit,'recursos/guia-contenido.json'),'utf8'));
  if(content.labs.length!==8||content.generalVocabulary.length!==47)throw new Error('U8: contenido de guía incompleto');
  const glossary = JSON.parse(fs.readFileSync(path.join(unit,'recursos/glosario-datos.json'),'utf8'));
  const termIds=new Set(glossary.terms.map(x=>x.id));
  if(glossary.terms.length!==145||termIds.size!==145||new Set(glossary.terms.map(x=>x.category)).size!==16)throw new Error('U8: glosario incompleto o duplicado');
  if(glossary.terms.filter(x=>Number.isInteger(x.originalIndex)).length!==133||new Set(glossary.terms.filter(x=>Number.isInteger(x.originalIndex)).map(x=>x.originalIndex)).size!==133)throw new Error('U8: se perdió un término original');
  for(const item of glossary.terms){for(const lang of ['es','en'])if(!item[lang]||!item.example[lang]||!item.caution[lang])throw new Error('U8: desarrollo bilingüe incompleto '+item.id);for(const id of item.related)if(!termIds.has(id))throw new Error('U8: referencia de glosario ausente '+id);for(const n of item.labs)if(!catalog.labs[n-1])throw new Error('U8: vínculo de laboratorio inválido');}
  const glossaryHTML=fs.readFileSync(path.join(unit,'recursos/glosario.html'),'utf8');
  if((glossaryHTML.match(/class="glossary-card"/g)||[]).length!==145||!glossaryHTML.includes(glossary.author)||/<script[^>]*src=/.test(glossaryHTML))throw new Error('U8: HTML del glosario incompleto o no autocontenido');
  const before=glossaryHTML;
  const generated=spawnSync('python3',[path.join(root,'scripts/build-u08-glossary.py')],{encoding:'utf8'});
  if(generated.status!==0||fs.readFileSync(path.join(unit,'recursos/glosario.html'),'utf8')!==before)throw new Error('U8: glosario generado desactualizado');
  const unitHTML=fs.readFileSync(path.join(unit,'index.html'),'utf8');
  if(!unitHTML.includes('data-glossary')||!unitHTML.includes('data-tiktok')||!unitHTML.includes('https://sgevatschnaider.github.io/es/articulos/tiktok/index.html'))throw new Error('U8: accesos a glosario o artículo ausentes');
  console.log('U8: cinco presentaciones, 89 diapositivas, ocho laboratorios, guía de 33 páginas, glosario de 145 términos y autoría verificados.');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) validateU08();
