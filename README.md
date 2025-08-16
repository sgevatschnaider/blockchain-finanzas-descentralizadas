# 🧭 **Dominando Blockchain y Finanzas Descentralizadas**  
### _De la Teoría al Laboratorio_

---
**Blockchain · DeFi · Criptografía aplicada · Trading cuantitativo · On-chain analytics**

[![CI Foundry](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml)
[![CI Python](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml)
[![Links](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml/badge.svg?branch=main)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)

</div>

> **Misión:** Empoderarte con rigor técnico y habilidades prácticas para **construir, auditar, analizar y evaluar** soluciones blockchain en contextos reales de negocio y finanzas.

> **Docente responsable:** Dr. Sergio Gevatschnaider · **Cursada:** Ago–Oct 2025 · **Modalidad:** Remota + Híbrida (Sede Zabala)

---

## 🔎 Vista rápida

- 📚 **Fundamentos & Smart Contracts** (Solidity/Foundry)  
- 💱 **DeFi**: AMMs (Uniswap v3), riesgo de LP, MEV/PBS, regulación MiCA/FATF  
- 📈 **Trading cuantitativo**: métricas, *backtesting* reproducible  
- 🔗 **On-chain analytics** (Web3.py) + eventos `Transfer`  
- 🧪 **Labs** y *notebooks* listos para ejecutar (Python 3.10+, Foundry)

---

## 🖼️ Demo del laboratorio

> GIF demostrativo del flujo y funcionamiento de la cadena de bloques en el laboratorio.

<img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/assets/blockchain%20.gif" alt="Blockchain GIF de vista previa del laboratorio" width="900">


---

## 🗂️ Índice

- [Arquitectura del repositorio](#-arquitectura-del-repositorio)
- [Integración continua (CI)](#-integración-continua-ci)
- [Puesta en marcha (Guía rápida)](#-puesta-en-marcha-guía-rápida)
- [Unidades (Estructura temática)](#-unidades-estructura-temática)
- [Contratos listos para Remix](#-contratos-listos-para-remix)
- [Snippets ilustrativos](#-snippets-ilustrativos)
- [Recursos clave](#-recursos-clave)
- [Aprendizaje autónomo](#-aprendizaje-autónomo)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

---

## 🧱 Arquitectura del repositorio

<details>
<summary><strong>Ver estructura</strong></summary>

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

</details>

---

## 🤖 Integración continua (CI)

* `.github/workflows/ci-python.yml` — Ejecuta **pytest** para el paquete `python/`.
* `.github/workflows/ci-foundry.yml` — `forge fmt --check && forge test` en `solidity/`.
* `.github/workflows/links.yml` — Verificación de enlaces Markdown en todo el repo.

---

## 🚀 Puesta en marcha (Guía rápida)

> Si recién llegás, comenzá por el **[cronograma](cronograma/cronograma.md)** y luego abrí la **Unidad 1**.

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
anvil  # red local para pruebas
```

### 3) Notebooks (Colab/Local)

* **U5 — Indicadores & Trading:** `notebooks/U5_indicadores_trading.ipynb`
* **U6 — On-chain Analytics (Web3.py):** `notebooks/U6_blockchain_con_python.ipynb`

---

## 🧩 Unidades (Estructura temática)

Cada unidad incluye **objetivos**, **lab principal**, **lecturas (EN)** y **rúbrica**.

### U1 — Fundamentos & Smart Contracts

`unidades/unidad-01/README.md`

<details><summary><strong>Resumen</strong></summary>
Conceptos esenciales de blockchain, impacto en negocios, evolución de smart contracts. Comparativa de plataformas (Bitcoin, Ethereum, Hyperledger, Corda).
</details>

**Lab:** Árbol de Merkle y prueba de inclusión.

---

### U2 — Criptoactivos, Consenso & Ciberseguridad

`unidades/unidad-02/README.md`

<details><summary><strong>Resumen</strong></summary>
Clasificación de criptoactivos (coins, stablecoins, tokens, NFT), mecanismos de consenso (PoW/PoS), primitivas criptográficas (hash, firmas, AEAD).
</details>

**Lab:** ECDSA (secp256k1) · PoW mínimo · Integridad con Keccak/SHA-3.

---

### U3 — IoT/IA/ML + Metaverso (casos)

`unidades/unidad-03/README.md`

<details><summary><strong>Resumen</strong></summary>
Trazabilidad con IPFS/on-chain, costos L1/L2 (EIP-4844), prototipos de negocio y mini-ML para alertas.
</details>

**Lab:** Anclaje y verificación · Análisis técnico-económico de gas/costos.

---

### U4 — TraFi vs DeFi (AMMs, MEV, regulación)

`unidades/unidad-04/README.md`

<details><summary><strong>Resumen</strong></summary>
AMMs (Uniswap v3), riesgo de LP, MEV/PBS y panorama regulatorio (MiCA/FATF).
</details>

**Lab:** Simulador Uniswap v3 (rango, fees, P\&L) · Mini-análisis MEV.

---

### U5 — Indicadores & Trading (cuantitativo)

`unidades/unidad-05/README.md`

<details><summary><strong>Resumen</strong></summary>
Volatilidad realizada, drawdown, Sharpe, backtesting reproducible; riesgos de apalancamiento y liquidez.
</details>

**Notebook:** `notebooks/U5_indicadores_trading.ipynb` (+ *Implied vol* opcional).

---

### U6 — Python para Blockchain & Finanzas (*on-chain analytics*)

`unidades/unidad-06/README.md`

<details><summary><strong>Resumen</strong></summary>
Deploy ERC-20 (Foundry/Anvil), eventos on-chain, KPIs con Web3.py.
</details>

**Notebook:** `notebooks/U6_blockchain_con_python.ipynb` (parseo de `Transfer` y KPIs).

---

## 🧾 Contratos listos para Remix

> Ejecutá en **Remix** con **JavaScript VM (London)** — gratis, sin MetaMask ni ETH real.

### 📄 `Milestonecrowdemo.sol`

[![Ver en GitHub](https://img.shields.io/badge/Ver%20archivo-GitHub-blue?logo=github)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/contracts/Milestonecrowdemo.sol)
[![Abrir en Remix](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/Milestonecrowdemo.sol)

<sub>📂 Ruta: `contracts/Milestonecrowdemo.sol` · El botón de Remix carga el contrato desde el raw de GitHub.</sub>

---

### 📄 `MilestoneEscrow_OZDemo.sol`

[![Ver en GitHub](https://img.shields.io/badge/Ver%20archivo-GitHub-blue?logo=github)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/contracts/MilestoneEscrow_OZDemo.sol)
[![Abrir en Remix](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)

<details>
<summary>🧪 Guía rápida (JS VM)</summary>

1. Abrí el enlace en **Remix**

2. **Solidity Compiler** → `0.8.24` (o `^0.8.24`) → **Compile**

3. **Deploy & Run** → **Environment:** JavaScript VM (London)

4. Despliegue:

   * `MockToken`
   * `MockOracle`
   * `MilestoneEscrow(seller, stablecoin, oracle)`

   Parámetros:

   * `seller`: otra cuenta del dropdown
   * `stablecoin`: address del `MockToken`
   * `oracle`: address del `MockOracle`

5. **Flujo demo**

   * Cuenta **buyer**:
     `MockToken.approve(escrow, 1000e18)` → `MilestoneEscrow.fund()`
   * Cambiá a cuenta **oracle**:
     `MockOracle.setAuthorized(oracleAddr, true)` → `MilestoneEscrow.markMilestone(0)`
   * Verificá: `contractBalance()` y `MockToken.balanceOf(seller)`

</details>

<details>
<summary>🛡️ Notas de seguridad</summary>

* `SafeERC20` maneja tokens que no devuelven `bool`.
* `ReentrancyGuard` protege `fund()` y `markMilestone()`.
* Eventos (`Funded`, `MilestoneMarked`) y `immutable` para trazabilidad.
* Penalidad por *deadline* si el hito se marca fuera de tiempo.

</details>

---

## 🧩 Snippets ilustrativos

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

### Python — Conexión a nodo local (*healthcheck*)

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

## 📚 Recursos clave

* **Protocolos & tooling:** Bitcoin WP · Ethereum docs (Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi/MEV/AMMs:** Uniswap v3 whitepaper · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada:** NIST FIPS-202 (SHA-3), SP 800-185 (KMAC/cSHAKE), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo:** MiCA (UE), FATF (VASPs/Travel Rule), BIS (estabilidad)

> Lista completa en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

## 🧠 Aprendizaje autónomo

* Reforzá **hash, firmas, EVM, AMMs** antes de optimizar.
* **Laboratorio primero**, lectura después para consolidar.
* Medí **riesgo**: volatilidad, drawdown, slippage.
* **Seguridad**: no subas claves; evita reentrancy/overflow; escribí tests.
* **Lectura primaria** > resúmenes.
* **Ética & cumplimiento**: docencia ≠ asesoramiento financiero.

---

## 🤝 Contribuciones

1. Abrí un **issue** con tu propuesta (bug/feature/doc)
2. **Fork** → rama `feature/...` o `fix/...` → **Pull Request**
3. CI en **verde** (Python/Foundry/Links)

Más en `CONTRIBUTING.md` y `CODE_OF_CONDUCT.md`.

---

## ⚖️ Licencia

* Material educativo; **no** constituye asesoramiento financiero.
* Licencia **MIT** (ver `LICENSE`).
* Contenido de terceros mantiene sus licencias y atribuciones.

<br>

<p align="center"><a href="#readme">⬆️ Volver arriba</a></p>
```
