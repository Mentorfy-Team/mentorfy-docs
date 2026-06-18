---
sidebar_position: 4
---

# Eduzz

Cómo configurar un Webhook en el Developer Hub

Guía paso a paso — Eduzz · Developer Hub

Esta guía explica cómo migrar y configurar integraciones vía webhook usando el Developer Hub de Eduzz (MyEduzz), desde el acceso a la plataforma hasta la creación y prueba de la configuración.

Antes de configurar el webhook en el Developer Hub, crea una **URL de Entrada** en Mentorfy. Ve a **Integraciones > Entrada**, haz clic en **+ Nueva URL**, selecciona **Eduzz** como gateway de pago, elige los productos y/o categorías que deben desbloquearse, haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## **Paso 1 — Accede a la sección de Webhooks en MyEduzz**

En el panel de MyEduzz, accede al menú lateral izquierdo, desplázate hasta la sección Avanzado y haz clic en Webhooks.

<img src="/docs/img/eduzz_developer_hub_1.png" width="328" alt="Menú Webhooks en MyEduzz" decoding="async" loading="lazy" />

<img src="/docs/img/eduzz_developer_hub_2.png" width="617" alt="Pantalla de Webhooks en MyEduzz" decoding="async" loading="lazy" />

⚠ El webhook actual será discontinuado el 11/01/2027. Migra al Developer Hub lo antes posible para evitar impactos en tu integración.

## **Paso 2 — Accede al Developer Hub mediante el banner de migración**

En la pantalla de Webhooks de MyEduzz, un aviso en amarillo indica la necesidad de migrar. Haz clic en "Conoce más sobre el nuevo webhook y cómo migrar" o accede al Developer Hub directamente.

✔ En el Developer Hub, navega a Webhooks → Configuraciones en el menú lateral para administrar tus integraciones.

## **Paso 3 — Crea una nueva configuración de Webhook**

En la pantalla Lista de configuraciones del Developer Hub, haz clic en el botón "+ Nueva configuración" en la esquina superior derecha de la página.

<img src="/docs/img/eduzz_developer_hub_3.png" width="622" alt="Lista de configuraciones y botón Nueva configuración" decoding="async" loading="lazy" />

## **Paso 4 — Completa los datos de la configuración**

En la pantalla de Creación de configuración, completa los siguientes campos obligatorios:

- Nombre de la configuración — Ej.: testementorfy
- URL para el envío de datos — pega la URL de Entrada copiada de Mentorfy
- Máximo de eventos enviados en paralelo a la URL — usa el slider (predeterminado: 10)
- Secret — mantén el predeterminado o configura según sea necesario

<img src="/docs/img/eduzz_developer_hub_4.png" width="624" alt="Formulario de creación de configuración del webhook" decoding="async" loading="lazy" />

## **Paso 5 — Verifica la URL**

Después de completar la URL, haz clic en el botón "Verificar URL". Espera la confirmación de estado antes de continuar.

<img src="/docs/img/eduzz_developer_hub_5.png" width="625" alt="Verificación de la URL del webhook" decoding="async" loading="lazy" />

✔ Si la URL es válida, se mostrará: "Estado HTTP 200 – ¡Éxito!". De lo contrario, revisa la URL e inténtalo de nuevo.

## **Paso 6 — Selecciona los eventos deseados**

En la sección "¿Qué eventos deseas recibir?", busca o navega por las categorías disponibles (AlpaClass, MyEduzz, SafeVideo, Nutror, Blinket, etc.) y selecciona los eventos relevantes para tu integración. Los eventos seleccionados aparecen en el panel derecho "Eventos Seleccionados".

<img src="/docs/img/eduzz_developer_hub_6.png" width="646" alt="Selección de eventos del webhook" decoding="async" loading="lazy" />

✔ Ejemplo de eventos útiles: `myeduzz.invoice_paid` (pago realizado) y `myeduzz.invoice_opened` (factura abierta).

## **Paso 7 — Prueba los eventos seleccionados**

Haz clic en "Probar eventos seleccionados" en el panel derecho. Se abrirá una ventana de Prueba de eventos con las opciones:

- Probar todos los eventos — envía prueba para todos los eventos seleccionados
- Probar eventos no probados — envía solo para los que aún no fueron probados
- Enviar prueba (por evento) — prueba cada evento individualmente

Después de enviar las pruebas, haz clic en "Ver resultado" para verificar el resultado.

<img src="/docs/img/eduzz_developer_hub_7.png" width="653" alt="Ventana de prueba de eventos" decoding="async" loading="lazy" />

## **Paso 8 — Verifica el resultado de las pruebas**

La ventana "Resultado de las pruebas" mostrará un resumen con:

- Eventos seleccionados — lista de los eventos configurados
- Eventos no probados — eventos que no recibieron prueba
- Eventos integrados con éxito — confirmados con retorno positivo
- Eventos integrados con falla — eventos que retornaron error

<img src="/docs/img/eduzz_developer_hub_8.png" width="632" alt="Resultado de las pruebas del webhook" decoding="async" loading="lazy" />

⚠ Si algún evento devuelve falla, la configuración no podrá activarse. Corrige el problema antes de continuar.

## **Paso 9 — Finaliza creando la configuración**

Con todas las pruebas validadas con éxito, cierra el modal de resultados y haz clic en el botón "Crear configuración" al pie de la página para guardar y activar tu webhook.

✔ ¡Tu configuración aparecerá en la lista del Developer Hub, lista para recibir y procesar eventos!

## Resumen de los Pasos

- Accede a MyEduzz → Avanzado → Webhooks
- Accede al Developer Hub mediante el banner de migración
- Crea una nueva configuración de webhook
- Completa nombre, URL de Entrada, paralelo y secret
- Verifica la URL (HTTP 200 = éxito)
- Selecciona los eventos deseados
- Prueba los eventos y envía las pruebas
- Revisa el resultado — todos deben estar integrados con éxito
- Haz clic en "Crear configuración" — ¡listo!
