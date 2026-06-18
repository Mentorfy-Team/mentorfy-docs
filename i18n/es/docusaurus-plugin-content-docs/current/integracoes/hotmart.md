---
sidebar_position: 2
---

# Hotmart

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Hotmart.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o grupos se habilitarán cuando Hotmart confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Hotmart** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Inicia sesión en tu cuenta
```
Navega hasta Herramientas > Webhooks.
```
<img src="/docs/img/hotmart_webhooks.jpg" height="500" alt="clave de API"  /> 
<br/>
<br/>

4. Busca el botón **+ Registrar Webhook**.

<img src="/docs/img/hotmart_cadastrar.jpg" height="200" alt="clave de API" /> 
<br/>
<br/>

5. Completa el formulario con la información solicitada, usando la **URL de Entrada** que copiaste de Mentorfy:

<img src="/docs/img/hotmart_form.jpg" alt="clave de API" /> 
<br/>
<br/>

6. En las opciones de envío, selecciona estas opciones:

<img src="/docs/img/hotmart_form_opcoes.jpg" alt="clave de API" /> 
<br/>
<br/>

8. Haz clic en **Guardar** y ¡listo!

## Probando la integración

Después de configurar el webhook en Hotmart y en Mentorfy:

1. Realiza una venta de prueba en Hotmart.
2. Verifica que el evento se recibe correctamente en Mentorfy.
3. Confirma que el cliente aparece en el recorrido y en la lista de clientes de Mentorfy.

<img src="/docs/img/hotmart_webhooks_teste.jpg" alt="clave de API" /> 
<br/>
<br/>

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, contacta a nuestro soporte a través del chat en la plataforma o por correo electrónico en contato@mentorfy.io
