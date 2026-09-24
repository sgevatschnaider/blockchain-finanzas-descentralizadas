<p align="center">
  <img src="./assets/readme/hero-unidad-2.svg" width="100%" alt="Unidad 2: Bitcoin, consenso y seguridad">
</p>

<p align="center"><strong>Material elaborado por el profesor Sergio Gevatschnaider</strong></p>

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/"><img src="./assets/readme/boton-modulo.svg" width="46%" alt="Abrir módulo interactivo"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/"><img src="./assets/readme/boton-simulaciones.svg" width="46%" alt="Explorar las simulaciones"></a>
</p>

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/materiales/">Presentaciones</a> ·
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/recursos/glosario-bitcoin.html">Glosario</a> ·
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/evaluacion/cuestionario-bitcoin-completo.html">Cuestionario completo</a> ·
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/evaluacion/cuestionario-bitcoin.html">Autoevaluación Bitcoin</a> ·
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/hodl-index.html">HODL y on-chain</a> ·
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/planillas/laboratorio-bitcoin.xlsx">Planilla de laboratorio</a>
</p>

---

## Una unidad para comprender Bitcoin como sistema

Esta unidad conecta criptografía, transacciones, minería, consenso, seguridad económica, emisión, escalabilidad y comportamiento financiero. HODL se incorpora como submódulo transversal: no como regla del protocolo, sino como decisión del propietario que produce huellas observables en el conjunto UTXO.

| Experiencia | Contenido |
|---|---|
| **14 laboratorios interactivos** | Parámetros editables, resultados visuales, modo automático y progreso local |
| **223 diapositivas** | Seis presentaciones en PDF; la presentación del white paper y las dos de HODL también incluyen PPTX editable |
| **103 conceptos** | Glosario general de 49 términos + glosario HODL/on-chain de 54 términos |
| **86 preguntas** | Guía completa de 30 preguntas desarrolladas + autoevaluación Bitcoin de 20 + autoevaluación HODL de 36 |

## Ruta pedagógica

| Bloque | Pregunta central | Núcleo conceptual | Laboratorios |
|---|---|---|---|
| **1 · Propiedad y transacción** | ¿Qué se controla y cómo se transfiere? | Claves, direcciones, hashes, UTXO, inputs, outputs, cambio y fees | 01–04 |
| **2 · Consenso** | ¿Cómo acuerda la red un historial? | Mempool, bloque candidato, Merkle root, nonce, target, dificultad y PoW | 05–06 |
| **3 · Seguridad** | ¿Por qué es costoso reemplazar la historia? | Forks, chainwork, confirmaciones, reorganizaciones y ataque del 51 % | 07–08 |
| **4 · Economía y escala** | ¿Cómo evolucionan los incentivos y la capacidad? | Subsidio, halving, comisiones, canales, HTLC, liquidez y ruteo | 09 + presentaciones |
| **5 · Comportamiento y datos** | ¿Qué huella deja la decisión de no gastar? | HODL, DCA, coin age, HODL Waves, CDD, finanzas conductuales y riesgo | 10–14 |

## Simulaciones independientes

Cada tarjeta abre la simulación publicada en GitHub Pages, no el archivo fuente de GitHub. Los laboratorios son HTML autónomos, incluyen cambio de tema, recorrido automático y guardado de progreso en el navegador.

| | | |
|---|---|---|
| **01 · [Claves y direcciones](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/01-claves-direcciones.html)**<br><sub>Entropía, clave privada, clave pública y dirección.</sub> | **02 · [SHA-256 y efecto avalancha](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/02-sha256-avalancha.html)**<br><sub>Difusión y sensibilidad de entrada.</sub> | **03 · [Modelo UTXO](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/03-modelo-utxo.html)**<br><sub>Inputs, outputs, cambio y conservación del valor.</sub> |
| **04 · [Bitcoin Transaction Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/04-transaccion-bitcoin.html)**<br><sub>Firma, validación y propagación.</sub> | **05 · [Mempool, fees y minería PoW](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/05-mempool-fees-mineria.html)**<br><sub>Selección económica y búsqueda de nonce.</sub> | **06 · [Merkle Tree y Merkle Proof](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/06-merkle-tree-proof.html)**<br><sub>Raíz compacta y prueba de inclusión.</sub> |
| **07 · [Fork, chainwork y confirmaciones](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/07-fork-chainwork-confirmaciones.html)**<br><sub>Selección de cadena y finalidad probabilística.</sub> | **08 · [Ataque del 51 %](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/08-ataque-51.html)**<br><sub>Reorganización, doble gasto y límites.</sub> | **09 · [Lightning Network](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/09-lightning-network.html)**<br><sub>Canales, liquidez, HTLC y liquidación.</sub> |
| **10 · [HODL Strategy Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/10-hodl-strategy-lab.html)**<br><sub>HODL, DCA, trading, market timing y drawdown.</sub> | **11 · [UTXO Aging + HODL Waves](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/11-utxo-aging-hodl-waves.html)**<br><sub>Edad individual y migración entre cohortes.</sub> | **12 · [Coin Days Destroyed](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/12-coin-days-destroyed.html)**<br><sub>Cantidad por antigüedad y lectura prudente.</sub> |
| **13 · [Behavioral Bitcoin Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/13-behavioral-bitcoin-lab.html)**<br><sub>Sesgos, hipótesis y límites de inferencia.</sub> | **14 · [HODL Risk & Allocation Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/14-hodl-risk-allocation-lab.html)**<br><sub>Asignación, liquidez, rebalanceo y venta forzada.</sub> | **[Ruta HODL completa](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/hodl-index.html)**<br><sub>Acceso ordenado a los cinco laboratorios.</sub> |

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/simuladores/"><img src="./assets/readme/boton-simulaciones.svg" width="55%" alt="Abrir índice visual de simulaciones"></a>
</p>

## Presentaciones y documentos

El [visor de clase](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/materiales/) permite:

- elegir entre **PDF interactivo** y **Google Slides** cuando exista versión publicada;
- avanzar con botones laterales, flechas del teclado, barra deslizante o gestos táctiles;
- reproducir automáticamente con intervalos configurables;
- conservar controles y autoplay al entrar en pantalla completa;
- descargar el PDF completo o el PPTX editable de la presentación del white paper y de las dos presentaciones HODL.

Presentaciones incluidas:

1. Bitcoin desde el white paper — 50 diapositivas.
2. Proof of Work frente a Proof of Stake — 55 diapositivas.
3. Halving de Bitcoin — 21 diapositivas.
4. Layer 2 en Bitcoin y Ethereum — 38 diapositivas.
5. HODL: protocolo, economía y comportamiento — 28 diapositivas.
6. HODL y análisis on-chain — 31 diapositivas.

También se encuentran el white paper original de Satoshi Nakamoto y la secuencia docente que vincula presentaciones y simulaciones.

## Consolidación y evaluación

| Recurso | Uso recomendado |
|---|---|
| [Glosario desarrollado](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/recursos/glosario-bitcoin.html) | Buscar conceptos por capa y revisar función, relaciones y errores frecuentes |
| [Cuestionario completo](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/evaluacion/cuestionario-bitcoin-completo.html) | Estudiar con 30 preguntas abiertas, respuestas desarrolladas, ejemplos, puntos clave, errores frecuentes, filtros y modo repaso |
| [Autoevaluación Bitcoin](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/evaluacion/cuestionario-bitcoin.html) | Comprobar comprensión con 20 preguntas de opción múltiple y retroalimentación explicada |
| [Guía de estudio HODL](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/recursos/hodl-estudio-index.html) | Recorrer HODL, UTXO, análisis on-chain, conducta y riesgo en una secuencia coherente |
| [Glosario HODL y on-chain](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/recursos/hodl-glosario.html) | Consultar 54 conceptos con fórmulas, relaciones, errores frecuentes y fuentes |
| [Autoevaluación HODL](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/evaluacion/hodl-cuestionario.html) | Resolver 36 preguntas con explicación inmediata y plan de repaso por área |
| [Planilla de laboratorio](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/planillas/laboratorio-bitcoin.xlsx) | Registrar experimentos PoW, analizar riesgo de reversión y seguir la ruta |

La planilla puede abrirse con Excel o importarse directamente en Google Sheets. También hay un [CSV para registrar experimentos](planillas/registro-experimentos-pow.csv).

<details>
<summary><strong>Estructura técnica del módulo</strong></summary>

```text
u02-criptoactivos-consenso-seguridad/
├── index.html
├── assets/
├── simuladores/
│   ├── index.html
│   ├── hodl-index.html
│   └── 01...14.html
├── materiales/
│   ├── index.html
│   ├── pdf/
│   └── pptx/
├── recursos/
│   ├── glosario-bitcoin.html
│   ├── hodl-estudio-index.html
│   └── hodl-glosario.html
├── evaluacion/
│   ├── cuestionario-bitcoin-completo.html
│   ├── cuestionario-bitcoin.html
│   └── hodl-cuestionario.html
├── planillas/
└── html/  (material previo conservado)
```

</details>

> **Criterio docente:** los recursos previos de ciberseguridad general permanecen en `html/` para conservar enlaces externos, pero no interrumpen la secuencia específica de Bitcoin. La composabilidad DeFi corresponde a una unidad posterior.

<p align="center"><a href="../../">← Volver al curso completo</a></p>
