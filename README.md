
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

* [Visión Holística del Repositorio](#visión-holística-del-repositorio)
* [Arquitectura del Repositorio](#arquitectura-del-repositorio)
* [Puesta en Marcha: Guía de Inicio Rápido](#puesta-en-marcha-guía-de-inicio-rápido)
* [Estructura Temática Detallada y Acceso a Módulos](#estructura-temática-detallada-y-acceso-a-módulos)
* [Contratos (carpeta `contracts/`)](#contratos-carpeta-contracts)
* [Fragmentos de Código Ilustrativos](#fragmentos-de-código-ilustrativos)
* [Arsenal de Recursos (Docs, Papers, Herramientas)](#arsenal-de-recursos-docs-papers-herramientas)
* [Directrices para el Aprendizaje Autónomo](#directrices-para-el-aprendizaje-autónomo)
* [Contribuciones y Comunidad](#contribuciones-y-comunidad)
* [Marco Legal y Licencia](#marco-legal-y-licencia)

---

## Visión Holística del Repositorio

Este repo es el **punto de entrada único** para todo el material de la cátedra:

- **Teoría** curada y actualizada (lecturas primarias, estándares criptográficos).
- **Práctica** con *labs*, notebooks y proyectos guiados (Solidity + Python).
- **Calidad**: CI para Python y Foundry, verificación de enlaces, estructura modular.
- **Docencia**: cronograma, objetivos por módulo, rúbricas y recursos.

> **Docente responsable:** Dr. Sergio Gevatschnaider · **Cursada:** Ago–Oct 2025 · Modalidad: Remota + Híbrida

---

## Arquitectura del Repositorio

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

## Puesta en Marcha: Guía de Inicio Rápido

1. **Clonar y entrar al proyecto**

```bash
git clone https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas.git
cd blockchain-finanzas-descentralizadas
```

2. **Python (3.10+)**

```bash
pip install -r requirements.txt
pytest -q
```

3. **Solidity + Foundry (forge / anvil / cast)**

```bash
# Linux/macOS/WSL
curl -L https://foundry.paradigm.xyz | bash
foundryup

cd solidity
forge fmt
forge test -vvv
anvil   # levanta red local para pruebas
```

4. **Notebooks (Colab/Local)**

* **Indicadores & Trading:** `notebooks/U5_indicadores_trading.ipynb`
* **On-chain Analytics (Web3.py):** `notebooks/U6_blockchain_con_python.ipynb`

---

## Estructura Temática Detallada y Acceso a Módulos

Cada módulo incluye **objetivos**, **lab principal**, **lecturas (EN)** y **rúbrica**.

### **Módulo 00: Fundamentos y Herramientas**

Material base para seguir el curso (entorno Python, Foundry y *tooling*).

* Entorno Python: `requirements.txt`
* Entorno Foundry: `solidity/foundry.toml`
* Introducción *on-chain* con Python: `python/src/chain/erc20_events.py`

---

### **Módulo 01: Introducción a Blockchain & Smart Contracts**

`unidades/unidad-01/README.md`

<details><summary><strong>Resumen (clic para expandir)</strong></summary>
Conceptos esenciales de blockchain, impacto en negocios, evolución de contratos inteligentes. Comparativa de plataformas (Bitcoin, Ethereum, Hyperledger, Corda).
</details>  
**Lab:** Árbol de Merkle y prueba de inclusión.

---

### **Módulo 02: Criptoactivos, Consenso & Ciberseguridad**

`unidades/unidad-02/README.md`

<details><summary><strong>Resumen</strong></summary>
Clasificación de criptoactivos (coins, stablecoins, tokens, NFT), mecanismos de consenso (PoW/PoS), primitivas criptográficas (hash, firmas, AEAD).
</details>  
**Lab:** ECDSA (secp256k1) + PoW mínimo + integridad con Keccak/SHA-3.

---

### **Módulo 03: IoT/IA/ML + Metaverso (casos)**

`unidades/unidad-03/README.md`

<details><summary><strong>Resumen</strong></summary>
Trazabilidad con IPFS/on-chain, costos L1/L2 (EIP-4844), prototipos de negocio y mini-ML para alertas.
</details>  
**Lab:** Anclaje y verificación; análisis técnico-económico de gas/costos.

---

### **Módulo 04: TraFi vs DeFi (AMMs, MEV, regulación)**

`unidades/unidad-04/README.md`

<details><summary><strong>Resumen</strong></summary>
AMMs (Uniswap v3), riesgo de LP, MEV/PBS y panorama regulatorio (MiCA/FATF).
</details>  
**Lab:** Simulador de Uniswap v3 (rango, fees, P&L) + mini-análisis MEV.

---

### **Módulo 05: Indicadores & Trading (cuantitativo)**

`unidades/unidad-05/README.md`

<details><summary><strong>Resumen</strong></summary>
Volatilidad realizada, *drawdown*, Sharpe, *backtesting* reproducible; riesgos de apalancamiento y liquidez.
</details>  
**Notebook:** `notebooks/U5_indicadores_trading.ipynb`

---

### **Módulo 06: Python para Blockchain & Finanzas (on-chain analytics)**

`unidades/unidad-06/README.md`

<details><summary><strong>Resumen</strong></summary>
*Deploy* ERC-20 (Foundry/Anvil), eventos *on-chain*, KPIs con Web3.py.
</details>  
**Notebook:** `notebooks/U6_blockchain_con_python.ipynb`  
**Lab:** Parseo de eventos `Transfer` y panel de KPIs.

---

## Contratos (carpeta `contracts/`)

Contratos de demostración listos para usar en clase. Todo se prueba **gratis** en **Remix** con **JavaScript VM** (sin MetaMask ni ETH real).

**📄 Principal:** `contracts/MilestoneEscrow_OZDemo.sol`
Escrow por hitos con:

* `SafeERC20` (OpenZeppelin) para transferencias seguras
* `ReentrancyGuard` para evitar reentrancia
* `MockToken` (ERC20 de prueba)
* `MockOracle` (autoriza quién puede marcar hitos)

**▶️ Abrir en Remix (1 clic)**
`MilestoneEscrow_OZDemo.sol`
[https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow\_OZDemo.sol](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/contracts/MilestoneEscrow_OZDemo.sol)

> Si el enlace devuelve **404**, revisá el nombre exacto del archivo en `contracts/` y actualizá la URL.

**🚀 Guía rápida (JS VM – GRATIS)**

1. Abrí el enlace en **Remix**.
2. **Solidity Compiler** → versión **0.8.24** (o **0.8.30**, compatible con `^0.8.24`) → **Compile**.
3. **Deploy & Run** → **Environment:** *JavaScript VM (London)*.
4. Desplegá: `MockToken` → `MockOracle` → `MilestoneEscrow(seller, stablecoin, oracle)`

   * `seller`: otra cuenta del dropdown
   * `stablecoin`: address de `MockToken`
   * `oracle`: address de `MockOracle`
5. **Flujo de demo:**

   * Cuenta **buyer**: `MockToken.approve(escrow, 1000e18)` → `MilestoneEscrow.fund()`
   * Cuenta **oracle**: `MockOracle.setAuthorized(oracleAddr, true)` → `MilestoneEscrow.markMilestone(0)`
   * Verificá: `contractBalance()` y `MockToken.balanceOf(seller)`.

**🛡️ Notas de seguridad**

* `SafeERC20` maneja tokens que no devuelven `bool`.
* `ReentrancyGuard` protege `fund()` y `markMilestone()`.
* Variables `immutable` y eventos (`Funded`, `MilestoneMarked`) para trazabilidad.
* Penalidad por *deadline* si el hito se marca fuera de tiempo.

---

## Fragmentos de Código Ilustrativos

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

## Arsenal de Recursos (Docs, Papers, Herramientas)

* **Protocolos y tooling:** Bitcoin WP · Ethereum docs (roadmap: Dencun/EIP-4844) · Solidity 0.8.x · OpenZeppelin · Foundry Book · Web3.py 7.x · CCXT
* **DeFi/MEV/AMMs:** Uniswap v3 whitepaper · Flashbots (MEV-Boost/PBS) · EigenLayer (restaking)
* **Criptografía aplicada:** NIST FIPS-202 (SHA-3), SP 800-185 (KMAC/cSHAKE), RFC 8032 (EdDSA), RFC 8439 (ChaCha20-Poly1305), SEC-1 (ECC)
* **Regulación & riesgo:** MiCA (UE), FATF (VASPs/Travel Rule), BIS (estabilidad)

> Lista completa y viva en `recursos/bibliografia.md` y `recursos/enlaces-utiles.md`.

---

## Directrices para el Aprendizaje Autónomo

* **Fundamentos sólidos:** repasá hash, firmas, EVM y modelos AMM.
* **Laboratorio primero:** ejecutá los labs; leé luego para consolidar.
* **Pensamiento cuantitativo:** medí riesgo (volatilidad, *drawdown*, *slippage*).
* **Seguridad:** no subas claves; evitá reentrancy/overflow; escribí tests.
* **Lectura primaria:** preferí *whitepapers*/estándares antes que resúmenes.
* **Ética & cumplimiento:** distinguí docencia de asesoramiento financiero.

---

## Contribuciones y Comunidad

Este es un proyecto vivo. ¡Tus contribuciones son bienvenidas!

1. **Issues:** reportá bugs y proponé mejoras.
2. **Pull Requests:**

   * Hacé *Fork*
   * Rama `feature/...` o `fix/...`
   * Asegurá CI verde (Python/Foundry/Links)
   * Documentá el cambio en el PR
3. Leé **CONTRIBUTING.md** y **CODE\_OF\_CONDUCT.md** antes de contribuir.

---

## Marco Legal y Licencia

Este proyecto se distribuye bajo **Licencia MIT** (ver `LICENSE`).
El material es educativo y **no** constituye asesoramiento financiero.
Contenido de terceros mantiene sus licencias y atribuciones originales.

```

