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
| Reuniones | Planilla **Reuniones ADM**, en la carpeta "2. ADM interno": una fila por reunión, con el link a la minuta completa. |

Para sumar un cliente nuevo: en Inicio, **+ Nuevo cliente**. El panel crea su planilla copiando el modelo **MODELO - Check list + relevamiento + ficha (no editar)**, que está en la carpeta "_Modelo de carpeta cliente". También agrega la fila en Clientes ADM. La planilla nueva queda en "Mi unidad" de quien la creó: hay que moverla a la carpeta del cliente para que la vean las demás socias.

Si se cambia el modelo (por ejemplo, una tarea nueva en el checklist), los clientes nuevos salen con el cambio. Los que ya existen no se tocan.

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
