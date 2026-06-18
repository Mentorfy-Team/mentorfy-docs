---
sidebar_position: 2
---

# Asaas

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Asaas.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o clases se habilitarán cuando Asaas confirme un cobro.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Asaas** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Inicia sesión en tu cuenta de Asaas y accede al menú del usuario
```
Navega hasta Integraciones > Clave de API
```
<img src="/docs/img/asaas_apikey_nav.png" alt="clave de API"  /> 
<br/>

4. Haz clic en **Generar nueva clave de API**; tras la verificación, podrás copiar tu clave — **copia esa clave generada**.

<img src="/docs/img/asaas_apikey.png" alt="clave de API" /> 
<br/>

5. Regresa a Mentorfy, ve a **Integraciones > Claves** y registra la clave generada para la plataforma Asaas.

<img src="/docs/img/asaas_apikey_mentorfy.png" alt="clave de API" /> 
<br/>
<br/>

6. **Guarda la configuración.**

## Configurando el Webhook en Asaas

1. Accede al menú del usuario en Asaas.
```
Navega hasta Integraciones > Webhooks
```

2. En tu primera visita, verás un botón para crear tu primer Webhook. Haz clic en **"Crear Webhook"**.

<img src="/docs/img/asaas_webhooks.png" alt="webhooks" />
<br/>

3. **Completa el formulario** con la siguiente información:
   - El webhook debe marcarse como activo
   - Nombre para el webhook
   - URL que recibirá la información del evento: pega la **URL de Entrada** que copiaste de Mentorfy
   - Correo electrónico para notificaciones en caso de errores de comunicación
   - Versión de API V3
   - Token de autenticación (la clave de API que copiaste de Asaas)
   - Activa la cola de sincronización
   - Tipo de envío Secuencial

<img src="/docs/img/asaas_adicionar_webhook.png" alt="Agregar Webhook" />
<br/>
<br/>

4. **Selecciona todos los eventos de Cobro**. Puedes consultar la lista completa de eventos en la documentación de Asaas.

<img src="/docs/img/asaas_adicionar_webhook_eventos.png" alt="Agregar Webhook" />
<br/>
<br/>

5. **Guarda la configuración**.

Puedes tener hasta 10 Webhooks configurados por cuenta, sin restricciones de dirección. También es posible editar o eliminar los Webhooks creados.

<img src="/docs/img/asaas_webhooks_salvar.png" alt="Agregar Webhook" width="450" />
<br/>

## Probando la integración

Después de configurar el webhook en Asaas y Mentorfy:

1. Realiza una venta de prueba en Asaas.
2. Verifica que el evento se reciba correctamente en Mentorfy.
3. Confirma que el cliente aparezca en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al completar estos pasos, la integración estará lista y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io

Para más información sobre webhooks en Asaas, consulta la [documentación oficial](https://docs.asaas.com/docs/create-new-webhook-via-web-application).
