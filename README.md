# Factoría Franklin · propuesta de nueva web

Prototipo navegable de la nueva web de Factoría Franklin (Franklin 741, Santiago). HTML, CSS y JavaScript sin dependencias: se abre en cualquier navegador y se puede publicar tal cual en GitHub Pages.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Portada: agenda del fin de semana, planificador de visita, boletín, directorio de fábricas, Factor F, arriendo y prensa |
| `agenda.html` | Próximas actividades con filtros y registro de actividades pasadas |
| `fabricas.html` | Directorio de las 13 fábricas con horario |
| `fabrica.html#<fabrica>` | Ficha de cada fábrica (por ejemplo `fabrica.html#pobre-vermut`) |
| `factor-f.html` | Ojos del Alma, sobre Factor F, archivo y lista de convocatorias |
| `visitas.html` | Inscripción a visitas guiadas |
| `espacios.html` | Patio Central y Galpón Multiuso, con formulario de arriendo |
| `historia.html` | Historia del edificio, barrio y prensa |
| `contacto.html` | Contacto, cómo llegar y envío de CV |

## Dónde cambiar los datos

Todo el contenido que se repite (fábricas, horarios, eventos, registro y prensa) está en `assets/js/data.js`. El encabezado y el pie se generan en `assets/js/main.js`.

## Fuentes

- factoria-franklin.cl: fichas de fábricas, blog, Espacios, Contacto, Actividades y Factor F (revisado el 13 de octubre de 2026).
- La Tercera, “Las sabrosas historias que dan vida a la Factoría Franklin” (26 de enero de 2022): fundadora, Propiedades Monpla y llegada en 2019.
- La Tercera: ubicación de Quintal en el local A1.
- Chef & Hotel y Guía Comino: Festival del Vermut en el galpón techado.
- Nota en Google: 4,7 con 970 reseñas, según la ficha de Google que muestra Wanderlog (octubre de 2026).

## Fotos

Las fotos de las fábricas (`assets/img/fabricas/`), del patio y el plano vienen de factoria-franklin.cl, optimizadas para web. Las de eventos vienen de las carpetas de la Factoría.

## Conectar los formularios a Mailchimp

Los formularios del boletín, la ruta de visita, las visitas guiadas y la convocatoria de Factor F se envían a Mailchimp sin salir de la página, con el diseño del sitio.

1. En Mailchimp: Audiencia → Formularios de registro → Formularios integrados.
2. En el código que entrega Mailchimp, copia la URL que está en `action="..."` (termina en `/subscribe/post?u=...&id=...`).
3. Pégala en `assets/js/data.js`, en `mailchimp.action`.
4. Crea en Mailchimp (Audiencia → Configuración → Campos y etiquetas) los campos que quieras guardar: COMUNA, RECORRIDO, HORARIO, PERSONAS, ORIGEN, DISCIPLINA, PORTAFOLIO. Los que no existan se ignoran.
5. Opcional: crea un grupo "Intereses" y etiquetas por formulario, y copia sus códigos en `mailchimp.intereses` y `mailchimp.etiquetas`.

Mientras `action` esté vacío, los formularios funcionan en modo maqueta: muestran la confirmación sin enviar nada.

Contacto, arriendo y CV no son del boletín: en WordPress se conectan a Contact Form 7, que ya está instalado.

## Pendiente antes de publicar

- Corregir en WordPress el artículo de Ojos del Alma: dice “abierta hasta el 1 de noviembre” y la fecha correcta es el 8 de noviembre.
- Confirmar los días de atención de Emperatriz: su ficha solo indica 11:00 a 18:30.
- Confirmar el horario de Quintal Destilados: su ficha indica días, pero no horas.
- La Factoría no tiene WhatsApp, así que el sitio no lo incluye.

## Publicar en GitHub Pages

1. Crear un repositorio y subir el contenido de esta carpeta.
2. En el repositorio: Settings → Pages → Branch `main`, carpeta `/ (root)`.
