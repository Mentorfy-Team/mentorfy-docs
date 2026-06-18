---
sidebar_position: 2
---

# Greenn

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Greenn.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o clases se habilitarán cuando Greenn confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Greenn** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Inicia sesión en tu cuenta
```
Navega hasta Productos > Editar Producto o Crear Producto si aún no tienes ningún producto registrado.
```
<img src="/docs/img/greenn_produto.jpg" height="500" alt="clave de API"  /> 
<br/>
<br/>

4. Con el producto seleccionado o ya creado, haz clic en la pestaña **Contenido** y luego en **Agregar Contenido**.

<img src="/docs/img/greenn_produto_conteudo.jpg" height="200" alt="clave de API" /> 
<br/>
<br/>

5. Selecciona la opción **Sistema externo**.

<img src="/docs/img/greenn_produto_conteudo_externo.jpg" alt="clave de API" /> 
<br/>
<br/>

6. Selecciona la opción **Webhook**.

<img src="/docs/img/greenn_produto_conteudo_webhook.jpg" alt="clave de API" /> 
<br/>
<br/>

7. Completa el formulario con la información solicitada, usando la **URL de Entrada** que copiaste de Mentorfy:

<img src="/docs/img/greenn_produto_conteudo_form.jpg" alt="clave de API" /> 
<br/>
<br/>

8. Haz clic en **Crear Liberación** y listo!

## Probando la integración

Después de configurar el webhook en Greenn y Mentorfy:

1. Realiza una venta de prueba en Greenn.
2. Verifica que el evento se reciba correctamente en Mentorfy.
3. Confirma que el cliente aparezca en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al completar estos pasos, la integración estará lista y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io
