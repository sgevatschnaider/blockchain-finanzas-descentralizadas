
# U1 â€” Fundamentos de Blockchain & Smart Contracts

**Material elaborado :** Dr. Sergio Gevatschnaider

> Esta unidad introduce el impacto de las nuevas tecnologÃ­as en negocios (banca, medios de pago, salud, logÃ­stica) y el rol de **blockchain** y **smart contracts** en nuevos modelos de negocio. Se comparan plataformas (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda) y se discuten ventajas, desventajas y perspectivas. 

---

## ðŸŽ¯ Objetivos de la unidad
- Acordar **cronograma** y **pautas de trabajo** de la materia.  
- Recuperar y **profundizar conceptos** sobre blockchain y smart contracts. 

---

## ðŸ—ºï¸ Plan de trabajo (visiÃ³n general)
- **SecciÃ³n 1 (3 dÃ­as)**  
  - Impacto de nuevas tecnologÃ­as en los negocios.  
  - Modelos de negocio basados en blockchain (Big Tech, fintech, bancos, pagos, salud, logÃ­stica).  
  - EvoluciÃ³n de blockchain y smart contracts; casos de uso.  
  - ComparaciÃ³n entre blockchains (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda).  
  - Casos de smart contracts: logÃ­stica, PropTech, InsurTech; ventajas y desventajas; perspectivas.  
  - **Actividad sincrÃ³nica obligatoria.** 

> Sugerencia operativa de cÃ¡tedra: 1 sesiÃ³n sincrÃ³nica (3 h) dentro de la semana + trabajo autÃ³nomo de 3 dÃ­as con lecturas y prÃ¡ctica guiada.

---

## â±ï¸ Agenda sugerida para la sesiÃ³n sincrÃ³nica (3 h)
1) Panorama y motivaciÃ³n en finanzas (30â€™)  
2) Estructura de bloque, hash y **Merkle** (40â€™)  
3) Ethereum/EVM y gas; comparaciÃ³n de plataformas (30â€™)  
4) **Hands-on**: Merkle + prueba de inclusiÃ³n (60â€™)  
5) Q&A y prÃ³ximas actividades (20â€™)

---

## ðŸ§ª Laboratorio principal (propuesto por la cÃ¡tedra)
**TÃ­tulo:** Ãrbol de Merkle y prueba de inclusiÃ³n  
**DescripciÃ³n:** Dada una lista de transacciones, construir el **Merkle root** y demostrar (off-chain / on-chain) que un elemento pertenece al conjunto.

**Notebook sugerido:** `notebooks/U01_merkle_tree.ipynb`  
**Abrir en Colab:**  
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/notebooks/U01_merkle_tree.ipynb)

**Pista de implementaciÃ³n (Python):**
```python
import hashlib

def h(x: bytes) -> bytes:
    return hashlib.sha256(x).digest()

def merkle_parent(a: bytes, b: bytes) -> bytes:
    return h(a + b)

def merkle_root(leaves: list[bytes]) -> bytes:
    level = leaves[:]
    if len(level) % 2 == 1:
        level.append(level[-1])  # duplico Ãºltima si es impar
    while len(level) > 1:
        nxt = []
        for i in range(0, len(level), 2):
            nxt.append(merkle_parent(level[i], level[i+1]))
        if len(nxt) % 2 == 1:
            nxt.append(nxt[-1])
        level = nxt
    return level[0]
````

---

## ðŸ“š Material de estudio

### Base de la guÃ­a (ES)

* Bashir, I. *Mastering Blockchain* (2Âª ed.).
* BeltrÃ¡n, M. (coord.), Nespral, D., FernÃ¡ndez-Hergueta, R. *Blockchain: el modelo descentralizado hacia la economÃ­a digital*.
* Drescher, D. *Blockchain Basics: A Non-Technical Introduction in 25 Steps*.
* Edmunds, J. C. *DeFi. El nuevo paradigma de las finanzas modernas*.
* Lewis, A. *The Basics of Bitcoins and Blockchains*.&#x20;

### Complementaria actualizada (EN)

* Narayanan et al., *Bitcoin and Cryptocurrency Technologies* (Princeton).
* Antonopoulos & Wood, *Mastering Ethereum* (Oâ€™Reilly).
* Ethereum Docs (EVM, gas, accounts).
* OpenZeppelin Docs (primitives y estÃ¡ndares ERC).

> La bibliografÃ­a viva y ampliada estÃ¡ en `recursos/bibliografia.md`.

---

## ðŸ§± Prerrequisitos tÃ©cnicos

* **Python 3.10+** (`pip install -r requirements.txt`)
* (Opcional) **Foundry/Anvil** para pruebas EVM (se usa intensivamente en U6).

---

## âœ… RÃºbrica (U1 Lab)

| Criterio     | DescripciÃ³n                                        |  Puntos |
| ------------ | -------------------------------------------------- | ------: |
| Correctitud  | CÃ¡lculo de raÃ­z y verificaciÃ³n de pruebas          |      40 |
| Claridad     | CÃ³digo limpio, nombres claros, explicaciÃ³n breve   |      25 |
| Pruebas      | Casos normales y bordes (pares/impares, duplicado) |      20 |
| PresentaciÃ³n | Informe de 1 pÃ¡g. con resultados y discusiÃ³n       |      15 |
| **Total**    |                                                    | **100** |

**Entrega:** notebook con celdas ejecutadas + informe breve (MD/PDF).

---

## ðŸ‘¥ OrganizaciÃ³n y normas

* Formar **grupos** en la primera sesiÃ³n y comunicar al docente.
* Verificar **pertinencia** de fuentes y **citar en APA 7** en trabajos y presentaciones.&#x20;

---

## ðŸ“Ž Recursos de apoyo

* Bitcoin Whitepaper Â· Ethereum Docs Â· Solidity Docs Â· Foundry Book.
* Calculadoras de hash y visualizadores de Ã¡rboles de Merkle (educativos).







