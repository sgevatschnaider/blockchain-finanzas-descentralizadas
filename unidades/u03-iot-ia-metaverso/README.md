# U3 — IoT · IA/ML · Metaverso (Casos y Prototipos)

**Material elaborado:** Dr. Sergio Gevatschnaider

> Esta unidad une **trazabilidad** (IoT → IPFS/on-chain), **análisis de costos en L1/L2** (incluido EIP-4844 a nivel conceptual) y **mini-ML** para alertas/insights. El foco está en prototipos aplicados: desde anclar evidencias (hash/CID) hasta estimar costos de publicación y construir un *pipeline* sencillo de detección de anomalías.

---

## 🎯 Objetivos de la unidad

- Diseñar un **flujo de trazabilidad**: dispositivo/sistema → IPFS → *anchor* on-chain.
- Entender **costos y trade-offs** entre L1 y L2 (datos en *call-data*, *blobs*/rollups).
- Construir un **prototipo de anclaje y verificación** (hash/CID, *event logs*).
- Implementar un **mini-ML** (detección de anomalías) sobre datos simulados/IoT.
- Evaluar **riesgos**: privacidad/PII, *key management*, disponibilidad de datos.

---
### Parte I: Fundamentos de Ciberseguridad

| Recurso / Descripción | Enlace Directo |
| :--- | :--- |
| **Teoría: Fundamentos de Ciberseguridad** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Explora los pilares de la seguridad digital: la tríada CIA, la diferencia entre amenaza, vulnerabilidad y riesgo, los principios de Zero Trust, la criptografía esencial (hash, cifrado, firmas), GRC y el ciclo de respuesta a incidentes.</p></details> | [![Abrir Teoría](https://img.shields.io/badge/Leer_Teoría-HTML5-blue?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20I%20%E2%80%94%20Fundamentos%20de%20Ciberseguridad-Teoria.html) |
| **Cuestionario (FAQ): Fundamentos** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Responde a las preguntas más comunes sobre los conceptos básicos de ciberseguridad en un formato interactivo y visual. Cada pregunta incluye un diagrama Mermaid para reforzar el aprendizaje.</p></details> | [![Abrir Cuestionario](https://img.shields.io/badge/Iniciar_FAQ-HTML5-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20I%20%E2%80%94%20Fundamentos%20de%20Ciberseguridad-Cuestionario.html) |
| **Glosario: Fundamentos** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Define de manera visual e interactiva los términos clave de la ciberseguridad fundamental, como `AES-GCM`, `BIA`, `RTO`, `RPO`, `MFA` y `Zero Trust`, entre otros.</p></details> | [![Abrir Glosario](https://img.shields.io/badge/Ver_Glosario-HTML5-purple?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20I-Fundamentos%20de%20Ciberseguridad-Glosario.html) |

---

### Parte II: Tipos y Dominios de Ciberseguridad

| Recurso / Descripción | Enlace Directo |
| :--- | :--- |
| **Teoría: Dominios de Ciberseguridad** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Profundiza en las áreas especializadas de la ciberseguridad moderna: seguridad de redes, endpoints, aplicaciones (DevSecOps), nube (Cloud Security), datos, identidad (IAM/PAM) y sistemas industriales (OT/ICS).</p></details> | [![Abrir Teoría](https://img.shields.io/badge/Leer_Teoría-HTML5-blue?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20II%20%E2%80%94%20Tipos%20de%20Ciberseguridad%E2%80%94Teoria.html) |
| **Cuestionario (FAQ): Avanzado** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Responde preguntas clave sobre dominios avanzados: segmentación de red, diferencias entre WAF y NGFW, ventajas de ZTNA sobre VPN, hardening de endpoints, EDR/XDR, seguridad en CI/CD y el modelo de responsabilidad compartida en la nube.</p></details> | [![Abrir Cuestionario](https://img.shields.io/badge/Iniciar_FAQ-HTML5-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20II%20%E2%80%94%20Tipos%20de%20Ciberseguridad%E2%80%94Cuestionario.html) |
| **Glosario: Avanzado** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Define conceptos profesionales y herramientas específicas de los dominios de ciberseguridad, como `ABAC`, `API Gateway`, `CIEM`, `SBOM` y el ciclo de vida de identidades `JML`.</p></details> | [![Abrir Glosario](https://img.shields.io/badge/Ver_Glosario-HTML5-purple?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Parte%20II%20%E2%80%94%20Tipos%20de%20Ciberseguridad%E2%80%94Glosario.html) |

---

### Anexo: Aplicación Práctica

| Recurso / Descripción | Enlace Directo |
| :--- | :--- |
| **Demo Interactiva: Del Sensor al Smart Contract** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una página interactiva que visualiza la arquitectura completa de un pipeline IoT a Blockchain. Muestra el flujo desde el sensor, pasando por el gateway y el almacenamiento IPFS, hasta la ejecución en un smart contract, con métricas de latencia y costo.</p></details> | [![Abrir Demo](https://img.shields.io/badge/Abrir_Demo-HTML5-green?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u02-criptoactivos-consenso-seguridad/html/Del%20sensor%20al%20smart%20contract.html) |
## 🗺️ Plan de trabajo (visión general)

- **Sección 3 (3 días)**
  - Modelado del flujo de datos (IoT/ERP) hacia **IPFS** y anclaje on-chain.
  - Estimación de **costos** (gas L1, alternativas L2/rollups; noción de blobs EIP-4844).
  - **Prototipo**: contrato mínimo de anclaje + *script* Python (IPFS + Web3.py).
  - **Mini-ML** para alertas (ej.: *z-score*/IsolationForest) y reporte.
  - **Actividad sincrónica obligatoria.**

> **Sugerencia operativa:** 1 sesión sincrónica (3 h) + 3 días de trabajo autónomo (lecturas, laboratorio y reporte).

---

## ⏱️ Agenda sugerida para la sesión sincrónica (3 h)

1) Casos: logística/salud/PropTech/arte digital (30’)  
2) Arquitectura: IPFS, *gateways*, on-chain *anchors*, *event logs* (35’)  
3) Costos L1/L2: gas, *call-data* vs *blobs* (EIP-4844), orden de magnitud (35’)  
4) **Hands-on**: subir a IPFS, anclar hash y verificar (60’)  
5) Mini-ML para alertas + Q&A (20’)

---

## 🧪 Laboratorio principal (propuesto por la cátedra)

**Título:** Trazabilidad con IPFS + *Anchor* on-chain + Costos L1/L2

**Descripción (3 partes):**
1) Subir artefactos (JSON/CSV/imagen) a **IPFS**, obtener **CID** y calcular **hash** local.  
2) Registrar el **hash/CID** en un contrato mínimo (*event* o *mapping*) y **verificar**.  
3) Estimar **costos** para L1 vs L2 según parámetros elegidos (gas, *blob price* conceptual).

**Notebooks sugeridos:**
- `notebooks/U03_trazabilidad_ipfs_l2_costos.ipynb`  
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U03_trazabilidad_ipfs_l2_costos.ipynb)
- `notebooks/U03_mini_ml_alertas.ipynb`  
  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U03_mini_ml_alertas.ipynb)

---

## 🧩 Pistas de implementación

### 1) Python — IPFS + verificación local

> Requiere `ipfshttpclient` con *daemon* local (`ipfs daemon`) **o** usar un servicio (e.g., web3.storage) vía HTTP.  
> Alternativa: `requests` contra un *pinning service* con token.

```python
# !pip install ipfshttpclient hashlib
import ipfshttpclient, hashlib, json, pathlib

# (A) Preparo un documento de ejemplo
doc = {"batch_id": "A-001", "ts": "2025-08-01T12:00:00Z", "sensor": {"t": 4.1, "hum": 74}}
p = pathlib.Path("batch_A001.json")
p.write_text(json.dumps(doc, ensure_ascii=False, indent=2))

# (B) Hash local para integridad (SHA-256 o SHA3-256)
h_local = hashlib.sha256(p.read_bytes()).hexdigest()
print("SHA-256 local:", h_local)

# (C) Subo a IPFS (daemon local corriendo)
with ipfshttpclient.connect() as client:
    res = client.add(p.as_posix())
    cid = res["Hash"]
print("CID:", cid)

# (D) Verificación: bajo por gateway (solo prueba; no dependas de un gateway en producción)
# import requests
# r = requests.get(f"https://ipfs.io/ipfs/{cid}", timeout=20)
# assert hashlib.sha256(r.content).hexdigest() == h_local
````

### 2) Solidity — *Anchor* mínimo de hash/CID

> Contrato sencillo para **emitir** un evento de anclaje y/o **persistir** un hash → timestamp.
> Guardar en `solidity/src/AnchorRegistry.sol` y testear con Foundry/Anvil.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AnchorRegistry {
    event Anchored(bytes32 indexed hash, string cid, address indexed who, uint256 ts);

    mapping(bytes32 => uint256) public firstSeen; // opcional: primer timestamp de anclaje

    function anchor(bytes32 hash, string calldata cid) external {
        if (firstSeen[hash] == 0) {
            firstSeen[hash] = block.timestamp;
        }
        emit Anchored(hash, cid, msg.sender, block.timestamp);
    }
}
```

### 3) Python — *Anchor* vía Web3.py (contra Anvil o proveedor)

```python
# !pip install web3
from web3 import Web3
from eth_account import Account
import os, json, hashlib

# Conexión: nodo local Anvil o provider HTTP
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))
assert w3.is_connected()

# Datos (mismos del paso 1)
payload = pathlib.Path("batch_A001.json").read_bytes()
sha256_local = hashlib.sha256(payload).digest()

# ABI del contrato compilado (pegar ABI generado por Foundry/Remix en producción).
ABI = json.loads("""[
  {"anonymous":false,"inputs":[
    {"indexed":true,"internalType":"bytes32","name":"hash","type":"bytes32"},
    {"indexed":false,"internalType":"string","name":"cid","type":"string"},
    {"indexed":true,"internalType":"address","name":"who","type":"address"},
    {"indexed":false,"internalType":"uint256","name":"ts","type":"uint256"}],
    "name":"Anchored","type":"event"},
  {"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},
             {"internalType":"string","name":"cid","type":"string"}],
   "name":"anchor","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],
   "name":"firstSeen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
   "stateMutability":"view","type":"function"}
]""")

CONTRACT_ADDR = Web3.to_checksum_address("0xYourDeployedContract")  # TODO: reemplazar
contract = w3.eth.contract(address=CONTRACT_ADDR, abi=ABI)

acct = w3.eth.account.from_key(os.environ.get("PRIVATE_KEY_ANVIL") or "0x"+"1"*64)
tx = contract.functions.anchor(sha256_local, "ipfs://"+cid).build_transaction({
    "from": acct.address,
    "nonce": w3.eth.get_transaction_count(acct.address),
    "gas": 150000,
    "maxFeePerGas": w3.to_wei("2", "gwei"),
    "maxPriorityFeePerGas": w3.to_wei("1", "gwei"),
})
signed = acct.sign_transaction(tx)
tx_hash = w3.eth.send_raw_transaction(signed.rawTransaction)
receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
print("Anchored tx:", receipt.transactionHash.hex(), "status:", receipt.status)
```

### 4) Python — Estimador de costos L1/L2 (parámetros manuales)

> Sin precios en vivo: pasá **gas price**, **gas used**, **blob-price** (si aplica) y **ETH/USD**.

```python
def eth_cost_native(gas_used: int, gas_price_gwei: float) -> float:
    return gas_used * gas_price_gwei * 1e-9  # ETH

def usd_cost_native(gas_used: int, gas_price_gwei: float, eth_usd: float) -> float:
    return eth_cost_native(gas_used, gas_price_gwei) * eth_usd

def usd_cost_blob(blob_gas_used: int, blob_price_gwei: float, eth_usd: float) -> float:
    # costo conceptual por "blob gas" (aprox. EIP-4844). Ajustar unidades según su proveedor.
    return blob_gas_used * blob_price_gwei * 1e-9 * eth_usd

# Ejemplo: 60k gas a 5 gwei, ETH=3,000 USD
print("L1 USD aprox:", usd_cost_native(60_000, 5, 3000.0))
# Ejemplo "blob": 1e6 blob-gas a 0.4 gwei
print("Blob USD aprox:", usd_cost_blob(1_000_000, 0.4, 3000.0))
```

### 5) Mini-ML — Detección de anomalías (IoT simulado)

```python
# !pip install scikit-learn pandas numpy
import numpy as np, pandas as pd
from sklearn.ensemble import IsolationForest

rng = np.random.default_rng(7)
n = 500
temp = rng.normal(4.0, 0.5, size=n)             # frío controlado
hum  = rng.normal(75.0, 5.0, size=n)

# inyectamos anomalías
temp[:8] += rng.normal(4.0, 1.5, size=8)
hum[:8]  += rng.normal(20.0, 5.0, size=8)

X = pd.DataFrame({"temp": temp, "hum": hum})
model = IsolationForest(contamination=0.02, random_state=0).fit(X)
X["anomaly"] = (model.predict(X) == -1)

print("Anomalías detectadas:", int(X["anomaly"].sum()))
X[X["anomaly"]].head()
```

---

## 📚 Material de estudio

### Base (ES)

* Bashir, I. *Mastering Blockchain* — almacenamiento, integridad y *data anchoring*.
* Beltrán, M. (coord.). *Blockchain…* — arquitectura y aplicaciones sectoriales.

### Complementaria (EN)

* Narayanan et al. — *data integrity*, PoW y cadenas de custodia.
* *Mastering Ethereum* — Keccak-256, *logs/events*, *gas*.
* Documentación IPFS — *content addressing*, *pinning*, *gateways*.
* Rollups y *data availability* (visión general).

> Bibliografía viva y ampliada en `recursos/bibliografia.md`.

---

## 🧱 Prerrequisitos técnicos

* **Python 3.10+** (`pip install -r requirements.txt`)
  Paquetes recomendados U3: `ipfshttpclient`, `web3`, `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `requests`.
* **Foundry/Anvil** (opcional, para *deploy/test* de `AnchorRegistry.sol`).
* Nodo local o proveedor HTTP (Anvil/Infura/Alchemy) para probar el *anchor*.

---

## ✅ Rúbrica (U3 Lab)

| Criterio        | Descripción                                                           |  Puntos |
| --------------- | --------------------------------------------------------------------- | ------: |
| Integridad      | Subida a IPFS + verificación de hash/CID                              |      25 |
| On-chain anchor | Emisión de *event* y/o almacenamiento con recuperación/consulta       |      25 |
| Costos          | Estimación L1 vs L2 (supuestos claros, tabla/figura, discusión)       |      20 |
| Mini-ML         | Detección de anomalías con breve justificación y salida reproducible  |      15 |
| Claridad        | Código limpio, parametrizado, *README* del lab y *how-to*             |      10 |
| Presentación    | Informe 1–2 págs. con resultados, supuestos, riesgos y próximos pasos |       5 |
| **Total**       |                                                                       | **100** |

**Entrega:** notebooks ejecutados + contrato (si aplica) + informe (MD/PDF) + *assets* (capturas/tablas).

---

## 👥 Organización y normas

* Mantener grupos definidos en U1/U2 (o notificar cambios).
* **Seguridad & privacidad:** no subir PII ni llaves privadas; usar `.env`/variables de entorno; evaluar *pinning* privado.
* Documentar **supuestos** y **límites** (p. ej., dependencia de gateways públicos).

---

## 📎 Recursos de apoyo

* **Contratos:** `solidity/src/AnchorRegistry.sol` (mínimo); tests en `solidity/test`.
* **Plantillas de *pipeline***: `python/src/chain/` y notebooks U3.
* **Herramientas:** IPFS CLI/Daemon, Foundry/Anvil, Web3.py, *pinning services*.

---

### 🔁 Conexión con U2 y U4

* **De U2 → U3:** de integridad (SHA-3/Keccak) y firmas (ECDSA) a **trazabilidad con IPFS** y **anclaje**.
* **Hacia U4:** estos *anchors* y costos informan decisiones en **DeFi/AMMs/MEV** (riesgo, *data availability* y *oracle design*).

```


