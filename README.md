# Panel ADM

Panel del emprendimiento ADM, con cinco secciones: **Inicio**, **Ficha**, **Relevamiento**, **Checklist** y **Reuniones**.

Es una sola página web publicada con GitHub Pages. Los datos no se guardan acá: viven en las planillas de Google Drive. El panel las lee y escribe ahí. Cada una entra con su propia cuenta de Google y ve solo las planillas que tiene compartidas.

## De dónde sale cada cosa

| Sección | Planilla |
|---|---|
| Inicio | Índice **Clientes ADM**: una fila por cliente. La columna **Planilla** lleva el link de la planilla de ese cliente y se puede completar desde el panel. |
| Checklist | Pestaña **Checklist** de la planilla del cliente. Tildar en el panel es lo mismo que tildar en la planilla. |
| Relevamiento | Pestañas **Relevamiento** y **Evaluación interna** de la planilla del cliente. |
| Ficha | Pestaña **Ficha del cliente** de la planilla del cliente. |
| Inicio: próximos pasos | Pestaña **Próximos pasos** de la planilla Reuniones ADM (el panel la crea sola). Los pendientes de cada minuta entran solos ("Cele: …", "Caro y Fer: …", "Todas: …" quedan con esas responsables). También se pueden agregar pasos a mano. Con la × se borra un paso: en la planilla queda con estado "Borrado", para que no vuelva a aparecer desde la minuta. |
| Reuniones | Planilla **Reuniones ADM**, en la carpeta "2. ADM interno": una fila por reunión, con el link a la minuta completa. |

Para sumar un cliente nuevo: en Inicio, **+ Nuevo cliente**. El panel crea su planilla copiando el modelo **MODELO - Check list + relevamiento + ficha (no editar)**, que está en la carpeta "_Modelo de carpeta cliente". También agrega la fila en Clientes ADM. La planilla nueva queda en "Mi unidad" de quien la creó: hay que moverla a la carpeta del cliente para que la vean las demás socias.

### Cambiar el modelo

Los cambios se hacen directamente en la planilla **MODELO** de Drive (agregar o sacar una tarea, una pregunta, una fila de la ficha). Los clientes nuevos salen con el cambio automáticamente.

Para pasar el cambio a los clientes que ya existen: en Inicio, **Actualizar desde el modelo**. Antes de tocar nada, el panel muestra qué se agrega y qué ya no está en cada cliente. Al confirmar:

- Cada planilla queda con las mismas pestañas y filas que el modelo, en el mismo archivo y la misma carpeta.
- Lo que ya habían cargado (tildes, responsables, respuestas, nombres) se vuelve a poner en su fila, buscándola por el texto de la columna A (en el checklist, por la etapa y la tarea).
- Si una fila ya no está en el modelo, o se cambió su texto, sus datos no pasan a la versión nueva. Por las dudas, la planilla como estaba queda en pestañas ocultas que empiezan con **Anterior ·** (en Sheets: menú Ver › Hojas ocultas). Cada vez que se actualiza, esas copias se reemplazan por las nuevas.
- Las pestañas que no están en el modelo no se tocan.

Lo que se cambia en el panel (tildes, responsables, respuestas, estados de los pasos) **no se guarda hasta tocar 💾 Guardar**, en la barra amarilla de arriba. **Descartar** vuelve todo a como está en la planilla. Se puede cambiar de pestaña, de cliente o tocar F5 sin perder lo que no se guardó. Además queda anotado en ese navegador: si se cierra la pestaña o se apaga la compu, al volver a entrar con la misma cuenta los cambios siguen ahí para guardar. Al cerrar la pestaña con cambios sin guardar, el navegador avisa. Agregar un paso, una reunión o un cliente nuevo se guarda directo con su propio botón.

El panel trae solo lo que cargaron las demás cada 2 minutos y cuando se vuelve a la pestaña, salvo que estés escribiendo o tengas cambios sin guardar. Para verlo en el momento: botón **F5**.

## Probarlo sin conectar nada

Al abrir el panel aparece el botón **Ver con datos de ejemplo**. Los datos son inventados y los cambios no se guardan.

## Publicarlo (una sola vez)

En GitHub: **Settings › Pages**. En *Branch* elegir `main` y la carpeta `/ (root)`, y tocar **Save**. A los pocos minutos queda en `https://celepetrone.github.io/panel-adm/`.

## Conectarlo con Google (una sola vez)

1. Entrar a [console.cloud.google.com](https://console.cloud.google.com) y crear un proyecto llamado `Panel ADM`.
2. En **APIs y servicios › Biblioteca**, buscar **Google Sheets API** y tocar **Habilitar**.
3. En **Google Auth Platform** (o **Pantalla de consentimiento de OAuth**), completar nombre de la app (`Panel ADM`) y mail, con tipo de usuario **Externo**.
4. En **Público** (*Audience*), dejarlo en modo **Prueba** y agregar como usuarios de prueba los Gmail de las tres socias.
5. En **Clientes** (*Clients*), crear un cliente de tipo **Aplicación web**. En **Orígenes autorizados de JavaScript** poner `https://celepetrone.github.io`.
6. Copiar el **ID de cliente** (termina en `.apps.googleusercontent.com`) y pegarlo en `config.js`, en `googleClientId`.

Las planillas tienen que estar compartidas, como editoras, con las socias que vayan a usar el panel.

## Archivos

- `index.html`: el panel.
- `config.js`: ID de cliente de Google, planilla índice y nombres de las socias.
- `demo-data.js`: datos de ejemplo.
- `manifest.json` e `icon.svg`: para instalarlo en el celu como app.
