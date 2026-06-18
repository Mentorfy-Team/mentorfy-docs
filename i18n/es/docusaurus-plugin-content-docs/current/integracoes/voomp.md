---
sidebar_position: 7
---

# Voomp

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Voomp.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o grupos se habilitarán cuando Voomp confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Voomp** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando el Webhook en Voomp

1. Accede al menú lateral en la plataforma Voomp:

```
Dashboard > Integraciones > Configurar integración del Webhook
```

<img src="/docs/img/voomp1.png" alt="Menú Webhook Voomp" />
<br/>

2. En la página de configuración del Webhook, deberás:
   - Seleccionar los productos que deseas integrar
   - Ingresar la URL del Webhook: pega la **URL de Entrada** que copiaste de Mentorfy
   - Elegir las variables que deseas recibir
   - Seleccionar los eventos de los que deseas ser notificado

<img src="/docs/img/voomp2.png" alt="Configuración Webhook Voomp" />
<br/>

3. Configura las siguientes opciones:

   - En "Variables a recibir", selecciona:
     - Nombre del comprador - "name"
     - Correo electrónico del comprador - "email"
     - Estado de la suscripción - "status"

4. En "Eventos", recomendamos activar:

   - **Ventas**:

     - Venta pagada

   - **Suscripciones**:

     - Suscripción no pagada
     - Suscripción finalizada
     - Suscripción cancelada

5. Haz clic en "Guardar integración" para finalizar la configuración.

## Probando la integración

Después de configurar el webhook en Voomp:

1. Realiza una venta de prueba en Voomp del producto que fue configurado.
2. Verifica que el evento se recibe correctamente en Mentorfy.
3. Confirma que el cliente aparece en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, contacta a nuestro soporte a través del chat en la plataforma o por correo electrónico: **contato@mentorfy.io**
