---
sidebar_position: 8
---

# Stripe

## Tutorial de integración en video

Mira el paso a paso en video para configurar tu integración Stripe con Mentorfy:
<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "24px" }}>
  <iframe
    src="https://player.mediadelivery.net/play/373508/1e02d5d0-9e91-48fc-8e58-bb4d8d735513"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "8px"
    }}
    allowFullScreen
    allow="encrypted-media"
    title="Tutorial Stripe Mentorfy"
  ></iframe>
</div>


Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy usando Stripe. Stripe no filtra para enviar eventos de productos específicos, por lo que si deseas vender productos diferentes y otorgar accesos distintos, será necesaria una configuración adicional para que Mentorfy pueda identificar las diferentes ofertas.



1. Accede a la página de Integraciones en Mentorfy:

Ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.
<br/>

2. **Crea una URL de Entrada**, completando la información básica:
<img src="/docs/img/stripe_integracao_mentorfy.png" height="200" alt="clave de API"  />
<img src="/docs/img/stripe_integracao_mentorfy_2.png" height="200" alt="clave de API"  />
<br/>
<br/>
```
Deberás completar Nombre, Gateway (Stripe) y productos a desbloquear; los demás campos son opcionales.
Si deseas vender múltiples productos que otorguen accesos diferentes en Mentorfy, será necesario agregar los IDs de Precio de Stripe (price_id). Es decir, si solo vas a desbloquear siempre los mismos productos, no es necesario.
```
2.1 **Opcional** en caso de liberaciones de productos diferentes con ofertas distintas
<img src="/docs/img/stripe_integracao_mentorfy_price.png" height="200" alt="clave de API"  />
<img src="/docs/img/stripe_integracao_mentorfy_price_copy.png" height="200" alt="clave de API"  />
<br/>
<br/>
```
Para obtener el price_id debes acceder a tu producto en Stripe, hacer clic sobre el precio y copiar el price_id.
De esta forma, cuando ocurra una venta, podremos asociarla con los productos de Mentorfy que serán desbloqueados.
```

2.2 **Copia la URL de Entrada creada**, la usaremos en Stripe ahora.
<img src="/docs/img/stripe_integracao_mentorfy_link.png" height="200" alt="clave de API"  />
<br/>
<br/>

3. Accede al dashboard de Stripe y navega hasta **Desarrolladores > Webhooks**.

<img src="/docs/img/stripe-webhook.png" height="300" alt="clave de API"  />
<br/>
<br/>

4. Haz clic en **Agregar endpoint**.

5. En el campo **URL del endpoint**, pega la URL de Entrada que copiaste de Mentorfy.

6. En **Seleccionar eventos para escuchar**, agrega los siguientes eventos:
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

7. Haz clic en **Agregar endpoint** para guardar.

8. Listo, tu integración está completa.

## Probando la integración

Después de configurar el webhook en Stripe y en Mentorfy:

1. Realiza una venta de prueba en Stripe (puedes usar el modo de prueba de Stripe).
2. Verifica si el evento se recibe correctamente en Mentorfy.
3. Confirma si el cliente aparece en el recorrido y en la lista de clientes de Mentorfy.

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás ver a tus clientes en el recorrido y en tu lista de clientes en Mentorfy.

En caso de duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io
