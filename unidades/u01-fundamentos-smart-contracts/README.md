# U1 — Fundamentos de Blockchain & Smart Contracts

**Material elaborado :** Dr. Sergio Gevatschnaider

> Esta unidad introduce el impacto de las nuevas tecnologías en negocios (banca, medios de pago, salud, logística) y el rol de **blockchain** y **smart contracts** en nuevos modelos de negocio. Se comparan plataformas (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda) y se discuten ventajas, desventajas y perspectivas. También se recomienda conformar grupos y citar fuentes con **APA 7** en los trabajos. :contentReference[oaicite:0]{index=0}

---

## 🎯 Objetivos de la unidad
- Acordar **cronograma** y **pautas de trabajo** de la materia.  
- Recuperar y **profundizar conceptos** sobre blockchain y smart contracts. :contentReference[oaicite:1]{index=1}

---

## 🗺️ Plan de trabajo (visión general)
- **Sección 1 (3 días)**  
  - Impacto de nuevas tecnologías en los negocios.  
  - Modelos de negocio basados en blockchain (Big Tech, fintech, bancos, pagos, salud, logística).  
  - Evolución de blockchain y smart contracts; casos de uso.  
  - Comparación entre blockchains (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda).  
  - Casos de smart contracts: logística, PropTech, InsurTech; ventajas y desventajas; perspectivas.  
  - **Actividad sincrónica obligatoria.** :contentReference[oaicite:2]{index=2}

> Sugerencia operativa de cátedra: 1 sesión sincrónica (3 h) dentro de la semana + trabajo autónomo de 3 días con lecturas y práctica guiada.

---

## ⏱️ Agenda sugerida para la sesión sincrónica (3 h)
1) Panorama y motivación en finanzas (30’)  
2) Estructura de bloque, hash y **Merkle** (40’)  
3) Ethereum/EVM y gas; comparación de plataformas (30’)  
4) **Hands-on**: Merkle + prueba de inclusión (60’)  
5) Q&A y próximas actividades (20’)

---

## 🧪 Laboratorio principal (propuesto por la cátedra)
**Título:** Árbol de Merkle y prueba de inclusión  
**Descripción:** Dada una lista de transacciones, construir el **Merkle root** y demostrar (off-chain / on-chain) que un elemento pertenece al conjunto.

**Notebook sugerido:** `notebooks/U01_merkle_tree.ipynb`  
**Abrir en Colab:**  
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U01_merkle_tree.ipynb)

**Pista de implementación (Python):**
```python
import hashlib

def h(x: bytes) -> bytes:
    return hashlib.sha256(x).digest()

def merkle_parent(a: bytes, b: bytes) -> bytes:
    return h(a + b)

def merkle_root(leaves: list[bytes]) -> bytes:
    level = leaves[:]
    if len(level) % 2 == 1:
        level.append(level[-1])  # duplico última si es impar
    while len(level) > 1:
        nxt = []
        for i in range(0, len(level), 2):
            nxt.append(merkle_parent(level[i], level[i+1]))
        if len(nxt) % 2 == 1:
            nxt.append(nxt[-1])
        level = nxt
    return level[0]

