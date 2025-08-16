# **Dominando Blockchain y Finanzas Descentralizadas: de la Teoría al Laboratorio**

## 🔗 Vista previa del laboratorio

> GIF demostrativo que muestra el flujo y funcionamiento de la cadena de bloques en el laboratorio de este proyecto.

<img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/b53513b4c8184b9143ff1a30da6c420ac39d3b7a/assets/blockchain%20.gif" alt="Blockchain GIF" width="800">

---

¡Bienvenido/a al repositorio central de conocimiento y práctica en **Blockchain**, **DeFi** y **Criptografía aplicada**!  

Este espacio fue diseñado como un compendio exhaustivo para estudiantes, profesionales y entusiastas que buscan no solo comprender, sino **dominar los fundamentos, protocolos, herramientas de desarrollo y aplicaciones financieras**. Desde Bitcoin y Ethereum hasta AMMs, MEV, regulación y on-chain analytics, este repo ofrece un camino de aprendizaje **estructurado, práctico y actualizado**.

Explorarás un mapa completo que integra: **fundamentos de blockchain y contratos inteligentes**, **criptoactivos y consenso**, **IoT/IA + on-chain**, **DeFi (AMMs, riesgo, regulación)**, **trading cuantitativo** y **análisis on-chain con Python**.

**Nuestra misión:** Empoderarte con el rigor técnico y las habilidades prácticas para **construir, auditar, analizar y evaluar** soluciones basadas en blockchain en contextos reales de negocio y finanzas.

---

## **Hoja de Ruta del Conocimiento (Índice)**

- [Visión holística del repositorio](#visión-holística-del-repositorio)
- [Arquitectura del repositorio](#arquitectura-del-repositorio)
- [Puesta en marcha: Guía de inicio rápido](#puesta-en-marcha-guía-de-inicio-rápido)
- [Estructura temática detallada y acceso a Unidades](#estructura-temática-detallada-y-acceso-a-unidades)
- [Fragmentos de código ilustrativos](#fragmentos-de-código-ilustrativos)
- [Arsenal de recursos (docs, papers, herramientas)](#arsenal-de-recursos-docs-papers-herramientas)
- [Directrices para el aprendizaje autónomo](#directrices-para-el-aprendizaje-autónomo)
- [Contribuciones y comunidad](#contribuciones-y-comunidad)
- [Marco legal y licencia](#marco-legal-y-licencia)

---

## Visión holística del repositorio

Este repo es el **punto de entrada único** para todo el material de la cátedra:

- **Teoría** curada y actualizada (lecturas en inglés, estándares criptográficos).
- **Práctica** con labs, notebooks y proyectos guiados (Solidity + Python).
- **Calidad**: CI para Python y Foundry, enlaces verificados, estructura modular.
- **Docencia**: cronograma, objetivos por unidad, rúbricas y recursos.

> **Docente responsable:** Dr. Sergio Gevatschnaider · **Cursada:** Ago–Oct 2025 · Remota + Híbrida (Sede Zabala)

---

## Arquitectura del repositorio

```

.
├─ README.md
├─ LICENSE · CODE\_OF\_CONDUCT.md · CONTRIBUTING.md · SECURITY.md
├─ requirements.txt
├─ cronograma/
│   └─ cronograma.md
├─ recursos/
│   ├─ bibliografia.md
│   └─ enlaces-utiles.md
├─ unidades/
│   ├─ unidad-01/README.md
│   ├─ unidad-02/README.md
│   ├─ unidad-03/README.md
│   ├─ unidad-04/README.md
│   ├─ unidad-05/README.md
│   └─ unidad-06/README.md
├─ notebooks/
│   ├─ U5\_indicadores\_trading.ipynb
│   └─ U6\_blockchain\_con\_python.ipynb
├─ python/
│   ├─ pyproject.toml
│   ├─ src/
│   │   ├─ chain/erc20\_events.py
│   │   └─ data/deribit\_public.py
│   └─ tests/test\_indicadores.py
└─ solidity/
├─ foundry.toml
├─ src/ (MyToken.sol · MyNFT.sol)
└─ test/ (MyToken.t.sol · MyNFT.t.sol)

````

**CI (recomendado):**
- `.github/workflows/ci-python.yml` — `pytest`  
- `.github/workflows/ci-foundry.yml` — `forge fmt && forge test`  
- `.github/workflows/links.yml` — verificación de enlaces Markdown

## Badges

[![CI Foundry](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml)
[![CI Python](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml)
[![Links](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml)

---

## Puesta en marcha: Guía de inicio rápido

> Si recién llegás, empezá por el **[cronograma](cronograma/cronograma.md)** y luego abre la **Unidad 1**.

**Python (3.10+)**
```bash
pip install -r requirements.txt
pytest -q
````

**Solidity + Foundry** (forge/anvil/cast)

```bash
# Linux/macOS/WSL
curl -L https://foundry.paradigm.xyz | bash
foundryup

cd solidity
forge fmt
forge test -vvv
anvil   # red local
```

**Notebooks (Colab)**

* U5 — Indicadores & Trading
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U5_indicadores_trading.ipynb)
* U6 — On-chain Analytics (Web3.py)
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U6_blockchain_con_python.ipynb)

---

## Estructura temática detallada y acceso a Unidades

> Cada unidad incluye: **objetivos**, **lab principal**, **lecturas (EN)** y **rúbrica**.

### **U1 — Fundamentos & Smart Contracts**

`unidades/unidad-01/README.md`

<details><summary><strong>Resumen:</strong> (clic para expandir)</summary>
Conceptos esenciales de blockchain, impacto en negocios, evolución de smart contracts. Comparativa de plataformas (Bitcoin, Ethereum, Hyperledger, Corda).
</details>

**Lab:** Árbol de Merkle y prueba de inclusión.

---

### **U2 — Criptoactivos, Consenso & Ciberseguridad**

`unidades/unidad-02/README.md`

<details><summary><strong>Resumen:</strong></summary>
Clasificación de criptoactivos (coins, stablecoins, tokens, NFT), mecanismos de consenso (PoW/PoS), primitives criptográficas (hash, firmas, AEAD).
</details>

**Lab:** ECDSA (secp256k1) + PoW mínimo + integridad con Keccak/SHA-3.

---

### **U3 — IoT/IA/ML + Metaverso (casos)**

`unidades/unidad-03/README.md`

<details><summary><strong>Resumen:</strong></summary>
Trazabilidad con IPFS/on-chain, costos L1/L2 (EIP-4844), prototipos de negocio y mini-ML para alertas.
</details>

**Lab:** Anclaje y verificación; análisis técnico-económico de gas/costos.

---

### **U4 — TraFi vs DeFi (AMMs, MEV, regulación)**

`unidades/unidad-04/README.md`

<details><summary><strong>Resumen:</strong></summary>
AMMs (Uniswap v3), riesgo de LP, MEV/PBS y panorama regulatorio (MiCA/FATF).
</details>

**Lab:** Simulador de Uniswap v3 (rango, fees, P\&L) + mini-análisis MEV.

---

### **U5 — Indicadores & Trading (cuantitativo)**

`unidades/unidad-05/README.md`

<details><summary><strong>Resumen:</strong></summary>
Volatilidad realizada, drawdown, Sharpe, backtesting reproducible; riesgos de apalancamiento y liquidez.
</details>

**Lab:** CCXT OHLCV + backtest con métricas; extra: implied vol (opciones).

---

### **U6 — Python para Blockchain & Finanzas (on-chain analytics)**

`unidades/unidad-06/README.md`

<details><summary><strong>Resumen:</strong></summary>
Deploy ERC-20 (Foundry/Anvil), eventos on-chain, KPIs con Web3.py.
</details>

**Lab:** Parseo de eventos `Transfer` y panel de KPIs.

---

## Fragmentos de código ilustrativos

> Ejemplos mínimos listos para copiar/pegar (el código completo vive en `solidity/` y `python/`).

### **Solidity — ERC-20 mínimo (OpenZeppelin)**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MYT") {
        _mint(msg.sender, 1_000_000e18);
    }
}
```

### **Python — Conexión a nodo local y chequeo**

```python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider("http://localhost:8545"))
assert w3.is_connected()
print("OK: nodo conectado")
```

### **Python — OHLCV público (ccxt)**

```python
import ccxt
ex = ccxt.binance()
ohlcv = ex.fetch_ohlcv("BTC/USDT", timeframe="1h", limit=10)
print(ohlcv[:2])
```
# Blockchain Finanzas Descentralizadas – Ejemplos Solidity

## Contratos en este repo
- [contracts/MilestoneEscrow_OZDemo.sol](contracts/MilestoneEscrow_OZDemo.sol)  
  Escrow con hitos, Oracle mock y Token mock.  
  👉 [Abrir en Remix](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)

## Cómo probar (gratis en Remix)
1. Abrir el enlace de arriba.
2. Compilar con Solidity 0.8.24.
3. Deploy en JS VM (London).
4. Flujo: `approve → fund → markMilestone`.

---

## Arsenal de recursos (docs, papers, herramientas)

* **Protocolos y tooling**: Bitcoin WP · Ethereum docs (roadmap: Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi/MEV/AMMs**: Uniswap v3 whitepaper · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada**: NIST FIPS-202 (SHA-3), SP 800-185 (KMAC/cSHAKE), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo**: MiCA (UE), FATF (VASPs/Travel Rule), BIS (estabilidad)

> La lista completa y viva está en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

## Directrices para el aprendizaje autónomo

* **Fundamentos sólidos**: repasar hash, firmas, EVM y modelos AMM antes de optimizar.
* **Laboratorio primero**: ejecutar los labs; leer luego para consolidar.
* **Pensamiento cuantitativo**: siempre mide riesgo (vol, drawdown, slippage).
* **Seguridad**: nunca subas claves; evita reentrancy/overflow; usa tests.
* **Lectura primaria**: whitepapers/estándares antes que resúmenes.
* **Ética & cumplimiento**: distingue docencia de asesoramiento financiero.

---

## Contribuciones y comunidad

¡Este es un proyecto vivo! Contribuciones bienvenidas.

1. Abrí un **issue** con tu propuesta (bug/feature/doc).
2. Fork → rama `feature/...` → Pull Request.
3. Asegurá CI verde (Python/Foundry/Links).
   Más en `CONTRIBUTING.md` y `CODE_OF_CONDUCT.md`.

---

## Marco legal y licencia

Material educativo; **no constituye asesoramiento financiero**.
Este repositorio se distribuye bajo licencia **MIT** (ver `LICENSE`).
Contenido de terceros mantiene sus licencias y atribuciones.

```






