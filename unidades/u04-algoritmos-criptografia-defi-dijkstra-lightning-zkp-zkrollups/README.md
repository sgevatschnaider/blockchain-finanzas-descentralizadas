# U4 — Algoritmos y Criptografía para DeFi: Dijkstra en Lightning, ZKP y ZK-Rollups

[![Unidad](https://img.shields.io/badge/Unidad-4-blueviolet)](#)
[![Dominio](https://img.shields.io/badge/%C3%A1rea-Sistemas%20Financieros%20Digitales-0b7285)](#)
[![Interactividad](https://img.shields.io/badge/recursos-HTML5-green?logo=HTML5)](#)

> **Vista previa** · Enrutamiento Lightning (Dijkstra) — simulación y registro paso a paso <img src="./simulacion.gif" alt="Lightning Dijkstra" width="900"/>

**Carpeta de la unidad (GitHub):**
`/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/`

---

## 🎯 Objetivos de aprendizaje

*   **Modelar** Lightning Network como **grafo ponderado con restricciones de capacidad** (canales/HTLCs) y entender su **estructura de comisiones**.
*   **Aplicar Dijkstra** para ruteo de pagos minimizando costo total: `base_fee_msat + amount_msat * ppm / 1e6`.
*   **Comprender** fundamentos de **Zero-Knowledge Proofs (ZKP)**: *completeness, soundness, zero-knowledge*; compromisos y *hash preimage*.
*   **Analizar** la arquitectura de **ZK-Rollups**: secuenciamiento, lotes, pruebas de validez, publicación de *state roots* y riesgos de *data availability*.
*   **Conectar** con **TradFi vs DeFi**, **AMMs**, **MEV** y consideraciones **regulatorias** que afectan ejecución, costos y seguridad.

## 🗺️ Recursos de la unidad (HTML interactivos)

### Módulo 1: Lightning Network

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Lightning Network** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía de estudio completa sobre la arquitectura de Lightning Network como solución de Capa 2. Explora desde conceptos básicos como canales de pago y HTLCs hasta su representación como un grafo ponderado. Incluye un ejemplo detallado del algoritmo de Dijkstra para el enrutamiento y analiza sus principales casos de uso, como micropagos y aplicaciones en el metaverso.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/Ligthling_Teoría.html) |
| **Visualización de Dijkstra (Simple)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una visualización interactiva en SVG que simula el algoritmo de Dijkstra para encontrar la ruta de menor costo en una red Lightning. Permite generar una topología de red, establecer un origen/destino, y animar el proceso paso a paso para observar cómo el algoritmo explora los nodos y relaja las aristas hasta encontrar el camino óptimo.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador-SVG-blue?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/lightning.Dijstra.html) |
| **Visualización de Dijkstra (Completa)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una versión avanzada del simulador de Dijkstra que incluye un panel de "inspección" detallado. Además de la visualización del grafo, muestra en tiempo real el estado de la <strong>cola de prioridad</strong>, el conjunto de nodos visitados y las tablas de distancias (`dist[v]`) y predecesores (`prev[v]`). Es una herramienta pedagógica ideal para un análisis profundo del algoritmo.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Avanzado-SVG-blue?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/Lighting_Dijistra_completo.html) |
| **Guía: Arquitectura Criptográfica** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía fundamental sobre los pilares tecnológicos de la Lightning Network. Detalla cómo la red aprovecha las primitivas criptográficas de Bitcoin, como las firmas digitales, las funciones hash y los bloqueos de tiempo. Explica la estructura de los canales multifirma, el rol central de los HTLCs y los mecanismos de seguridad avanzados como las transacciones de penalización y los <em>Watchtowers</em>.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Criptografía-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/Ligthling-La%20Arquitectura%20Criptogr%C3%A1fica%20de%20la%20Lightning%20Network.html) |
| **Guía: Anatomía de un Pago** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Ofrece una descripción detallada del ciclo de vida de un pago en la red. Desglosa el proceso en fases claras: la generación del secreto (preimagen) y su hash, la construcción de una cadena de HTLCs con <em>timelocks</em> decrecientes, y la liquidación atómica en cascada que garantiza la seguridad de los fondos. También cubre cómo se manejan los intentos de fraude y la desconexión de nodos.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Anatomía_Pago-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/Ligthling_Anatom%C3%ADa%20de%20un%20Pago%20en%20la%20Lightning%20Network.html) |

---

### Módulo 2: Pruebas de Conocimiento Cero (ZKP) y ZK-Rollups

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Pruebas de Conocimiento Cero (ZKP)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una introducción al paradigma de la "confianza cero" a través de las ZKP. El material explica las propiedades fundamentales (completitud, solidez, cero conocimiento), compara los tipos de ZKP más importantes (SNARKs vs. STARKs), y explora sus casos de uso en producción, con un enfoque en el escalado de blockchain, videojuegos y el metaverso.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_ZKP-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_TEORIA.html) |
| **Guía Teórica: ZK-Rollups** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Guía enfocada en la arquitectura de los ZK-Rollups como la principal solución de escalado para blockchains. Desglosa el ciclo de vida de un lote, los componentes clave de la infraestructura (Secuenciador, Prover, Verificador) y los fundamentos de su seguridad, incluyendo el concepto de Disponibilidad de Datos (DA) que diferencia a un ZK-Rollup de un Validium.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_Rollups-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_Rollups.html) |
| **Glosario de Términos ZKP** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un glosario exhaustivo que define los términos y conceptos clave del ecosistema ZKP. Organizado en secciones temáticas, cubre desde los fundamentos y primitivas criptográficas hasta los componentes de un ZK-Rollup, su flujo operativo, métricas de rendimiento y el stack de herramientas para desarrolladores, convirtiéndolo en una referencia rápida y esencial.</p></details> | [![Abrir Glosario](https://img.shields.io/badge/Glosario-HTML-informational?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_Glosario.html) |
| **Simulador ZKP: Cueva de Alí Babá + Compromiso Hash** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una demo interactiva doble. La primera parte simula la famosa analogía de la "Cueva de Alí Babá" para ilustrar las propiedades de una ZKP. La segunda parte implementa un sistema de "Commit-Reveal" usando compromisos hash, permitiendo a los usuarios crear un compromiso a un secreto y luego probar que lo conocen sin revelarlo.</p></details> | [![Abrir Demo](https://img.shields.io/badge/Demo_ZKP-Interactiva-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_Simulador_hash.html) |
| **Simulador Interactivo de ZK-Rollups** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una simulación visual que modela la dinámica de un ZK-Rollup. Los usuarios pueden ajustar parámetros como el tamaño del lote, la tasa de llegada de transacciones y los costos de gas para observar en tiempo real su impacto en métricas clave como el TPS efectivo, el costo por transacción y la finalidad del lote. Permite comparar el modo ZK-Rollup (DA on-chain) vs. Validium (DA off-chain).</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Rollup-Interactivo-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_ROLLUP_SIMULADOR.HTML) |
| **Animación: Flujo de un ZK-Rollup** <br><br>![Animación ZK-Rollup](https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/simulacion.gif) | [![Ver GIF](https://img.shields.io/badge/Ver_Animación-GIF-lightgrey?style=for-the-badge&logo=html5)](https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/simulacion.gif) |

---

## 📚 Marco conceptual (TL;DR académico)

### 1) TradFi ↔ DeFi: plataformas y microestructura

*   **TradFi**: *order books* centralizados, *clearing*, custodia, KYC/AML.
*   **DeFi**: contratos, **AMMs** (x·y=k y variantes), *permissionless* y composables.
*   **Ejecución**: costos (fees), **finality**, latencia y calidad de liquidez afectan *slippage* y riesgo operacional.

### 2) AMMs y MEV

*   **AMMs** fijan precio por función; el **slippage** depende de profundidad.
*   **MEV** redistribuye valor por ordenamiento de transacciones; **PBS** y L2 cambian incentivos.
*   Implicancias para estrategias, *front-running* y *commit-reveal*.

### 3) Lightning como grafo de costos

*   Aristas = canales con **capacidad direccional**; pesos: `base_fee_msat` y `ppm`.
*   **Restricción**: sólo se consideran aristas con capacidad ≥ monto (poda).
*   **Objetivo**: camino de **menor costo** sujeto a factibilidad ⇒ Dijkstra con **cola de prioridad**.

### 4) ZKP y ZK-Rollups

*   **ZKP**: verificar sin revelar el testigo (privacidad/verificabilidad).
*   **ZK-Rollups**: agregación off-chain + *validity proof* → heredan seguridad L1 y aumentan throughput.
*   **Trade-offs**: *data availability*, latencia de retiro, centralización del *sequencer*.

### 5) Regulación (alto nivel)

*   Enfoque **risk-based**: custodia, *travel rule*, auditoría criptográfica, *on/off-ramps*.
*   Puntos de atención en **Lightning** y **Rollups**: operadores, puentes, y cumplimiento transfronterizo.

---

## 🔍 ¿Qué hace cada simulador?

### A) **Lightning + Dijkstra**

*   **Genera** topologías (nodos/aristas) y permite setear **base fee**, **ppm**, **capacidad** y **monto (msat)**.
*   **Ejecuta** Dijkstra:

    1.  inicializa cola de prioridad; 2) relaja aristas válidas por capacidad;
    2.  actualiza costo acumulado y predecesores; 4) reconstruye ruta mínima.
*   **Muestra**: *logs* paso a paso, **costo total**, **hops** y etiquetas en SVG.

### B) **ZKP — Hash/Preimage**

*   Ilustra compromisos: `c = H(m)`; verificación pública de `H(m)=c` sin revelar `m`.
*   Observá el **efecto avalancha** al cambiar 1 byte en `m`.

### C) **ZK-Rollups**

*   **Secuenciamiento** → **loteo** → **prueba** → **verificación** → actualización de **state root**.
*   Simula un lote inválido para discutir manejo de fallas.

---

## 🧰 Guía de uso rápido

1.  Abre **`Lighting_Dijstra_completo.html`** → “Generar red” → define **origen/destino** y **monto** → **“Ejecutar Dijkstra”**.
2.  Abre **`ZPK_Simulador_hash.html`** → ingresa un mensaje → genera/verifica **hash**.
3.  Abre **`ZPK_ROLLUP_SIMULADOR.HTML`** → agrega transacciones → **secuencia** → **prueba** → **verifica**.

---

## 🧪 Laboratorios guiados

**Lab 1 — Rutas y capacidad (Lightning)**

*   Para 10 instancias aleatorias, busca ruta para `monto = 500k msat`.
*   Registra: `instancia, monto, costo_total_msat, hops, factible(S/N)` y explica **cuellos de botella**.

**Lab 2 — Sensibilidad a comisiones**

*   En una red fija, subí el `ppm` de un hub.
*   Medí cambio en **costo** y **ruta** óptima. Discute *pricing power*.

**Lab 3 — Compromisos y verificación (ZKP)**

*   Publica `c = H(m)` para tres mensajes.
*   Otro equipo verifica sin conocer `m` (revelás al final). Relación con **commit-reveal/MEV**.

**Lab 4 — Data Availability (ZK-Rollups)**

*   Inserta un lote inválido y observa el rechazo del verificador.
*   Debate: efectos de falla de disponibilidad de datos en **retiros** y confianza.

---

## 🧷 Rúbrica de evaluación (100 pts)

| Criterio | Descripción | Pts |
| :--- | :--- | --: |
| Modelado Lightning | Ruteo correcto, análisis de capacidad/costos | 25 |
| Experimentos & Métricas | Tablas/gráficas, repetibilidad, interpretación | 20 |
| ZKP/Hash | Comprensión de compromiso/verificación y límites | 15 |
| ZK-Rollups | Flujo batch-prueba-verificación y análisis de fallas | 15 |
| Integración TradFi/DeFi | AMMs, MEV, regulación conectados a ejecución | 15 |
| Documentación | Informe claro + capturas/enlaces a simuladores | 10 |

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

*   Peso de arista: `w(u,v) = base_fee_msat + amount_msat * ppm / 1e6`.
*   Poda por **capacidad direccional**: si `cap(u,v) < amount_msat`, descartar.
*   Implementación típica: **cola de prioridad** (min-heap) sobre costo acumulado.
*   Extensiones: penalización por **confiabilidad**, **multi-criterio** (costo-vs-hops/latencia), *retries* probabilísticos.

**ZKP (esqueleto formal):**

*   *Completeness* (acepta si verdad), *Soundness* (difícil engañar), *Zero-Knowledge* (no filtra info del testigo).
*   Familias: Σ-protocols, zk-SNARKs (setup confiable), zk-STARKs (sin setup; pruebas más grandes).

**ZK-Rollups:**

*   Pipeline: usuario → **sequencer** → *batch* → **validity proof** → **verificador L1** → actualización de estado.
*   Riesgos: *data availability*, censura del sequencer, tiempos de retiro.

---

## 🔁 Conexión curricular

*   **Desde U3/U4**: plataformas DeFi, costos y latencia → aquí bajamos a **algoritmos** y **pruebas**.
*   **Hacia U5**: *trading* y gestión de riesgo; lo aprendido (costos, latencia, MEV) se traduce en **slippage**, *fills* y riesgo operativo.

---

## 🧩 Checklist rápido

*   [ ] Obtengo rutas válidas para `monto=500k msat` en ≥80% de instancias.
*   [ ] Entiendo cómo `ppm` y `base_fee` cambian el **costo marginal**.
*   [ ] Puedo explicar por qué `H(m)=c` permite verificación sin revelar `m`.
*   [ ] Describo el flujo de una tx en **ZK-Rollup** y qué se publica en L1.
*   [ ] Relaciono **AMMs/MEV/regulación** con ejecución y diseño de incentivos.

---

## 🤝 Contribuciones & buenas prácticas

*   PRs/Issues: enlaces relativos, sin secretos/llaves, respeto de licencias.
*   Nombres de archivo: evitá renombrar; si lo hacés, actualizá todos los enlaces.
*   Para clases: abrir en **pantalla completa**; si el SVG se ve vacío, **“Generar red”** → **“Ejecutar Dijkstra”**.

---
