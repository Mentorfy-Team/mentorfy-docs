---
sidebar_position: 6
---

# Xgrow

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Xgrow.

Antes de configurar el webhook, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o grupos se habilitarán cuando Xgrow confirme una compra.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.

2. Completa la URL con un nombre descriptivo, selecciona **Xgrow** como pasarela de pago y elige los productos y/o categorías que deben habilitarse. Luego haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando la plataforma Xgrow

3. Inicia sesión en tu cuenta de Xgrow y accede a tu plataforma
```
Navega hasta Recursos > Integraciones > Nueva integración.
```
<img src="/docs/img/Integração-Xgrow1.png" alt="registro de webhook"  /> 
<br/>
<br/>

4. Selecciona la opción **Webhook**.

<img src="/docs/img/Integração-Xgrow2.png" alt="Integraciones Disponibles - Webhook" /> 
<br/>
<br/>

5. Completa la información de la siguiente manera:

- Nombre de la integración: Identificación del producto para el cual realizarás las configuraciones
- URL del webhook: pega la **URL de Entrada** que copiaste de Mentorfy, según el paso 2 anterior

<img src="/docs/img/Integração-Xgrow3.png" alt="registro de webhook" /> 
<br/>
<br/>
    
- Clave de Xgrow: es el código/token que debes registrar en Mentorfy en **Integraciones > Claves**, vinculándolo a la plataforma Xgrow. Después de ingresar la clave, guarda la configuración.
<br/>
<img src="/docs/img/Integração-Xgrow7.png" alt="Insertar el token de Xgrow en Mentorfy" /> 
<br/>
<br/>
6. Después de que la integración se registre correctamente, haz clic en "ver acciones".

<img src="/docs/img/Integração-Xgrow4.png" alt="Integración registrada" /> 
<br/>
<br/>

7. En el panel, haz clic en la esquina derecha en "Nueva acción".
Al configurar la acción, deberás completar:
    - Nombre de la acción: te sugerimos identificarla con el nombre del producto y el tipo de evento, como en el ejemplo a continuación;
    - Producto: selecciona el producto que estás integrando (previamente registrado en Xgrow);
    - Evento: debe completarse con la acción que se enviará a Mentorfy; es necesaria una acción con el evento "compra aprobada" y otra con el evento "compra reembolsada";
    - Planes: selecciona el plan que estás integrando;
    - Acción: "Disparar webhook"

<img src="/docs/img/Integração-Xgrow5.png" alt="configuración de la acción" /> 
<br/>
<br/>

8. ¡Tu integración está completa! Repite todo el proceso por cada producto que desees integrar con Xgrow.

<img src="/docs/img/Integração-Xgrow6.png" alt="webhook y acciones finalizadas" /> 
<br/>
<br/>

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

Si tienes alguna duda, contacta a nuestro soporte a través del chat en la plataforma o por correo electrónico en contato@mentorfy.io

Para más información sobre webhooks en Xgrow, consulta la [documentación oficial](https://ajuda.xgrow.com/pt-br/article/integracao-webhooks-yzudqg/).
