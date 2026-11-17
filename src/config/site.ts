/**
 * Configuración central de la landing "Santander Programando Futuro".
 * Cambia aquí los enlaces y datos editables sin tocar los componentes.
 */

/** Número de cupos de la convocatoria 2026. */
export const CUPOS = 460;

/**
 * URL pública del sitio (se usa para metadatos y OpenGraph).
 * TODO: cambiar cuando la página se publique en un dominio real.
 */
export const SITE_URL = "http://localhost:3000";

export const SITE = {
  nombre: "Santander Programando Futuro",
  titulo: "Santander Programando Futuro | Curso gratuito de Programación e Inteligencia Artificial",
  descripcion:
    "Santander Programando Futuro 2026: 460 cupos de formación gratuita en Programación e Inteligencia Artificial para víctimas del conflicto armado, firmantes de paz, personas en reincorporación y reintegración, líderes sociales y demás población habilitada del Fondo Paz residentes en Santander.",
  hashtag: "#HackeandoVidas",
};

/**
 * Detalles de la convocatoria (fechas, duración, horarios, modalidad, etc.).
 *
 * TODO: completar cuando estén confirmados. Mientras la lista esté vacía,
 * la página muestra un mensaje indicando que se publicarán próximamente.
 * Ejemplo: { etiqueta: "Duración", valor: "X semanas" }
 */
export const DETALLES_CONVOCATORIA: { etiqueta: string; valor: string }[] = [];

/**
 * Datos de contacto (opcional).
 *
 * TODO: completar con canales oficiales. Los campos vacíos no se muestran.
 */
export const CONTACTO = {
  correo: "",
  telefono: "",
  sitioWeb: "",
};
