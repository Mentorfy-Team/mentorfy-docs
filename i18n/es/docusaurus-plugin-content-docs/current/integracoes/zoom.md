---
sidebar_position: 10
---

# Zoom

La integración Zoom permite conectar la cuenta del mentor con Mentorfy para crear **eventos Zoom** directamente en las reuniones y poner el acceso a disposición en el área del alumno. Tras la configuración, mentor y participantes viven una experiencia **100% Zoom**, optimizada también para dispositivos móviles.

## Tutorial de integración en video

Mira el paso a paso en video para configurar tu integración Zoom con Mentorfy:
<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "24px" }}>
  <iframe
    src="https://player.mediadelivery.net/play/373508/ac92a23a-9bbd-48e6-a081-f07de11d8ec5"
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
    title="Tutorial Zoom Mentorfy"
  ></iframe>
</div>

---

## **Visión general**

El flujo completo involucra cinco etapas principales:

1. **Conectar la cuenta Zoom** — autorización OAuth en la pestaña Integraciones.
2. **Crear una reunión** — en el área Reuniones, con el tipo *Evento Zoom*.
3. **Compartir los enlaces** — enlace de invitado para participantes y enlace de moderador para el mentor.
4. **Unirse a la reunión** — acceso a la sala con la interfaz nativa de Zoom.
5. **Ver el replay** — después de la sesión, la grabación en la nube se importa automáticamente y la asistencia se sincroniza.

:::info Requisitos previos
- Cuenta activa en Mentorfy con permiso de acceso a **Integraciones** y **Reuniones**.
- Cuenta Zoom válida (la misma que se utilizará para organizar los eventos).
:::

---

## **1. Acceder a la plataforma**

Ve a [app.mentorfy.io](https://app.mentorfy.io) e inicia sesión con tu correo electrónico y contraseña, o utiliza el acceso mediante Google.

![Pantalla de inicio de sesión de Mentorfy](/docs/img/Zoom_Mentorfy_Login.png)

---

## **2. Conectar la cuenta Zoom**

En el menú lateral, ve a **Integraciones** y selecciona la pestaña **Zoom** — o abre directamente [mentorfy.io/mentor/integracoes?tab=zoom](https://mentorfy.io/mentor/integracoes?tab=zoom).

La página muestra el estado de la conexión. Mientras la cuenta no esté vinculada, la tarjeta mostrará **"Zoom no conectado"**.

![Página de integración Zoom en Mentorfy](/docs/img/Zoom_Mentorfy_Pagina_Integracao.png)

Haz clic en **Conectar Zoom**. Serás redirigido a la página de autorización de Zoom — inicia sesión en tu cuenta Zoom (si aún no estás autenticado) y confirma el acceso.

Después de autorizar, regresa a Mentorfy. La integración estará activa y lista para crear eventos Zoom.

---

## **3. Crear una reunión Zoom**

En el menú lateral, ve a **Reuniones > Mis Reuniones** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)) y haz clic en **+ Nueva Reunión**.

![Página Mis Reuniones en Mentorfy](/docs/img/Zoom_Mentorfy_Conectar.png)

En el modal de creación, selecciona el tipo **Evento Zoom** y completa la información básica:

| Campo | Descripción |
| ----- | ----- |
| **Nombre de la reunión** | Título mostrado a los participantes. |
| **Programar fecha y hora** | Opcional. Activa para definir un inicio programado. |
| **Duración en minutos** | Tiempo previsto del evento (predeterminado: 60 min). |
| **Requerir inicio de sesión en Mentorfy** | Restringe el acceso a usuarios autenticados en la plataforma. |
| **Sala de espera** | Los participantes esperan la aprobación del moderador antes de entrar. |
| **Unirse antes del host** | Permite que los participantes entren antes que el mentor. |
| **Silenciar al entrar** | El micrófono de los participantes comienza desactivado. |
| **Grabar en la nube** | Graba la sesión en la nube de Zoom; después de la reunión, el replay se importa automáticamente a tu biblioteca de Mentorfy. |

![Modal de creación de reunión con Evento Zoom seleccionado](/docs/img/Zoom_Mentorfy_Criar_reuniao.png)

Avanza por los pasos **Invitación** y **Config** según sea necesario y finaliza la creación.

---

## **4. Compartir los enlaces**

Después de crear la reunión, Mentorfy muestra dos enlaces distintos:

| Enlace | Uso |
| ----- | ----- |
| **Enlace para invitados** | Comparte con alumnos y participantes. |
| **Enlace de moderador** | Úsalo solo tú (mentor) para iniciar y conducir la reunión. |

![Enlaces de invitado y moderador tras crear la reunión](/docs/img/Zoom_Mentorfy_Compartilhar_Links.png)

Copia el enlace adecuado usando el botón junto a cada campo o haz clic en **Unirse a la reunión** para acceder directamente como moderador.

:::tip
Envía el **enlace de invitado** a los participantes. El **enlace de moderador** otorga control total de la sala — no lo compartas públicamente.
:::

---

## **5. Unirse a la reunión**

Al acceder al enlace (como moderador o invitado), es posible que se te solicite iniciar sesión en Mentorfy o en Zoom, dependiendo de las configuraciones definidas en la creación.

A continuación, se muestra la pantalla de pre-entrada de Zoom. Allí puedes:

- Verificar el nombre de visualización.
- Configurar el micrófono y la cámara antes de entrar.
- Elegir fondo virtual, si lo deseas.

![Pantalla de pre-entrada de Zoom](/docs/img/Zoom_Mentorfy_Acessar_Reuniao.png)

Haz clic en **Join** para entrar a la sala. A partir de ahí, la experiencia es **100% Zoom** — con todos los recursos nativos de la plataforma, incluyendo un diseño adaptado para **móvil**.

---

## **6. Grabación en la nube y asistencia**

### Replay de la sesión

Activa **Grabar en la nube** al crear la reunión (o inicia la grabación en la nube manualmente desde el menú **Grabar** de Zoom durante la sesión). Cuando la reunión termina y Zoom concluye el procesamiento de la grabación, Mentorfy importa el replay automáticamente:

- La reunión muestra el botón **Ver Grabación** en cuanto el replay está listo — normalmente pocos minutos después del fin de la sesión.
- El replay se almacena en tu biblioteca de medios privada de Mentorfy, y los alumnos con acceso a la reunión pueden verlo en el área de miembros.
- Si finalizas y reabres la misma reunión, las grabaciones de todas las instancias se localizan e importan.
- La grabación original permanece intacta en tu cuenta Zoom — Mentorfy nunca modifica ni elimina nada.

En **Reuniones > Mis Reuniones** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)), la columna **Grabación** muestra el estado del replay de cada sesión — **Disponible** cuando el replay está listo para ver.

![Página Mis Reuniones con la columna Grabación mostrando replay disponible](/docs/img/Zoom_Mentorfy_Minhas_Reunioes_Gravacao.png)

### Asistencia

Después del fin de la sesión, Mentorfy sincroniza la lista de participantes de Zoom (nombre de visualización, correo electrónico y horarios de entrada/salida) para que puedas revisar la asistencia en la página de la reunión.

:::info Reconexión necesaria para integraciones existentes
La importación de grabaciones y la sincronización de asistencia usan nuevos permisos de lectura (grabaciones en la nube y participantes). Si conectaste Zoom antes de esta actualización, ve a **Integraciones > Zoom** y reautoriza la app (desconecta y conecta de nuevo) para conceder los nuevos permisos. Las reuniones siguen funcionando normalmente — pero los replays solo se importan después de la reautorización.
:::

---

## **Conclusión**

Con la integración Zoom configurada, puedes:

- Crear eventos en vivo directamente desde Mentorfy.
- Compartir enlaces de acceso con alumnos en el área del miembro.
- Conducir reuniones con la infraestructura y calidad de Zoom.
- Poner el replay a disposición de los alumnos en el área de miembros.

En caso de duda, comunícate con nuestro soporte a través del chat en la plataforma o por correo electrónico a contato@mentorfy.io.
