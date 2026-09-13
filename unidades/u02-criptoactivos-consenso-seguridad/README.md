# Unidad 2 — Bitcoin, criptoactivos, consenso y seguridad

**Material elaborado por el profesor Sergio Gevatschnaider**

Esta unidad estudia Bitcoin como un sistema completo: control criptográfico, modelo UTXO, construcción de transacciones, minería, selección de cadena, seguridad económica, emisión y escalabilidad. El contenido se organiza para que cada concepto teórico tenga una simulación, una guía de consulta y una instancia de evaluación.

## Acceso principal

[Abrir el módulo interactivo de la Unidad 2](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/)

## Ruta pedagógica

| Bloque | Pregunta central | Contenidos | Laboratorios |
|---|---|---|---|
| 1. Propiedad y transacción | ¿Qué se controla y cómo se transfiere? | Claves, direcciones, firmas, hashes, UTXO, inputs, outputs, cambio y fees | 01 a 04 |
| 2. Consenso | ¿Cómo acuerda la red un historial sin autoridad central? | Mempool, bloque candidato, Merkle root, nonce, target, dificultad y PoW | 05 y 06 |
| 3. Seguridad | ¿Por qué una historia resulta más costosa de reemplazar? | Forks, chainwork, confirmaciones, reorganizaciones y ataque del 51% | 07 y 08 |
| 4. Economía y escala | ¿Cómo evoluciona el incentivo y cómo se amplía la capacidad de pago? | Subsidio, halving, comisiones, canales, HTLC, liquidez y ruteo | 09 y presentaciones |

## Simulaciones independientes

Cada simulación funciona como HTML autónomo, incluye cambio de tema y recorrido automático. La barra inferior permite avanzar por la secuencia y guardar el progreso en el navegador.

1. [Claves y direcciones](simuladores/01-claves-direcciones.html)
2. [SHA-256 y efecto avalancha](simuladores/02-sha256-avalancha.html)
3. [Modelo UTXO](simuladores/03-modelo-utxo.html)
4. [Bitcoin Transaction Lab](simuladores/04-transaccion-bitcoin.html)
5. [Mempool, fees y minería PoW](simuladores/05-mempool-fees-mineria.html)
6. [Merkle Tree y Merkle Proof](simuladores/06-merkle-tree-proof.html)
7. [Fork, chainwork y confirmaciones](simuladores/07-fork-chainwork-confirmaciones.html)
8. [Ataque del 51%](simuladores/08-ataque-51.html)
9. [Lightning Network](simuladores/09-lightning-network.html)

[Abrir el índice de simulaciones](simuladores/index.html)

## Presentaciones y documentos

El [visor integrado](materiales/index.html) permite avanzar manualmente, reproducir automáticamente, modificar la velocidad y usar pantalla completa. Incluye:

- Bitcoin desde el white paper, 36 diapositivas.
- Proof of Work frente a Proof of Stake, 55 diapositivas.
- Halving de Bitcoin, 21 diapositivas.
- Layer 2 en Bitcoin y Ethereum, 38 diapositivas.
- White paper original de Satoshi Nakamoto.
- Secuencia docente que relaciona presentaciones y simulaciones.

La presentación alternativa sobre el paper y la guía extensa de las simulaciones se consolidaron en el visor, el glosario y las explicaciones propias de cada laboratorio para evitar duplicación conceptual.

## Glosario y evaluación

- [Glosario desarrollado de Bitcoin](recursos/glosario-bitcoin.html): búsqueda instantánea, filtros por capa y explicaciones sobre función, relación y errores frecuentes.
- [Cuestionario formativo](evaluacion/cuestionario-bitcoin.html): 20 preguntas con corrección, puntaje y respuestas ampliamente explicadas.

## Planilla para Google Sheets y Excel

[Descargar laboratorio-bitcoin.xlsx](planillas/laboratorio-bitcoin.xlsx)

La planilla contiene:

- una tabla para registrar intentos y tiempos de Proof of Work;
- fórmulas de intentos y tiempo esperado por dificultad;
- una matriz didáctica de probabilidad de alcance del atacante;
- una hoja de seguimiento de los nueve laboratorios.

El archivo se abre directamente con Excel o se importa en Google Sheets. También se incluye un [CSV liviano](planillas/registro-experimentos-pow.csv).

## Material previo conservado

La carpeta [`html/`](html/) conserva los recursos anteriores para no romper enlaces externos. Los materiales específicamente vinculados con Bitcoin pueden usarse como complemento. Los recursos sobre ciberseguridad general y composabilidad DeFi quedan separados de la ruta principal porque corresponden a otros núcleos conceptuales del programa.

## Estructura

```text
u02-criptoactivos-consenso-seguridad/
├── index.html
├── assets/
├── simuladores/
│   ├── index.html
│   └── 01...09.html
├── materiales/
│   ├── index.html
│   └── pdf/
├── recursos/
│   └── glosario-bitcoin.html
├── evaluacion/
│   └── cuestionario-bitcoin.html
├── planillas/
│   ├── laboratorio-bitcoin.xlsx
│   └── registro-experimentos-pow.csv
└── html/  (material previo conservado)
```

[Volver al curso](../../)
