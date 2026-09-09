# Unidad 1 · Blockchain y smart contracts en los negocios

Unidad experimental de **Blockchain y Finanzas Descentralizadas**. La arquitectura de aprendizaje combina material completo, lectura por capítulos, comparación de plataformas, casos sectoriales y nueve laboratorios interactivos organizados mediante una guía que exige **predicción → experimento → falla → explicación → transferencia**.

## Accesos principales

- `index.html` — portal completo de la unidad.
- `visor.html` — visor de 18 páginas + guía original + PDF + Google Slides.
- `laboratorios-guia.html` — **guía interactiva de los 9 laboratorios**.
- `desarrollo.html` — lectura accesible por 15 capítulos.
- `comparador.html` — Bitcoin, Ethereum, Litecoin, Hyperledger Fabric y Corda.
- `casos.html` — aplicaciones sectoriales y discusión.
- `glosario.html` — 40 términos con ejemplos y límites.
- `evaluacion.html` — 70 preguntas explicadas, 14 categorías.

## Qué cambia en la nueva guía de laboratorios

Los simuladores ya no se presentan como nueve demos independientes. `laboratorios-guia.html` los convierte en estaciones experimentales con un **pasaporte local** por laboratorio:

1. **Predicción:** el estudiante declara qué espera antes de ejecutar.
2. **Experimento base:** sigue una secuencia con una variable controlada.
3. **Falla/caso límite:** provoca revert, borde, dato falso o cambio de arquitectura.
4. **Explicación causal:** debe explicar por qué cambió el resultado.
5. **Transferencia:** aplica el concepto a un problema de negocio.

Cada estación incluye además: hipótesis falsificable, objetivos, qué observar, límite del modelo, pregunta de transferencia y —en **Modo docente**— respuesta esperada, error conceptual frecuente, intervención sugerida y evidencia de aprendizaje.

## Tres rutas

| Ruta | Laboratorios | Uso recomendado |
|---|---|---|
| **Esencial** | 01 → 06 → 08 → 09 | Una sesión de 45–55 min para captar integridad, reglas, arquitectura y oráculos. |
| **Técnica completa** | 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 | Recorrido acumulativo de 100–120 min. |
| **Negocios / Fintech** | 03 → 06 → 07 → 08 → 09 | Estado, derechos, decisión de arquitectura y datos externos. |

El progreso y las notas se guardan **solo en `localStorage` del navegador**; no se envían a un servidor y no sustituyen la evaluación institucional.

## Los nueve laboratorios

| Nº | Laboratorio | Concepto principal | Falla/caso límite recomendado |
|---:|---|---|---|
| 01 | Hash & Avalanche | SHA-256, Hamming, integridad | confundir distancia de hash con similitud semántica |
| 02 | Merkle Proof | raíz y prueba de inclusión | mutar una hoja y comparar root |
| 03 | UTXO vs Account | representación del estado | fondos distintos en ambos modelos |
| 04 | EVM State Explorer | pipeline y revert | transferencia con saldo insuficiente |
| 05 | Gas Economics | costo de recursos | escrituras 0 vs 5; no usar como cotización real |
| 06 | Smart Contract State Machine | roles, estados e invariantes | actor incorrecto y orden inválido |
| 07 | Tokenization Designer | activo, derecho, custodia | transferencia abierta vs restricciones reales |
| 08 | ¿Qué registro necesita el negocio? | arquitectura | aceptar administrador único y observar cambio |
| 09 | Seguro y oráculos | dato, reserva y riesgo de base | 120/130, 30/31, 90/100 y dato falso autorizado |

## Mapa conceptual

`DATO → HASH → COMPROMISO → TRANSACCIÓN → ESTADO → EJECUCIÓN → COSTO → REGLA → DERECHO → ARQUITECTURA → DATO EXTERNO → DECISIÓN`

La secuencia evita cuatro confusiones frecuentes:

- **Hash ≠ verdad del dato.**
- **Consenso ≠ calidad del oráculo.**
- **Smart contract ≠ comprensión del acuerdo comercial.**
- **Token ≠ derecho sobre el subyacente sin un vínculo operativo/jurídico verificable.**

## Caso integrador final

La guía termina con un escenario hipotético de **exportador + operador logístico + banco + aseguradora**. El estudiante debe justificar diez decisiones: fricción medida, actores, evidencia on/off-chain, Merkle, modelo de estado, roles e invariantes, oráculo, financiación, comparación de arquitecturas y una condición de abandono.

La recomendación final debe ser falsificable: debe explicar **qué evidencia haría cambiar de arquitectura**.

## Estructura técnica relevante

```text
u01-fundamentos-smart-contracts/
├── index.html
├── laboratorios-guia.html
├── visor.html
├── desarrollo.html
├── guia-estudio.html
├── comparador.html
├── casos.html
├── glosario.html
├── evaluacion.html
├── data/
│   ├── labs-guide.js
│   ├── labs-guide-2.js
│   ├── labs-guide-3.js
│   ├── glosario.js
│   └── questions-01.js ... questions-06.js
├── assets/
│   ├── lab-guide.css
│   ├── lab-guide.js
│   ├── u01.css
│   ├── u01.js
│   ├── visor.css / visor.js
│   ├── decision.js
│   └── seguro.js
├── simuladores/
│   ├── 01-hash-lab.html
│   ├── 02-merkle-lab.html
│   ├── 03-utxo-account.html
│   ├── 04-evm-explorer.html
│   ├── 05-gas-lab.html
│   ├── 06-smart-contract-lab.html
│   ├── 07-tokenization-designer.html
│   ├── 08-decision-arquitectura.html
│   └── 09-seguro-oraculo.html
└── materiales/
    ├── unidad-1-desarrollo-completo.pdf
    ├── capitulos.json
    ├── documentos.json
    └── config.js
```

## Google Slides

La presentación nativa de Google Slides de la Unidad 1 está conectada mediante `materiales/config.js`. El visor normaliza enlaces compartidos de Google Slides y conserva el PDF local como alternativa. La política de permisos de la presentación se administra desde Google Drive/Slides.

## Uso docente sugerido (75–90 min)

- 10 min — pregunta rectora y predicción.
- 15 min — demostración de un caso base.
- 25 min — exploración en parejas con una variable por vez.
- 15 min — falla deliberada/caso límite.
- 10 min — puesta en común centrada en causas.
- 10 min — transferencia a un caso real.

## Validación

Ejecutar desde el repositorio:

```bash
node unidades/u01-fundamentos-smart-contracts/validate.mjs
```

El validador comprueba recursos obligatorios, enlaces locales, IDs, sintaxis JavaScript, 9 laboratorios, datos de la guía, 70 preguntas, 14 categorías, 40 términos y activos del visor.

## Alcance

Los laboratorios son **modelos didácticos**. No sustituyen documentación de protocolo, estándares, auditorías, asesoramiento jurídico ni pruebas de producción. Los parámetros simplificados deben interpretarse como instrumentos para razonar sobre causalidad, supuestos y límites.
