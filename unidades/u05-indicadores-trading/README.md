# U5 — Estrategias de Trading y Gestión de Riesgo en DeFi: AMMs, Slippage, Liquidaciones y Scalping

[![Unidad](https://img.shields.io/badge/Unidad-5-blueviolet)](#)
[![Dominio](https://img.shields.io/badge/%C3%A1rea-Sistemas%20Financieros%20Digitales-0b7285)](#)
[![Interactividad](https://img.shields.io/badge/recursos-HTML5-green?logo=HTML5)](#)

> **Vista previa** · Simulación Profesional de una Estrategia de Scalping Algorítmico <img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/simulacion.gif" alt="Simulación Riesgo DeFi" width="900"/>

**Carpeta de la unidad (GitHub):**
`/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/`

---

## 🎯 Objetivos de aprendizaje

*   **Modelar** el impacto del **slippage** en Automated Market Makers (AMMs) y su relación con la profundidad de la liquidez.
*   **Calcular y visualizar** la **Pérdida Impermanente (Impermanent Loss)** para un proveedor de liquidez (LP) en un pool `x·y=k`.
*   **Analizar** los mecanismos de **préstamos colateralizados (lending)** y los umbrales de **liquidación** forzosa.
*   **Comprender** la microestructura de mercado y la mecánica de las estrategias de **scalping** de alta frecuencia.
*   **Evaluar** la viabilidad de una estrategia algorítmica mediante **métricas de performance** profesionales (Sharpe, Drawdown, Expectancy).
*   **Identificar** los principales vectores de riesgo en DeFi: **riesgo de mercado**, **riesgo de contrato inteligente** y **riesgo operativo**.

## 🗺️ Recursos de la unidad (HTML interactivos)

### Módulo 1: Estrategias de Mercado y Riesgo en AMMs

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Dominando el Trading de Criptomonedas** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía completa que abarca desde las estrategias de trading clásicas (Scalping, Day/Swing Trading) hasta la gestión de riesgo y la psicología del trader (Stop-Loss, FOMO/FUD). Introduce conceptos avanzados como el trading algorítmico con Machine Learning (LSTM) y Reinforcement Learning, y finaliza con el análisis de sentimiento del mercado a través de herramientas como el Fear & Greed Index.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Dominando%20el%20Trading%20de%20Criptomonedas.html) |
| **Calculadora Interactiva de Slippage** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una herramienta visual para entender el slippage. Permite a los usuarios definir la liquidez de un pool de AMM (ej. ETH/DAI) y simular el impacto de órdenes de compra/venta de distintos tamaños. Muestra gráficamente cómo el precio de ejecución se desvía del precio de mercado a medida que aumenta el tamaño de la orden, cuantificando el costo del slippage.</p></details> | [![Abrir Calculadora](https://img.shields.io/badge/Calculadora-Interactiva-blue?style=for-the-badge&logo=javascript)](https://#LINK_PARA_REEMPLAZAR_2) |
| **Simulador de Pérdida Impermanente (IL)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una simulación interactiva que modela el P&L (Profit and Loss) de un proveedor de liquidez. Los usuarios pueden establecer una posición inicial, simular cambios en el precio de los activos y comparar el valor de su inversión en el pool de liquidez frente al valor que tendrían si simplemente hubieran mantenido los activos (HODL). Es clave para visualizar el concepto de Impermanent Loss.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_IL-Interactivo-blue?style=for-the-badge&logo=javascript)](https://#LINK_PARA_REEMPLAZAR_3) |

---

### Módulo 2: Riesgo en Protocolos de Préstamos y Derivados

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Riesgos Sistémicos en DeFi** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía completa que clasifica y explica los riesgos inherentes a DeFi. Cubre el riesgo de mercado (volatilidad), de crédito (incumplimiento en préstamos under-collateralized), de contratos inteligentes (bugs, exploits), de liquidación (cascadas), de oráculos (manipulación de precios) y operativo (fallas de gobernanza).</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_Riesgos-HTML-blueviolet?style=for-the-badge&logo=html5)](https://#LINK_PARA_REEMPLAZAR_4) |
| **Simulador de Préstamos y Liquidaciones** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una demo interactiva que simula un protocolo de préstamos como Aave o Compound. Los usuarios pueden depositar un colateral, tomar un préstamo y observar cómo su "Factor de Salud" (Health Factor) cambia con la volatilidad del mercado. Permite visualizar el umbral de liquidación y el impacto de una liquidación forzosa en su posición.</p></details> | [![Abrir Demo](https://img.shields.io/badge/Demo_Lending-Interactiva-green?style=for-the-badge&logo=javascript)](https://#LINK_PARA_REEMPLAZAR_5) |

---

### Módulo 3: Trading de Alta Frecuencia y Scalping

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Scalping en Criptomonedas** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía exhaustiva que cubre todos los aspectos del scalping. Explora los fundamentos de la microestructura del mercado (liquidez, spread), la mecánica de la estrategia (marcos temporales, objetivos), las herramientas (indicadores, bots), la gestión de riesgo (stop loss, apalancamiento) y la crucial psicología del trader de alta frecuencia.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_Scalping-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_Teor%C3%ADa.html) |
| **Simulador Básico de Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un simulador interactivo para entender los fundamentos de una estrategia de "captura de spread". Permite al usuario ajustar parámetros clave del mercado (volatilidad, spread) y de la estrategia (comisiones, stop loss, probabilidad de fill) para observar visualmente el impacto en el PNL y el comportamiento del algoritmo en un gráfico de precios en tiempo real.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Básico-Interactivo-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Simulador_Simulaci%C3%B3n%20de%20Scalping.html) |
| **Análisis del Simulador Básico** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía de interpretación para el simulador básico. Desglosa cada parámetro, métrica y gráfico, explicando cómo diagnosticar el rendimiento de la estrategia. Utiliza una analogía intuitiva ("revendedor de entradas") para dejar claro por qué los costos de salida y la baja probabilidad de ejecución pueden hacer que una estrategia de scalping fracase.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Análisis-HTML-informational?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_Analisis_simulador.html) |
| **Simulador Profesional de Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un dashboard de backtesting avanzado que simula una estrategia de scalping con un modelo de precios más realista (reversión a la media, saltos). Proporciona un log de operaciones detallado que explica cada decisión del algoritmo, un libro de órdenes L1 y, lo más importante, calcula métricas de rendimiento profesionales como Sharpe Ratio, Max Drawdown y Expectancy.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Pro-Interactivo-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_Simulador_Profesional.html) |
| **Análisis del Simulador Profesional** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía de análisis que enseña a interpretar los resultados del simulador profesional como lo haría un fondo de inversión. Explica en detalle cada métrica de performance (Hit Rate, Sharpe, Drawdown), el log de operaciones y cómo realizar un diagnóstico completo para determinar si una estrategia es viable en el mundo real.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Análisis_Pro-HTML-informational?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_An%C3%A1lisis%20del%20Simulador%20Profesional%20de%20Scalping.html) |
| **Glosario de Términos de Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un glosario exhaustivo y navegable con todos los conceptos clave para el trading de alta frecuencia. Define en detalle términos como Apalancamiento, Flujo de Órdenes, Liquidación, Maker/Taker, Slippage, Spread y VWAP, convirtiéndose en una referencia esencial para la unidad.</p></details> | [![Abrir Glosario](https://img.shields.io/badge/Glosario-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_glosario.html) |
| **Cuestionario: Preguntas Frecuentes sobre Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un documento interactivo que responde a las diez preguntas más importantes sobre scalping. Aclara dudas fundamentales como la diferencia con el day trading, el impacto de las comisiones y la liquidez, el uso correcto del apalancamiento y por qué la psicología es un factor determinante para el éxito en esta disciplina.</p></details> | [![Abrir Cuestionario](https://img.shields.io/badge/Cuestionario-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/recursos/Scalping_Cuestionario.html) |

---

## 📚 Marco conceptual (TL;DR académico)

### 1) Arbitraje y Eficiencia de Mercado

*   **Ineficiencias**: los precios entre AMMs y CEXs divergen, creando oportunidades de **arbitraje**.
*   **Slippage**: es el costo implícito del arbitraje y un factor limitante. Las operaciones de arbitraje contribuyen a la eficiencia del mercado.
*   **MEV**: el arbitraje es una fuente principal de MEV. El ordenamiento de transacciones (front-running, sándwiches) afecta la rentabilidad.

### 2) Riesgo de Proveedor de Liquidez (LP)

*   **Impermanent Loss (IL)**: es el costo de oportunidad de proveer liquidez frente a HODL. Es una función de la divergencia de precios de los activos en el pool.
*   **Rentabilidad LP**: `Ingresos (fees) - IL`. La provisión de liquidez es rentable solo si las comisiones acumuladas superan la pérdida impermanente.

### 3) Riesgo de Crédito y Liquidación

*   **Sobrecolateralización**: principal mecanismo de mitigación de riesgo de crédito en DeFi. `Valor del Colateral > Valor del Préstamo`.
*   **Umbral de Liquidación**: si `Valor del Colateral / Valor del Préstamo` cae por debajo de este umbral, el colateral se vende para pagar la deuda, incurriendo en una penalización.

### 4) Microestructura y Scalping Algorítmico

*   **Edge**: la ventaja del scalper reside en explotar el **spread** y micro-ineficiencias. Esta ventaja es aniquilada por **comisiones, slippage y latencia**.
*   **Métricas Clave**: la viabilidad no se mide por ganancias, sino por **Sharpe Ratio** (retorno ajustado a riesgo), **Max Drawdown** (riesgo de ruina) y **Expectancy** (ganancia/pérdida promedio por trade).

---

## 🔍 ¿Qué hace cada simulador?

### A) **Simulador Básico de Scalping**

*   **Ejecuta** una estrategia simple de "captura de spread" (compra en el bid, vende en el ask).
*   **Permite** modificar parámetros del mercado (volatilidad) y de la estrategia (fees, stops).
*   **Visualiza** en tiempo real el PNL y los puntos de ejecución (fills) para un diagnóstico visual inmediato.

### B) **Simulador Profesional de Scalping**

*   **Modela** un mercado más realista con reversión a la media.
*   **Proporciona** un log detallado que explica las decisiones del algoritmo (cancelaciones, stops, fills).
*   **Calcula** métricas de performance de nivel institucional (Sharpe, Drawdown) para evaluar objetivamente si la estrategia es rentable a largo plazo.

---

## 🧰 Guía de uso rápido

1.  Abre la **`Calculadora de Slippage`** → Define liquidez (ej. 10M USD) → Simula un swap de 100k USD y observa el impacto.
2.  Abre el **`Simulador Básico de Scalping`** → Inicia la simulación y observa cómo los stops (salidas Taker costosas) impactan negativamente el PNL.
3.  Abre el **`Simulador Profesional de Scalping`** → Ejecuta una simulación → Analiza las métricas: un Sharpe negativo y un Hit Rate bajo indican una estrategia no viable.

---

## 🧪 Laboratorios guiados

**Lab 1 — Slippage vs. Profundidad**

*   Para un swap fijo de 50,000 USD, mide el slippage en pools con 1M, 5M, 10M y 50M de liquidez total.
*   Grafica `Liquidez (X) vs. Slippage % (Y)`. Discute la relación no lineal.

**Lab 2 — El Costo de las Comisiones Taker (Scalping)**

*   En el **Simulador Básico**, ejecuta dos simulaciones: una con `Taker Fee = 1 bps` y otra con `Taker Fee = 8 bps`.
*   Compara las curvas de PNL y explica numéricamente por qué las salidas por stop loss son tan destructivas para la rentabilidad.

**Lab 3 — Gestión de Colateral**

*   En el simulador de préstamos, determina el "crash" de precio máximo que tu posición puede soportar con un LTV inicial del 80% vs. un LTV del 40%.
*   Define una política de "re-colateralización" (cuándo y cuánto añadirías).

**Lab 4 — Viabilidad de Estrategia (Scalping Pro)**

*   En el **Simulador Profesional**, intenta encontrar una combinación de parámetros (volatilidad, spread, fees) que resulte en un **Sharpe Ratio positivo** y un **Expectancy positivo**.
*   Documenta tus hallazgos y explica qué condiciones de mercado son necesarias para que la estrategia funcione.

---

## 🧷 Rúbrica de evaluación (100 pts)

| Criterio | Descripción | Pts |
| :--- | :--- | --: |
| Modelado de Microestructura | Análisis de slippage, IL y mecánicas de scalping | 30 |
| Gestión de Riesgo (Lending/Scalping) | Cálculo de umbrales de liquidación y uso de stop loss | 25 |
| Análisis de Performance Algorítmica | Interpretación correcta de Sharpe, Drawdown, Expectancy | 20 |
| Conexión con Ecosistema | Relacionar conceptos con MEV, oráculos y comisiones | 15 |
| Documentación | Informe claro + capturas/enlaces a simuladores | 10 |

---

## 🧱 Estructura del directorio

```bash
u05-estrategias-trading-gestion-riesgo-defi-amm-slippage-liquidaciones/
├── README.md
├── recursos/
│   ├── Dominando_el_Trading_de_Criptomonedas.html
│   ├── Scalping_Teoría.html
│   ├── Scalping_glosario.html
│   ├── Scalping_Cuestionario.html
│   ├── Simulador_Simulación_de_Scalping.html
│   ├── Scalping_Analisis_simulador.html
│   ├── Scalping_Simulador_Profesional.html
│   ├── Scalping_Análisis_del_Simulador_Profesional_de_Scalping.html
│   └── ... (otros simuladores y guías)
└── ...
```

---

## 🔁 Conexión curricular

*   **Desde U4**: los costos de ejecución y la latencia (analizados en L2s/Rollups) se manifiestan aquí como **slippage**, oportunidades de **MEV** y la batalla por milisegundos en el **scalping**.
*   **Hacia U6**: *valoración de activos digitales y gobernanza*; los modelos de riesgo y los mecanismos de liquidación de esta unidad son fundamentales para entender cómo se valora la seguridad de un protocolo y cómo las decisiones de gobernanza (ej. ajustar LTVs) impactan su estabilidad.
