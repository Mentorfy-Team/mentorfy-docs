---
sidebar_position: 0
---

import VideoEmbed from '@site/src/components/IframeVideo/VideoEmbed';

# Integraciones

El área de Integraciones permite configurar webhooks y conexiones con plataformas externas. Las configuraciones están organizadas en las pestañas: **Entrada, Salida, Automatizaciones, Claves, Widgets y Registros**.

---

## **Entrada — URLs de Entrada**

Las URLs de Entrada se utilizan para recibir webhooks de gateways de pago. Cada URL generada aquí libera automáticamente el acceso del estudiante al producto correspondiente cuando se confirma una compra en la plataforma de origen.

### **Cómo crear una nueva URL de Entrada** {#como-criar-uma-nova-url-de-entrada}

Haga clic en **"+ Nueva URL"** en la esquina superior derecha. Se mostrará un formulario con los siguientes campos:

![Nueva URL de Entrada](/img/integracoes/intro-1.png)

**Nombre: Identifique** la integración con un nombre descriptivo.

* Ejemplo: *Curso de Marketing \- Hotmart*

**Gateway de Pago:** Seleccione la plataforma de origen de la venta. Los gateways disponibles incluyen: Hotmart, Cakto, Voomp, Kiwify, Stripe, XGrow, entre otros.

**Slug (identificador en la URL):** Generado automáticamente a partir del nombre, pero puede personalizarse.

* Utilice solo letras minúsculas, números y guiones  
* Ejemplo: *curso-marketing-hotmart*

**Duración del Acceso (días):** Campo opcional. Si se completa, define cuántos días tendrá acceso el estudiante al producto después de la compra, reemplazando la expiración predeterminada configurada en el producto.

* Ejemplo: *30*

**Productos a Liberar:** Seleccione qué productos se liberarán automáticamente cuando se reciba el webhook. Use el campo de búsqueda para localizarlos rápidamente.

**Categorías a Liberar:** Seleccione qué categorías de productos serán liberadas. También tiene campo de búsqueda.

Después de completar el formulario, haga clic en **"Crear"** para generar la URL.

![URL de Entrada creada](/img/integracoes/intro-2.png)

### **Gestión de URLs existentes**

Cada URL registrada muestra el nombre, el estado (**Activo**), el endpoint generado y la cantidad de productos, categorías y grupos vinculados.

Las acciones disponibles para cada URL son:

* **Copiar** — copia el endpoint al portapapeles  
* **Desactivar** — suspende temporalmente la integración  
* **Editar** — modifica la configuración de la URL  
* **Eliminar** — elimina la integración permanentemente

![Gestión de URLs de Entrada](/img/integracoes/intro-3.png)

---

## **Salida — Webhooks de Salida**

Los Webhooks de Salida envían notificaciones automáticamente a URLs externas cada vez que ocurren eventos específicos en la plataforma. Utilice esta funcionalidad para integrar Mentorfy con herramientas como CRMs, automatizaciones (n8n, Make, Zapier) y otros sistemas.

### **Cómo crear un nuevo Webhook de Salida**

Haga clic en **"+ Nuevo Webhook"** en la esquina superior derecha. El formulario muestra los siguientes campos:

![Nuevo Webhook de Salida](/img/integracoes/intro-4.png)

**Nombre: Identifique** la integración con un nombre descriptivo.

* Ejemplo: *Integración CRM*

**URL del Webhook:** Ingrese la URL de destino que recibirá las notificaciones.

* Ejemplo: *https://exemplo.com/webhook*

**Eventos:** Seleccione qué eventos activarán el webhook. Los eventos disponibles son:

| Evento | Descripción |
| ----- | ----- |
| **Estudiante Registrado** | Nuevo estudiante se registra en la plataforma |
| **Primer Acceso** | Estudiante accede por primera vez |
| **Progreso Actualizado** | Estudiante avanza en el contenido |
| **Certificado Emitido** | Se genera un certificado para el estudiante |
| **Cliente Actualizado** | Los datos del cliente son modificados |
| **Producto Liberado** | Se otorga acceso a un producto |
| **Acceso Revocado** | Se elimina el acceso a un producto |
| **Contenido Completado** | Estudiante completa un contenido |
| **Grupo Asignado** | Estudiante es añadido a un grupo |
| **Pago Confirmado** | El pago es confirmado |
| **Acceso Expirado** | El acceso al producto expira |
| **Acceso Extendido** | El acceso al producto es prorrogado |
| **Grupo Eliminado** | Estudiante es removido de un grupo |

Puede seleccionar múltiples eventos para un mismo webhook.

**Headers Personalizados (opcional):** Agregue encabezados personalizados a la solicitud ingresando la **Clave** y el **Valor** y haciendo clic en **"Agregar"**. Útil para autenticación en APIs externas.

Después de completar el formulario, haga clic en **"Crear"** para guardar el webhook.

![Webhook de Salida configurado](/img/integracoes/intro-5.png)

### **Gestión de Webhooks existentes**

Cada webhook registrado muestra el nombre, estado (**Activo**), la URL de destino y la cantidad de eventos vinculados.

Las acciones disponibles son:

* **Desactivar** — suspende temporalmente el envío del webhook  
* **Editar** — modifica la configuración  
* **Eliminar** — elimina el webhook permanentemente

---

## **Automatizaciones (Experimental)**

Las Automatizaciones permiten crear flujos visuales para ejecutar acciones automáticamente basadas en eventos de la plataforma. Con ellas, elimina tareas manuales y garantiza que las acciones correctas ocurran en el momento adecuado.

### **Cómo crear una nueva Automatización**

Haga clic en **"+ Nueva Automatización"** en la esquina superior derecha. El editor visual se abrirá con los siguientes campos y componentes:

**Nombre de la Automatización:** Dé un nombre descriptivo para identificar el flujo.

* Ejemplo: *Asignar grupo por producto*

**Descripción (opcional):** Agregue una descripción breve para documentar el objetivo de la automatización.

![Nueva Automatización](/img/integracoes/intro-6.png)

### **Plantilla: Liberación en Orden** ✨

Para facilitar la creación de rutas secuenciales, la plataforma ofrece una plantilla lista accesible directamente desde el botón **"+ Nueva Automatización"**.

#### **Cómo acceder a la plantilla**

Haga clic en la flecha junto al botón **"+ Nueva Automatización"** para abrir el menú de Plantillas. Seleccione **Liberación en orden** - "Crea una ruta secuencial de liberación".

---

#### **Configurando la ruta de Liberación en Orden**

El asistente abre un formulario guiado con los siguientes campos:

**Nombre de la ruta:** Dé un nombre descriptivo para identificar la secuencia. Ejemplo: *Onboarding -> Módulo 1 -> Módulo 2*

**Encadenar automáticamente:** activado por defecto. Cuando está activo, el siguiente paso comienza automáticamente con el producto liberado en el paso anterior, sin necesidad de configuración manual.

---

#### **Configurando los pasos de la ruta**

Cada paso representa una etapa de la secuencia y está compuesto por dos campos:

**Cuando completen el producto:** seleccione el producto que el estudiante necesita completar para avanzar.

**Liberar los productos:** seleccione qué producto se liberará automáticamente después de la finalización. Es posible agregar más de un producto a liberar por paso haciendo clic en **"+ Agregar producto a liberar"**.

Haga clic en el ícono de papelera junto al título del paso para eliminarlo, o en el ícono de flecha para contraer/expandir.

Atención: cada paso debe tener al menos un producto gatillo y un producto a liberar seleccionados. De lo contrario, la plataforma mostrará un aviso en rojo y el botón **"Crear automatizaciones"** quedará deshabilitado.

---

#### **Vista previa de la ruta**

A medida que se configuran los pasos, la sección **Vista previa** en la parte inferior muestra el flujo completo de la secuencia en tiempo real. Ejemplo:

1. Criado por Copiloto -> Máquina de Vendas Imobiliárias com SaaS
2. Máquina de Vendas Imobiliárias com SaaS -> Crie Músicas Infantis Educacionais do Zero
3. Crie Músicas Infantis Educacionais do Zero -> Produto Modelo - Testes Internos

La vista previa también indica cuántas automatizaciones se crearán al confirmar.

#### **Finalización**

Haga clic en **"Crear automatizaciones"** para guardar. La plataforma creará automáticamente una automatización individual para cada paso de la ruta, todas agrupadas con la etiqueta **Ruta** en la lista de automatizaciones.

Después de la creación, cada automatización de la ruta puede gestionarse individualmente: editada, desactivada o eliminada. Para eliminar toda la ruta de una vez, haga clic en el ícono de capas disponible en las acciones de cualquier automatización que forme parte de ella.

---

### **Video tutorial**

<VideoEmbed
  src="https://player.vimeo.com/video/1183549682?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&dnt=1"
  title="VIDEO LIBERACIÓN SECUENCIAL"
/>

### **Estructura del flujo**

Cada automatización está compuesta por tres tipos de nodos conectados en secuencia:

**1\. Disparador:** Haga clic en el nodo **DISPARADOR** para configurar el evento de origen. En el campo "Cuando ocurra", seleccione uno de los eventos disponibles:

| Evento | Descripción |
| ----- | ----- |
| Acceso Expirado | El acceso del estudiante al producto expira |
| Progreso Actualizado | Estudiante avanza en el contenido |
| Contenido Completado | Estudiante completa un contenido |
| Producto Completado | Estudiante completa un producto completo |
| Acceso Extendido | El acceso al producto es prorrogado |
| Certificado Emitido | Se genera un certificado para el estudiante |

*Producto específico (opcional)* Seleccione un producto para restringir el disparador. Si se deja como "Cualquier producto", la automatización se activará para todos los productos cuando ocurra el evento.

**2\. Condición (opcional):** Filtra cuándo la automatización debe o no ejecutarse. Haga clic en el nodo **CONDICIÓN** para configurar la regla de filtrado.

Campos disponibles para verificar:

* ID del Producto  
* Título del Producto  
* Email del Cliente  
* Nombre del Cliente  
* Tipo de Evento

Operadores disponibles:

* Es igual a / Es diferente de  
* Contiene / No contiene  
* Es mayor que / Es menor que  
* Está vacío / No está vacío

La condición se evaluará cuando se active el evento. Si es verdadera, se ejecutarán las acciones conectadas a **SÍ**. Si es falsa, el flujo seguirá el camino **NO**.

![Condición en el flujo](/img/integracoes/intro-7.png)

**3\. Acción:** Define qué se hará cuando el disparador se active y se cumpla la condición. Haga clic en el nodo **ACCIÓN** para seleccionar la acción a ejecutar.

| Tipo de Acción | Descripción |
| ----- | ----- |
| Liberar Producto | El cliente recibirá acceso al producto seleccionado cuando se ejecute la automatización |
| Asignar Grupo | El cliente será añadido automáticamente a un grupo |
| Eliminar del Grupo | El cliente será removido automáticamente de un grupo |
| Enviar Webhook | Envía una notificación a una URL externa |
| Enviar Email | Envía un correo electrónico automático al cliente |

Después de seleccionar el tipo de acción, configure los parámetros correspondientes en el panel lateral, como el producto a liberar, el grupo a asignar o la URL del webhook de destino.

![Acción en el flujo](/img/integracoes/intro-8.png)

### **Agregar más nodos al flujo**

En el panel lateral, utilice los botones:

* **Condición** — agrega un nuevo nodo de condición al flujo  
* **Acción** — agrega un nuevo nodo de acción al flujo

Puede encadenar múltiples nodos para crear automatizaciones más complejas.

**Caso de uso: Liberación Secuencial de Mentorías** ✨

La liberación secuencial permite controlar automáticamente el orden de acceso a las mentorías. El estudiante solo recibe acceso a la siguiente mentoría después de completar la anterior. La lógica es la misma que la liberación progresiva de módulos dentro de un producto, pero aplicada entre mentorías completas.

*Cómo configurar:*

**Paso 1 — Cree la automatización** En Integraciones → Automatizaciones, haga clic en "+ Nueva Automatización" y dé un nombre descriptivo, como "Liberación secuencial".

**Paso 2 — Configure el disparador** En el campo "Cuando ocurra", seleccione **Producto Completado**. En "Producto específico", seleccione la mentoría que el estudiante necesita completar antes de avanzar.

**Paso 3 — Configure la acción** Agregue un nodo de Acción y seleccione el tipo **Liberar Producto**. Luego, elija cuál será el siguiente producto liberado automáticamente.

![Ejemplo de liberación secuencial](/img/integracoes/intro-8.png)

**Paso 4 — Guarde y active** Haga clic en "Crear Automatización". La automatización se activará inmediatamente. Para pausar sin perder la configuración, simplemente desactívela mediante el toggle en la lista de automatizaciones.

💡 Repita el proceso para cada etapa de la secuencia. Ejemplo: Mentoría A → completa → libera Mentoría B → completa → libera Mentoría C.

### **Gestión de Automatizaciones existentes**

Cada automatización registrada muestra el nombre, estado (**Activo**), el disparador configurado, el destino de la acción y la cantidad de acciones vinculadas.

Las acciones disponibles son:

* **Desactivar** — suspende temporalmente la automatización  
* **Editar** — abre el editor visual para modificaciones  
* **Eliminar** — elimina la automatización permanentemente

Después de configurar el flujo, haga clic en **"Crear Automatización"** para guardar.

---

## **Claves — Claves de Seguridad**

Las Claves de Seguridad son tokens utilizados para validar la autenticidad de los webhooks recibidos de los gateways de pago, garantizando que solo las solicitudes legítimas sean procesadas por la plataforma.

![Claves de Seguridad](/img/integracoes/intro-9.png)

### **Cómo integrar con gateways de pago**

En la parte superior de la página, encontrará la **URL del webhook** de su cuenta en Mentorfy. Esta es la URL que debe registrarse en su gateway de pago para que envíe las notificaciones correctamente.

Haga clic en el ícono de copiar junto a la URL para copiarla rápidamente.

La plataforma también ofrece enlaces de instrucciones específicos para cada gateway. Haga clic en el nombre de la plataforma deseada para acceder al paso a paso de configuración: Hotmart, Kiwify, Eduzz, Stripe, Asaas, Greenn, Hubla, Cakto, Kirvano, Pagar.me, Payt, Herospark, DM Guru, Xgrow y Voomp.

### **Cómo crear una Nueva Clave de Seguridad**

Haga clic en **"+ Nueva Clave"** en la esquina superior derecha. El formulario muestra los siguientes campos:

![Nueva Clave](/img/integracoes/intro-10.png)

**Plataforma:** Seleccione el gateway de pago al que se vinculará la clave. Plataformas disponibles: Hotmart, Kiwify, Eduzz, Greenn, HeroSpark, PerfectPay, Kirvano, Cakto, Hubla, Asaas, Pagar.me, Payt, Voomp, Xgrow y Stripe.

**Clave Secreta:** Pegue el token proporcionado por el gateway de pago en el campo indicado. Si el gateway no proporciona un token, haga clic en el ícono de actualizar para **generar una clave aleatoria** automáticamente.

Después de completar el formulario, haga clic en **"Crear"** para guardar la clave.

### **Gestión de Claves existentes**

Cada clave registrada muestra el nombre de la plataforma, la fecha de creación y el token parcialmente oculto por seguridad.

Las acciones disponibles son:

* **Ver** — muestra el token completo temporalmente  
* **Copiar** — copia el token al portapapeles  
* **Editar** — modifica la configuración de la clave  
* **Eliminar** — elimina la clave permanentemente

---

## **Widgets — Códigos Embebidos**

La pestaña Widgets permite agregar scripts y códigos externos que se cargarán en el área del estudiante. Úsela para integrar herramientas como chat de atención, píxeles de seguimiento, widgets de analytics y mucho más.

![Lista de Claves](/img/integracoes/intro-11.png)

### **Cómo agregar un nuevo código**

Haga clic en **"+ Nuevo Código"** o **"+ Agregar código"**. El formulario muestra los siguientes campos:

**Nombre del Widget:** Identifique el código con un nombre descriptivo.

* Ejemplos: *Chat Intercom, Google Analytics, Pixel Facebook*

**Tipo:** Seleccione el tipo de código a insertar:

* **Script** — código JavaScript a ejecutar en la página  
* **HTML/Widget** — código HTML para incorporar elementos visuales o widgets externos

**Posición:** Define dónde se inyectará el código en el HTML de la página:

* **Head (antes de `</head>`)** — indicado para píxeles y scripts de seguimiento  
* **Inicio del Body (después de `<body>`)** — se carga al inicio del cuerpo de la página  
* **Final del Body (antes de `</body>`)** — posición predeterminada y recomendada para la mayoría de los scripts

**Código:** Pegue el código en el campo indicado.

Puede pegar el código JavaScript puro o con las etiquetas `<script>`. Las etiquetas se eliminarán automáticamente.

**Alcance**

* **Global (toda el área del estudiante)** — cargado en todas las páginas  
* **Por Producto (productos específicos)** — cargado solo en las páginas de los productos seleccionados

**Solo usuarios autenticados**

* **Activado** (predeterminado): se carga solo después del login  
* **Desactivado**: se carga desde la pantalla de login

**Nota:** Los códigos embebidos deben ser aprobados antes de cargarse en el área del estudiante.

Después de completar el formulario, haga clic en **"Crear"** para guardar.

![Widgets](/img/integracoes/intro-12.png)

---

## **Registros — Registros de Eventos**

La pestaña Registros ofrece visibilidad completa sobre todos los eventos procesados por las integraciones, permitiendo monitorear éxitos, fallos y el estado en tiempo real de la cola de webhooks.

![Registros](/img/integracoes/intro-13.png)

### **Cola de Webhooks**

Panel de estado en tiempo real de la cola de procesamiento:

| Indicador | Descripción |
| ----- | ----- |
| **En espera** | Eventos en la cola esperando ser procesados |
| **Procesando** | Eventos siendo procesados en este momento |
| **Retrasados** | Eventos con retraso en el procesamiento |
| **Completados** | Eventos procesados con éxito |
| **Fallos** | Eventos que fallaron en el procesamiento |

Cuando se recibe un nuevo evento, el modo en vivo se activa automáticamente.

### **Resumen de desempeño**

| Indicador | Descripción |
| ----- | ----- |
| **Eventos** | Total de eventos procesados en el período |
| **Éxito** | Cantidad y porcentaje de eventos exitosos |
| **Fallos** | Cantidad de eventos que fallaron |
| **Tiempo Promedio** | Tiempo promedio de respuesta en milisegundos |

### **Eventos por Día**

Gráfico que muestra la distribución de eventos en los últimos 30 días, con líneas separadas para **Fallo** y **Éxito**. Use el selector en la esquina superior derecha para ajustar el período visualizado.

### **Registros de Eventos**

Tabla detallada con el historial de todos los eventos activados:

| Columna | Descripción |
| ----- | ----- |
| **Fecha** | Fecha y hora del evento |
| **Evento** | Tipo de evento activado |
| **Dirección** | Entrada o Salida |
| **Cliente** | Correo electrónico del cliente relacionado con el evento |
| **Estado** | Éxito o Fallo |
| **Tiempo** | Tiempo de respuesta en milisegundos |
| **Webhook** | Nombre de la integración que procesó el evento |

**Filtros disponibles:**

* **Buscar por correo electrónico** — localiza eventos de un cliente específico  
* **Filtro de tipo** — filtra por tipo de evento  
* **Filtro de estado** — filtra por integración específica

Haga clic en cualquier fila de la tabla para expandir los detalles del evento. Haga clic en el ícono de actualizar en la esquina superior derecha para recargar los registros manualmente.
