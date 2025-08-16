# **Dominando Blockchain y Finanzas Descentralizadas: De la Teoría al Laboratorio**

¡Bienvenido/a al repositorio central de conocimiento y práctica en **Blockchain**, **DeFi** y **Criptografía aplicada**!

Este espacio ha sido diseñado como un compendio exhaustivo para estudiantes, profesionales y entusiastas que buscan no solo comprender, sino **dominar los fundamentos, protocolos, herramientas de desarrollo y aplicaciones financieras**. Desde Bitcoin y Ethereum hasta AMMs, MEV, regulación y *on-chain* analytics, este repositorio ofrece un viaje de aprendizaje **estructurado, práctico y actualizado**.

Explorarás el universo de **Fundamentos de Blockchain y Contratos Inteligentes**, **Criptoactivos y Consenso**, **IoT/IA + on-chain**, **DeFi (AMMs, riesgo, regulación)**, **Trading Cuantitativo**, y **Análisis On-Chain con Python**.

**Nuestra Misión:** Empoderarte con el rigor técnico y las habilidades prácticas para **construir, auditar, analizar y evaluar** soluciones basadas en blockchain en contextos reales de negocio y finanzas.

---

## 🔗 Vista previa del laboratorio

> GIF demostrativo que muestra el flujo y funcionamiento de la cadena de bloques en el laboratorio de este proyecto.

<img src="https://raw.githubusercontent.com/sgevatschnaider/blockchain-finanzas-descentralizadas/b53513b4c8184b9143ff1a30da6c420ac39d3b7a/assets/blockchain%20.gif" alt="Blockchain GIF" width="800">

---

## **Hoja de Ruta del Conocimiento (Índice)**

* [Visión Holística del Repositorio](#visión-holística-del-repositorio)
* [Arquitectura del Repositorio](#arquitectura-del-repositorio)
* [Puesta en Marcha: Guía de Inicio Rápido](#puesta-en-marcha-guía-de-inicio-rápido)
* [Estructura Temática Detallada y Acceso a Módulos](#estructura-temática-detallada-y-acceso-a-módulos)
* [Contratos (carpeta `contracts/`)](#contratos-carpeta-contracts)
* [Fragmentos de Código Ilustrativos](#fragmentos-de-código-ilustrativos)
* [Arsenal de Recursos (Docs, Papers, Herramientas)](#arsenal-de-recursos-docs-papers-herramientas)
* [Directrices para el Aprendizaje Autónomo](#directrices-para-el-aprendizaje-autónomo)
* [Contribuciones y Comunidad](#contribuciones-y-comunidad)
* [Marco Legal y Licencia](#marco-legal-y-licencia)

---

## Visión Holística del Repositorio

Este repo es el **punto de entrada único** para todo el material de la cátedra:

- **Teoría** curada y actualizada (lecturas primarias, estándares criptográficos).
- **Práctica** con *labs*, notebooks y proyectos guiados (Solidity + Python).
- **Calidad**: CI para Python y Foundry, verificación de enlaces, estructura modular.
- **Docencia**: cronograma, objetivos por módulo, rúbricas y recursos.

> **Docente responsable:** Dr. Sergio Gevatschnaider · **Cursada:** Ago–Oct 2025 · Modalidad: Remota + Híbrida

---

## Arquitectura del Repositorio

```text
.
├─ README.md
├─ LICENSE · CODE_OF_CONDUCT.md · CONTRIBUTING.md · SECURITY.md
├─ requirements.txt
├─ assets/
│  └─ blockchain.gif
├─ cronograma/
│  └─ cronograma.md
├─ recursos/
│  ├─ bibliografia.md
│  └─ enlaces-utiles.md
├─ unidades/
│  ├─ unidad-01/README.md
│  ├─ unidad-02/README.md
│  ├─ unidad-03/README.md
│  ├─ unidad-04/README.md
│  ├─ unidad-05/README.md
│  └─ unidad-06/README.md
├─ notebooks/
│  ├─ U5_indicadores_trading.ipynb
│  └─ U6_blockchain_con_python.ipynb
├─ python/
│  ├─ pyproject.toml
│  ├─ src/
│  │  ├─ chain/erc20_events.py
│  │  └─ data/deribit_public.py
│  └─ tests/test_indicadores.py
├─ solidity/
│  ├─ foundry.toml
│  ├─ src/            # (MyToken.sol · MyNFT.sol)
│  └─ test/           # (MyToken.t.sol · MyNFT.t.sol)
└─ contracts/         # contratos listos para usar en Remix (JS VM)
