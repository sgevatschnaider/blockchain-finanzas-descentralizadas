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

## Próxima etapa

Se incorporarán las simulaciones con su guía de actividades y, después, un glosario con definiciones desarrolladas, ejemplos y relaciones entre conceptos, a partir del material docente suministrado para esas etapas.

[← U7 · Python y Blockchain Analytics](../u07-python-blockchain-analytics/) · [Campus](../../index.html)
