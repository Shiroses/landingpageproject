# Santander Programando Futuro · Landing page

Landing page (tarjeta de presentación) del **Curso de Formación Gratuita en Programación e Inteligencia Artificial** “Santander Programando Futuro”, de la Gobernación de Santander (Secretaría de Competitividad y Productividad), FondoPaz y Campuslands (#HackeandoVidas).

Proyecto hecho con **Next.js (App Router) + TypeScript + Tailwind CSS**. Funciona solo en local, sin base de datos ni backend.

## Requisitos

- **Node.js 20.9 o superior** (lo exige Next.js 16). Recomendado: la versión LTS más reciente desde <https://nodejs.org>.
- npm (viene con Node.js).
- Conexión a internet la primera vez que se ejecuta, para descargar las fuentes de Google (Poppins y Montserrat).

Funciona igual en Windows, macOS y Linux.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abre <http://localhost:3000> en el navegador.

Otros comandos:

| Comando         | Qué hace                                         |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Servidor de desarrollo con recarga automática    |
| `npm run build` | Genera la versión optimizada de producción       |
| `npm start`     | Sirve la versión de producción (después de build)|
| `npm run lint`  | Revisa el código con ESLint                      |

## ¿Dónde cambio cada cosa?

### Sección de inscripción (Línea A y Línea B)

Archivo **`src/components/Inscripcion.tsx`** (arreglo `lineas`). Muestra, en un solo bloque: el aviso de “Detalles de la convocatoria”, el botón “Inscríbete aquí” y la información de cada línea:

- **Línea A · Programación**: jóvenes de 16 a 28 años, presencial.
- **Línea B · Inteligencia Artificial**: mayores de 18 años, virtual.

El botón “Inscríbete aquí” abre el formulario de inscripción, que es el mismo para ambas líneas. Su enlace está en la constante `INSCRIPCION_URL` de **`src/config/site.ts`**; si el formulario cambia, reemplázalo ahí.

Los botones “Inscríbete” del encabezado, la portada y el pie de página llevan a esta sección (`#inscripcion`).

El número de cupos (460) está en la constante `CUPOS` de **`src/config/site.ts`**.

### Datos pendientes (fechas, duración, horarios, contacto)

También en **`src/config/site.ts`**:

- `DETALLES_CONVOCATORIA`: lista de `{ etiqueta, valor }` (por ejemplo “Duración”, “Fecha de inicio”, “Horario”). Mientras esté vacía, se muestra un aviso de que se publicarán próximamente.
- `CONTACTO`: correo, teléfono y sitio web. Los campos vacíos no se muestran en el pie de página.
- `SITE_URL`: cámbialo por el dominio real si la página se publica (se usa en los metadatos para redes sociales).

### Textos

Cada sección es un componente en `src/components/`:

| Sección                 | Archivo                          |
| ----------------------- | -------------------------------- |
| Encabezado / menú       | `src/components/Header.tsx`      |
| Portada (hero)          | `src/components/Hero.tsx`        |
| Sobre el programa       | `src/components/Programa.tsx`    |
| A quién va dirigido     | `src/components/Dirigido.tsx`    |
| Beneficios              | `src/components/Beneficios.tsx`  |
| Inscripción (Líneas A y B) | `src/components/Inscripcion.tsx` |
| Aliados                 | `src/components/Aliados.tsx`     |
| Pie de página           | `src/components/Footer.tsx`      |
| Botones, contenedor, estrellas | `src/components/ui.tsx`   |

El título y la descripción para Google y redes sociales están en `SITE` dentro de `src/config/site.ts`.

### Imágenes

Todas están en `public/images/`:

- `hero-estudiante-robot.webp` / `.jpg`: imagen de portada (recortada del afiche horizontal).
- `flyers/afiche-horizontal.*`: afiche oficial optimizado para web.
- `logos/`: logos de Campuslands (oficiales, del paquete de marca), y de Gobernación de Santander, Secretaría de Competitividad y Productividad y FondoPaz (recortados de los afiches; si se consiguen los archivos originales en alta calidad, reemplázalos conservando el mismo nombre).

Para cambiar una imagen, reemplaza el archivo con el mismo nombre. Si cambian las proporciones, ajusta `width` y `height` en el componente que la usa.

El ícono de la pestaña (`src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico`) y la imagen para compartir en redes (`src/app/opengraph-image.jpg`) también se pueden reemplazar con archivos del mismo nombre.

## Marca y diseño

Basado en el Manual Visual de Campuslands y los afiches de la convocatoria:

- Colores (definidos en `src/app/globals.css`): Seaweed `#00AA80`, Stormy Teal `#16697A`, Deep Twilight `#0F084B`, Sunflower Gold `#F4B422` (acento), blanco y negro, más el verde brillante de los afiches `#3EE06B`.
- Tipografía de texto: **Poppins**.
- Tipografía de titulares: el manual indica **Sugo Classic**, que es una fuente comercial y no está en Google Fonts. Se usa **Montserrat** (pesos 700–900) como alternativa libre. Si tienen la licencia de Sugo Classic, se puede cargar con `next/font/local` en `src/app/layout.tsx` en lugar de Montserrat.
- Íconos lineales monocromáticos de [lucide-react](https://lucide.dev).
