# Migración de la Unidad 3 · Ethereum

## Decisión

Se insertó una Unidad 3 autónoma sobre Ethereum y se desplazaron, sin eliminar su contenido, las unidades históricas U3–U6 a U4–U7.

| Ruta anterior | Ruta canónica nueva |
|---|---|
| `u03-iot-ia-metaverso` | `u04-iot-ia-metaverso` |
| `u04-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups` | `u05-algoritmos-criptografia-defi-dijkstra-lightning-zkp-zkrollups` |
| `u05-indicadores-trading` | `u06-indicadores-trading` |
| `u06-python-blockchain-analytics` | `u07-python-blockchain-analytics` |

## Compatibilidad

- Cada HTML de las rutas históricas es una redirección estática con `canonical` hacia la ubicación nueva.
- Los directorios históricos tienen un `index.html` de redirección.
- El notebook LSTM conserva una copia en la ruta antigua porque Colab necesita el archivo real y no interpreta una redirección HTML como notebook.
- Los binarios grandes y recursos canónicos permanecen una sola vez, salvo esa excepción explícita de compatibilidad.
- Tres HTML idénticos detectados en la auditoría se sustituyeron por redirecciones hacia sus copias canónicas: dos variantes de Metaverso dentro de U4 y la lectura de Lightning consolidada en U5.

## U3 Ethereum

- 6 masters PPTX y 6 PDF completos.
- 6 miniaturas WebP y un manifest `decks.json`.
- 12 laboratorios autocontenidos.
- Glosario de 88 conceptos y cuestionario de 30 preguntas.
- Copias importadas a Google Slides verificadas en conteo y portada. Su acceso se marca como `restricted` hasta que el propietario habilite “cualquier persona con el enlace”.

## Verificación

El script `scripts/validate-static-site.mjs` comprueba manifests, archivos de U3, rutas relativas, identificadores HTML duplicados y redirecciones. Las validaciones específicas de M0, U1 y U2 siguen ejecutándose por separado.
