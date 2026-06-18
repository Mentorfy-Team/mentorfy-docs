---
sidebar_position: 1
---

# Herospark

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy.

## Enlace Webhook

Antes de configurar el webhook en Herospark, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o grupos se habilitarán cuando Herospark confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.
2. Completa la URL con un nombre descriptivo, selecciona **HeroSpark** como pasarela de pago y elige los productos y/o categorías que deben habilitarse.
3. Haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Plataforma Herospark

Accede a la plataforma de Herospark
<!-- "background-color: #f6f8fa; padding: 16px; font-family: monospace; border-radius: 6px;" -->
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://app.herospark.com/login" target="_blank">https://app.herospark.com/login</a>
</div>
<br/>
1- Ve a la página **Piloto automático** y elige la opción **Usar plantilla de automatización**:

<img src="/docs/img/herospark_pagamento_confirmado.jpg" alt="Pago Confirmado" width="350" />

<br/>
<br/>

2- Elige la opción **Generar un Webhook**.
<img src="/docs/img/herospark_gerar_webhook.jpg" alt="Generar Webhook" width="350" />
<br/>
<br/>

3- Dale a tu webhook un nombre adecuado
```
Producto Elegido - Pago Confirmado | Mentorfy
```
<img src="/docs/img/herospark_nome_adequado.jpg" alt="Nombre Adecuado del Webhook" width="350" />
<br/>
<br/>

4- Elige el producto que se está vendiendo y que será entregado por Mentorfy.
<img src="/docs/img/herospark_selecao_produto.jpg" alt="Selección de Producto" width="350" />
<br/>
<br/>

5- Pega la URL de Entrada que copiaste de Mentorfy y selecciona el método **POST**.
<img src="/docs/img/herospark_link_post.jpg" alt="Configuración del Enlace POST" width="350" />
<br/>
<br/>

6- Haz clic en **Agregar** Headers y añade la clave **Content-Type** con el valor **application/json**.
Luego pega el código a continuación (sin espacios) en **Body**.
```json
{"name":"{{buyer_name}}","email":"{{buyer_email}}","phone":"{{buyer_phone}}","price":"{{ offer_price | divided_by: 100.00 }}","herospark": true}
```
<img src="/docs/img/herospark_header_body.jpg" alt="Herospark Header Body" width="350" />
<br/>
<br/>

7- **Activa** el webhook y haz clic en **Guardar edición**.
<img src="/docs/img/herospark_ativar_webhook.jpg" alt="Activar Webhook" width="350" />
<br/>
<br/>



## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y
en tu lista de clientes en Mentorfy.

Si tienes alguna duda, contacta a nuestro soporte a través del chat en la plataforma o por correo electrónico en contato@mentorfy.io
