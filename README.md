# **Dominando Blockchain y Finanzas Descentralizadas: De la Teoría al Laboratorio**

<p align="center">
  <a href="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml">
    <img alt="CI Foundry" src="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg">
  </a>
  <a href="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml">
    <img alt="CI Python" src="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg">
  </a>
  <a href="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml">
    <img alt="Markdown Links" src="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/links.yml/badge.svg">
  </a>
  <a href="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/slides.yml">
    <img alt="Slides (Marp)" src="https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/slides.yml/badge.svg?branch=main&event=push">
  </a>
</p>

**Ir directo a una unidad:**  
[U1](unidades/u01-fundamentos-smart-contracts/) ·
[U2](unidades/u02-criptoactivos-consenso-seguridad/) ·
[U3](unidades/u03-iot-ia-metaverso/) ·
[U4](unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/) ·
[U5](unidades/u05-indicadores-trading/) ·
[U6](unidades/u06-python-blockchain-analytics/) ·
[Examen P&R](#finanzas-descentralizadas-preguntas-y-respuestas)

> Vista previa del laboratorio (flujo y funcionamiento de la cadena de bloques).

<img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/assets/blockchain%20.gif" alt="Blockchain - Vista previa del laboratorio" width="900" />

---

¡Bienvenido/a al repositorio central de conocimiento y práctica en **Blockchain**, **DeFi** y **Criptografía aplicada**!

Este espacio fue diseñado como un compendio para estudiantes, profesionales y entusiastas que buscan **dominar fundamentos, protocolos, tooling y aplicaciones financieras**. Desde Bitcoin y Ethereum hasta AMMs, MEV, regulación y *on-chain analytics*, el repo ofrece un camino de aprendizaje **estructurado, práctico y actualizado**.

**Nuestra misión:** Empoderarte con rigor técnico y habilidades prácticas para **construir, auditar, analizar y evaluar** soluciones basadas en blockchain en contextos reales.

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/assets/AMMS.html" target="_blank">
    <img src="https://img.shields.io/badge/ Abrir%20Demo%20AMMs-blueviolet?style=for-the-badge" alt="Abrir Demo AMMs">
  </a>
</p>


---

## 🧭 Índice

- [Visión holística del repositorio](#visión-holística-del-repositorio)
- [Arquitectura del repositorio](#arquitectura-del-repositorio)
- [Puesta en marcha (guía rápida)](#puesta-en-marcha-guía-rápida)
- [Unidades (U1–U6)](#unidades-u1u6)
- [Contratos (carpeta `contracts/`)](#contratos-carpeta-contracts)
- [Fragmentos de código](#fragmentos-de-código)
- [Slides (Marp)](#slides-marp)
- [Arsenal de recursos](#arsenal-de-recursos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Visión holística del repositorio

- **Teoría** curada y actualizada (lecturas primarias, estándares).
- **Práctica** con *labs*, notebooks y proyectos (Solidity + Python).
- **Calidad**: CI para Python/Foundry, verificación de enlaces y *slides* automáticas.
- **Docencia**: cronograma, objetivos por unidad, rúbricas y recursos.

> **Docente responsable:** Dr. Sergio Gevatschnaider · 

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
│  ├─ u01-fundamentos-smart-contracts/            # README.md
│  ├─ u02-criptoactivos-consenso-seguridad/       # README.md
│  ├─ u03-iot-ia-metaverso/                       # README.md
│  ├─ u04-trafi-vs-defi-amms-mev-regulacion/      # README.md
│  ├─ u05-indicadores-trading/                    # README.md
│  └─ u06-python-blockchain-analytics/            # README.md
├─ notebooks/
│  ├─ U01_merkle_tree.ipynb
│  ├─ U02_ecdsa_pow_keccak.ipynb
│  ├─ U03_trazabilidad_ipfs_l2_costos.ipynb
│  ├─ U03_mini_ml_alertas.ipynb
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
│  ├─ src/            # (MyToken.sol · MyNFT.sol · AnchorRegistry.sol)
│  └─ test/           # (MyToken.t.sol · MyNFT.t.sol)
└─ contracts/         # contratos listos para usar/mostrar en clase
````

---

## Puesta en marcha (guía rápida)

### Python (3.10+)

```bash
pip install -r requirements.txt
pytest -q
```

### Solidity + Foundry (forge/anvil/cast)

```bash
# Linux/macOS/WSL
curl -L https://foundry.paradigm.xyz | bash
foundryup

cd solidity
forge fmt
forge test -vvv
anvil   # red local
```

### Notebooks

* **U1** — Árbol de Merkle: `notebooks/U01_merkle_tree.ipynb`
* **U2** — ECDSA + PoW + Keccak: `notebooks/U02_ecdsa_pow_keccak.ipynb`
* **U3** — IPFS + Anchor + Costos + Mini-ML: `notebooks/U03_*`
* **U5** — Indicadores & Trading: `notebooks/U5_indicadores_trading.ipynb`
* **U6** — On-chain Analytics (Web3.py): `notebooks/U6_blockchain_con_python.ipynb`

---

## Unidades (U1–U6)

### [U1 — Fundamentos de Blockchain & Smart Contracts](unidades/u01-fundamentos-smart-contracts/)

`unidades/u01-fundamentos-smart-contracts/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Impacto de nuevas tecnologías en negocios; modelos de negocio basados en blockchain; evolución de smart contracts; comparación entre Bitcoin, Ethereum, Litecoin, Hyperledger y Corda; ventajas y desventajas; perspectivas.
</details>

**Lab:** Árbol de Merkle y prueba de inclusión.
**Notebook:** `notebooks/U01_merkle_tree.ipynb`
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U01_merkle_tree.ipynb)

> **Pista (Python):**

```python
import hashlib

def h(x: bytes) -> bytes:
    return hashlib.sha256(x).digest()

def merkle_parent(a: bytes, b: bytes) -> bytes:
    return h(a + b)

def merkle_root(leaves: list[bytes]) -> bytes:
    level = leaves[:]
    if len(level) % 2 == 1:
        level.append(level[-1])
    while len(level) > 1:
        nxt = []
        for i in range(0, len(level), 2):
            nxt.append(merkle_parent(level[i], level[i+1]))
        if len(nxt) % 2 == 1:
            nxt.append(nxt[-1])
        level = nxt
    return level
```

---

### [U2 — Criptoactivos, Consenso & Ciberseguridad](unidades/u02-criptoactivos-consenso-seguridad/)

`unidades/u02-criptoactivos-consenso-seguridad/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Taxonomía de criptoactivos (coins, stablecoins, tokens, NFT), consenso (PoW/PoS, finality), criptografía aplicada (hash SHA-256/SHA-3, ECDSA secp256k1), ciberseguridad (gestión de claves, Sybil/51%).
</details>

**Lab:** ECDSA (secp256k1) + PoW mínimo + integridad con Keccak/SHA-3
**Notebook:** `notebooks/U02_ecdsa_pow_keccak.ipynb`
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U02_ecdsa_pow_keccak.ipynb)

> **Pista (Python):**

```python
# !pip install ecdsa pysha3
import hashlib, time
from ecdsa import SigningKey, SECP256k1

# ECDSA
sk = SigningKey.generate(curve=SECP256k1)
vk = sk.get_verifying_key()
msg = b"U2 demo"
sig = sk.sign(hashlib.sha3_256(msg).digest())
assert vk.verify(sig, hashlib.sha3_256(msg).digest())

# PoW mínimo con SHA-3
def pow_mini(message: bytes, zeros: int = 3):
    target = "0" * zeros
    nonce = 0
    t0 = time.time()
    while True:
        d = hashlib.sha3_256(message + nonce.to_bytes(8, "big")).hexdigest()
        if d.startswith(target):
            return nonce, d, time.time() - t0
        nonce += 1
```

---

### [U3 — IoT · IA/ML · Metaverso (Casos y Prototipos)](unidades/u03-iot-ia-metaverso/)

`unidades/u03-iot-ia-metaverso/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Trazabilidad con IPFS/on-chain, costos L1/L2 (noción EIP-4844), prototipos de negocio y mini-ML para alertas/anomalías.
</details>

**Labs/Notebooks:**

* `notebooks/U03_trazabilidad_ipfs_l2_costos.ipynb`
* `notebooks/U03_mini_ml_alertas.ipynb`
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U03_trazabilidad_ipfs_l2_costos.ipynb)

---

### [U4 — TraFi vs DeFi (AMMs, MEV, regulación)](unidades/u04-trafi-vs-defi-amms-mev-regulacion/)

`unidades/u04-trafi-vs-defi-amms-mev-regulacion/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
AMMs (Uniswap v3), riesgo de LP, MEV/PBS y panorama regulatorio (MiCA/FATF).
</details>

**Lab:** Simulador de Uniswap v3 (rango, fees, P\&L) + mini-análisis MEV.

---

### [U5 — Indicadores & Trading (cuantitativo)](unidades/u05-indicadores-trading/)

`unidades/u05-indicadores-trading/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Volatilidad realizada, *drawdown*, Sharpe, *backtesting* reproducible; riesgos de apalancamiento y liquidez.
</details>

**Notebook:** `notebooks/U5_indicadores_trading.ipynb` (CCXT OHLCV + *backtest* con métricas)

---

### [U6 — Python para Blockchain & Finanzas (*on-chain analytics*)](unidades/u06-python-blockchain-analytics/)

`unidades/u06-python-blockchain-analytics/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
*Deploy* ERC-20 (Foundry/Anvil), eventos on-chain, KPIs con Web3.py (parseo de `Transfer` y panel de indicadores).
</details>

**Notebook:** `notebooks/U6_blockchain_con_python.ipynb`

---

### [FINANZAS DESCENTRALIZADAS: PREGUNTAS Y RESPUESTAS](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/assets/Examen.html)

`assets/Examen.html`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Cuestionario interactivo con 20 preguntas y respuestas clave para autoevaluar y consolidar el conocimiento sobre Ethereum, DeFi y los fundamentos de la tecnología blockchain.
</details>

**Recurso:** Cuestionario interactivo de autoevaluación.
<a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/assets/Examen.html" target="_blank">
  <img src="https://img.shields.io/badge/%20Abrir%20Cuestionario%20Interactivo-blueviolet?style=for-the-badge" alt="Abrir Cuestionario Interactivo">
</a>

---

## Contratos (carpeta `contracts/`)

Contratos de demostración listos para clase. Se pueden leer en GitHub y, **opcionalmente**, abrir en Remix cargando el **raw** del repo (no accede a tu PC ni a tu sesión).

---

### `Milestonecrowdemo.sol`

[![Ver archivo (raw)](https://img.shields.io/badge/Ver%20archivo-RAW-blue?logo=github)](https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/8ce183666f7ba0fc834d0de866d4d257baa3504a/contracts/Milestonecrowdemo.sol)
[![Abrir en Remix (opcional)](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/8ce183666f7ba0fc834d0de866d4d257baa3504a/contracts/Milestonecrowdemo.sol)

<p align="center">
  <a href="https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/assets/contrato.html" target="_blank">
    <img src="https://img.shields.io/badge/ Abrir%20Demo%20Contrato-blueviolet?style=for-the-badge" alt="Abrir Demo Contrato">
  </a>
</p>


<details>
<summary>Ver en GitHub (HTML, opcional)</summary>

https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/8ce183666f7ba0fc834d0de866d4d257baa3504a/contracts/Milestonecrowdemo.sol
</details>

---

### `MilestoneEscrow_OZDemo.sol`

[![Ver archivo (raw)](https://img.shields.io/badge/Ver%20archivo-RAW-blue?logo=github)](https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)
[![Abrir en Remix (opcional)](https://img.shields.io/badge/Abrir%20en-Remix-orange?logo=ethereum)](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)

<details>
<summary>Ver en GitHub (HTML, opcional)</summary>

https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/contracts/MilestoneEscrow_OZDemo.sol
</details>

---

## Fragmentos de código

**Solidity — ERC-20 mínimo (OpenZeppelin)**

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

**Python — Nodo local (Web3.py)**

```python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))
assert w3.is_connected()
print("OK: nodo conectado")
```

**Python — OHLCV público (CCXT)**

```python
import ccxt
ex = ccxt.binance()
ohlcv = ex.fetch_ohlcv("BTC/USDT", timeframe="1h", limit=10)
print(ohlcv[:2])
```

---

## Slides (Marp)

* Los archivos `slides/**/*.md` se convierten automáticamente a **HTML/PDF** con Marp y se publican como **artefacto** en cada corrida de Actions.
* Si **Pages** está habilitado, también se publican en una URL del repositorio.

**Sitio de slides:** [https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/)
**Estado del workflow:**
[![Slides (Marp)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/slides.yml/badge.svg?branch=main\&event=push)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/slides.yml)

---

## Arsenal de recursos

* **Protocolos / Tooling:** Bitcoin WP · Ethereum Docs (Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi / MEV / AMMs:** Uniswap v3 WP · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada:** FIPS-202 (SHA-3), SP 800-185 (KMAC), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo:** MiCA (UE), FATF (Travel Rule), BIS (estabilidad)

> Lista viva en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

## Contribuciones

¡Proyecto vivo! Contribuciones bienvenidas:

1. Abrí un **issue** (bug/feature/doc).
2. **Fork** → rama `feature/...` o `fix/...` → **Pull Request**.
3. Asegurá **CI verde** (Python/Foundry/Links/Slides).
4. Seguí **CONTRIBUTING.md** y **CODE\_OF\_CONDUCT.md**.

---

## ⚖️ Licencia

* Material educativo; **no** constituye asesoramiento financiero.
* Licencia **MIT** — ver [LICENSE](LICENSE).
* Contenido de terceros mantiene sus licencias y atribuciones.
