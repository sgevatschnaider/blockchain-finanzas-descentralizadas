# U2 — Criptoactivos, Consenso & Ciberseguridad

**Material elaborado:** Dr. Sergio Gevatschnaider

> Esta unidad profundiza en la **taxonomía de criptoactivos** (coins, stablecoins, tokens fungibles/NFT), los **mecanismos de consenso** (PoW/PoS) y las **primitivas criptográficas** que los sostienen (hash, firmas digitales ECDSA, AEAD). Integra además una **capa de ciberseguridad** aplicada: gestión de claves, modelos de amenaza (Sybil/51%), *wallet* hygiene y nociones de auditoría básica de contratos.

---

## 🎯 Objetivos de la unidad

- Diferenciar **tipos de criptoactivos** y sus casos de uso.
- Comprender **PoW vs PoS** y su impacto en seguridad, latencia y costos.
- Aplicar **ECDSA (secp256k1)** para firma/verificación de mensajes.
- Implementar un **PoW mínimo** y medir su dificultad/tiempos.
- Evaluar **integridad** de datos con **Keccak/SHA-3** y buenas prácticas de *key management*.

---

## 🗺️ Plan de trabajo (visión general)

- **Sección 2 (3 días)**
  - Taxonomía de criptoactivos y *token standards* (ERC-20/721, visión general).
  - Consenso: PoW, PoS, *finality*, *fork choice* (alto nivel).
  - Criptografía aplicada: hash (SHA-256, SHA-3/Keccak), firmas ECDSA, AEAD (noción).
  - Ciberseguridad: modelos de amenaza (Sybil/51%), gestión de claves (mnemonics, *cold/hot storage*), *phishing* y *malware basics*.
  - **Actividad sincrónica obligatoria.**

> **Sugerencia operativa:** 1 sesión sincrónica (3 h) dentro de la semana + trabajo autónomo de 3 días (lecturas y práctica guiada).

---

## ⏱️ Agenda sugerida para la sesión sincrónica (3 h)

1) Panorama de criptoactivos y estándares (25’)  
2) PoW/PoS: propiedades de seguridad y trade-offs (35’)  
3) Criptografía aplicada: hash (Merkle ↔ U1), ECDSA secp256k1 (40’)  
4) **Hands-on**: ECDSA + PoW mínimo + integridad con Keccak/SHA-3 (60’)  
5) Gestión de claves y *threat modeling* + Q&A (20’)

---

## 🧪 Laboratorio principal (propuesto por la cátedra)

**Título:** ECDSA (secp256k1) + PoW mínimo + integridad con Keccak/SHA-3

**Descripción:**  
1) Generar un par de claves **ECDSA secp256k1**, firmar y verificar mensajes.  
2) Implementar un **PoW mínimo**: hallar un *nonce* tal que `H(m || nonce)` cumpla una **dificultad** dada (p. ej., `n` ceros *hex* al inicio).  
3) Validar **integridad** de un conjunto de elementos (p. ej., *dataset* breve) con **Keccak/SHA-3**.

**Notebook sugerido:** `notebooks/U02_ecdsa_pow_keccak.ipynb`  
**Abrir en Colab:**  
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U02_ecdsa_pow_keccak.ipynb)

**Pista de implementación (Python):**

> 🔑 **Firmas ECDSA (secp256k1)** — usando la librería `ecdsa`.  
> ⛏️ **PoW mínimo** — con SHA-3 (estándar) o Keccak-256 (Ethereum).  
> ℹ️ Python >= 3.10 trae `hashlib.sha3_256`. Para **Keccak-256** (Ethereum) usá `pysha3` (`pip install pysha3`) o `eth_utils`.

```python
# --- Requisitos (ejecutá en una celda previa del notebook) ---
# !pip install ecdsa pysha3  # pysha3 expone hashlib.keccak_256

import os, time, binascii, hashlib
from ecdsa import SigningKey, SECP256k1

# ====== 1) ECDSA secp256k1: keypair, firma y verificación ======
sk = SigningKey.generate(curve=SECP256k1)
vk = sk.get_verifying_key()
msg = b"U2 - ECDSA + PoW + Keccak/SHA-3"

# Hash del mensaje (SHA-3 estándar)
msg_hash = hashlib.sha3_256(msg).digest()

sig = sk.sign(msg_hash)                     # firma (DER)
ok  = vk.verify(sig, msg_hash)              # verificación

print("PubKey (hex):", vk.to_string("compressed").hex())
print("Firma válida:", ok)

# ====== 2) PoW mínimo: H(m || nonce) con 'd' ceros hex iniciales ======
def pow_mini(message: bytes, difficulty_hex_zeros: int = 3, use_keccak: bool = False):
    target_prefix = b"0" * difficulty_hex_zeros
    nonce = 0
    hfunc = (lambda x: hashlib.sha3_256(x).hexdigest())
    if use_keccak and hasattr(hashlib, "keccak_256"):
        hfunc = (lambda x: hashlib.keccak_256(x).hexdigest())  # requiere pysha3

    start = time.time()
    while True:
        h = hfunc(message + nonce.to_bytes(8, "big"))
        if h.startswith(target_prefix.decode()):
            elapsed = time.time() - start
            return nonce, h, elapsed
        nonce += 1

nonce, digest, secs = pow_mini(msg, difficulty_hex_zeros=3, use_keccak=False)  # SHA-3
print(f"PoW (SHA-3): nonce={nonce}, hash={digest[:16]}..., tiempo={secs:.3f}s")

# (Opcional) con Keccak-256 si está disponible:
if hasattr(hashlib, "keccak_256"):
    nonce_k, digest_k, secs_k = pow_mini(msg, difficulty_hex_zeros=3, use_keccak=True)
    print(f"PoW (Keccak-256): nonce={nonce_k}, hash={digest_k[:16]}..., tiempo={secs_k:.3f}s")

# ====== 3) Integridad de una lista de elementos con SHA-3 ======
def digest_list(items: list[bytes]):
    return [hashlib.sha3_256(x).hexdigest() for x in items]

items = [b"tx1: alice->bob 10", b"tx2: carol->dan 5", b"tx3: eve->frank 7"]
print("Hashes SHA-3:", digest_list(items))

