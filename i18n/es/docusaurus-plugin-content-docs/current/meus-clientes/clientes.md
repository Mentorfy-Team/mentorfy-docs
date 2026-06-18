---
sidebar_position: 1
---

# Mis Clientes

El área **Mis Clientes** centraliza la gestión de todos tus mentorados, permitiendo hacer seguimiento de su evolución, registrar nuevos alumnos, importar listas y exportar datos.

---

## **Visión General**

En la parte superior de la página, cuatro indicadores resumen el rendimiento del período seleccionado:

| Indicador | Descripción |
| ----- | ----- |
| **Nuevos Mentorados** | Cantidad de nuevos alumnos registrados en el período |
| **Interacciones** | Total de interacciones registradas |
| **Productos Entregados** | Cantidad de productos liberados para alumnos |
| **Facturación** | Valor total facturado en el período |

Utiliza el selector en la esquina superior derecha para alternar entre períodos (Este mes, últimos 30 días, etc.).

---

## **Lista de Clientes**

La tabla muestra todos los clientes registrados con las siguientes columnas:

| Columna | Descripción |
| ----- | ----- |
| **Cliente** | Nombre y correo electrónico del alumno |
| **Contacto** | Teléfono vía WhatsApp |
| **Estado del Email** | Estado del correo electrónico (Entregado, Rechazado, Diferido, Clic, Sin info) |
| **Productos** | Cantidad de productos vinculados |
| **Origen** | Cómo fue registrado el cliente (Manual, Hotmart, Eduzz, etc.) |
| **Valor Pagado** | Valor total pagado por el cliente |
| **Registro** | Fecha y hora del registro |

**Filtros disponibles:**

* **Buscar por nombre o correo electrónico** — localiza un cliente específico  
* **Todos los Productos** — filtra la lista por producto específico

---

## **Acciones por Cliente**

Al hacer clic en los **tres puntos (...)** junto a cualquier cliente de la lista, se muestra un menú de acciones con las siguientes opciones:

**Acciones**

* **Ver Perfil** — accede a la página completa del cliente con sus datos e historial  
* **Ver Recorrido** — visualiza el progreso y el recorrido de aprendizaje del alumno

**Adquisiciones**

* **Agregar Producto** — libera un nuevo producto para el cliente  
* **Eliminar Producto** — revoca el acceso a un producto específico

**Cuenta**

* **Iniciar sesión como Alumno** — accede a la plataforma con la vista del alumno, sin necesitar su contraseña  
* **Generar nueva contraseña** — genera una nueva contraseña automáticamente y la envía al correo electrónico del cliente  
* **Definir nueva contraseña** — permite definir manualmente una nueva contraseña para el cliente  
* **Exigir cambio de contraseña** — solicita al cliente que cree una nueva contraseña en su próximo acceso

**Zona de Atención**

* **Eliminar Cliente** — elimina permanentemente el cliente de la plataforma

Usa la opción **"Iniciar sesión como Alumno"** para verificar la experiencia del alumno e identificar posibles problemas de acceso o navegación.

---

## **Registrar Cliente**

Haz clic en **"+ Registrar"** para agregar un nuevo cliente de forma manual. Completa los siguientes campos:

**Correo electrónico:** Correo del cliente. Se enviará un enlace con los detalles de acceso a esta dirección.

**Nombre:** Nombre completo del cliente.

**Teléfono (opcional):** Número de contacto en el formato (00) 00000-0000.

**Expiración del Acceso (opcional):** Fecha en que expirará el acceso del cliente, en formato dd/mm/aaaa.

**Opciones adicionales:**

* **Solicitar creación de contraseña en el primer acceso** — el cliente recibirá un enlace para crear su propia contraseña  
* **Notificar al usuario por correo electrónico** — cuando está activado, el alumno recibe una notificación por correo al obtener acceso. Si está desactivado, el acceso se concede sin notificación  
* **Registrar Responsable** — activa esta opción si hay un tutor o responsable adicional vinculado al alumno

**Selecciona la ruta para asignar** Elige una ruta de aprendizaje para asignar al cliente. Si el usuario ya tiene la ruta, no ocurrirá nada.

**Selecciona el producto para asignar** Elige el producto al que tendrá acceso el cliente. Si el alumno ya tiene el producto, no ocurrirá nada.

Después de completar, haz clic en **"Crear Cliente"**.

![Registrar Cliente](/img/meus-clientes/clientes-1.png)

---

## **Importar Clientes**

Para registrar múltiples clientes a la vez, haz clic en **"Importar"**. El proceso se divide en 5 etapas:

**Etapa 1 — Envío** Sube el archivo CSV con la lista de clientes.

* Formato obligatorio: **.CSV**  
* Columnas obligatorias: **Nombre** y **Correo electrónico**  
* Columnas opcionales: Teléfono, Vencimiento, Responsable  
* Tamaño máximo: **100MB**

Plantillas de hoja de cálculo disponibles para descargar:

* **Modelo Simple**  
* **Con Expiración**  
* **Con Responsable**  
* **Con Miembro de Equipo**

Los clientes ya registrados no serán duplicados: recibirán los nuevos accesos. Los responsables son los tutores (padres, tutores) que siguen el progreso del alumno.

![Importar Clientes - Subida](/img/meus-clientes/clientes-2.png)

**Etapa 2 — Revisión** La plataforma analiza el archivo y muestra un resumen con: Total, Nuevos, Existentes y Errores. Verifica los datos y haz clic en **"Avanzar"**.

**Etapa 3 — Configuración** Configura los accesos que se asignarán a los clientes importados:

* **Productos o Categorías** — selecciona lo que se liberará (alterna entre Productos y Categorías con el toggle)  
* **Fecha de expiración (opcional)** — define cuándo expirará el acceso. Los clientes con expiración en el CSV tendrán prioridad  
* **Miembro de equipo (opcional)** — asigna los clientes importados directamente a un miembro del equipo

![Importar Clientes - Configuración](/img/meus-clientes/clientes-3.png)

**Etapa 4 — Confirmación** Revisa el resumen final antes de comenzar:

* Nuevos clientes que serán creados con invitación por correo electrónico  
* Clientes existentes que recibirán nuevos accesos  
* Productos/categorías asignados

No cierres la pestaña durante la importación. El proceso puede tardar algunos minutos para grandes volúmenes.

Haz clic en **"Iniciar importación"** para confirmar.

**Etapa 5 — Resultado: Al finalizar**, un informe de importación muestra el resultado para cada cliente con estado **Éxito** o **Fallo** y el motivo en caso de error.

![Importar Clientes - Resultado](/img/meus-clientes/clientes-4.png)

---

## **Exportar Clientes**

Haz clic en **"Exportar"** para descargar los datos en CSV. Hay dos opciones disponibles:

* **Exportar Solo Clientes** — exporta la información básica de los clientes  
* **Exportar Productos Entregados** — exporta los productos y sus clientes vinculados

---
