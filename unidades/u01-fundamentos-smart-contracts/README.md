# Unidad 1 — Del registro verificable al código ejecutable

**Asignatura:** Blockchain y Finanzas Descentralizadas  
**Docente:** Dr. Sergio Gevatschnaider  
**Año:** 2026

La versión 2.0 reorganiza la Unidad 1 para continuar de forma directa el Módulo 0. El foco deja de ser una segunda introducción general a blockchain y pasa a una pregunta técnica central: **¿cómo una red representa, verifica y modifica un estado compartido hasta permitir la ejecución de reglas programables?**

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/"><img alt="Abrir Unidad 1" src="https://img.shields.io/badge/LIVE-UNIDAD%201%20V2-0284c7?style=for-the-badge&logo=html5&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/evaluacion.html"><img alt="Abrir evaluación" src="https://img.shields.io/badge/EVALUACIÓN-50%20PREGUNTAS-d97706?style=for-the-badge&logo=checkmarx&logoColor=white"></a>
</p>

## Objetivos de aprendizaje

Al finalizar la unidad, el estudiante podrá:

- explicar las propiedades básicas de un hash criptográfico y observar el efecto avalancha;
- construir conceptualmente un árbol de Merkle y verificar una prueba de inclusión;
- distinguir los modelos **UTXO** y **account-based** como representaciones diferentes del estado;
- describir el recorrido de una transacción que invoca un contrato en Ethereum;
- relacionar EVM, storage, eventos, revert y transición de estado;
- separar **gas usado** de **precio por unidad de gas** y razonar sobre intensidad de recursos;
- interpretar un smart contract como una máquina de estados con funciones y precondiciones;
- distinguir tokenización técnica, derecho representado, custodia, restricciones y dependencias off-chain;
- integrar integridad, autorización, ejecución, datos externos, permisos y diseño económico dentro de un análisis de seguridad.

## Ruta conceptual

```text
Datos
  ↓
Hash
  ↓
Merkle
  ↓
Bloque
  ↓
Transacción
  ↓
Estado
  ↓
EVM
  ↓
Gas
  ↓
Smart Contract
  ↓
Seguridad y activos programables
```

## Laboratorios interactivos

Todos los laboratorios son autocontenidos y se ejecutan en el navegador.

| # | Laboratorio | Objetivo |
|---:|---|---|
| 01 | [Hash & Avalanche Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/01-hash-lab.html) | Calcular SHA-256 y medir sensibilidad a cambios mínimos |
| 02 | [Merkle Proof Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/02-merkle-lab.html) | Construir una raíz y verificar una prueba de inclusión |
| 03 | [UTXO vs Account Model](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/03-utxo-account.html) | Comparar dos representaciones del estado para el mismo pago |
| 04 | [EVM State Explorer](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/04-evm-explorer.html) | Seguir firma, validación, lectura, ejecución, escritura y evento |
| 05 | [Gas Economics Lab](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/05-gas-lab.html) | Comparar intensidad de lecturas, escrituras, calldata y logs |
| 06 | [Smart Contract State Machine](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/06-smart-contract-lab.html) | Observar estados, precondiciones, eventos y revert en un escrow educativo |
| 07 | [Tokenization Designer](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/07-tokenization-designer.html) | Separar activo, derecho, token, custodia, transferencias y oráculos |

Los laboratorios de EVM, gas, smart contracts y tokenización son **modelos educativos**. No representan implementaciones listas para producción ni sustituyen documentación técnica, auditorías, análisis jurídico o evaluación de seguridad.

## Evaluación U1 v2

La nueva evaluación contiene **50 preguntas explicadas** distribuidas en diez categorías:

1. Hash
2. Merkle
3. Transacciones
4. Bitcoin
5. Ethereum
6. EVM
7. Gas
8. Smart Contracts
9. Tokenización
10. Seguridad

Incluye modo **Práctica** y **Examen**, selección por categoría y dificultad, corrección explicada y resumen de desempeño por competencia.

[**Abrir evaluación**](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/evaluacion.html)

## Material de estudio existente

La versión 2.0 conserva los recursos previos y los reubica como material complementario.

- [Guía Unidad 1.pdf](Guía%20Unidad%201.pdf)
- [Notebook — El impacto de las nuevas tecnologías en los negocios](python/El_Impacto_de_las_Nuevas_Tecnologías_en_los_Negocios.ipynb)
- [Notebook — Definiciones con ejemplos](python/Definiciones_con_ejemplos_Unidad_1_.ipynb)
- [Caso visual — Escrow / smart contract](html/smart_contract.html)
- [Recurso — Clave criptográfica](html/clave.html)
- [Recurso — Bitcoin](html/BITCOIN.html)
- [Recurso — Colateral](html/colateral.html)
- [Recurso — FT & DeFi](html/FT_DEFI.html)

Los enlaces históricos `html/merkle.html`, `html/Cuestionario.html` y `html/tokenizacion.html` se mantienen por compatibilidad y redirigen a las experiencias v2 correspondientes.

## Agenda sugerida — 3 horas

| Tiempo | Actividad |
|---:|---|
| 15 min | Conexión con Módulo 0 y mapa conceptual |
| 25 min | Hash y efecto avalancha |
| 35 min | Merkle tree + proof |
| 25 min | UTXO vs account model |
| 35 min | Estado, Ethereum y EVM |
| 20 min | Gas y costo de ejecución |
| 20 min | Smart contract state machine |
| 15 min | Tokenización y dependencias off-chain |
| 10 min | Evaluación / cierre |

## Bibliografía principal

- Narayanan et al., *Bitcoin and Cryptocurrency Technologies*.
- Antonopoulos & Wood, *Mastering Ethereum*.
- Bashir, I., *Mastering Blockchain*.
- Drescher, D., *Blockchain Basics*.
- Documentación oficial de Bitcoin, Ethereum y Solidity.
- OpenZeppelin Docs para primitivas y patrones de contratos.

## Validación técnica

La unidad incluye `validate.mjs`, que comprueba recursos obligatorios, enlaces locales, sintaxis JavaScript de los archivos nuevos, presencia de los 7 laboratorios y conteo de las 50 preguntas.

```bash
node unidades/u01-fundamentos-smart-contracts/validate.mjs
```
