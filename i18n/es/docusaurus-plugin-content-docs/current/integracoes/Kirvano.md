---
sidebar_position: 6
---

# Kirvano

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Kirvano.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o clases se habilitarán cuando Kirvano confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Kirvano** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Inicia sesión en tu cuenta
```
Navega hasta Productos > Agregar Producto si aún no tienes ningún producto registrado.
```
<img src="/docs/img/kirvano_adicionar_produto.png" height="300" alt="clave de API"  /> 
<br/>
<br/>

4. Con el producto ya creado, haz clic en la pestaña **integraciones** y luego en **Webhooks**.

<img src="/docs/img/kirvano_webhook.png" height="400" alt="clave de API" /> 
<br/>
<br/>

5. Selecciona la opción **Crear Webhook**.

<img src="/docs/img/kirvano_webook_criar.png" alt="clave de API" /> 
<br/>
<br/>

6. Completa el formulario con la información solicitada, usando la **URL de Entrada** que copiaste de Mentorfy y el producto que creaste en Kirvano.

Aprovecha para usar el botón **Probar Integración** para confirmar que el enlace es correcto.

<img src="/docs/img/kirvano_webhook_form.png" alt="clave de API" /> 
<br/>
<br/>

7. Selecciona los eventos y haz clic en crear.

<img src="/docs/img/kirvano_webhook_form2.png" alt="clave de API" /> 
<br/>
<br/>

8. Tu integración está completa.

## Probando la integración

Después de configurar el webhook en Kirvano y Mentorfy:

1. Realiza una venta de prueba en Kirvano.
2. Verifica que el evento se reciba correctamente en Mentorfy.
3. Confirma que el cliente aparezca en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al completar estos pasos, la integración estará lista y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io
