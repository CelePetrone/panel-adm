// Configuración del Panel ADM.
// Estos datos no son secretos: no dan acceso a nada sin iniciar sesión con Google.

window.PANEL_CONFIG = {
  // ID de cliente OAuth de Google Cloud (termina en .apps.googleusercontent.com).
  // Mientras esté vacío, el panel solo funciona con datos de ejemplo.
  googleClientId: "233548047653-6b1eb4v1mdeeg87414kpri3r6j5cd3s5.apps.googleusercontent.com",

  // Planilla índice "Clientes ADM" (la parte del link entre /d/ y /edit).
  indiceId: "1isJ_UxUy0uZaSjK9FyYWM8jmMuaU1H2sx9LRJXkGuZ8",

  // Planilla modelo que se copia para cada cliente nuevo (en "_Modelo de carpeta cliente").
  plantillaId: "1hFXwtN50tdfmaLiZLdbuHorBIQ0z584dDQ1yVLLiNz0",

  // Planilla "Reuniones ADM" (en "2. ADM interno"), con una fila por reunión.
  reunionesId: "1_Af638vdWvvX6DCgCFI0YFBVZV1NNnc0TqwO7-AJAQ8",

  // Socias, para elegir responsable en el checklist.
  socias: ["Celeste", "Caro", "Fer"],
};
