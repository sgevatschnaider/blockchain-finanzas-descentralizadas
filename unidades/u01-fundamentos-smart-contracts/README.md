# Unidad 1 — Del registro verificable al código ejecutable

**Asignatura:** Blockchain y Finanzas Descentralizadas  
**Docente:** Dr. Sergio Gevatschnaider  
**Año:** 2026

La Unidad 1 continúa de forma directa el Módulo 0. El foco deja de ser una segunda introducción general a blockchain y pasa a una pregunta técnica central: **¿cómo una red representa, verifica y modifica un estado compartido hasta permitir la ejecución de reglas programables?**

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/"><img alt="Abrir Unidad 1" src="https://img.shields.io/badge/ABRIR-UNIDAD%201-0284c7?style=for-the-badge&logo=html5&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/evaluacion.html"><img alt="Abrir evaluación" src="https://img.shields.io/badge/EVALUACIÓN-50%20PREGUNTAS-d97706?style=for-the-badge&logo=checkmarx&logoColor=white"></a>
  <a href="Guía%20Unidad%201.pdf"><img alt="Abrir guía PDF" src="https://img.shields.io/badge/ABRIR-GUÍA%20PDF-475569?style=for-the-badge&logo=adobeacrobatreader&logoColor=white"></a>
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

Todos los laboratorios son autocontenidos y se ejecutan directamente en el navegador. Los accesos principales se presentan como botones para entrar a cada experiencia sin recorrer tablas ni archivos internos.

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/01-hash-lab.html"><img alt="Hash & Avalanche Lab" src="https://img.shields.io/badge/01-HASH%20%26%20AVALANCHE-2563eb?style=for-the-badge&logo=hashnode&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/02-merkle-lab.html"><img alt="Merkle Proof Lab" src="https://img.shields.io/badge/02-MERKLE%20PROOF-0891b2?style=for-the-badge&logo=databricks&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/03-utxo-account.html"><img alt="UTXO vs Account Model" src="https://img.shields.io/badge/03-UTXO%20vs%20ACCOUNT-0f766e?style=for-the-badge&logo=bitcoin&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/04-evm-explorer.html"><img alt="EVM State Explorer" src="https://img.shields.io/badge/04-EVM%20STATE%20EXPLORER-6d28d9?style=for-the-badge&logo=ethereum&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/05-gas-lab.html"><img alt="Gas Economics Lab" src="https://img.shields.io/badge/05-GAS%20ECONOMICS-a16207?style=for-the-badge&logo=ethereum&logoColor=white"></a>
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/06-smart-contract-lab.html"><img alt="Smart Contract State Machine" src="https://img.shields.io/badge/06-SMART%20CONTRACT-7c3aed?style=for-the-badge&logo=solidity&logoColor=white"></a>
</p>

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/simuladores/07-tokenization-designer.html"><img alt="Tokenization Designer" src="https://img.shields.io/badge/07-TOKENIZATION%20DESIGNER-047857?style=for-the-badge&logo=ethereum&logoColor=white"></a>
</p>

### Qué trabaja cada laboratorio

- **Hash & Avalanche Lab:** calcular SHA-256 y medir sensibilidad a cambios mínimos.
- **Merkle Proof Lab:** construir una raíz y verificar una prueba de inclusión.
- **UTXO vs Account Model:** comparar dos representaciones del estado para el mismo pago.
- **EVM State Explorer:** seguir firma, validación, lectura, ejecución, escritura y evento.
- **Gas Economics Lab:** comparar intensidad de lecturas, escrituras, calldata y logs.
- **Smart Contract State Machine:** observar estados, precondiciones, eventos y revert en un escrow educativo.
- **Tokenization Designer:** separar activo, derecho, token, custodia, transferencias y oráculos.

Los laboratorios de EVM, gas, smart contracts y tokenización son **modelos educativos**. No representan implementaciones listas para producción ni sustituyen documentación técnica, auditorías, análisis jurídico o evaluación de seguridad.

## Evaluación

La evaluación contiene **50 preguntas explicadas** distribuidas en diez categorías:

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

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/evaluacion.html"><img alt="Comenzar evaluación" src="https://img.shields.io/badge/COMENZAR-EVALUACIÓN-d97706?style=for-the-badge&logo=checkmarx&logoColor=white"></a>
</p>

## Material de estudio y recursos complementarios

Los recursos previos se conservan y se integran como material complementario de la secuencia principal.

<p align="center">
  <a href="Guía%20Unidad%201.pdf"><img alt="Guía Unidad 1 PDF" src="https://img.shields.io/badge/PDF-GUÍA%20UNIDAD%201-b91c1c?style=for-the-badge&logo=adobeacrobatreader&logoColor=white"></a>
  <a href="python/El_Impacto_de_las_Nuevas_Tecnologías_en_los_Negocios.ipynb"><img alt="Notebook impacto de nuevas tecnologías" src="https://img.shields.io/badge/NOTEBOOK-IMPACTO%20TECNOLOGÍAS-f59e0b?style=for-the-badge&logo=jupyter&logoColor=white"></a>
  <a href="python/Definiciones_con_ejemplos_Unidad_1_.ipynb"><img alt="Notebook definiciones con ejemplos" src="https://img.shields.io/badge/NOTEBOOK-DEFINICIONES-f59e0b?style=for-the-badge&logo=jupyter&logoColor=white"></a>
</p>

- [Caso visual — Escrow / smart contract](html/smart_contract.html)
- [Recurso — Clave criptográfica](html/clave.html)
- [Recurso — Bitcoin](html/BITCOIN.html)
- [Recurso — Colateral](html/colateral.html)
- [Recurso — FT & DeFi](html/FT_DEFI.html)

Los enlaces históricos `html/merkle.html`, `html/Cuestionario.html` y `html/tokenizacion.html` se mantienen por compatibilidad y redirigen a las experiencias actuales correspondientes.

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

La unidad incluye `validate.mjs`, que comprueba recursos obligatorios, enlaces locales, sintaxis JavaScript, presencia de los 7 laboratorios y conteo de las 50 preguntas.

```bash
node unidades/u01-fundamentos-smart-contracts/validate.mjs
```
