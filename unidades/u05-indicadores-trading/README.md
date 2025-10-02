# U5 — Estrategias de Trading y Gestión de Riesgo en DeFi: AMMs, Slippage, Liquidaciones, Scalping y Day Trading

[![Unidad](https://img.shields.io/badge/Unidad-5-blueviolet)](#)
[![Dominio](https://img.shields.io/badge/%C3%A1rea-Sistemas%20Financieros%20Digitales-0b7285)](#)
[![Interactividad](https://img.shields.io/badge/recursos-HTML5-green?logo=HTML5)](#)

> **Vista previa** · Simulación Profesional de una Estrategia de Scalping Algorítmico <img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/main/unidades/u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/simulacion.gif" alt="Simulación Riesgo DeFi" width="900"/>

**Carpeta de la unidad (GitHub):**
`/unidades/u05-indicadores-trading/`

---

## 🎯 Objetivos de aprendizaje

*   **Comprender** los fundamentos de la tecnología blockchain, los criptoactivos y la dinámica de los mercados centralizados (CEX) y descentralizados (DEX).
*   **Analizar** los mecanismos de **préstamos colateralizados (lending)**, los umbrales de **liquidación** y la **Pérdida Impermanente (Impermanent Loss)**.
*   **Comprender** la microestructura de mercado y la mecánica de las estrategias de **scalping** de alta frecuencia.
*   **Distinguir** las estrategias de **day trading** (breakouts, reversión a la media) de las de scalping, aplicando una gestión de riesgo adaptada a la sesión.
*   **Evaluar** la viabilidad de una estrategia algorítmica mediante **métricas de performance** profesionales (Sharpe, Drawdown, Expectancy).
*   **Implementar y evaluar** un modelo de red neuronal **LSTM** para la predicción de series de precios de criptoactivos.

## 🗺️ Recursos de la unidad (HTML interactivos)

### Módulo 1: Fundamentos del Ecosistema Cripto y Trading

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía: Fundamentos de Criptoactivos y Blockchain** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía introductoria que cubre la definición de criptomonedas, los principios clave de la tecnología blockchain (descentralización, transparencia, seguridad, inmutabilidad), el rol de Bitcoin, Ethereum y las Altcoins, y compara los modelos de exchanges centralizados (CEX) vs. descentralizados (DEX), destacando sus riesgos y beneficios.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Guía_Fundamentos-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Introduccion_Fundamentos%20de%20Criptoactivos%20y%20Blockchain.html) |
| **Guía: Dominando el Trading de Criptomonedas** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Explora el espectro de estrategias de trading clásicas, desde Scalping hasta Position Trading. Profundiza en los pilares esenciales de la gestión de riesgo (Stop-loss, diversificación) y la psicología del trader (FOMO/FUD). Además, introduce conceptos avanzados de trading algorítmico como Machine Learning (LSTM) y Reinforcement Learning.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Guía_Trading-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Introduccion_Dominando%20el%20Trading%20de%20Criptomonedas.html) |
| **Guía: Navegando el Ecosistema Cripto** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Se enfoca en aspectos críticos más allá del trading: prácticas de seguridad (hardware wallets vs. custodia en exchanges), el complejo panorama regulatorio y fiscal internacional, y el futuro del ecosistema, analizando tendencias clave como DeFi, NFTs, Web3, la tokenización de Activos del Mundo Real (RWA) y el auge de las CBDCs.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Guía_Ecosistema-HTML-orange?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Introduccion_Navegando%20el%20Ecosistema%20Cripto.html) |

---

### Módulo 2: Riesgo en Protocolos DeFi

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Simulador de Pérdida Impermanente (IL)** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una simulación interactiva que modela el P&L (Profit and Loss) de un proveedor de liquidez. Los usuarios pueden establecer una posición inicial, simular cambios en el precio de los activos y comparar el valor de su inversión en el pool de liquidez frente al valor que tendrían si simplemente hubieran mantenido los activos (HODL). Es clave para visualizar el concepto de Impermanent Loss.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_IL-Interactivo-blue?style=for-the-badge&logo=javascript)](https://#LINK_PARA_REEMPLAZAR_3) |
| **Simulador de Préstamos y Liquidaciones** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una demo interactiva que simula un protocolo de préstamos como Aave o Compound. Los usuarios pueden depositar un colateral, tomar un préstamo y observar cómo su "Factor de Salud" (Health Factor) cambia con la volatilidad del mercado. Permite visualizar el umbral de liquidación y el impacto de una liquidación forzosa en su posición.</p></details> | [![Abrir Demo](https://img.shields.io/badge/Demo_Lending-Interactiva-green?style=for-the-badge&logo=javascript)](https://#LINK_PARA_REEMPLAZAR_5) |

---

### Módulo 3: Trading de Alta Frecuencia y Scalping

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Scalping en Criptomonedas** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía exhaustiva que cubre todos los aspectos del scalping. Explora los fundamentos de la microestructura del mercado (liquidez, spread), la mecánica de la estrategia (marcos temporales, objetivos), las herramientas (indicadores, bots), la gestión de riesgo (stop loss, apalancamiento) y la crucial psicología del trader de alta frecuencia.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_Scalping-HTML-informational?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Scalping_Teor%C3%ADa.html) |
| **Simulador Básico de Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un simulador interactivo para entender los fundamentos de una estrategia de "captura de spread". Permite al usuario ajustar parámetros clave del mercado (volatilidad, spread) y de la estrategia (comisiones, stop loss, probabilidad de fill) para observar visualmente el impacto en el PNL y el comportamiento del algoritmo en un gráfico de precios en tiempo real.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Básico-Interactivo-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Simulador_Simulaci%C3%B3n%20de%20Scalping.html) |
| **Análisis del Simulador Profesional** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía de análisis que enseña a interpretar los resultados del simulador profesional como lo haría un fondo de inversión. Explica en detalle cada métrica de performance (Hit Rate, Sharpe, Drawdown), el log de operaciones y cómo realizar un diagnóstico completo para determinar si una estrategia es viable en el mundo real.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Análisis_Pro-HTML-informational?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Scalping_An%C3%A1lisis%20del%20Simulador%20Profesional%20de%20Scalping.html) |
| **Glosario y Cuestionario de Scalping** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Dos recursos combinados: un glosario exhaustivo con todos los conceptos clave para el trading de alta frecuencia (Spread, Slippage, VWAP, etc.) y un cuestionario interactivo que responde a las preguntas más importantes sobre la disciplina del scalping.</p></details> | [![Abrir Glosario](https://img.shields.io/badge/Glosario_&_FAQ-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Scalping_glosario.html) |

---

### Módulo 4: Day Trading Intradía

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía Teórica: Day Trading Intradía** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía completa que define el day trading y lo diferencia del scalping y swing trading. Explora los fundamentos del mercado intradía (sesiones, liquidez), las herramientas esenciales (indicadores como VWAP, EMAs) y las estrategias clave como rupturas (breakouts) y reversión a la media. Además, cubre la gestión de riesgo y la psicología necesarias para operar en una sesión.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_Day_Trading-HTML-blue?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/DayTrading_Teoria.html) |
| **Simulador Interactivo de Day Trading** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un simulador interactivo que modela una sesión completa de trading intradía de 8 horas. Permite al usuario observar una estrategia de cruce de medias móviles (EMAs) en un gráfico de precios de 1 minuto. Se pueden configurar parámetros como la volatilidad, comisiones y niveles de Take Profit/Stop Loss para analizar en tiempo real el impacto de las decisiones y la dinámica del mercado en el PNL de la estrategia.</p></details> | [![Abrir Simulación](https://img.shields.io/badge/Simulador_Intradía-Interactivo-green?style=for-the-badge&logo=javascript)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/DayTrading_Simulaci%C3%B3n%20de%20Day%20Trading%20%E2%80%94%20Precio%20%2B%20Reloj%20intrad%C3%ADa.html) |

---

### Módulo 5: Trading Cuantitativo con Inteligencia Artificial

| Recurso Educativo | Enlace Directo |
| :--- | :--- |
| **Guía de Estudio: Redes Neuronales LSTM** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Una guía teórica que desglosa la arquitectura de las redes LSTM. Explica el funcionamiento de sus compuertas de memoria (olvido, entrada, salida), el proceso de preprocesamiento de datos en "ventanas" para series temporales, y presenta un ejemplo de código para construir el modelo. También aborda las limitaciones clave como el sobreajuste y su incapacidad para capturar eventos externos.</p></details> | [![Abrir Guía](https://img.shields.io/badge/Teoría_LSTM-HTML-blueviolet?style=for-the-badge&logo=html5)](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-indicadores-trading/recursos/Estrategia_Lstm_Teor%C3%ADa.html) |
| **Notebook: Predicción de Precios con LSTM** <br><br><details><summary><strong>Resumen:</strong> <em>(clic para expandir)</em></summary><p>Un laboratorio práctico en Google Colab que implementa paso a paso un modelo LSTM para predecir precios de criptoactivos. El notebook guía al usuario a través de la carga de datos, preprocesamiento, construcción del modelo con Keras, entrenamiento y visualización de los resultados de la predicción, aplicando la teoría en un caso real.</p></details> | [![Abrir Notebook](https://img.shields.io/badge/Notebook-Colab-F9AB00?style=for-the-badge&logo=googlecolab)](https://colab.research.google.com/drive/1EzDXEWUiNr49iWrcPKPDMWxmGa-nd5dA?usp=sharing) |

---

## 📚 Marco conceptual (TL;DR académico)

*   **Riesgo de LP (Impermanent Loss)**: Es el costo de oportunidad de proveer liquidez frente a HODL, una función de la divergencia de precios.
*   **Riesgo de Liquidación**: En protocolos de préstamos, ocurre cuando `Valor del Colateral / Valor del Préstamo` cae por debajo de un umbral, forzando la venta del colateral.
*   **Microestructura y Scalping**: El "edge" del scalper (capturar el spread) es una batalla constante contra comisiones, slippage y latencia.
*   **Day Trading (Sesión)**: Se enfoca en capturar movimientos de precios durante una única sesión de mercado, utilizando estrategias como breakouts y reversión a la media, cerrando todas las posiciones antes del cierre del mercado para evitar el riesgo "overnight".
*   **Trading Cuantitativo (LSTM)**: Las redes LSTM modelan dependencias temporales en los precios, pero son vulnerables al sobreajuste y no capturan información exógena.
*   **Evaluación de Estrategias**: La viabilidad de una estrategia algorítmica se mide con métricas como **Sharpe Ratio**, **Max Drawdown** y **Expectancy**.

---

## 🧪 Laboratorios guiados

**Lab 1 — Análisis de Rentabilidad LP (Pérdida Impermanente)**

*   Usa el **Simulador de IL** para un par volátil (ej. WETH/MEMECOIN) y uno estable (USDC/DAI).
*   Simula un cambio de precio del 40% en ambos. Estima qué Tasa de Porcentaje Anual (APR) de comisiones se necesitaría en cada caso para compensar la IL.

**Lab 2 — El Costo de las Comisiones Taker (Scalping)**

*   En el **Simulador Básico de Scalping**, ejecuta dos simulaciones: una con `Taker Fee = 1 bps` y otra con `Taker Fee = 8 bps`.
*   Compara las curvas de PNL y explica numéricamente por qué las salidas por stop loss son tan destructivas.

**Lab 3 — Viabilidad de Estrategia (Scalping Pro)**

*   En el **Simulador Profesional de Scalping**, intenta encontrar una combinación de parámetros (volatilidad, spread, fees) que resulte en un **Sharpe Ratio positivo** y un **Expectancy positivo**.

**Lab 4 — Estrategia Intradía (Day Trading)**

*   En el **Simulador Interactivo de Day Trading**, configura un Take Profit de 20 ticks y un Stop Loss de 10 ticks (ratio 2:1).
*   Ejecuta la simulación completa y anota el PNL final. Luego, invierte los valores (TP de 10, SL de 20) y vuelve a ejecutar. Compara los resultados y explica cómo el ratio Riesgo/Beneficio impacta la viabilidad de la estrategia a lo largo de una sesión.

**Lab 5 — Predicción con LSTM**

*   Ejecuta el **Notebook de Google Colab**. Modifica el número de épocas de entrenamiento (`epochs`) y el tamaño del lote (`batch_size`).
*   Documenta cómo estos cambios afectan la precisión del modelo y el tiempo de entrenamiento. Discute los resultados y las limitaciones observadas.

---

## 🧷 Rúbrica de evaluación (100 pts)

| Criterio | Descripción | Pts |
| :--- | :--- | --: |
| Modelado de Microestructura | Análisis de IL, mecánicas de scalping y estrategias intradía | 25 |
| Gestión de Riesgo (DeFi/Trading) | Cálculo de liquidación, stop loss y ratio Riesgo/Beneficio | 20 |
| Análisis de Performance Algorítmica | Interpretación correcta de Sharpe, Drawdown, Expectancy | 20 |
| Modelado con IA (LSTM) | Comprensión de la arquitectura LSTM y análisis de resultados | 15 |
| Conexión con Ecosistema | Relacionar conceptos con seguridad, regulación y DeFi | 10 |
| Documentación | Informe claro + capturas/enlaces a simuladores | 10 |

---

## 🧱 Estructura del directorio

```bash
u05-indicadores-trading/
├── README.md
├── recursos/
│   ├── Introduccion_Fundamentos de Criptoactivos y Blockchain.html
│   ├── Introduccion_Dominando el Trading de Criptomonedas.html
│   ├── Introduccion_Navegando el Ecosistema Cripto.html
│   ├── Scalping_Teoría.html
│   ├── ... (otros recursos de Scalping)
│   ├── DayTrading_Teoria.html
│   ├── DayTrading_Simulación de Day Trading — Precio + Reloj intradía.html
│   └── Estrategia_Lstm_Teoría.html
└── python/
    └── (Notebooks y scripts de la unidad)
```

---

## 📜 Licencia

Este repositorio y su contenido están bajo la Licencia MIT.

```
Copyright (c) 2025 Sergio Gevatschnaider

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
