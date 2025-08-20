# U1 — Fundamentos de Blockchain & Smart Contracts

**Material elaborado :** Dr. Sergio Gevatschnaider

> Esta unidad introduce el impacto de las nuevas tecnologías en negocios (banca, medios de pago, salud, logística) y el rol de **blockchain** y **smart contracts** en nuevos modelos de negocio. Se comparan plataformas (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda) y se discuten ventajas, desventajas y perspectivas. 

---

## 🎯 Objetivos de la unidad
- Acordar **cronograma** y **pautas de trabajo** de la materia.  
- Recuperar y **profundizar conceptos** sobre blockchain y smart contracts. 

---

## 🗺️ Plan de trabajo (visión general)
- **Sección 1 (3 días)**  
  - Impacto de nuevas tecnologías en los negocios.  
  - Modelos de negocio basados en blockchain (Big Tech, fintech, bancos, pagos, salud, logística).  
  - Evolución de blockchain y smart contracts; casos de uso.  
  - Comparación entre blockchains (Bitcoin, Ethereum, Litecoin, Hyperledger, Corda).  
  - Casos de smart contracts: logística, PropTech, InsurTech; ventajas y desventajas; perspectivas.  
  - **Actividad sincrónica obligatoria.** 

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
````

---

## 📁 Estructura de trabajo (códigos y ejemplos)

```
Unidad-1/
├── python/   → Scripts en Python
├── html/     → Ejemplos y prácticas en HTML
└── README.md
```

---

## 📝 Unidad 1 — Fundamentos de Blockchain & Smart Contracts

| 📄 Recurso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 📥 Acceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Notebook: El Impacto de las Nuevas Tecnologías en los Negocios** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Este notebook introduce el impacto de tecnologías emergentes en negocios (banca, pagos, salud, logística), destacando el papel de blockchain y smart contracts. Incluye una revisión conceptual y práctica inicial con ejemplos para visualizar cómo los modelos de negocio se transforman con plataformas descentralizadas.</p></details>                                                                                             | [![Ver en GitHub](https://img.shields.io/badge/Ver%20en-GitHub-blue?style=for-the-badge\&logo=github)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/unidades/u01-fundamentos-smart-contracts/python/El_Impacto_de_las_Nuevas_Tecnolog%C3%ADas_en_los_Negocios.ipynb) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/unidades/u01-fundamentos-smart-contracts/python/El_Impacto_de_las_Nuevas_Tecnolog%C3%ADas_en_los_Negocios.ipynb) |
| **Simulación interactiva: Transición Colateral (HTML)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir/colapsar)</em></summary><p>Un panel didáctico para explorar la transición de la movilización de colateral y liquidaciones tradicionales hacia esquemas con stablecoins y tokenización de activos. Permite ajustar parámetros (haircuts, exposición, reconciliaciones, AUM) y visualizar en tiempo real el impacto en capital, costes operativos y nuevos ingresos. Incluye hitos recientes de la industria (BlackRock, Visa) y métricas simplificadas de P\&L.</p></details> | [![Ver Simulación](https://img.shields.io/badge/Abrir%20Simulación-Interactiva-brightgreen?style=for-the-badge\&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u01-fundamentos-smart-contracts/html/colateral.html)                                                                                                                                                                                                                                                                                                                                               |

---

## 📚 Material de estudio

### Base de la guía (ES)

* Bashir, I. *Mastering Blockchain* (2ª ed.).
* Beltrán, M. (coord.), Nespral, D., Fernández-Hergueta, R. *Blockchain: el modelo descentralizado hacia la economía digital*.
* Drescher, D. *Blockchain Basics: A Non-Technical Introduction in 25 Steps*.
* Edmunds, J. C. *DeFi. El nuevo paradigma de las finanzas modernas*.
* Lewis, A. *The Basics of Bitcoins and Blockchains*.&#x20;

### Complementaria actualizada (EN)

* Narayanan et al., *Bitcoin and Cryptocurrency Technologies* (Princeton).
* Antonopoulos & Wood, *Mastering Ethereum* (O’Reilly).
* Ethereum Docs (EVM, gas, accounts).
* OpenZeppelin Docs (primitives y estándares ERC).

> La bibliografía viva y ampliada está en `recursos/bibliografia.md`.

---

## 🧱 Prerrequisitos técnicos

* **Python 3.10+** (`pip install -r requirements.txt`)
* (Opcional) **Foundry/Anvil** para pruebas EVM (se usa intensivamente en U6).

---

## ✅ Rúbrica (U1 Lab)

| Criterio     | Descripción                                        |  Puntos |
| ------------ | -------------------------------------------------- | ------: |
| Correctitud  | Cálculo de raíz y verificación de pruebas          |      40 |
| Claridad     | Código limpio, nombres claros, explicación breve   |      25 |
| Pruebas      | Casos normales y bordes (pares/impares, duplicado) |      20 |
| Presentación | Informe de 1 pág. con resultados y discusión       |      15 |
| **Total**    |                                                    | **100** |

**Entrega:** notebook con celdas ejecutadas + informe breve (MD/PDF).

---

## 👥 Organización y normas

* Formar **grupos** en la primera sesión y comunicar al docente.
* Verificar **pertinencia** de fuentes y **citar en APA 7** en trabajos y presentaciones.&#x20;

---

## 📎 Recursos de apoyo

* Bitcoin Whitepaper · Ethereum Docs · Solidity Docs · Foundry Book.
* Calculadoras de hash y visualizadores de árboles de Merkle (educativos).


