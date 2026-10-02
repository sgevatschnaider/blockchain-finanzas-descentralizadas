# Revisión del material de U8

**Material elaborado por el profesor Sergio Gevatschnaider.**

Versión: 2 de octubre de 2026. Se revisaron tres PPTX y cuatro PDF recibidos, incluidos los pares correspondientes.

## Mejoras docentes y conceptuales

| Bloque | Cambio | Razón |
|---|---|---|
| Introducción | Nueva presentación de 18 diapositivas | Explicar neurona, activaciones, pérdidas, gradiente y generalización antes de LSTM y GNN |
| Metodología | Definición de objetivos, tiempos de disponibilidad, maduración, purga y métricas | Alinear datos, horizonte y validación |
| LSTM/GRU | Ecuaciones completas, ejemplos calculados y convención GRU documentada | Distinguir compuertas, candidato, celda y estado oculto |
| MLP | Comparación con ventanas aplanadas | Una MLP también puede utilizar retardos temporales |
| GNN | Representaciones de BTC/ETH, agregación y protocolos de grafo | Explicitar qué significa cada nodo y relación |
| Elliptic | Máscaras para etiquetas desconocidas y métricas de la clase minoritaria | La ausencia de etiqueta no constituye una tercera clase supervisada en la tarea binaria |
| Integrador | Pooling por snapshot, alineación y encoder común | Convertir representaciones de nodos en entradas temporales coherentes |
| Explicabilidad | Ejemplo aditivo SHAP identificado como sintético | Separar demostración matemática de resultado experimental |
| Backtest | Retornos simples, posición y costos bajo supuestos explícitos | Relacionar predicción con ejecución y riesgo |
| Bibliografía | Fuentes primarias y documentación verificadas | Corregir atribuciones y facilitar lectura crítica |

Cada diapositiva contiene la leyenda de autoría. Los cinco PowerPoint incluyen notas docentes; los gráficos de activación y sobreajuste son editables y conservan sus datos. El integrador, recibido únicamente en PDF, tiene ahora una versión PPTX.

## Verificaciones de publicación

- Conteos consistentes: 18, 16, 19, 20 y 16 diapositivas; 89 en total.
- Integridad ZIP/OOXML, geometría, tipografías y reapertura de los cinco PPTX.
- Tablas nativas; gráficos con libro de datos incorporado.
- Exportación de los cinco PDF desde los PowerPoint finales.
- Leyenda de autoría y correspondencia del texto en todas las páginas.
- Inspección visual de todas las diapositivas.
- Validación del manifest y de las rutas de descarga.
- Prueba del visor: selección de las cinco presentaciones, navegación, última página, autoplay y pantalla completa.
- Revisión de navegación y diseño en escritorio y móvil, con modo claro y oscuro.

Las notas del presentador acompañan al PowerPoint; los PDF reproducen las diapositivas visibles. Los ejemplos numéricos no implican rentabilidad, causalidad ni superioridad universal de una arquitectura.

## Revisión de simulaciones y guía

Se revisaron uno por uno los ocho HTML y las 20 páginas de la guía recibida. Se conservan los ocho temas, actividades y términos docentes; la guía revisada tiene 33 páginas y versión web.

| Lab | Corrección principal |
|---|---|
| 01 | Matriz completa L×2; conteos por fecha de etiqueta; contexto anterior legítimo |
| 02 | Ridge y scaler dentro de train; intercepto sin penalización; maduración/purga para H=7; auditoría de folds |
| 03 | Perfiles sintéticos explícitos; métricas desde pronósticos y targets; baseline cash; costos y decisiones sin solapamiento |
| 04 | Conteo con uno/dos biases y desglose; dropout ilustrativo diferenciado del dropout entre capas de PyTorch |
| 05 | Direcciones distintas de identidades; probabilidad distinta de densidad; degree/strength; PageRank ponderado opcional |
| 06 | GCN simétrica con self; SAGE con concatenación real; GAT con softmax; traza y campo receptivo |
| 07 | Encoder compartido; pooling/densidad explícitos; prefijo causal; compuertas completas y convención GRU consistente |
| 08 | SHAP lineal independiente; intercepto fijo; cambio de referencia sin cambiar f(x); suma acumulada y residuo |

El diseño incorpora gráficos de ancho completo, colores de alto contraste, controles adaptables, selección por teclado, traducciones, exportación JSON/SVG y avance local. Todos los recursos incluyen la leyenda de autoría.

Las comprobaciones de cálculo se contrastan con NumPy, scikit-learn y NetworkX; las fórmulas recurrentes y sus conteos se contrastan con la documentación oficial de PyTorch durante la revisión. La CI incluye controles de navegador para los ocho laboratorios, reinicios, límites, idioma, tema, exportación, fullscreen y anchos 1440/390/320; sus capturas quedan en el artefacto `u08-laboratorios-qa`. La guía PDF se renderiza y revisa visualmente.

El glosario independiente es la etapa siguiente; los vocabularios de la guía ya están desarrollados.
