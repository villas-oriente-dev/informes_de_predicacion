// ═══════════════════════════════════════════════════════════════
//  config.js — Único archivo que modificar por congregación
// ═══════════════════════════════════════════════════════════════

window.INFORME_CONFIG = {

  // ── Nombre visible (aparece en el título y en la card del formulario) ──
  congregacion: "Congregación",

  // ── Configuración de Firebase ──────────────────────────────────────────
  firebase: {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
  },

  // ── Prefijo para localStorage / sessionStorage ─────────────────────────
  // Evita colisiones si varias congregaciones comparten el mismo navegador.
  // Ejemplo: "vdo_" → Para Villas De Oriente
  prefix: "abc_",

  // ── Nombre de la colección en Firestore ────────────────────────────────
  coleccion: "informes", // Dejar así por defecto

  // ── URL base de la página de edición ──────────────────────────────────
  // Debe terminar con '?doc=' (sin el ID del documento).
  editBaseUrl: "https://ejemplo.netlify.app/informe/edit/?doc=",

  // ── Grupos de predicación ──────────────────────────────────────────────
  // Cada valor genera una opción "Grupo X" en los selects.
  grupos: ["1", "2", "3"]

};
