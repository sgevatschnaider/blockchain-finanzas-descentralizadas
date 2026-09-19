# Estructura didáctica del curso

Revisión integral: 19 de septiembre de 2026.

## Criterio común

Cada unidad cuenta con una entrada web, objetivos, una ruta sugerida y accesos a sus recursos. La cantidad de presentaciones, simulaciones o preguntas responde al propósito de aprendizaje y no a una cuota uniforme.

| Componente | Criterio de diseño |
|---|---|
| Portal | Identidad de unidad, navegación móvil, acceso al campus y unidad anterior/siguiente |
| Teoría | Conceptos desarrollados, ejemplos, fuentes y masters editables cuando existen |
| Práctica | Pregunta, parámetros, resultado observable, interpretación, reinicio y supuestos |
| Evaluación | Explicaciones formativas, filtros y resultados comprensibles |
| Accesibilidad | Teclado, etiquetas, contraste, diseño adaptable y movimiento reducido |
| Mantenimiento | URLs compatibles, rutas relativas, manifests y validación automatizada |

## Mapa canónico

| Etapa | Tema | Función pedagógica |
|---|---|---|
| M0 | Clase inicial | Lenguaje común y motivación de negocio |
| U1 | Fundamentos y Smart Contracts | Selección de red, casos y primera práctica técnica |
| U2 | Bitcoin, consenso y seguridad | Modelo UTXO, minería, incentivos y riesgos |
| U3 | Ethereum | Estado, EVM, PoS, tokens, rollups, MEV y roadmap |
| U4 | IoT, IA/ML y Metaverso | Integración de sistemas, evidencia y experiencias digitales |
| U5 | Algoritmos y criptografía aplicada | Dijkstra, Lightning, ZKP y ZK-rollups |
| U6 | Indicadores y trading | Microestructura, ejecución, riesgo y LSTM |
| U7 | Python y Blockchain Analytics | Datos on-chain y proyecto reproducible |

## U3 · Ethereum

La unidad nueva ofrece seis presentaciones completas —136 diapositivas— en PPTX y PDF, un visor local basado en manifest, doce laboratorios, un glosario interactivo de 88 conceptos y un cuestionario de 30 preguntas. La progresión va de cuentas y transacciones a EVM, contratos, PoS, L2 y MEV.

Los PPTX se mantienen como masters; los PDF son la representación estable para lectura y descarga. Las copias nativas de Google Slides se registran en el manifest, pero no se muestran como públicas mientras el permiso anónimo no esté confirmado.

## Solapamientos y decisiones

- Los tres recursos históricos de Ethereum dentro de la antigua U3 se conservan en U4 como antecedentes, pero la ruta canónica es ahora U3.
- Lightning aparece como cierre contextual en U2, como material histórico dentro de U4 y como núcleo algorítmico en U5. No se eliminó contenido: los portales aclaran la función de cada aparición.
- L2 y rollups se introducen desde la arquitectura de Ethereum en U3 y se profundizan desde pruebas y algoritmos en U5.
- Trading usa fundamentos de criptoactivos ya vistos en U2; en U6 el foco se desplaza a microestructura, ejecución y gestión del riesgo.

## Compatibilidad

Las unidades anteriores U3–U6 fueron desplazadas a U4–U7. Las rutas HTML históricas mantienen redirecciones estáticas y el notebook de trading conserva además una copia en su antigua ruta para que Colab continúe resolviéndolo.
