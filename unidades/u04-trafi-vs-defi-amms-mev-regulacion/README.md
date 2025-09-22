# U5 — Trading Crypto · Indicadores, Estrategias y Gestión de Riesgo

[![Unidad](https://img.shields.io/badge/Unidad-5-blueviolet)](#)
[![Ethereum](https://img.shields.io/badge/base-Ethereum-3C3C3D?logo=ethereum&logoColor=white)](#)
[![Interactividad](https://img.shields.io/badge/recursos-HTML5-green?logo=HTML5)](#)

> **Vista previa** · Ethereum PoS como capa base de mercado  
> <img src="../u04-defi-trafi/etherum.gif" alt="Ethereum PoS" width="900"/>

---

## 🎯 Objetivos

- Entender **indicadores clave** (precio/volumen/volatilidad/on-chain básicos) y su impacto operativo.  
- Diseñar **estrategias de trading** reproducibles (tendencia, reversión, breakout, DCA, grid).  
- Aplicar **gestión de riesgo**: tamaño de posición, *R:R*, *max drawdown*, *stop-loss*, exposición.  
- Conectar fundamentos de red (PoS, *finality*, L2) con **latencia, costos** y ejecución en exchanges.

---

## 🗺️ Contenidos y recursos

> Los HTML están en este directorio (o en U4). Abrilos en el navegador.

| Recurso / Descripción | Enlace |
| --- | --- |
| **Teoría: Ethereum — arquitectura, consenso, tokens y costos**<br><sub>Base técnica para entender *fees*, *finality* y su efecto en trading/custodia.</sub> | [`../u04-defi-trafi/Etherum.html`](../u04-defi-trafi/Etherum.html) |
| **Simulador: PoS de Ethereum (interactivo)**<br><sub>Slots/epochs, LMD-GHOST, FFG, penalizaciones, MEV/PBS, blobs.</sub> | [`../u04-defi-trafi/Etherum_simulacion.html`](../u04-defi-trafi/Etherum_simulacion.html) |
| **Análisis: Ethereum en el Metaverso**<br><sub>Contexto de activos (ERC-20/721/1155) y economías digitales.</sub> | [`../u04-defi-trafi/Etherum-metaverso.html`](../u04-defi-trafi/Etherum-metaverso.html) |
| **Opcional: Lightning Network (Bitcoin L2)**<br><sub>Canales/HTLCs, ruteo y comisiones como analogía de costos/latencia.</sub> | [`../u04-defi-trafi/Teoría-ligthling.html`](../u04-defi-trafi/Teor%C3%ADa-ligthling.html) |

---

## 📚 TL;DR — Lo esencial

- **Indicadores**:  
  - **Precio/Volumen** (estructura de mercado, *breakouts*, confirmación).  
  - **Volatilidad** (ATR, σ) para ajustar *stops* y *position sizing*.  
  - **Tendencia** (EMA/SMA, MACD) vs **Reversión** (RSI/BB).  
  - **On-chain básicos** (actividad, *gas/fees*, *finality*): contexto de fricción/latencia.
- **Ejecución**: L2 y blobs ↓ costos; *finality* afecta riesgo de liquidación/settlement.  
- **Riesgo primero**: define **pérdida máxima por trade** (ej. 0.5–1.5%), *risk:reward* ≥ 1:1.5 y limita correlación.

---

## 🧰 Playbook de estrategias (plantillas)

> No es consejo financiero. Usá estos esquemas como base de estudio/backtesting.

### 1) Seguimiento de Tendencia (EMA x2)
- **Idea**: entrar con cruce EMA rápida>lenta + confirmación de volumen.  
- **Stop**: ATR·k por debajo del swing. **TP** por tramos (1R/2R).  
- **Mejor en**: activos con momentum y liquidez.

### 2) Reversión a la Media (RSI/BB)
- **Idea**: sobreventa/sobrecompra + toque de banda → vuelta a media.  
- **Stop**: fuera de la banda + *time stop*. **TP**: media o 1–1.5R.  
- **Cuidado**: en fuertes tendencias “lo barato puede seguir barato”.

### 3) Breakout de Rango
- **Idea**: consolidación → ruptura con volumen.  
- **Entrada**: *stop orders* sobre el rango. **Invalidación**: vuelta al rango.  
- **TP**: proyección del rango (medida en % o ATRs).

### 4) DCA / Grid (gestión de inventario)
- **Idea**: promediar precio o reequilibrar por niveles.  
- **Riesgo**: definir **máximo capital** y cortar si cambia el *regime*.

---

## 🧷 Gestión de riesgo (cheat sheet)

- **Sizing**: `posición = (riesgo_$ por trade) / (stop_$)`; el stop se calibra con **ATR**.  
- **Límites**: pérdida diaria/semana (ej. 3R/6R), *cooldown* tras 2–3 pérdidas.  
- **Diversificación**: evita alta correlación (ALT/BTC/L2 del mismo ecosistema).  
- **Operativa**: plan antes del click (setup, invalidación, ejecución, salida parcial).  
- **Diario de trading**: hipótesis, captures, métricas (winrate, R promedio, *expectancy*).

---

## ⚙️ Mini-lab (pasos guiados)

1) **Explora el simulador PoS** (`Etherum_simulacion.html`)  
   - Observá *justification/finality* y cómo el **PBS/MEV** podría impactar tiempos de bloque.  
   - Conectá esto con riesgo de **slippage** y ejecución en momentos de alta congestión.

2) **Arma una estrategia mínima**  
   - Elegí 1 activo y 1 *timeframe*. Define entradas/salidas, stop (ATR), *take profits* y riesgo fijo por trade.

3) **Backtest manual (rápido)**  
   - 30–50 trades “a vela cerrada” para evitar *look-ahead*.  
   - Registra *R* por trade, curva de capital y *drawdown*.

4) **Informe corto**  
   - Setup, reglas, métricas clave, mejoras y límites (p. ej., evita mercado lateral con filtro de tendencia).

---

## 🧱 Requisitos y uso

- Sin instalación: abrí los HTML en un navegador moderno.  
- Para clases/demos: *fullscreen* + zoom 110–125%.  
- Mantener **rutas relativas** entre U4 y U5 (este README referencia archivos de U4).

### Estructura sugerida

```bash
unidades/
├── u04-defi-trafi/
│   ├── Etherum.html
│   ├── Etherum_simulacion.html
│   ├── Etherum-metaverso.html
│   ├── Teoría-ligthling.html
│   └── etherum.gif
└── u05-trading-estrategias/
    └── README.md   # este archivo
✅ Rúbrica personal (para autoevaluarte)
Criterio	Descripción	Puntos
Indicadores	Selección y parametrización (tendencia/volatilidad/volumen/on-chain)	25
Estrategia	Reglas claras de entrada/salida/invalidación + lógica de mercado	30
Riesgo	Sizing, stops, límites de pérdida, drawdown controlado	25
Backtest	Muestra mínima de trades, métricas y conclusiones	10
Documentación	README + capturas y plan de mejora	10
Total		100

🔐 Buenas prácticas
Claves y custodia: nunca subas seed phrases ni llaves privadas; usa .env/hardware wallets si operás on-chain.

Datos y sesgos: evitá data snooping, peeking a vela abierta y sobreoptimización.

Disciplina: seguí el plan; cortar pérdidas es una característica, no un bug.

📎 Referencias mínimas
Documentación oficial de Ethereum (PoS, EVM, MEV/PBS, L2, EIP-4844).

Textos clásicos de gestión de riesgo, position sizing y psicología del trading.

Material de U4 para conectar infraestructura ↔ ejecución ↔ costos.

🔁 Conexión con otras unidades
U4 → U5: de productos DeFi y costos de red a ejecución y estrategias.

Próximo: DAOs y tokenomics (gobernanza, incentivos y sostenibilidad de sistemas de trading/tesorerías).
