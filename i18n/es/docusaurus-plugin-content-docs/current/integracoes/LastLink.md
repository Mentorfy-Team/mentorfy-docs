---
sidebar_position: 9
---

# LastLink

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando LastLink.

Antes de configurar el webhook en LastLink, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o clases se desbloquearán cuando LastLink confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa los datos de la URL:

- En **Nombre**, usa algo fácil de identificar, como `LastLink - Nombre del Producto`.
- En **Gateway de Pago**, selecciona **LastLink**. Si la opción no aparece, selecciona **Genérico**.
- En **Productos a Desbloquear** y/o **Categorías a Desbloquear**, selecciona el acceso que debe otorgarse tras la compra.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Haz clic en **Crear** y luego usa la acción **Copiar** para copiar la URL de Entrada generada.

4. Inicia sesión en tu cuenta de LastLink y accede al producto que debe disparar el webhook.

<img src="/docs/img/lastlink_produtos.png" width="360" alt="Lista de productos en LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

5. En el menú lateral del producto, haz clic en **Integraciones**. Busca **Lastlink - Webhook** y haz clic en **Activar**.

<img src="/docs/img/lastlink_integracoes.png" alt="Menú Integraciones en el producto de LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

<img src="/docs/img/lastlink_ativar_webhook.png" width="520" alt="Tarjeta Lastlink - Webhook con botón Activar" decoding="async" loading="lazy" />

<br/>
<br/>

6. Con la integración activa, haz clic en **Nuevo webhook** en la esquina superior derecha.

<img src="/docs/img/lastlink_novo_webhook.png" alt="Botón Nuevo webhook en LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

7. Completa los datos del webhook:

- En **Nombre del webhook**, usa un nombre fácil de identificar, como `Mentorfy`.
- En **URL**, pega exactamente la URL de Entrada copiada de Mentorfy.

<img src="/docs/img/lastlink_formulario_webhook.png" alt="Formulario de webhook de LastLink con nombre y URL" decoding="async" loading="lazy" />

<br/>
<br/>

8. En la sección **Eventos**, haz clic en **Seleccionar** para elegir los eventos que Mentorfy debe recibir.

<img src="/docs/img/lastlink_botao_selecionar_eventos.png" alt="Botón Seleccionar eventos en el webhook de LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

Eventos recomendados para otorgar, actualizar o eliminar accesos:

- `Purchase_Order_Confirmed`
- `Recurrent_Payment`
- `Product_Access_Started`
- `Product_Access_Ended`
- `Subscription_Expired`
- `Payment_Refund`
- `Payment_Chargeback`
- `Active_Member_Notification`
- `Subscription_Product_Acess`

:::info
LastLink usa la grafía `Subscription_Product_Acess` en el nombre del evento. Si esta opción aparece en el panel, selecciónala exactamente como se muestra.
:::

Después de marcar los eventos deseados, haz clic en **Confirmar**.

<img src="/docs/img/lastlink_modal_eventos.png" width="520" alt="Modal de selección de eventos del webhook de LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

9. Antes de guardar, puedes hacer clic en **Probar** para verificar si la URL registrada responde correctamente. Para finalizar, haz clic en **Guardar**.

<img src="/docs/img/lastlink_testar_salvar.png" alt="Botones Probar y Guardar del webhook de LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

## Probando la integración

Después de configurar el webhook en LastLink y en Mentorfy:

1. Realiza una venta de prueba o utiliza un evento de prueba disponible en LastLink.
2. Verifica si el evento aparece en los registros de integración de Mentorfy.
3. Confirma si el cliente aparece en el recorrido y en la lista de clientes de Mentorfy.
4. Si el acceso no se otorga, verifica que la URL de Entrada copiada de Mentorfy sea correcta y que los eventos recomendados hayan sido seleccionados.

Si deseas ver el contenido técnico enviado por LastLink, usa una herramienta como Webhook.site solo para pruebas. Para otorgar accesos reales, la URL debe ser la URL de Mentorfy.

<img src="/docs/img/lastlink_webhooksite_resultado.jpeg" width="520" alt="Ejemplo de eventos recibidos en Webhook.site" decoding="async" loading="lazy" />

<br/>
<br/>

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

En caso de duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io
