# 🧭 **Dominando Blockchain y Finanzas Descentralizadas**  
### _De la Teoría al Laboratorio_

**Blockchain · DeFi · Criptografía aplicada · Trading cuantitativo · On-chain analytics**

[![CI Foundry](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg?branch=main)](../../actions/workflows/ci-foundry.yml)
[![CI Python](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg?branch=main)](../../actions/workflows/ci-python.yml)
[![Links](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml/badge.svg?branch=main)](../../actions/workflows/links.yml)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)

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

<img src="assets/blockchain%20.gif" alt="Blockchain GIF de vista previa del laboratorio" width="900">

---

## Índice

- [Arquitectura del repositorio](#arquitectura)
- [Integración continua (CI)](#ci)
- [Puesta en marcha (Guía rápida)](#guia-rapida)
- [Unidades (Estructura temática)](#unidades)
- [Contratos listos para Remix](#remix)
- [Snippets ilustrativos](#snippets)
- [Recursos clave](#recursos)
- [Aprendizaje autónomo](#aprendizaje)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

<h2 id="arquitectura">Arquitectura del repositorio</h2>

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
│  ├─ u01-fundamentos-smart-contracts/README.md
│  ├─ u02-criptoactivos-consenso-seguridad/README.md
│  ├─ u03-iot-ia-metaverso/README.md
│  ├─ u04-trafi-vs-defi-amms-mev-regulacion/README.md
│  ├─ u05-indicadores-trading/README.md
│  └─ u06-python-blockchain-analytics/README.md
├─ notebooks/
│  ├─ U01_merkle_tree.ipynb
│  ├─ U02_ecdsa_pow_keccak.ipynb
│  ├─ U05_indicadores_trading.ipynb
│  └─ U06_blockchain_con_python.ipynb
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

<h2 id="ci">Integración continua (CI)</h2>

* `.github/workflows/ci-python.yml` — Ejecuta **pytest** para `python/`.
* `.github/workflows/ci-foundry.yml` — `forge fmt --check && forge test` en `solidity/`.
* `.github/workflows/links.yml` — Verificación de enlaces Markdown en todo el repo.

---

<h2 id="guia-rapida">🗃️ Puesta en marcha (Guía rápida)</h2>

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

* **U1 — Merkle Tree:** `notebooks/U01_merkle_tree.ipynb`
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U01_merkle_tree.ipynb)
* **U2 — ECDSA + PoW + Keccak:** `notebooks/U02_ecdsa_pow_keccak.ipynb`
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U02_ecdsa_pow_keccak.ipynb)
* **U5 — Indicadores & Trading:** `notebooks/U05_indicadores_trading.ipynb`
* **U6 — On-chain Analytics (Web3.py):** `notebooks/U06_blockchain_con_python.ipynb`

---

<h2 id="unidades">🧩 Unidades (Estructura temática)</h2>

Cada unidad incluye **objetivos**, **lab principal**, **lecturas (EN)** y **rúbrica**.

### U1 — Fundamentos & Smart Contracts

[Ver unidad](unidades/u01-fundamentos-smart-contracts/README.md) · **Lab:** Árbol de Merkle y prueba de inclusión.

---

### U2 — Criptoactivos, Consenso & Ciberseguridad

[Ver unidad](unidades/u02-criptoactivos-consenso-seguridad/README.md) · **Lab:** ECDSA (secp256k1) · PoW mínimo · Keccak/SHA-3.

---

### U3 — IoT/IA/ML + Metaverso (casos)

[Ver unidad](unidades/u03-iot-ia-metaverso/README.md) · **Lab:** Anclaje/verificación · análisis de gas/costos.

---

### U4 — TraFi vs DeFi (AMMs, MEV, regulación)

[Ver unidad](unidades/u04-trafi-vs-defi-amms-mev-regulacion/README.md) · **Lab:** Simulador Uniswap v3 (rango, fees, P\&L) · Mini-MEV.

---

### U5 — Indicadores & Trading (cuantitativo)

[Ver unidad](unidades/u05-indicadores-trading/README.md) · **Notebook:** `notebooks/U05_indicadores_trading.ipynb`.

---

### U6 — Python para Blockchain & Finanzas (*on-chain analytics*)

[Ver unidad](unidades/u06-python-blockchain-analytics/README.md) · **Notebook:** `notebooks/U06_blockchain_con_python.ipynb`.

---

<h2 id="remix">🧾 Contratos listos para Remix</h2>

> Ejecutá en **Remix** con **JavaScript VM (London)** — gratis, sin MetaMask ni ETH real.

### 📄 `Milestonecrowdemo.sol`

[![Ver en GitHub](https://img.shields.io/badge/Ver%20archivo-GitHub-blue?logo=github)](contracts/Milestonecrowdemo.sol)
[![Abrir en Remix](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/Milestonecrowdemo.sol) <sub>📂 Ruta: `contracts/Milestonecrowdemo.sol` · El botón de Remix carga el contrato desde el raw de GitHub.</sub>

---

### 📄 `MilestoneEscrow_OZDemo.sol`

[![Ver en GitHub](https://img.shields.io/badge/Ver%20archivo-GitHub-blue?logo=github)](contracts/MilestoneEscrow_OZDemo.sol)
[![Abrir en Remix](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)

<details>
<summary>🧪 Guía rápida (JS VM)</summary>

1. Abrí el enlace en **Remix**
2. **Solidity Compiler** → `0.8.24` (o `^0.8.24`) → **Compile**
3. **Deploy & Run** → **Environment:** **JavaScript VM (London)**
4. Despliegue:

   * `MockToken`
   * `MockOracle`
   * `MilestoneEscrow(seller, stablecoin, oracle)`
5. Flujo demo:

   * Cuenta **buyer**: `MockToken.approve(escrow, 1000e18)` → `MilestoneEscrow.fund()`
   * Cuenta **oracle**: `MockOracle.setAuthorized(oracleAddr, true)` → `MilestoneEscrow.markMilestone(0)`
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

<h2 id="snippets">🧩 Snippets ilustrativos</h2>

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

<h2 id="recursos">📚 Recursos clave</h2>

* **Protocolos & tooling:** Bitcoin WP · Ethereum docs (Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi/MEV/AMMs:** Uniswap v3 whitepaper · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada:** NIST FIPS-202 (SHA-3), SP 800-185 (KMAC/cSHAKE), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo:** MiCA (UE), FATF (VASPs/Travel Rule), BIS (estabilidad)

> Lista completa en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

<h2 id="aprendizaje">🕮 Aprendizaje autónomo</h2>

* Reforzá **hash, firmas, EVM, AMMs** antes de optimizar.
* **Laboratorio primero**, lectura después para consolidar.
* Medí **riesgo**: volatilidad, drawdown, slippage.
* **Seguridad**: no subas claves; evitá reentrancy/overflow; escribí tests.
* **Lectura primaria** > resúmenes.
* **Ética & cumplimiento**: docencia ≠ asesoramiento financiero.

---

<h2 id="contribuciones">🤝 Contribuciones</h2>

1. Abrí un **issue** con tu propuesta (bug/feature/doc)
2. **Fork** → rama `feature/...` o `fix/...` → **Pull Request**
3. CI en **verde** (Python/Foundry/Links)

Más en `CONTRIBUTING.md` y `CODE_OF_CONDUCT.md`.

---

<h2 id="licencia">⚖️ Licencia</h2>

* Material educativo; **no** constituye asesoramiento financiero.
* Licencia **MIT** (ver `LICENSE`).
* Contenido de terceros mantiene sus licencias y atribuciones.

<br>

<p align="center"><a href="#readme">⬆️ Volver arriba</a></p>


