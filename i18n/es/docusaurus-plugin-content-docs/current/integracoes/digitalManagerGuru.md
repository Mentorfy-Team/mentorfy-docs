---
sidebar_position: 1
---

# Digital Manager Guru

Sigue este paso a paso para integrar tu flujo de ventas con el flujo de entrega de Mentorfy.

## Enlace Webhook

Antes de configurar el webhook en Digital Manager Guru, crea una **URL de Entrada** en Mentorfy. Esta URL define qué productos, categorías o grupos se habilitarán cuando Guru confirme una venta.

1. En Mentorfy, ve a **Integraciones > Entrada** y haz clic en **+ Nueva URL**.
2. Completa la URL con un nombre descriptivo, selecciona **DM Guru** como pasarela de pago y elige los productos y/o categorías que deben habilitarse.
3. Haz clic en **Crear** y copia la URL generada.

:::tip
Consulta el paso a paso completo en [Cómo crear una URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Plataforma Digital Manager Guru

Accede a la plataforma de Digital Manager Guru:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/auth/login" target="_blank">https://digitalmanager.guru/admin/auth/login</a>
</div>
<br/>

1- Ve a la página de **Configuración** y elige la opción **Webhooks**:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/settings/webhooks" target="_blank">https://digitalmanager.guru/admin/settings/webhooks</a>
</div>

<img src="/img/integracoes/guru1.png" alt="Menú Configuración - Webhooks" width="600" />
<br/>
<br/>

2- En la página de Webhooks, verás la opción **Add webhook** — haz clic en ella:

<img src="/img/integracoes/guru 2.png" alt="Página Webhooks - Add Webhook" width="600" />
<br/>
<br/>

3- En el modal **Add Webhook**, configura los siguientes campos:

- **Name**: Dale un nombre para identificar la integración (ej.: "Mentorfy - Entrega de Curso")
- **URL**: Pega aquí la URL de Entrada que generaste en Mentorfy
- **Concurrent Requests**: Define el límite de solicitudes simultáneas (el valor predeterminado suele ser 5)
- **Status**: Selecciona qué estados de venta deben disparar el aviso (ej.: selecciona "Aprobada/Pagada" para habilitar el acceso al alumno)
- **Filter by**: Elige **All** para enviar todas las ventas o **Products** si deseas filtrar solo productos específicos
- **Active**: Asegúrate de que el interruptor esté marcado como activo (morado)

<img src="/img/integracoes/guru 3.png" alt="Modal Agregar Webhook" width="450" />
<br/>
<br/>

4- **Finalizar**: Haz clic en **Send** (o Crear) para guardar la configuración. A partir de ahora, cada vez que una venta alcance el estado seleccionado en Guru, Mentorfy recibirá el aviso y habilitará el acceso automáticamente.

## Conclusión

Al finalizar estos pasos, la integración estará completa y podrás probarla.
