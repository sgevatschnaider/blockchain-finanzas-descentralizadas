from pathlib import Path
import json, html
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
import fitz
from PIL import Image
root=Path(__file__).resolve().parents[1]
out=root/'materiales'
chapters=json.loads((out/'capitulos.json').read_text())
sources={
'bitcoin':['Nakamoto (2008). Bitcoin: A Peer-to-Peer Electronic Cash System','https://bitcoin.org/bitcoin.pdf'],
'contracts':['Ethereum. Introducción a smart contracts','https://ethereum.org/developers/docs/smart-contracts/'],
'evm':['Ethereum. Ethereum Virtual Machine','https://ethereum.org/developers/docs/evm/'],
'gas':['Ethereum. Gas y comisiones','https://ethereum.org/developers/docs/gas/'],
'oracles':['Ethereum. Oráculos','https://ethereum.org/es/developers/docs/oracles/'],
'fabric':['Hyperledger Fabric 2.5. Datos privados','https://hyperledger-fabric.readthedocs.io/en/release-2.5/private-data/private-data.html'],
'corda':['R3. Corda 5.1: Notaries','https://docs.r3.com/en/platform/corda/5.1/developing-applications/ledger/notaries.html'],
'litecoin':['Litecoin. Proyecto oficial','https://litecoin.org/'],
'fsm':['Mavridou y Laszka (2017). Designing Secure Ethereum Smart Contracts','https://arxiv.org/abs/1711.09327'],
'verification':['Ethereum. Verificación de contratos','https://ethereum.org/developers/docs/smart-contracts/verifying/']}
(out/'fuentes.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2))
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyU1',fontName='Helvetica',fontSize=10.5,leading=15.6,spaceAfter=10,textColor=HexColor('#243b53')))
styles.add(ParagraphStyle(name='TitleU1',fontName='Helvetica-Bold',fontSize=25,leading=29,spaceAfter=17,textColor=HexColor('#092b46')))
styles.add(ParagraphStyle(name='KickerU1',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceAfter=12,textColor=HexColor('#067c86')))
styles.add(ParagraphStyle(name='NoteU1',fontName='Helvetica',fontSize=10,leading=14,spaceAfter=12,borderPadding=10,backColor=HexColor('#edf6fa')))
styles.add(ParagraphStyle(name='SmallU1',fontName='Helvetica',fontSize=8.5,leading=12,spaceAfter=8,textColor=HexColor('#405a70')))
def P(s,style='BodyU1'): return Paragraph(html.escape(s),styles[style])
def footer(c,d):
 c.setStrokeColor(HexColor('#bfd5e3')); c.line(45,42,550,42)
 c.setFillColor(HexColor('#405a70'));c.setFont('Helvetica',8)
 c.drawString(45,28,'Blockchain y Finanzas Descentralizadas | Unidad 1')
 c.drawRightString(550,28,str(d.page))
story=[Spacer(1,40),P('MAESTRÍA EN GESTIÓN FINTECH · UNIVERSIDAD DE BELGRANO','KickerU1'),P('Blockchain y smart contracts en los negocios','TitleU1'),P('Desarrollo completo de la Unidad 1','KickerU1'),P('Dr. Sergio Gevatschnaider'),P('Material de estudio complementario basado en los temas de la guía original. Explicaciones, ejemplos hipotéticos, preguntas de análisis y actividades. Septiembre de 2026.'),Spacer(1,15),P('Cómo estudiar','KickerU1'),P('Leé cada capítulo, formulá una respuesta propia a su pregunta y contrastala con el criterio orientativo. Después utilizá el laboratorio o caso enlazado desde la lectura web. Las profundizaciones técnicas apoyan las decisiones de negocio; las unidades siguientes desarrollan criptografía, consenso y programación.'),P('Alcance','KickerU1'),P('Este material amplía la explicación de la unidad y no modifica el programa, las ponderaciones ni las actividades institucionales. Todos los ejemplos numéricos y sectoriales son hipotéticos. No se presentan precios de red actuales ni implementaciones comerciales verificadas.'),PageBreak(),P('Índice de lectura','TitleU1'),P('Recorré los capítulos en este orden o utilizá el índice del visor para volver a un tema. En la lectura web, cada capítulo tiene acceso directo a su actividad y una respuesta orientativa desplegable.'),Spacer(1,14)]
for i,ch in enumerate(chapters,1): story.append(P(f'{i:02}. {ch["title"]}','SmallU1'))
for i,ch in enumerate(chapters,1):
 story += [PageBreak(),P(f'UNIDAD 1 / CAPÍTULO {i:02}','KickerU1'),P(ch['title'],'TitleU1'),P(ch['summary'],'NoteU1')]
 story += [P(p) for p in ch['paragraphs']]
 story += [P('Ejemplo aplicado','KickerU1'),P(ch['example']),P('Para analizar','KickerU1'),P(ch['question'],'NoteU1'),P('Criterio orientativo: '+ch['answer'],'SmallU1')]
 if ch['sources']: story.append(P('Fuentes de apoyo: '+ '; '.join(sources[k][0] for k in ch['sources'])+'. Véanse enlaces en la bibliografía.','SmallU1'))
story += [PageBreak(),P('Referencias y recursos','TitleU1'),P('Fuentes primarias para profundizar. Las versiones de Fabric y Corda son referencias explícitas, no afirmaciones de que sean las versiones más recientes. Los ejemplos de negocio son desarrollos didácticos propios.')]
for label,url in sources.values():
 story += [P(label,'SmallU1'),Paragraph(f'<link href="{html.escape(url)}" color="#076b9c">{html.escape(url)}</link>',styles['SmallU1'])]
story += [Spacer(1,12),P('Material original y práctica','KickerU1'),P('Conservá la guía original de dos páginas como referencia de objetivos y plan de trabajo. La unidad también ofrece nueve laboratorios, seis casos sectoriales, un glosario de 40 términos y un banco de 70 preguntas.','SmallU1')]
pdf=out/'unidad-1-desarrollo-completo.pdf'
SimpleDocTemplate(str(pdf),pagesize=(595.28,841.89),rightMargin=45,leftMargin=45,topMargin=44,bottomMargin=58,title='Unidad 1 - Blockchain y smart contracts en los negocios',author='Dr. Sergio Gevatschnaider').build(story,onFirstPage=footer,onLaterPages=footer)
manifest={}
for key,path in [('desarrollo',pdf),('original',root/'Guía Unidad 1.pdf')]:
 doc=fitz.open(path); dest=out/key; dest.mkdir(exist_ok=True)
 pageheads=[]
 for n,p in enumerate(doc,1):
  pix=p.get_pixmap(matrix=fitz.Matrix(1.7,1.7),alpha=False)
  Image.frombytes('RGB',[pix.width,pix.height],pix.samples).save(dest/f'pagina-{n:02}.webp',quality=85)
  text=p.get_text(); pageheads.append(text[:120].replace('\n',' '))
 manifest[key]={'title':'Desarrollo completo · Unidad 1' if key=='desarrollo' else 'Guía original · Plan de trabajo','pdf':'materiales/unidad-1-desarrollo-completo.pdf' if key=='desarrollo' else 'Guía%20Unidad%201.pdf','pages':len(doc),'folder':f'materiales/{key}','labels':pageheads}
 if key=='desarrollo':
  for i,ch in enumerate(chapters,1):
   for n,p in enumerate(doc,1):
    if f'CAPÍTULO {i:02}' in p.get_text(): ch['page']=n; break
 doc.close()
(out/'capitulos.json').write_text(json.dumps(chapters,ensure_ascii=False,indent=2)+'\n')
(out/'documentos.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
base=(root/'guia-estudio.html').read_text()
head=base[:base.index('<main')]
foot=base[base.index('<footer'):]
blocks=[]
for i,ch in enumerate(chapters,1):
 refs=' · '.join(f'<a href="{sources[k][1]}" target="_blank" rel="noopener">{html.escape(sources[k][0])}</a>' for k in ch['sources'])
 blocks.append(f'<section id="capitulo-{i}" class="chapter"><p class="eyebrow">Capítulo {i:02}</p><h2>{html.escape(ch["title"])}</h2><p class="route-note">{html.escape(ch["summary"])}</p>'+''.join(f'<p>{html.escape(p)}</p>' for p in ch['paragraphs'])+f'<h3>Ejemplo aplicado</h3><p>{html.escape(ch["example"])}</p><details><summary>{html.escape(ch["question"])}</summary><p>{html.escape(ch["answer"])}</p></details><div class="actions"><a class="button" href="{ch["lab"]}">Aplicar este capítulo</a><a class="button" href="visor.html?doc=desarrollo&amp;page={ch["page"]}">Ver en el PDF</a><a class="button" href="#indice">Volver al índice</a></div>'+ (f'<p class="muted source-line">Fuentes: {refs}</p>' if refs else '')+'</section>')
main='<main id="contenido" class="lab-page"><header class="shell lab-hero"><p class="eyebrow">Unidad 1 · Lectura completa</p><h1>Del negocio a las reglas programables</h1><p class="lede">15 capítulos con explicaciones, ejemplos y preguntas para conectar el programa con los laboratorios.</p><div class="actions"><a class="button primary" href="visor.html">Abrir visor</a><a class="button" href="materiales/unidad-1-desarrollo-completo.pdf" download>Descargar PDF completo</a></div></header><article class="shell reading"><p class="route-note">Material complementario a la guía original. Los ejemplos son hipotéticos y la evaluación es formativa. No se modifican las pautas institucionales.</p><nav id="indice" aria-label="Índice de la lectura"><h2>Índice de capítulos</h2><ol>'+''.join(f'<li><a href="#capitulo-{i}">{html.escape(ch["title"])}</a></li>' for i,ch in enumerate(chapters,1))+'</ol></nav>'+''.join(blocks)+'<section id="fuentes"><h2>Bibliografía y continuidad</h2><p>Además de las fuentes primarias enlazadas en cada capítulo, consultá la bibliografía de la guía original: Bashir (2018), Beltrán y colaboradores (2021), Drescher (2017), Edmunds (2022) y Lewis (2018).</p><div class="actions"><a class="button" href="guia-estudio.html#fuentes">Bibliografía del programa</a><a class="button primary" href="evaluacion.html">Practicar con el cuestionario</a><a class="button" href="glosario.html">Consultar glosario</a></div></section></article></main>'
head=head.replace('Negocios, reglas y confianza · Unidad 1','Desarrollo completo · Unidad 1').replace('</head>','<link rel="stylesheet" href="assets/visor.css?v=20260909"></head>')
(root/'desarrollo.html').write_text(head+main+foot)
print(json.dumps({k:{'pages':v['pages'],'pdf':v['pdf']} for k,v in manifest.items()}))
