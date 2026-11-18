/**
 * Configuración central de la landing "Santander Programando Futuro".
 * Cambia aquí los enlaces y datos editables sin tocar los componentes.
 */

/**
 * Enlace del formulario de postulación (Microsoft Forms).
 * Es el mismo para la ruta de Programación y la de Inteligencia Artificial.
 * Lo usa el único botón de postulación de la página ("Realiza tu postulación").
 */
export const INSCRIPCION_URL = "https://forms.cloud.microsoft/r/mZ3awwCtBZ";

/**
 * URL pública del sitio (se usa para metadatos y OpenGraph).
 * TODO: cambiar cuando la página se publique en un dominio real.
 */
export const SITE_URL = "http://localhost:3000";

export const SITE = {
  nombre: "Santander Programando Futuro",
  titulo: "Santander Programando Futuro | Formación gratuita en Programación e Inteligencia Artificial",
  descripcion:
    "¿Quieres mejorar tu perfil laboral y acceder a nuevas oportunidades? Aprende Programación e Inteligencia Artificial con Santander Programando Futuro, una oportunidad de formación gratuita en Santander.",
  hashtag: "#HackeandoVidas",
};

/** Premio Emprender Paz 2026 (reconocimiento al modelo Campuslands). */
export const PREMIO = {
  /** Publicación de referencia sobre el premio. */
  referenciaUrl:
    "https://es.linkedin.com/posts/campuslands_emprenderpaz2026-activity-7527093709847347200-pcFS",
};

/**
 * Testimonio real de un egresado de Campuslands (bloque "Historias que construyen paz").
 *
 * TODO: completar SOLO con una historia real, verificable y con autorización de uso.
 * Mientras sea `null`, la tarjeta de testimonio no se muestra.
 *
 * Ejemplo de estructura:
 * {
 *   foto: "/images/testimonios/nombre.webp", // archivo en public/images/testimonios/
 *   nombre: "Nombre Apellido",
 *   municipio: "Municipio, Santander",
 *   antes: "Situación antes de formarse.",
 *   aprendio: "Qué aprendió.",
 *   oportunidad: "Qué oportunidad logró después de la formación.",
 * }
 */
export type Testimonio = {
  foto: string;
  nombre: string;
  municipio: string;
  antes: string;
  aprendio: string;
  oportunidad: string;
};

export const TESTIMONIO: Testimonio | null = null;

/**
 * Enlaces legales del pie de página (política de privacidad, tratamiento de datos, etc.).
 * TODO: agregar cuando existan. Si la lista está vacía, no se muestran.
 * Ejemplo: { etiqueta: "Política de tratamiento de datos", url: "https://..." }
 */
export const ENLACES_LEGALES: { etiqueta: string; url: string }[] = [];
