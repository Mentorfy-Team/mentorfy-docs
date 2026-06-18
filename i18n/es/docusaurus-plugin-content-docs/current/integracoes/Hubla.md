---
sidebar_position: 6
---

# Hubla

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Hubla.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o clases se habilitarán cuando Hubla confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Hubla** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando la plataforma Hubla

Accede a tu cuenta en la plataforma de Hubla y, en el menú lateral, haz clic en **Integraciones**.

Desplázate hacia abajo hasta la sección **Automatizaciones** y haz clic en **Webhook**.

<br/>
<img src="/docs/img/hubla1.jpg" alt="config webhook" /> 
<br/>

En la página de Integración Webhook, selecciona la pestaña **Configuración**;

Haz clic en el botón **Agregar regla** ubicado en la esquina superior derecha de la página.

<br/>
<img src="/docs/img/hubla2.jpg" alt="agregar regla" /> 
<br/>

En el formulario:
- Ingresa un nombre significativo para identificar tu nueva regla.
- Ingresa la **URL de Entrada** que copiaste de Mentorfy;
- Selecciona los productos específicos que deseas asociar a esta regla.
- Marca los eventos deseados que activarán el webhook:
  - Pago de factura realizado
  - Suscripción desactivada
  - Suscripción cancelada

Si productos diferentes habilitan accesos diferentes en Mentorfy, crea una URL de Entrada y una regla en Hubla para cada caso.

<br/>
<img src="/docs/img/hubla3.jpg" alt="formulario de regla" /> 
<br/>

Después de seguir estos pasos, tu nueva regla estará configurada y lista para enviar automáticamente los datos de los eventos seleccionados a la URL que especificaste durante el proceso de configuración del webhook.

## Probando la integración

Después de configurar el webhook en Hubla:

1. Realiza una venta de prueba en Hubla del producto que fue configurado.
2. Verifica que el evento se reciba correctamente en Mentorfy.
3. Confirma que el cliente aparezca en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al completar estos pasos, la integración estará lista y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico: **contato@mentorfy.io**
