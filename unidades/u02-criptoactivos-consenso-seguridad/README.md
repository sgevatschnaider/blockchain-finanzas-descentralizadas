# U2 — Criptoactivos, Consenso & Ciberseguridad

**Material elaborado:** Dr. Sergio Gevatschnaider

> En esta unidad profundizamos en la **clasificación de criptoactivos** (coins, stablecoins, tokens, NFTs), los **mecanismos de consenso** (PoW / PoS) y las **primitivas de criptografía** indispensables (hash, firmas digitales, AEAD). Cerramos con un **laboratorio práctico**: ECDSA (secp256k1), PoW mínimo y **Keccak-256** para asegurar integridad.

<p align="center">
  <img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/assets/blockchain%20.gif" alt="Blockchain Lab GIF" width="820">
</p>

[⬅️ Volver a Unidades](..)

---

## 🎯 Objetivos de la unidad

- Comprender el mapa de **criptoactivos** y sus propiedades económicas/técnicas.
- Entender el rol de **consenso** (PoW/PoS) y su impacto en seguridad y costos.
- Repasar **hashes**, **firmas ECDSA** y **autenticidad/integridad** de mensajes.
- Ejecutar un **lab guiado**: firma/validación con ECDSA (secp256k1), hash con **Keccak-256**, y **PoW mínimo**.

---
📄 Recurso	📥 Acceso
HTML: Teoría General de Criptoactivos <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Análisis exhaustivo sobre la definición, taxonomía y ciclo de vida de los criptoactivos. Cubre desde activos nativos y NFTs hasta estándares de infraestructura como ERC-4337.</p></details>	
HTML: Monederos con vs. Sin Custodia <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Comparación visual y técnica between custodial (exchanges) and non-custodial wallets (MetaMask, Ledger), explaining the dilemma of who controls the private keys.</p></details>	
HTML: La Minería de Bitcoin (Teoría) <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Guía detallada del proceso de minería Proof-of-Work, las recompensas económicas, su rol en la seguridad de la red y los requisitos actuales (ASICs, energía).</p></details>	
HTML: Simulación de Minería Bitcoin <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Simulador interactivo del pipeline de minería. Permite ajustar parámetros como hashrate y dificultad para observar su impacto en la mempool, el árbol de Merkle y el hasheo del bloque.</p></details>	
HTML: Simulación de Ataque 51% <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Visualización avanzada de un ataque del 51%, demostrando escenarios de doble gasto y censura de transacciones al controlar la mayoría del hashrate de la red.</p></details>	
HTML: Finalidad de una Transacción <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Análisis experto sobre la garantía de inmutabilidad. Compara la finalidad probabilística (PoW de Bitcoin) con la determinista (PoS de Ethereum) y el sistema reversible de las finanzas tradicionales.</p></details>	
HTML: Composabilidad en DeFi <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Explica el concepto de "Legos de Dinero", donde los protocolos DeFi se integran para crear estrategias financieras complejas, destacando sus ventajas y riesgos sistémicos.</p></details>	
PDF: Paneles de Minería Bitcoin <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Lista simplificada de herramientas y exploradores esenciales para monitorear la red Bitcoin, incluyendo la mempool, estadísticas de pools de minería, hashrate y más.</p></details>	
HTML: Índice Interactivo del Módulo <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Índice completo e interactivo que estructura todos los temas de la unidad, desde los fundamentos de criptoactivos hasta las herramientas de desarrollo y los conceptos avanzados de DeFi.</p></details>	

Exportar a Hojas de cálculo







## 🗺️ Plan de trabajo (visión general)

- **Sección 1 (conceptos)**  
  Tipos de criptoactivos, diseño de incentivos, riesgos y casos de uso.
- **Sección 2 (consenso)**  
  PoW vs PoS: seguridad, finalización, censura, costos y huella energética.
- **Sección 3 (cripto aplicada)**  
  Hashes (SHA-3/Keccak), firmas ECDSA (secp256k1), AEAD (ChaCha20-Poly1305).
- **Sección 4 (hands-on)**  
  **Lab**: ECDSA + PoW mínimo + Keccak-256; verificación y reporte breve.

> Sugerencia operativa: 1 sesión sincrónica (3 h) + 3 días de trabajo autónomo con lecturas y práctica.

---

## ⏱️ Agenda sugerida para la sesión (3 h)

1) Panorama de criptoactivos y riesgos (30’)  
2) Consenso PoW/PoS: trade-offs y seguridad (40’)  
3) Cripto aplicada: hash y firmas (30’)  
4) **Hands-on**: ECDSA + PoW + Keccak (60’)  
5) Q&A y siguientes pasos (20’)

---

## 🧪 Laboratorio principal (propuesto por la cátedra)

**Título:** ECDSA (secp256k1) + PoW mínimo + integridad con Keccak-256  
**Descripción:**  
- Generá un par de claves (privada/pública) **secp256k1**.  
- **Firmá** un mensaje y **verificalo** con la clave pública.  
- Calculá **Keccak-256** del mensaje para asegurar integridad.  
- Implementá un **PoW mínimo**: buscá un `nonce` tal que `keccak256(prefix || nonce)` tenga `n` ceros iniciales en hex.

> **Notebook sugerido:** `notebooks/U02_ecdsa_pow_keccak.ipynb` *(sugerido por la cátedra; podés crearlo a partir de los snippets de abajo).*  

### Snippets base (Python)

> Podés ejecutar esto en un notebook. Si falta una librería, instalala en Colab o tu venv:
> `pip install ecdsa pycryptodome`

**1) Firmas ECDSA (secp256k1)**

```python
from ecdsa import SigningKey, SECP256k1

# 1) Generar par de claves
sk = SigningKey.generate(curve=SECP256k1)       # clave privada
vk = sk.get_verifying_key()                     # clave pública

msg = b"Hola, blockchain U2"

# 2) Firmar
signature = sk.sign(msg)

# 3) Verificar
ok = vk.verify(signature, msg)
print("Validez de la firma:", ok)  # True
````

**2) Keccak-256 (integridad)**

```python
from Crypto.Hash import keccak

def keccak256(data: bytes) -> bytes:
    k = keccak.new(digest_bits=256)
    k.update(data)
    return k.digest()

digest = keccak256(b"Hola, blockchain U2")
print("Keccak-256:", digest.hex())
```

**3) PoW mínimo (didáctico)**

```python
from Crypto.Hash import keccak

def keccak256_hex(data: bytes) -> str:
    k = keccak.new(digest_bits=256); k.update(data)
    return k.hexdigest()

prefix = b"U2-demo"
difficulty = 3  # cantidad de '0' iniciales en hex (aumentá para más dificultad)
target = "0" * difficulty

nonce = 0
while True:
    h = keccak256_hex(prefix + nonce.to_bytes(8, "big"))
    if h.startswith(target):
        print(f"Nonce encontrado: {nonce}, hash: {h}")
        break
    nonce += 1
```

> 📌 **Reflexión:** ¿Cómo varía el tiempo del PoW al incrementar `difficulty`? Medí tiempos y graficá.

---

## 📚 Material de estudio

### Base (ES)

* Bashir, I. *Mastering Blockchain* (2ª ed.).
* Beltrán, M. (coord.), Nespral, D., Fernández-Hergueta, R. *Blockchain: el modelo descentralizado hacia la economía digital*.
* Drescher, D. *Blockchain Basics: A Non-Technical Introduction in 25 Steps*.
* Edmunds, J. C. *DeFi. El nuevo paradigma de las finanzas modernas*.
* Lewis, A. *The Basics of Bitcoins and Blockchains*.

### Complementaria (EN)

* Narayanan et al., *Bitcoin and Cryptocurrency Technologies* (Princeton).
* Antonopoulos & Wood, *Mastering Ethereum* (O’Reilly).
* **NIST FIPS-202** (SHA-3), **SEC-1** (ECC), **RFC 8439** (ChaCha20-Poly1305), **RFC 8032** (EdDSA).
* OpenZeppelin Docs (estándares y utilidades).

> La bibliografía ampliada vive en `recursos/bibliografia.md`.

---

## 🧱 Prerrequisitos técnicos

* **Python 3.10+** → `pip install -r requirements.txt`
* (Opcional) **Foundry/Anvil** para práctica EVM (intensivo en U6).

---

## ✅ Rúbrica (U2 Lab)

| Criterio     |                                                       Descripción |  Puntos |
| ------------ | ----------------------------------------------------------------: | ------: |
| Correctitud  |    ECDSA firma/verificación + PoW funcional + Keccak-256 correcto |      40 |
| Claridad     |             Código limpio, comentarios, explicación de decisiones |      25 |
| Pruebas      | Casos y métricas (tiempos vs dificultad; pruebas de verificación) |      20 |
| Presentación |                 Informe 1 pág. con resultados/figuras y discusión |      15 |
| **Total**    |                                                                   | **100** |

**Entrega:** notebook con celdas ejecutadas + informe breve (MD/PDF).

---

## 👥 Organización y normas

* Conformar **grupos** (si aplica) y comunicar al docente.
* **Citar fuentes** (APA 7) en informes y presentaciones.

---

## 🧩 Sugerencias de extensión (opcional)

* **Compare PoW vs PoS**: redactá pros/cons (seguridad, latencia, costos).
* **Ataques ECDSA**: explorá riesgos si se reutiliza `k` (nonce) o mala entropía.
* **AEAD**: breve demo de **ChaCha20-Poly1305** para confidencialidad + integridad.

---

[⬅️ Volver a Unidades](..)





