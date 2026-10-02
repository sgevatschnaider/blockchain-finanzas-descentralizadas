# Blockchain y Finanzas Descentralizadas

Campus docente de nivel posgrado elaborado por el profesor **Sergio Gevatschnaider**. El repositorio combina presentaciones, lecturas, laboratorios interactivos, evaluaciones y código reproducible.

[![CI Foundry](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml/badge.svg)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-foundry.yml)
[![CI Python](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml/badge.svg)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-python.yml)
[![Sitio estático](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-static-site.yml/badge.svg)](https://github.com/sgevatschnaider/blockchain-finanzas-descentralizadas/actions/workflows/ci-static-site.yml)

## Acceso rápido

- **[Guía integral para el examen · 50 preguntas desarrolladas](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/guia-examen/)**
- [Campus web](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/)
- [M0 · Clase inicial](unidades/u00-clase-inicial-blockchain-negocios/)
- [U1 · Fundamentos y Smart Contracts](unidades/u01-fundamentos-smart-contracts/)
- [U2 · Bitcoin, consenso y seguridad](unidades/u02-criptoactivos-consenso-seguridad/)
- [U3 · Ethereum — abrir campus interactivo](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u03-ethereum/)
- [U4 · IoT, IA/ML y Metaverso](unidades/u04-iot-ia-metaverso/)
- **[U5 · Abrir campus mejorado de ZKP](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/?v=20260929-2)** · [Cueva de Alí Babá](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u05-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/recursos/ZPK_Simulador_hash.html?v=20260929-2) · [Archivos de la unidad](unidades/u05-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups/)
- [U6 · Indicadores y trading](unidades/u06-indicadores-trading/)
- [U7 · Python y Blockchain Analytics](unidades/u07-python-blockchain-analytics/)
- **[U8 · Redes neuronales, LSTM y GNN — abrir unidad](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/)** · [Presentaciones revisadas](https://sgevatschnaider.github.io/blockchain-finanzas-descentralizadas/unidades/u08-redes-neuronales-lstm-gnn-blockchain/materiales/)

## Ruta didáctica

| Etapa | Núcleo | Evidencia principal |
|---|---|---|
| M0 | Blockchain, negocios y confianza | Portal, presentaciones, simulaciones, glosario y evaluación |
| U1 | Redes, casos y Smart Contracts | Laboratorios, lectura, cuestionario y notebooks |
| U2 | Bitcoin, criptoactivos, consenso y seguridad | Presentaciones, 14 simulaciones y recursos de estudio |
| U3 | Ethereum | 6 presentaciones, 12 laboratorios, glosario de 88 conceptos y 30 preguntas |
| U4 | IoT, IA/ML y Metaverso | Casos, teoría y simuladores |
| U5 | Dijkstra, Lightning, ZKP y ZK-rollups | Laboratorios algorítmicos y criptográficos |
| U6 | Trading y gestión del riesgo | Simuladores, guías y notebook LSTM |
| U7 | Python y datos on-chain | Código y proyecto de analítica reproducible |
| U8 | Redes neuronales, LSTM y GNN | 5 presentaciones revisadas, 89 diapositivas, notas docentes y proyecto integrador |

La inserción de Ethereum como U3 desplazó las unidades históricas a U4–U7. Se conservan redirecciones en las rutas anteriores y una copia compatible del notebook de trading para no romper enlaces de Colab.

## Estructura

```text
assets/                     estilos y recursos compartidos
guia-examen/                guía integral interactiva del examen
contracts/                  contratos de demostración
cronograma/                 planificación docente
python/                     pruebas y utilidades Python
slides/                     material Marp
unidades/u00-...            M0
unidades/u01-...            U1
unidades/u02-...            U2
unidades/u03-ethereum/      U3
unidades/u04-...            U4
unidades/u05-...            U5
unidades/u06-...            U6
unidades/u07-...            U7
unidades/u08-...            U8
```

## Validación local

```bash
node scripts/validate-static-site.mjs
node scripts/validate-u08.mjs
python -m pytest -q
```

Las validaciones específicas de M0, U1 y U2 permanecen en sus respectivas carpetas. Los PPTX son los masters editables; los PDF son las copias estables para el visor web.

## Contribuciones y licencia

Antes de proponer cambios, consultar [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) y [SECURITY.md](SECURITY.md). La licencia se encuentra en [LICENSE](LICENSE).

