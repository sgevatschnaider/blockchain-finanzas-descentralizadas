# U8 · Redes neuronales, LSTM y GNN aplicadas a blockchain

**Material elaborado por el profesor Sergio Gevatschnaider.**

[Abrir unidad](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/) · [Visor de presentaciones](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/materiales/) · [Descargar las cinco presentaciones en PPTX y PDF](materiales/U8_Presentaciones_Sergio_Gevatschnaider.zip)

## Propósito y conocimientos previos

La unidad conecta fundamentos de redes neuronales, modelado temporal y análisis de grafos con Bitcoin y Ethereum. El objetivo es diseñar y evaluar un experimento reproducible, interpretar sus resultados y reconocer sus límites.

Se recomienda conocer retornos, vectores, matrices y Python básico. U2 y U3 aportan los modelos de datos de Bitcoin y Ethereum; U6 introduce trading y series temporales; U7 aporta analítica con Python.

## Ruta de estudio

| Orden | Presentación | Diapositivas | Tema central |
|---|---|---:|---|
| 00 | Introducción a las redes neuronales | 18 | Neurona, activaciones, pérdidas, gradiente y generalización |
| 01 | Metodología de ML en blockchain | 16 | Objetivo, disponibilidad, baselines, walk-forward y métricas |
| 02 | LSTM y GRU para Bitcoin y Ethereum | 19 | Ventanas, compuertas, estados y entrenamiento temporal |
| 03 | GNN aplicadas a blockchain | 20 | Grafos, GCN, GraphSAGE, GAT, Elliptic y protocolos |
| 04 | Integrador LSTM y GNN | 16 | Pooling, fusión, ablación, explicabilidad y proyecto |
| | **Total** | **89** | **Cinco PowerPoint editables y cinco PDF correspondientes** |

Las notas del presentador desarrollan las explicaciones, los supuestos de los ejemplos y las fuentes. Las cifras ilustrativas se identifican como sintéticas; no se presentan como resultados empíricos de Bitcoin o Ethereum.

## Proyecto integrador

1. Definir unidad de observación, objetivo, horizonte y momento de decisión.
2. Documentar fuentes, cobertura, timestamps, disponibilidad y maduración de etiquetas.
3. Comparar baselines, modelos tabulares y temporales; incorporar grafos cuando la pregunta lo justifique.
4. Usar los mismos folds, métricas y presupuesto de selección. Ajustar transformaciones sólo en entrenamiento.
5. Entregar notebook, configuración, predicciones fechadas, métricas por fold, errores y ablaciones.
6. Defender el valor incremental y las limitaciones. Un resultado sin mejora también puede ser una conclusión válida.

La rúbrica distribuye 20 % a formulación, 15 % a datos, 20 % a validación, 15 % a modelos, 15 % a interpretación y 15 % a comunicación.

## Archivos y revisión

- [Manifest del visor](materiales/decks.json): títulos, orden, rutas y conteos.
- [Contenido docente y notas](materiales/contenido-docente.json): texto estructurado y referencias.
- [Informe de revisión](REVISION.md): cambios conceptuales y verificaciones.
- [PPTX](materiales/pptx/) y [PDF](materiales/pdf/): versiones revisadas del 2 de octubre de 2026.

La introducción es una presentación nueva. Las presentaciones 01–03 revisan los PowerPoint recibidos. El integrador 04 se reconstruyó como PowerPoint editable a partir del PDF recibido. Los originales aportados no se sobrescribieron.

## Laboratorios y guía de actividades

[Abrir los ocho laboratorios](simuladores/) · [Guía completa en HTML](recursos/guia-simuladores.html) · [Guía PDF revisada, 33 páginas](recursos/Guia_U8_Simuladores_Sergio_Gevatschnaider.pdf)

| Lab | Recurso | Qué se calcula |
|---|---|---|
| 01 | [Ventanas temporales y LSTM](simuladores/01_ventanas_lstm.html) | Datos sintéticos · sin entrenamiento |
| 02 | [Data Leakage y walk-forward](simuladores/02_data_leakage_walk_forward.html) | Ridge ajustada · datos sintéticos |
| 03 | [Arena de pronósticos BTC / ETH](simuladores/03_arena_modelos_btc_eth.html) | Perfiles sintéticos · sin entrenamiento |
| 04 | [LSTM vs GRU](simuladores/04_lstm_vs_gru.html) | Conteo exacto · curvas sintéticas |
| 05 | [Blockchain como grafo](simuladores/05_blockchain_grafo.html) | Grafo sintético · centralidad calculada |
| 06 | [GNN: propagación de mensajes](simuladores/06_gnn_message_passing.html) | Pesos fijos · cálculo de capas |
| 07 | [Integrador GNN + LSTM / GRU](simuladores/07_integrador_gnn_lstm.html) | Pesos fijos · prefijo causal |
| 08 | [Explorador SHAP](simuladores/08_shap_explorer.html) | Modelo lineal · SHAP exacto bajo supuestos |

Cada laboratorio ofrece modo claro/oscuro, interfaz ES/EN, pantalla completa, reinicio, exportación JSON/SVG y actividad guiada. El registro conserva autoría, configuración y resultados. El avance se guarda sólo en el navegador; no asigna una calificación.

La arena genera perfiles de pronóstico fijos inspirados en familias de modelos: no entrena AR, RF, XGBoost, LSTM ni GRU. Sus métricas se calculan sobre los mismos targets sintéticos. Las GNN y celdas recurrentes usan pesos fijos. El laboratorio 02 ajusta ridge con escalado train-only y etiquetas maduras.

Los módulos y estilos son locales; no necesitan APIs ni cotizaciones. Para ejecutar una copia del repositorio: `python3 -m http.server 8000` desde la raíz y abrir la unidad en `http://localhost:8000/unidades/u08-redes-neuronales-lstm-gnn-blockchain/`. Los módulos ES requieren HTTP; abrir cada HTML directamente como `file://` no basta.

El texto fuente de la guía está en [guia-contenido.json](recursos/guia-contenido.json); el generador [build-u08-guide.py](../../scripts/build-u08-guide.py) recrea HTML y PDF con ReportLab y tipografías DejaVu Sans.

La guía conserva y desarrolla todos sus vocabularios originales, actualiza controles y agrega ejemplos comprobables. El glosario independiente se elaborará en la siguiente etapa.

Verificación adicional: `node scripts/test-u08-math.mjs` y `node scripts/browser-u08-labs.cjs` (este último requiere Playwright, Chromium y servidor HTTP en el puerto 4173).

[← U7 · Python y Blockchain Analytics](../u07-python-blockchain-analytics/) · [Campus](../../index.html)
