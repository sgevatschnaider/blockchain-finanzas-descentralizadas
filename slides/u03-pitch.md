---
marp: true
title: U3 — Pitch del Caso (IoT / IA / ML + Metaverso)
description: Propuesta de negocio con anclaje on-chain (PoE + IPFS), costos L1/L2 y riesgos
paginate: true
theme: default
_class: lead
---

<!-- _backgroundColor: #0d1117; color: #fff -->
# **U3 — Pitch del Caso**  
## IoT / IA / ML + Metaverso + Blockchain

**Equipo:** [Completar]  
**Curso:** Blockchain y Finanzas Descentralizadas  
**Profesor:** Sergio Gevatschnaider

---

# Problema / Oportunidad

- ¿Qué necesidad concreta abordamos?  
- Contexto del sector / workflow actual  
- Fricciones, riesgos y costos vigentes

**Insight clave:** [Completar en 1 frase]

---

# Propuesta de Valor

- Solución basada en **IoT → IPFS → Blockchain (PoE)**  
- Caso de uso en **metaverso**: [The Sandbox / Decentraland / otro]  
- Beneficios: trazabilidad, integridad, auditoría, monetización

**Usuario objetivo:** [Completar]

---

# Mercado y Segmentos

- Tamaño del mercado / tendencias  
- Segmentación primaria (B2B / B2C / B2B2C)  
- Competidores / alternativas y diferenciadores

**Hipótesis de adopción:** [Completar]

---

# Arquitectura (alto nivel)

- **IoT/Cliente:** captura de evidencia  
- **Off-chain:** hash (Keccak-256), **IPFS (CID)**  
- **On-chain:** `ProofOfExistence.anchor(hash)`  
- **Metaverso:** experiencia / activos digitales

> Diagrama (pueden reemplazar por imagen)
```mermaid
flowchart LR
  A[IoT/Cliente] --> B[Hash Keccak-256]
  B --> C[IPFS (CID)]
  B --> D[ProofOfExistence.anchor]
  D --> E[(Ledger)]
