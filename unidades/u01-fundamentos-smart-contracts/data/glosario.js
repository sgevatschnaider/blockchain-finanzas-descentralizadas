window.U01_GLOSSARY = [
  {
    "term": "Blockchain",
    "category": "Fundamentos",
    "definition": "Registro de bloques enlazados criptográficamente, mantenido bajo reglas compartidas de validación y consenso.",
    "example": "Varias organizaciones verifican el historial de transferencias.",
    "limit": "No vuelve verdadero un dato falso ingresado al sistema.",
    "link": "guia-estudio.html"
  },
  {
    "term": "DLT",
    "category": "Fundamentos",
    "definition": "Tecnología de registro distribuido: familia de sistemas que coordinan registros entre participantes.",
    "example": "Corda permite compartir estados entre las partes pertinentes de una operación.",
    "limit": "No toda DLT replica una cadena global de bloques.",
    "link": "comparador.html"
  },
  {
    "term": "Hash",
    "category": "Fundamentos",
    "definition": "Función determinista que transforma datos en una huella de longitud fija.",
    "example": "SHA-256 permite comparar la huella de dos versiones de una factura.",
    "limit": "No es cifrado reversible ni demuestra quién creó el archivo.",
    "link": "simuladores/01-hash-lab.html"
  },
  {
    "term": "Integridad",
    "category": "Fundamentos",
    "definition": "Propiedad que permite detectar modificaciones respecto de una referencia confiable.",
    "example": "Comparar un documento con su hash previamente registrado.",
    "limit": "Integridad no equivale a veracidad del documento original.",
    "link": "simuladores/01-hash-lab.html"
  },
  {
    "term": "Firma digital",
    "category": "Fundamentos",
    "definition": "Mecanismo criptográfico que permite verificar autorización bajo una clave y detectar cambios en el mensaje firmado.",
    "example": "Una wallet firma una transferencia que los nodos verifican.",
    "limit": "La identidad civil exige un vínculo adicional con la clave.",
    "link": "html/clave.html"
  },
  {
    "term": "Clave privada",
    "category": "Fundamentos",
    "definition": "Secreto criptográfico que permite autorizar operaciones mediante firmas.",
    "example": "El titular de una wallet autoriza una transferencia.",
    "limit": "No debe compartirse con un simulador ni confundirse con una dirección pública.",
    "link": "html/clave.html"
  },
  {
    "term": "Merkle root",
    "category": "Fundamentos",
    "definition": "Hash raíz que compromete un conjunto de hojas y su organización en un árbol.",
    "example": "Una raíz resume hashes de transacciones.",
    "limit": "No permite reconstruir todos los documentos a partir de la raíz.",
    "link": "simuladores/02-merkle-lab.html"
  },
  {
    "term": "Prueba de inclusión",
    "category": "Fundamentos",
    "definition": "Conjunto de hashes y posiciones que permite verificar una hoja contra una raíz conocida.",
    "example": "Un auditor comprueba que una transacción figura en un conjunto.",
    "limit": "No certifica que el hecho comercial descrito sea cierto.",
    "link": "simuladores/02-merkle-lab.html"
  },
  {
    "term": "Transacción",
    "category": "Fundamentos",
    "definition": "Mensaje que propone una operación sometida a las reglas del sistema.",
    "example": "Transferir tokens o invocar una función.",
    "limit": "Emitirla no garantiza su inclusión ni su éxito.",
    "link": "simuladores/04-evm-explorer.html"
  },
  {
    "term": "Estado",
    "category": "Fundamentos",
    "definition": "Datos vigentes con los que se evalúa la siguiente operación.",
    "example": "Saldo bloqueado y situación de un depósito en garantía.",
    "limit": "El historial de transacciones y el estado actual no son lo mismo.",
    "link": "simuladores/06-smart-contract-lab.html"
  },
  {
    "term": "UTXO",
    "category": "Fundamentos",
    "definition": "Salida de una transacción aún no gastada, consumible como entrada en otra operación.",
    "example": "Gastar una salida de 10 creando pago de 3 y cambio de 7, sin comisión en el ejemplo.",
    "limit": "El cambio es una salida nueva; no se resta del UTXO original.",
    "link": "simuladores/03-utxo-account.html"
  },
  {
    "term": "Modelo de cuentas",
    "category": "Fundamentos",
    "definition": "Representación del estado mediante cuentas con saldos y otros atributos.",
    "example": "Una transferencia modifica saldos en el registro.",
    "limit": "Los tokens pueden llevar sus balances dentro del contrato.",
    "link": "simuladores/03-utxo-account.html"
  },
  {
    "term": "Red pública",
    "category": "Redes",
    "definition": "Red cuyo registro o participación se ofrece públicamente según las reglas del protocolo.",
    "example": "Bitcoin permite verificar su historial público.",
    "limit": "Lectura abierta no implica anonimato ni ausencia de reglas.",
    "link": "comparador.html"
  },
  {
    "term": "Red permisionada",
    "category": "Redes",
    "definition": "Red que controla el ingreso o las funciones mediante identidades y políticas.",
    "example": "Un consorcio acredita a bancos y operadores.",
    "limit": "Los participantes autorizados también pueden fallar o coludirse.",
    "link": "comparador.html"
  },
  {
    "term": "Bitcoin",
    "category": "Redes",
    "definition": "Sistema de efectivo electrónico entre pares con validación de gastos y un historial basado en prueba de trabajo.",
    "example": "Transferir BTC bajo condiciones de gasto verificables.",
    "limit": "Sus scripts no equivalen a una EVM de propósito general.",
    "link": "comparador.html"
  },
  {
    "term": "Ethereum",
    "category": "Redes",
    "definition": "Red programable que ejecuta contratos con estado compartido.",
    "example": "Una aplicación establece reglas de depósito y liberación de tokens.",
    "limit": "La ejecución necesita ser activada; el contrato no consulta por sí solo una web.",
    "link": "comparador.html"
  },
  {
    "term": "Litecoin",
    "category": "Redes",
    "definition": "Red de pagos entre pares con moneda nativa LTC.",
    "example": "Comparar una transferencia de LTC con una de BTC.",
    "limit": "Una confirmación más rápida no elimina riesgos operativos ni de mercado.",
    "link": "comparador.html"
  },
  {
    "term": "Hyperledger Fabric",
    "category": "Redes",
    "definition": "Framework para redes permisionadas con identidades, políticas de endoso y lógica de aplicación.",
    "example": "Organizaciones coordinan trazabilidad con acceso diferenciado.",
    "limit": "Hyperledger no es una única moneda o una única red.",
    "link": "comparador.html"
  },
  {
    "term": "Corda",
    "category": "Redes",
    "definition": "Plataforma DLT orientada a transacciones y estados compartidos entre las partes pertinentes.",
    "example": "Dos entidades coordinan un estado de obligación.",
    "limit": "No requiere replicar cada transacción a todos los participantes.",
    "link": "comparador.html"
  },
  {
    "term": "Consenso",
    "category": "Redes",
    "definition": "Reglas para alcanzar acuerdo sobre aspectos del registro bajo supuestos de red y participantes.",
    "example": "Resolver qué gastos se aceptan en el historial.",
    "limit": "No convierte consenso entre máquinas en verdad sobre el mundo físico.",
    "link": "guia-estudio.html"
  },
  {
    "term": "Finalidad",
    "category": "Redes",
    "definition": "Garantía o grado de certeza de que una operación aceptada no será revertida bajo los supuestos del protocolo.",
    "example": "Definir cuándo liberar un bien después del pago.",
    "limit": "Inclusión, confirmación y finalidad no son términos intercambiables.",
    "link": "comparador.html"
  },
  {
    "term": "Gobernanza",
    "category": "Negocios",
    "definition": "Procesos y facultades para establecer reglas, cambiar software y resolver controversias.",
    "example": "El consorcio decide quién puede ingresar y actualizar una aplicación.",
    "limit": "Distribuir nodos no distribuye automáticamente el poder de decisión.",
    "link": "simuladores/08-decision-arquitectura.html"
  },
  {
    "term": "Smart contract",
    "category": "Ejecución",
    "definition": "Programa que aplica reglas y puede modificar estado cuando se lo invoca en una plataforma compatible.",
    "example": "Un depósito se libera si se cumple una condición registrada.",
    "limit": "No es necesariamente un contrato jurídico ni interpreta hechos ambiguos.",
    "link": "simuladores/06-smart-contract-lab.html"
  },
  {
    "term": "EVM",
    "category": "Ejecución",
    "definition": "Máquina virtual que ejecuta instrucciones de contratos en Ethereum.",
    "example": "Procesa una llamada y sus cambios de almacenamiento.",
    "limit": "No es una IA ni accede libremente a internet.",
    "link": "simuladores/04-evm-explorer.html"
  },
  {
    "term": "Gas",
    "category": "Ejecución",
    "definition": "Unidad de medida de recursos de ejecución en Ethereum.",
    "example": "Una escritura de estado consume recursos que se expresan en gas.",
    "limit": "Gas usado y precio por unidad de gas son magnitudes diferentes.",
    "link": "simuladores/05-gas-lab.html"
  },
  {
    "term": "Revert",
    "category": "Ejecución",
    "definition": "Fallo de ejecución que revierte los cambios de estado dentro del ámbito revertido.",
    "example": "Rechazar una liberación porque el depósito no está financiado.",
    "limit": "En una transacción incluida, el gas consumido puede cobrarse pese al fallo.",
    "link": "simuladores/06-smart-contract-lab.html"
  },
  {
    "term": "Evento",
    "category": "Ejecución",
    "definition": "Registro emitido durante la ejecución para que aplicaciones externas sigan lo ocurrido.",
    "example": "Una interfaz muestra el evento de un depósito confirmado.",
    "limit": "Un evento de entrega no prueba por sí solo una entrega física.",
    "link": "simuladores/06-smart-contract-lab.html"
  },
  {
    "term": "Escrow",
    "category": "Ejecución",
    "definition": "Esquema de depósito en garantía con condiciones de liberación o devolución.",
    "example": "Comprador deposita; un actor autorizado libera según reglas.",
    "limit": "Debe definirse quién resuelve disputas y qué pasa si no actúa.",
    "link": "simuladores/06-smart-contract-lab.html"
  },
  {
    "term": "Oráculo",
    "category": "Ejecución",
    "definition": "Mecanismo que aporta datos externos para su uso por contratos.",
    "example": "Una fuente informa el retraso de un vuelo.",
    "limit": "Registrar el dato no garantiza que sea exacto ni independiente.",
    "link": "simuladores/09-seguro-oraculo.html"
  },
  {
    "term": "Off-chain",
    "category": "Ejecución",
    "definition": "Procesos o datos que permanecen fuera del registro de la blockchain considerada.",
    "example": "Documento comercial guardado en un sistema de acceso controlado.",
    "limit": "Estar fuera de la cadena no significa carecer de controles.",
    "link": "casos.html"
  },
  {
    "term": "On-chain",
    "category": "Ejecución",
    "definition": "Operaciones o datos incorporados y procesados en la cadena considerada.",
    "example": "Registrar una transferencia de tokens.",
    "limit": "Registrar un hash no equivale a guardar el archivo completo.",
    "link": "casos.html"
  },
  {
    "term": "Tokenización",
    "category": "Negocios",
    "definition": "Diseño de una representación digital de un activo o derecho y de sus reglas de circulación.",
    "example": "Representar un derecho de cobro vinculado a una factura.",
    "limit": "Emitir un token no crea automáticamente un derecho exigible.",
    "link": "simuladores/07-tokenization-designer.html"
  },
  {
    "term": "Custodia",
    "category": "Negocios",
    "definition": "Responsabilidad por proteger claves o mantener control y respaldo de un activo.",
    "example": "Un custodio conserva el bien representado por un token.",
    "limit": "Autocustodiar el token no implica custodiar el activo físico.",
    "link": "simuladores/07-tokenization-designer.html"
  },
  {
    "term": "Desintermediación",
    "category": "Negocios",
    "definition": "Cambio en funciones de intermediación mediante nuevas reglas o infraestructuras.",
    "example": "Automatizar conciliación reduce tareas manuales del operador.",
    "limit": "Pueden aparecer nuevos intermediarios: oráculos, custodios o interfaces.",
    "link": "guia-estudio.html"
  },
  {
    "term": "Costo de coordinación",
    "category": "Negocios",
    "definition": "Recursos usados para acordar, comprobar y conciliar acciones entre actores.",
    "example": "Horas dedicadas a resolver discrepancias en facturas compartidas.",
    "limit": "No debe compararse sólo con el costo de gas.",
    "link": "guia-estudio.html"
  },
  {
    "term": "Interoperabilidad",
    "category": "Negocios",
    "definition": "Capacidad de sistemas y organizaciones para intercambiar datos o ejecutar procesos compatibles.",
    "example": "Conectar ERP, identidad, pagos y registro compartido.",
    "limit": "Usar blockchain no elimina la necesidad de interfaces y estándares.",
    "link": "casos.html"
  },
  {
    "term": "PropTech",
    "category": "Sectores",
    "definition": "Aplicación de tecnología a procesos inmobiliarios.",
    "example": "Automatizar una reserva con depósito y condiciones de devolución.",
    "limit": "Transferir un token no sustituye los requisitos del registro inmobiliario.",
    "link": "casos.html"
  },
  {
    "term": "InsurTech",
    "category": "Sectores",
    "definition": "Aplicación de tecnología a suscripción, distribución o gestión de seguros.",
    "example": "Automatizar un pago ante un indicador acordado.",
    "limit": "Automatización no elimina riesgo de datos ni falta de fondos.",
    "link": "simuladores/09-seguro-oraculo.html"
  },
  {
    "term": "Seguro paramétrico",
    "category": "Sectores",
    "definition": "Cobertura cuyo pago depende de un indicador predefinido, según las condiciones de la póliza.",
    "example": "Pago didáctico de 100 unidades cuando el retraso supera 120 minutos.",
    "limit": "El indicador puede diferir del daño económico individual.",
    "link": "simuladores/09-seguro-oraculo.html"
  },
  {
    "term": "Riesgo de base",
    "category": "Sectores",
    "definition": "Desajuste entre el resultado de un indicador y el daño que se busca cubrir.",
    "example": "Una demora inferior al umbral ocasiona pérdida, pero no activa el pago.",
    "limit": "No es necesariamente una falla del código ni fraude del oráculo.",
    "link": "simuladores/09-seguro-oraculo.html"
  }
];