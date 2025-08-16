# **Dominando Blockchain y Finanzas Descentralizadas: De la Teoría al Laboratorio**

¡Bienvenido/a al repositorio central de conocimiento y práctica en **Blockchain**, **DeFi** y **Criptografía aplicada**!

Este espacio ha sido diseñado como un compendio exhaustivo para estudiantes, profesionales y entusiastas que buscan no solo comprender, sino **dominar los fundamentos, protocolos, herramientas de desarrollo y aplicaciones financieras**. Desde Bitcoin y Ethereum hasta AMMs, MEV, regulación y *on-chain* analytics, este repositorio ofrece un viaje de aprendizaje **estructurado, práctico y actualizado**.

Explorarás el universo de **Fundamentos de Blockchain y Contratos Inteligentes**, **Criptoactivos y Consenso**, **IoT/IA + on-chain**, **DeFi (AMMs, riesgo, regulación)**, **Trading Cuantitativo**, y **Análisis On-Chain con Python**.

**Nuestra Misión:** Empoderarte con el rigor técnico y las habilidades prácticas para **construir, auditar, analizar y evaluar** soluciones basadas en blockchain en contextos reales de negocio y finanzas.

---

## 🔗 Vista previa del laboratorio

> GIF demostrativo que muestra el flujo y funcionamiento de la cadena de bloques en el laboratorio de este proyecto.

<img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/b53513b4c8184b9143ff1a30da6c420ac39d3b7a/assets/blockchain%20.gif" alt="Blockchain GIF" width="800">

---

## **Hoja de Ruta del Conocimiento (Índice)**

- [Visión holística del repositorio](#visión-holística-del-repositorio)
- [Arquitectura del repositorio](#arquitectura-del-repositorio)
- [Badges](#badges)
- [Integración continua (CI)](#integración-continua-ci)
- [Puesta en marcha: Guía de inicio rápido](#puesta-en-marcha-guía-de-inicio-rápido)
- [Estructura temática detallada y acceso a Unidades](#estructura-temática-detallada-y-acceso-a-unidades)
- [Contratos (carpeta `contracts/`)](#contratos-carpeta-contracts)
- [Fragmentos de código ilustrativos](#fragmentos-de-código-ilustrativos)
- [Arsenal de recursos (docs, papers, herramientas)](#arsenal-de-recursos-docs-papers-herramientas)
- [Directrices para el aprendizaje autónomo](#directrices-para-el-aprendizaje-autónomo)
- [Contribuciones y comunidad](#contribuciones-y-comunidad)
- [Marco legal y licencia](#marco-legal-y-licencia)

---

## Visión holística del repositorio

Este repo es el **punto de entrada único** para todo el material de la cátedra:

- **Teoría** curada y actualizada (lecturas primarias, estándares criptográficos).
- **Práctica** con *labs*, notebooks y proyectos guiados (Solidity + Python).
- **Calidad**: CI para Python y Foundry, verificación de enlaces, estructura modular.
- **Docencia**: cronograma, objetivos por unidad, rúbricas y recursos.

> **Docente responsable:** Dr. Sergio Gevatschnaider · **Cursada:** Ago–Oct 2025 · Modalidad: Remota + Híbrida (Sede Zabala)

---

## Arquitectura del repositorio

```text
.
├─ README.md
├─ LICENSE · CODE_OF_CONDUCT.md · CONTRIBUTING.md · SECURITY.md
├─ requirements.txt
├─ assets/
│  └─ blockchain.gif
├─ cronograma/
│  └─ cronograma.md
├─ recursos/
│  ├─ bibliografia.md
│  └─ enlaces-utiles.md
├─ unidades/
│  ├─ unidad-01/README.md
│  ├─ unidad-02/README.md
│  ├─ unidad-03/README.md
│  ├─ unidad-04/README.md
│  ├─ unidad-05/README.md
│  └─ unidad-06/README.md
├─ notebooks/
│  ├─ U5_indicadores_trading.ipynb
│  └─ U6_blockchain_con_python.ipynb
├─ python/
│  ├─ pyproject.toml
│  ├─ src/
│  │  ├─ chain/erc20_events.py
│  │  └─ data/deribit_public.py
│  └─ tests/test_indicadores.py
├─ solidity/
│  ├─ foundry.toml
│  ├─ src/            # (MyToken.sol · MyNFT.sol)
│  └─ test/           # (MyToken.t.sol · MyNFT.t.sol)
└─ contracts/         # contratos listos para usar en Remix (JS VM)
````

---

## Badges

[![CI Foundry](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml)
[![CI Python](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml)
[![Links](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml)

---

## Integración continua (CI)

* `.github/workflows/ci-python.yml` — Ejecuta **pytest** para el paquete `python/`.
* `.github/workflows/ci-foundry.yml` — Ejecuta `forge fmt --check && forge test` en `solidity/`.
* `.github/workflows/links.yml` — Verifica enlaces Markdown en todo el repo.

---

## Puesta en marcha: Guía de inicio rápido

> Si recién llegás, empezá por el **[cronograma](cronograma/cronograma.md)** y luego abrí la **Unidad 1**.

### 1) Python (3.10+)

```bash
pip install -r requirements.txt
pytest -q
```

### 2) Solidity + Foundry (forge / anvil / cast)

```bash
# Linux/macOS/WSL
curl -L https://foundry.paradigm.xyz | bash
foundryup

cd solidity
forge fmt
forge test -vvv
anvil   # red local para pruebas
```

### 3) Notebooks (Colab/Local)

* **U5 — Indicadores & Trading:** `notebooks/U5_indicadores_trading.ipynb`
* **U6 — On-chain Analytics (Web3.py):** `notebooks/U6_blockchain_con_python.ipynb`

---

## Estructura temática detallada y acceso a Unidades

Cada unidad incluye **objetivos**, **lab principal**, **lecturas (EN)** y **rúbrica**.

### U1 — Fundamentos & Smart Contracts

`unidades/unidad-01/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Conceptos esenciales de blockchain, impacto en negocios, evolución de smart contracts. Comparativa de plataformas (Bitcoin, Ethereum, Hyperledger, Corda).
</details>

**Lab:**

* Árbol de Merkle y prueba de inclusión.

---

### U2 — Criptoactivos, Consenso & Ciberseguridad

`unidades/unidad-02/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Clasificación de criptoactivos (coins, stablecoins, tokens, NFT), mecanismos de consenso (PoW/PoS), primitivas criptográficas (hash, firmas, AEAD).
</details>

**Lab:**

* ECDSA (secp256k1)
* PoW mínimo
* Integridad con Keccak/SHA-3

---

### U3 — IoT/IA/ML + Metaverso (casos)

`unidades/unidad-03/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Trazabilidad con IPFS/on-chain, costos L1/L2 (EIP-4844), prototipos de negocio y mini-ML para alertas.
</details>

**Lab:**

* Anclaje y verificación.
* Análisis técnico-económico de gas/costos.

---

### U4 — TraFi vs DeFi (AMMs, MEV, regulación)

`unidades/unidad-04/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
AMMs (Uniswap v3), riesgo de LP, MEV/PBS y panorama regulatorio (MiCA/FATF).
</details>

**Lab:**

* Simulador de Uniswap v3 (rango, fees, P\&L).
* Mini-análisis MEV.

---

### U5 — Indicadores & Trading (cuantitativo)

`unidades/unidad-05/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Volatilidad realizada, *drawdown*, Sharpe, *backtesting* reproducible; riesgos de apalancamiento y liquidez.
</details>

**Lab/Notebook:**

* `notebooks/U5_indicadores_trading.ipynb` (CCXT OHLCV + *backtest* con métricas).
* Extra: *Implied vol* (opciones).

---

### U6 — Python para Blockchain & Finanzas (*on-chain analytics*)

`unidades/unidad-06/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
*Deploy* ERC-20 (Foundry/Anvil), eventos *on-chain*, KPIs con Web3.py.
</details>

**Lab/Notebook:**

* `notebooks/U6_blockchain_con_python.ipynb` (parseo de eventos `Transfer` y panel de KPIs).

---

## Contratos (carpeta `contracts/`)

Contratos de demostración listos para usar en clase. Todo se prueba **gratis** en **Remix** con **JavaScript VM** (sin MetaMask ni ETH real).

### 📄 Listado principal

* **MilestoneEscrow\_OZDemo.sol**
  Escrow por hitos con:

  * `SafeERC20` (OpenZeppelin) para transferencias seguras
  * `ReentrancyGuard` para evitar reentrancia
  * `MockToken` (ERC20 de prueba)
  * `MockOracle` (autoriza quién puede marcar hitos)

> Si el archivo tiene otro nombre en tu repo, ajustá los enlaces reemplazándolo por el nombre exacto.

### ▶️ Abrir en Remix (1 clic)

## 📄 Contratos (`contracts/`)

### `Milestonecrowdemo.sol`

[![Ver archivo (GitHub)](https://img.shields.io/badge/Ver%20archivo-GitHub-blue?logo=github)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/4e2dbd16b375fb8087aa35108f70f208bc3bb2f2/contracts/Milestonecrowdemo.sol)
[![Abrir en Remix (opcional)](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/4e2dbd16b375fb8087aa35108f70f208bc3bb2f2/contracts/Milestonecrowdemo.sol)

<sub>Ruta: `contracts/Milestonecrowdemo.sol` · Si querés la última versión en lugar del commit fijado: 
<a href="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/contracts/Milestonecrowdemo.sol">ver en <code>main</code></a>.</sub>

<details><summary>ℹ️ Nota de seguridad</summary>
El botón “Abrir en Remix” abre el cliente web público y carga el contrato desde el <em>raw</em> de GitHub usando el hash del commit. No accede a tu PC ni a tu sesión privada de Remix.
</details>

---

### 2) `MilestoneEscrow_OZDemo.sol`

- **Ver archivo en GitHub (rama `main`):**  
  https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/contracts/MilestoneEscrow_OZDemo.sol

- **(Opcional) Abrir en Remix — seguro (última versión de `main`):**  
  https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol

---


###  Guía rápida de uso (JS VM – GRATIS)

1. Abrí el enlace de arriba en **Remix**.
2. **Solidity Compiler** → versión **0.8.24** (o **0.8.30**, compatible con `^0.8.24`) → **Compile**.
3. **Deploy & Run** → **Environment:** *JavaScript VM (London)*.
4. Desplegá en este orden:

   * `MockToken`
   * `MockOracle`
   * `MilestoneEscrow(seller, stablecoin, oracle)`

     * `seller`: otra cuenta del dropdown
     * `stablecoin`: address del `MockToken`
     * `oracle`: address del `MockOracle`
5. **Flujo de demo:**

   * Cuenta **buyer** (la que deployeó `MilestoneEscrow`):
     `MockToken.approve(escrow, 1000e18)` → `MilestoneEscrow.fund()`
   * Cambiá a la cuenta **oracle**:
     `MockOracle.setAuthorized(oracleAddr, true)` → `MilestoneEscrow.markMilestone(0)`
   * Verificá: `contractBalance()` y `MockToken.balanceOf(seller)`.

#### 🛡️ Notas de seguridad

* `SafeERC20` maneja tokens que no devuelven `bool`.
* `ReentrancyGuard` protege `fund()` y `markMilestone()`.
* Variables `immutable` y eventos (`Funded`, `MilestoneMarked`) para trazabilidad.
* Penalidad por *deadline* si el hito se marca fuera de tiempo.

---

## Fragmentos de código ilustrativos

> Ejemplos mínimos listos para copiar/pegar (el código completo vive en `solidity/` y `python/`).

### Solidity — ERC-20 mínimo (OpenZeppelin)

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

### Python — Conexión a nodo local y *healthcheck*

```python
from web3 import Web3

w3 = Web3(Web3.HTTPProvider("http://localhost:8545"))
assert w3.is_connected()
print("OK: nodo conectado")
```

### Python — OHLCV público (ccxt)

```python
import ccxt

ex = ccxt.binance()
ohlcv = ex.fetch_ohlcv("BTC/USDT", timeframe="1h", limit=10)
print(ohlcv[:2])
```

---

## Arsenal de recursos (docs, papers, herramientas)

* **Protocolos y tooling:** Bitcoin WP · Ethereum docs (roadmap: Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi/MEV/AMMs:** Uniswap v3 whitepaper · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada:** NIST FIPS-202 (SHA-3), SP 800-185 (KMAC/cSHAKE), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo:** MiCA (UE), FATF (VASPs/Travel Rule), BIS (estabilidad)

> La lista completa y viva está en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

## Directrices para el aprendizaje autónomo

* **Fundamentos sólidos:** repasá hash, firmas, EVM y modelos AMM antes de optimizar.
* **Laboratorio primero:** ejecutá los *labs*; leé luego para consolidar.
* **Pensamiento cuantitativo:** medí riesgo (volatilidad, *drawdown*, *slippage*).
* **Seguridad:** no subas claves; evitá reentrancy/overflow; escribí tests.
* **Lectura primaria:** whitepapers/estándares antes que resúmenes.
* **Ética & cumplimiento:** distinguí docencia de asesoramiento financiero.

---

## Contribuciones y comunidad

¡Este es un proyecto vivo! Contribuciones bienvenidas.

1. Abrí un **issue** con tu propuesta (bug/feature/doc).
2. **Fork** → rama `feature/...` o `fix/...` → **Pull Request**.
3. Asegurá **CI verde** (Python/Foundry/Links).

Más en **CONTRIBUTING.md** y **CODE\_OF\_CONDUCT.md**.

---

## Marco legal y licencia

* **Material educativo; no constituye asesoramiento financiero.**
* Este repositorio se distribuye bajo **licencia MIT** (ver `LICENSE`).
* Contenido de terceros mantiene sus licencias y atribuciones.

```


