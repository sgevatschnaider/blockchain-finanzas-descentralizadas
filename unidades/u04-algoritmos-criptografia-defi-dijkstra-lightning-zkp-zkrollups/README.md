# U4 — Algoritmos y Criptografía para DeFi: Dijkstra en Lightning, ZKP y ZK-Rollups

[![Unidad](https://img.shields.io/badge/Unidad-4-blueviolet)](#)
[![Dominio](https://img.shields.io/badge/%C3%A1rea-Sistemas%20Financieros%20Digitales-0b7285)](#)
[![Interactividad](https://img.shields.io/badge/recursos-HTML5-green?logo=HTML5)](#)

> **Vista previa** · Enrutamiento Lightning (Dijkstra) — simulación y registro paso a paso <img src="./simulacion.gif" alt="Lightning Dijkstra" width="900"/>

**Carpeta de la unidad (GitHub):**
`/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/`

---

## 🎯 Objetivos de aprendizaje

* **Modelar** Lightning Network como **grafo ponderado con restricciones de capacidad** (canales/HTLCs) y entender su **estructura de comisiones**.
* **Aplicar Dijkstra** para ruteo de pagos minimizando costo total: `base_fee_msat + amount_msat * ppm / 1e6`.
* **Comprender** fundamentos de **Zero-Knowledge Proofs (ZKP)**: *completeness, soundness, zero-knowledge*; compromisos y *hash preimage*.
* **Analizar** la arquitectura de **ZK-Rollups**: secuenciamiento, lotes, pruebas de validez, publicación de *state roots* y riesgos de *data availability*.
* **Conectar** con **TradFi vs DeFi**, **AMMs**, **MEV** y consideraciones **regulatorias** que afectan ejecución, costos y seguridad.

---

## 🗺️ Recursos de la unidad (HTML interactivos)

> Abrilos en el navegador directamente desde esta carpeta.

| Recurso                                           | Archivo                                                              |
| ------------------------------------------------- | -------------------------------------------------------------------- |
| **Lightning — Teoría**                            | [`Ligthling_Teoría.html`](./Ligthling_Teoría.html)                   |
| **Lightning — Visualización Dijkstra (completo)** | [`Lighting_Dijstra_completo.html`](./Lighting_Dijstra_completo.html) |
| **Lightning — Visualización Dijkstra (compacto)** | [`lightning.Dijstra.html`](./lightning.Dijstra.html)                 |
| **ZKP — Teoría**                                  | [`ZPK_TEORIA.html`](./ZPK_TEORIA.html)                               |
| **ZKP — Glosario**                                | [`ZPK_Glosario.html`](./ZPK_Glosario.html)                           |
| **ZKP — Simulador Hash/Preimage**                 | [`ZPK_Simulador_hash.html`](./ZPK_Simulador_hash.html)               |
| **ZK-Rollups — Teoría**                           | [`ZPK_Rollups.html`](./ZPK_Rollups.html)                             |
| **ZK-Rollups — Simulador**                        | [`ZPK_ROLLUP_SIMULADOR.HTML`](./ZPK_ROLLUP_SIMULADOR.HTML)           |

**Links directos a GitHub (mismos archivos):**

* `Lighting_Dijstra_completo.html`
  `https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/Lighting_Dijstra_completo.html`
* `lightning.Dijstra.html`
  `https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/lightning.Dijstra.html`
* `Ligthling_Teoría.html`
  `https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/blob/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/Ligthling_Teoría.html`
* `ZPK_TEORIA.html` · `ZPK_Glosario.html` · `ZPK_Simulador_hash.html` · `ZPK_Rollups.html` · `ZPK_ROLLUP_SIMULADOR.HTML` (en la misma ruta).

> Nota: mantené acentos y mayúsculas tal como están; GitHub sirve esos nombres exactamente.

---

## 📚 Marco conceptual (TL;DR académico)

### 1) TradFi ↔ DeFi: plataformas y microestructura

* **TradFi**: *order books* centralizados, *clearing*, custodia, KYC/AML.
* **DeFi**: contratos, **AMMs** (x·y=k y variantes), *permissionless* y composables.
* **Ejecución**: costos (fees), **finality**, latencia y calidad de liquidez afectan *slippage* y riesgo operacional.

### 2) AMMs y MEV

* **AMMs** fijan precio por función; el **slippage** depende de profundidad.
* **MEV** redistribuye valor por ordenamiento de transacciones; **PBS** y L2 cambian incentivos.
* Implicancias para estrategias, *front-running* y *commit-reveal*.

### 3) Lightning como grafo de costos

* Aristas = canales con **capacidad direccional**; pesos: `base_fee_msat` y `ppm`.
* **Restricción**: sólo se consideran aristas con capacidad ≥ monto (poda).
* **Objetivo**: camino de **menor costo** sujeto a factibilidad ⇒ Dijkstra con **cola de prioridad**.

### 4) ZKP y ZK-Rollups

* **ZKP**: verificar sin revelar el testigo (privacidad/verificabilidad).
* **ZK-Rollups**: agregación off-chain + *validity proof* → heredan seguridad L1 y aumentan throughput.
* **Trade-offs**: *data availability*, latencia de retiro, centralización del *sequencer*.

### 5) Regulación (alto nivel)

* Enfoque **risk-based**: custodia, *travel rule*, auditoría criptográfica, *on/off-ramps*.
* Puntos de atención en **Lightning** y **Rollups**: operadores, puentes, y cumplimiento transfronterizo.

---

## 🔍 ¿Qué hace cada simulador?

### A) **Lightning + Dijkstra**

* **Genera** topologías (nodos/aristas) y permite setear **base fee**, **ppm**, **capacidad** y **monto (msat)**.
* **Ejecuta** Dijkstra:

  1. inicializa cola de prioridad; 2) relaja aristas válidas por capacidad;
  2. actualiza costo acumulado y predecesores; 4) reconstruye ruta mínima.
* **Muestra**: *logs* paso a paso, **costo total**, **hops** y etiquetas en SVG.

### B) **ZKP — Hash/Preimage**

* Ilustra compromisos: `c = H(m)`; verificación pública de `H(m)=c` sin revelar `m`.
* Observá el **efecto avalancha** al cambiar 1 byte en `m`.

### C) **ZK-Rollups**

* **Secuenciamiento** → **loteo** → **prueba** → **verificación** → actualización de **state root**.
* Simula un lote inválido para discutir manejo de fallas.

---

## 🧰 Guía de uso rápido

1. Abre **`Lighting_Dijstra_completo.html`** → “Generar red” → define **origen/destino** y **monto** → **“Ejecutar Dijkstra”**.
2. Abre **`ZPK_Simulador_hash.html`** → ingresa un mensaje → genera/verifica **hash**.
3. Abre **`ZPK_ROLLUP_SIMULADOR.HTML`** → agrega transacciones → **secuencia** → **prueba** → **verifica**.

---

## 🧪 Laboratorios guiados

**Lab 1 — Rutas y capacidad (Lightning)**

* Para 10 instancias aleatorias, busca ruta para `monto = 500k msat`.
* Registra: `instancia, monto, costo_total_msat, hops, factible(S/N)` y explica **cuellos de botella**.

**Lab 2 — Sensibilidad a comisiones**

* En una red fija, subí el `ppm` de un hub.
* Medí cambio en **costo** y **ruta** óptima. Discute *pricing power*.

**Lab 3 — Compromisos y verificación (ZKP)**

* Publica `c = H(m)` para tres mensajes.
* Otro equipo verifica sin conocer `m` (revelás al final). Relación con **commit-reveal/MEV**.

**Lab 4 — Data Availability (ZK-Rollups)**

* Inserta un lote inválido y observa el rechazo del verificador.
* Debate: efectos de falla de disponibilidad de datos en **retiros** y confianza.

---

## 🧷 Rúbrica de evaluación (100 pts)

| Criterio                | Descripción                                          | Pts |
| ----------------------- | ---------------------------------------------------- | --: |
| Modelado Lightning      | Ruteo correcto, análisis de capacidad/costos         |  25 |
| Experimentos & Métricas | Tablas/gráficas, repetibilidad, interpretación       |  20 |
| ZKP/Hash                | Comprensión de compromiso/verificación y límites     |  15 |
| ZK-Rollups              | Flujo batch-prueba-verificación y análisis de fallas |  15 |
| Integración TradFi/DeFi | AMMs, MEV, regulación conectados a ejecución         |  15 |
| Documentación           | Informe claro + capturas/enlaces a simuladores       |  10 |

---

## 🧱 Estructura del directorio

```bash
u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/
├── README.md
├── Lighting_Dijstra_completo.html
├── lightning.Dijstra.html
├── Ligthling_Teoría.html
├── ZPK_TEORIA.html
├── ZPK_Glosario.html
├── ZPK_Rollups.html
├── ZPK_ROLLUP_SIMULADOR.HTML
├── ZPK_Simulador_hash.html
└── simulacion.gif
```

---

## 🛠️ Apéndice técnico

**Dijkstra (Lightning):**

* Peso de arista: `w(u,v) = base_fee_msat + amount_msat * ppm / 1e6`.
* Poda por **capacidad direccional**: si `cap(u,v) < amount_msat`, descartar.
* Implementación típica: **cola de prioridad** (min-heap) sobre costo acumulado.
* Extensiones: penalización por **confiabilidad**, **multi-criterio** (costo-vs-hops/latencia), *retries* probabilísticos.

**ZKP (esqueleto formal):**

* *Completeness* (acepta si verdad), *Soundness* (difícil engañar), *Zero-Knowledge* (no filtra info del testigo).
* Familias: Σ-protocols, zk-SNARKs (setup confiable), zk-STARKs (sin setup; pruebas más grandes).

**ZK-Rollups:**

* Pipeline: usuario → **sequencer** → *batch* → **validity proof** → **verificador L1** → actualización de estado.
* Riesgos: *data availability*, censura del sequencer, tiempos de retiro.

---

## 🔁 Conexión curricular

* **Desde U3/U4**: plataformas DeFi, costos y latencia → aquí bajamos a **algoritmos** y **pruebas**.
* **Hacia U5**: *trading* y gestión de riesgo; lo aprendido (costos, latencia, MEV) se traduce en **slippage**, *fills* y riesgo operativo.

---

## 🧩 Checklist rápido

* [ ] Obtengo rutas válidas para `monto=500k msat` en ≥80% de instancias.
* [ ] Entiendo cómo `ppm` y `base_fee` cambian el **costo marginal**.
* [ ] Puedo explicar por qué `H(m)=c` permite verificación sin revelar `m`.
* [ ] Describo el flujo de una tx en **ZK-Rollup** y qué se publica en L1.
* [ ] Relaciono **AMMs/MEV/regulación** con ejecución y diseño de incentivos.

---

## 🤝 Contribuciones & buenas prácticas

* PRs/Issues: enlaces relativos, sin secretos/llaves, respeto de licencias.
* Nombres de archivo: evitá renombrar; si lo hacés, actualizá todos los enlaces.
* Para clases: abrir en **pantalla completa**; si el SVG se ve vacío, **“Generar red”** → **“Ejecutar Dijkstra”**.

---

¿Quieres que agregue un **README-resumen** de 1 página para estudiantes o un **handout PDF** con los labs? ✔️
