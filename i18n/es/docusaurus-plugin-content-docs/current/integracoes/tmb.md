---
sidebar_position: 12
---

# TMB

Siga este paso a paso para integrar sus ventas en boleto en cuotas de TMB al flujo de entrega de Mentorfy.

Con la integración activa:

- Cuando el alumno paga el **boleto de entrada**, Mentorfy crea su cuenta y libera el acceso.
- Cuando el pedido se **cancela** en TMB, el acceso se retira.
- Si el alumno se atrasa **más de 30 días** en una cuota, el acceso queda pausado. Cuando paga (o renegocia), el acceso vuelve solo.

## 1. Crear la URL de Entrada en Mentorfy

1. En Mentorfy, vaya a **Integraciones > Entrada** y haga clic en **+ Nueva URL**.
2. En **Nombre**, use algo fácil de identificar, como `TMB - Nombre del Producto`.
3. En **Pasarela de Pago**, seleccione **TMB**.
4. En **Productos a Liberar** y/o **Categorías a Liberar**, elija lo que el alumno debe recibir.
5. Haga clic en **Crear** y luego en **Copiar** para copiar la URL generada.

:::tip
Cree una URL de Entrada para cada producto de TMB. Vea el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## 2. Activar el Webhook Vendas en TMB

1. En el portal del productor de TMB, abra **Produtos**, haga clic en **Mais opções** del producto y luego en **Integrações**.
2. Elija **Webhook Vendas**.
3. En **URL**, pegue la URL de Entrada copiada de Mentorfy.
4. Deje **Chave** y **Valor** vacíos.
5. Active el **Status** y guarde.

## 3. Activar el Webhook Financeiro en TMB

Es el que avisa a Mentorfy cuando una cuota se atrasa o se paga.

1. En las **Integrações** del mismo producto, elija **Webhook Financeiro**.
2. Pegue **la misma** URL de Entrada.
3. Deje **Chave** y **Valor** vacíos, active el **Status** y guarde.

:::info
Si prefiere no pausar el acceso de quien se atrasa, no active el Webhook Financeiro. El Webhook Vendas sigue liberando y retirando accesos normalmente.
:::

## Cómo funciona la pausa por atraso

| Lo que pasa en TMB | Lo que pasa en Mentorfy |
|---|---|
| Cuota vencida hace más de 30 días | El acceso del alumno a los productos de esta URL queda pausado |
| Cuota pagada | Si no hay otra cuota vencida, el acceso vuelve |
| Cuotas renegociadas | Las cuotas antiguas dejan de contar y el acceso vuelve |
| Pedido cancelado | El acceso se retira y no vuelve con pagos de cuotas |

La pausa solo aplica a los productos de la URL que recibió el aviso. Los productos que el alumno compró por otro camino no se ven afectados.

## Probando la integración

1. En TMB, abra la pestaña **Histórico de interações**, debajo de la configuración del webhook.
2. Elija un evento, haga clic en los tres puntos y use **Reenviar**.
3. En Mentorfy, revise el evento en **Integraciones > Observabilidad**.
4. Confirme que el alumno aparece en su lista de clientes con el producto liberado.

Si el acceso no se libera, verifique que la URL pegada en TMB sea exactamente la URL copiada de Mentorfy y que la URL de Entrada esté activa.

## Conclusión

Al terminar estos pasos, sus ventas de TMB entran solas en Mentorfy, y el acceso acompaña la situación financiera de cada alumno.

Si tiene dudas, contacte a nuestro soporte por el chat de la plataforma o por el e-mail contato@mentorfy.io
