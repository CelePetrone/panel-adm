// Configuración del Panel ADM.
// Estos datos no son secretos: no dan acceso a nada sin iniciar sesión con Google.

window.PANEL_CONFIG = {
  // ID de cliente OAuth de Google Cloud (termina en .apps.googleusercontent.com).
  // Mientras esté vacío, el panel solo funciona con datos de ejemplo.
  googleClientId: "",

  // Planilla índice "Clientes ADM" (la parte del link entre /d/ y /edit).
  indiceId: "1isJ_UxUy0uZaSjK9FyYWM8jmMuaU1H2sx9LRJXkGuZ8",

  // Socias, para elegir responsable en el checklist.
  socias: ["Celeste", "Caro", "Fer"],
};
