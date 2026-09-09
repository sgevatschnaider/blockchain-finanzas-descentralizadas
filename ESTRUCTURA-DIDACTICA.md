# Estructura didáctica para revisar el curso unidad por unidad

Revisión al 9 de septiembre de 2026. Referencias: programa adjunto «Blockchain y Finanzas Descentralizadas» (año académico 2025), guía original de Unidad 1 y estructura de `sgevatschnaider/CriptografiayBlockchain`, especialmente su Módulo 5.

## Criterio común

Cada unidad debe ofrecer una entrada HTML con botones, objetivos alineados con el programa, ruta de aprendizaje, lectura/presentación, laboratorios, glosario, cuestionario y caso integrador. La cantidad de recursos debe responder a los objetivos: no hace falta que todas tengan el mismo número de simulaciones o preguntas.

| Componente | Criterio mínimo de diseño |
|---|---|
| Portal | Ruta principal visible, navegación móvil, acceso al material original y regreso al curso |
| Lectura y presentación | Conceptos desarrollados, ejemplos y fuentes; visor público sólo cuando exista una presentación |
| Simulaciones | Pregunta, parámetros, resultado observable, interpretación, reinicio y supuestos explícitos |
| Glosario | Definición, ejemplo, confusión frecuente, vínculo al recurso y búsqueda |
| Cuestionario | Categorías, dificultad, explicación, práctica/examen y resultados por área |
| Caso | Consigna aplicada, alternativas, evidencia de aprendizaje y criterios de respuesta |
| Accesibilidad | Teclado, etiquetas, contraste, diseño adaptable y respeto por movimiento reducido |
| Mantenimiento | Recursos originales conservados, URLs estables, validación de enlaces, sintaxis y casos límite |

Los materiales opcionales deben identificarse como profundización. El programa y la evaluación institucional no se redefinen desde un portal.

## Estado observado y siguiente intervención

Inventario de archivos y lectura estructural de README; no equivale a una auditoría funcional completa de cada recurso de las unidades pendientes.

| Unidad | Estado observado antes de esta intervención | Prioridad propuesta |
|---|---|---|
| 0 | Portal, presentaciones, glosario, cuestionario y simulaciones | Mantener como introducción y evitar duplicación con U1 |
| 1 | Portal, siete laboratorios técnicos, 50 preguntas, guía y dos notebooks; sin glosario propio | Alinear con negocios, redes y casos; implementar glosario y simulaciones aplicadas |
| 2 | 18 HTML y una guía PDF; sin `index.html` en la raíz de la unidad | Portal integrado; clasificar activos, consenso, claves y estafas según programa |
| 3 | 17 HTML; README mezcla IoT/IA/metaverso con ciberseguridad y redes | Separar núcleo del programa de profundizaciones; integrar caso de datos y oráculos |
| 4 | Nueve HTML; foco visible en Lightning, algoritmos y ZKP | Reforzar primero comparación TradFi/DeFi y servicios financieros; dejar algoritmos como extensión |
| 5 | Trece HTML y un notebook; énfasis en trading y riesgo | Mapear indicadores, ejecución y riesgo al programa y revisar supuestos de los modelos |
| 6 | README prácticamente vacío y sin HTML o notebooks en su carpeta | Construir ruta Python: datos, indicadores, contratos introductorios y caso ML |

## Intervención realizada en Unidad 1

- Ruta principal centrada en negocios y comparación de redes, conservando siete laboratorios técnicos.
- Lectura de estudio con bibliografía del programa y fuentes primarias, comparador cualitativo y seis casos hipotéticos.
- Dos simulaciones nuevas: decisión de arquitectura y seguro paramétrico con datos externos.
- Glosario de 40 términos con ejemplos, límites y tarjetas; banco de 70 preguntas en 14 categorías.
- Cuestionario con un único manejador de respuestas y modo de sesión fijo; los filtros se aplican al iniciar una sesión nueva.
- Escrow con controles explícitos de actor; tema compartido en los laboratorios principales.
- Validación ampliada de estructura, recursos y contenido. Modelos del seguro y de arquitectura comprobados en casos límite mediante un arnés de eventos; no se realizó prueba visual en navegador.

No se editaron contenidos de las unidades 0 y 2–6. La intervención en cada una requiere leer sus recursos y comprobar sus modelos antes de modificarlos.
