> **Material elaborado por el Profesor Sergio Gevatschnaider**


# U3 — IoT / IA / ML + Metaverso: Trazabilidad y Prototipos On-chain

**Propósito:** integrar IoT/IA/ML con blockchain y explorar el **metaverso** como entorno de negocio, construyendo un PoC auditable y una **propuesta de negocio** viable.

---

## Índice
- [Objetivos de aprendizaje](#objetivos)
- [Plan de trabajo (7 días)](#plan)
- [Contenidos](#contenidos)
- [Actividades y labs](#labs)
- [Entregables](#entregables)
- [Riesgos de criptoactivos y mitigación](#riesgos)
- [Rúbrica de evaluación](#rubrica)
- [Prerequisitos y setup](#setup)
- [Snippets de referencia](#snippets)
- [Bibliografía y recursos](#bibliografia)

---

<h2 id="objetivos">Objetivos de aprendizaje</h2>

1. Modelar flujos **IoT → IPFS → Blockchain** con pruebas de integridad (Keccak-256).
2. Diseñar una **propuesta de negocio** en **metaverso** basada en blockchain.
3. Usar **herramientas colaborativas** (Google Workspace, Trello, Miro) para planificar y presentar.
4. Identificar **riesgos digitales** de criptoactivos e incluir **acciones de mitigación**.

---

<h2 id="plan">Plan de trabajo (7 días)</h2>

| Día | Tema | Actividad | Producto |
|---|---|---|---|
| 1 | Integración Blockchain + IoT/IA/ML | **Foro Debate** (visión, casos) | Post en el foro con insights |
| 2 | Metaverso y Blockchain | **Foro de Consultas** (técnicas/dudas) | Q&A respondidas |
| 3 | Arquitectura PoE (IPFS + on-chain) | **Lab A**: hash + anclaje | PoC mínimo funcionando |
| 4 | Costos L1/L2 y disponibilidad de datos | **Lab B**: análisis técnico-económico | Tabla sensibilidad + comentario |
| 5 | Trabajo grupal | **Sprint colaborativo** (Workspace/Trello/Miro) | Tablero y borrador de pitch |
| 6 | Propuesta de negocio en metaverso | **Prototipo y pitch deck** | README_caso + slides |
| 7 | Riesgos & mitigación | **Checklist + medidas** | Sección de riesgos en README_caso |

> Foros: usar **GitHub Discussions** o el aula virtual (canales “Debate U3” y “Consultas U3”).

---

<h2 id="contenidos">Contenidos</h2>

- Modelos de evidencia (*hash-first* / *data-first*), **IPFS**, CIDs, pinning, gateways.
- Patrón **Proof-of-Existence** on-chain y eventos de auditoría.
- Métrica de coste: `gasUsed × gasPrice` → USD. L1 vs L2 (tiempo, fees, disponibilidad de datos).
- Metaverso: **espacios, activos, interacción, monetización**.

---

<h2 id="labs">Actividades y labs</h2>

### Lab A — Anclaje de evidencias (IPFS + PoE)
- Subí un archivo a IPFS, calculá **Keccak-256**, anclá en `ProofOfExistence`.
- Evidencia: captura del CID, hash y tx de anclaje (Remix JS VM o anvil).

### Lab B — Análisis económico de costos
- Script `costo_tx_usd(gas_used, gas_price_gwei, eth_usd)`.
- Tabla de sensibilidad: `gas_price = {3,10,30} gwei`, `eth = {2k,3k,4k} USD`.
- Conclusión escrita (trade-offs seguridad/latencia/costo).

### Actividad grupal — Propuesta de negocio en metaverso
- Elegir un metaverso (p. ej., **The Sandbox**, **Decentraland**) y armar **MVP**.
- Entregar pitch de 6–8 láminas (problema, solución, token/activo, flujo de valor, riesgos).

---

<h2 id="entregables">Entregables</h2>

1. **Carpeta** `u03-iot-ia-metaverso/`:
   - `poe/ProofOfExistence.sol` y `test/ProofOfExistence.t.sol`
   - `scripts/hash_demo.py` y `scripts/costo_gas.py`
2. **README_caso.md** (2–3 págs) con diagrama, supuestos, métricas, **riesgos y mitigación**.
3. **Pitch deck** breve (PDF o enlace) y tablero de Trello/Miro (URL).

---

<h2 id="riesgos">Riesgos de criptoactivos y mitigación</h2>

- **Custodia/llaves**: uso de wallets con `allowances` acotados; políticas de backup y revocación.
- **Volatilidad y liquidez**: límites de exposición; *stablecoin policy*; oráculos redundantes.
- **Cumplimiento y PII**: separar datos personales (off-chain); mínimos datos on-chain; consentimiento.
- **Operativo**: *rate limits*, caídas de gateway IPFS; fallback multi-gateway y *pinning* redundante.
- **Seguridad de contrato**: evitar reentrancy/overflow; tests y revisión de eventos/auditoría.

---

<h2 id="rubrica">Rúbrica de evaluación</h2>

- **PoE funcional (contrato + test)**: 35%  
- **Análisis de costos (modelo + tabla + argumentos)**: 35%  
- **Calidad técnica (código, estructura, naming, doc)**: 20%  
- **Presentación/defensa (claridad, riesgos, límites)**: 10%

---

<h2 id="setup">Prerequisitos y setup</h2>

- Haber completado U1 y U2; **Foundry** (`forge`, `anvil`) y **Python 3.10+**.
```bash
forge fmt && forge test -vvv
anvil   # red local
python scripts/hash_demo.py
python scripts/costo_gas.py
````

---

<h2 id="snippets">Snippets de referencia</h2>

**Solidity — Proof of Existence**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ProofOfExistence {
    mapping(bytes32 => address) public submittedBy;
    mapping(bytes32 => uint256) public submittedAt;
    event Anchored(bytes32 indexed hash, address indexed by, uint256 at);

    function anchor(bytes32 hash) external {
        require(submittedAt[hash] == 0, "already anchored");
        submittedBy[hash] = msg.sender;
        submittedAt[hash] = block.timestamp;
        emit Anchored(hash, msg.sender, block.timestamp);
    }

    function verify(bytes32 hash) external view returns (bool ok, address by, uint256 at) {
        at = submittedAt[hash];
        by = submittedBy[hash];
        ok = (at != 0);
    }
}
```

**Python — Keccak-256 de un archivo**

```python
# scripts/hash_demo.py
from eth_utils import keccak
def keccak256_file(path: str) -> str:
    with open(path, "rb") as f:
        data = f.read()
    return "0x" + keccak(data).hex()
if __name__ == "__main__":
    print(keccak256_file("mi_archivo.pdf"))
```

**Python — Estimador de costos**

```python
# scripts/costo_gas.py
def costo_tx_usd(gas_used: int, gas_price_gwei: float, eth_usd: float) -> float:
    return gas_used * (gas_price_gwei * 1e-9) * eth_usd
```

---

<h2 id="bibliografia">Bibliografía y recursos</h2>

* **Bashir, I. (2018). *Mastering Blockchain*.**
* **Beltrán, M. et al. (2021). *Blockchain: El modelo descentralizado hacia la economía digital*.**
* **Meta — ¿Qué es el metaverso?** [https://about.meta.com/what-is-the-metaverse/](https://about.meta.com/what-is-the-metaverse/)
* **The Sandbox** [https://www.sandbox.game/es/](https://www.sandbox.game/es/)

> Recursos técnicos adicionales en el README general del curso (IPFS, Ethereum docs, Foundry, Web3.py).

```


