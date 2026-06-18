---
sidebar_position: 6
---

# Grupos

El área de Grupos permite crear y gestionar grupos de forma centralizada, independientemente de los productos. Un mismo grupo puede vincularse a múltiples productos, y cada grupo puede tener su propio webhook de integración.

---

## Visión general

La pantalla principal muestra todos los grupos creados. Cada tarjeta muestra:

- Nombre y descripción del grupo
- Productos vinculados
- Cantidad de alumnos asignados
- Botón **Ver alumnos** para consultar los miembros

![Visión general de grupos](/img/vitrine/turmas/turmas-1.png)

---

## Crear un nuevo grupo

Haz clic en **"+ Nuevo Grupo"** en la esquina superior derecha. El proceso se divide en 2 pasos.

### Paso 1 - Datos y Productos

Completa los campos:

| Campo | Descripción |
| ----- | ----- |
| Nombre | Nombre de identificación del grupo |
| Descripción | Descripción opcional del grupo |
| Fecha de vencimiento | Fecha de vencimiento del acceso del grupo (dd/mm/aaaa) |

Luego, en **Productos vinculados**, selecciona los productos asociados al grupo.

![Crear grupo - datos y productos](/img/vitrine/turmas/turmas-2.png)

### Paso 2 - Alumnos

Busca y selecciona los alumnos que participarán en el grupo:

- Usa **Buscar alumno** (nombre o correo electrónico)
- Usa **Seleccionar todos** para inclusión masiva
- Usa **Limpiar selección** para deshacer
- Si hay más de un producto vinculado, cambia el producto en el selector para vincular alumnos por producto

Haz clic en **Finalizar** para guardar. Si prefieres, usa **Omitir por ahora** para configurar los alumnos después.

![Crear grupo - alumnos](/img/vitrine/turmas/turmas-3.png)

---

## Gestionar grupo

Al lado de cada grupo en la lista, están disponibles:

- **Editar** (lápiz): modifica datos, productos y alumnos
- **Gestionar**: abre la lista de alumnos del grupo
- **Eliminar** (papelera): elimina el grupo permanentemente
- **Ver alumnos**: muestra la lista con nombre y correo electrónico

![Gestionar grupo](/img/vitrine/turmas/turmas-4.png)

---

## Consejo: integración por grupo

Cada grupo puede tener webhook propio en **Integraciones > Entrada**.

Con esto, puedes identificar de qué checkout o campaña provino cada alumno al momento de la compra, sin duplicar configuraciones entre productos.

Esta funcionalidad es especialmente útil para mentores con múltiples productos y grupos diferentes por oferta o campaña.
