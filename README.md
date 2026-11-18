# Santander Programando Futuro · Landing page

Landing page de **Santander Programando Futuro**, estrategia de formación gratuita en Programación e Inteligencia Artificial de la Gobernación de Santander (Secretaría de Competitividad y Productividad), en alianza con la Fundación Campuslands y con el apoyo de Fondo Paz (#HackeandoVidas).

Proyecto hecho con **Next.js (App Router) + TypeScript + Tailwind CSS**. Funciona en local, sin base de datos ni backend.

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

| Comando         | Qué hace                                          |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga automática     |
| `npm run build` | Genera la versión optimizada de producción        |
| `npm start`     | Sirve la versión de producción (después de build) |
| `npm run lint`  | Revisa el código con ESLint                       |

## Estructura de la página

El orden sigue la “Propuesta de ajustes” del cliente:

| #  | Bloque                                   | Archivo                            | Ancla            |
| -- | ---------------------------------------- | ---------------------------------- | ---------------- |
| 01 | Franja superior Ganadores Emprender Paz  | `src/components/AnuncioPremio.tsx` | —                |
| —  | Encabezado y menú                        | `src/components/Header.tsx`        | —                |
| 02 | Portada principal (llamado a la acción)  | `src/components/Hero.tsx`          | `#inicio`        |
| 03 | Premio Emprender Paz 2026                | `src/components/EmprenderPaz.tsx`  | `#emprender-paz` |
| 04 | Sobre el programa + paz (tres cápsulas)  | `src/components/Programa.tsx`      | `#programa`      |
| 05 | Oferta formativa y postulación           | `src/components/Inscripcion.tsx`   | `#inscripcion`   |
| 06 | Historias que construyen paz             | `src/components/Historias.tsx`     | `#historias`     |
| 07 | Alianza institucional (logos)            | `src/components/Aliados.tsx`       | `#aliados`       |
| 08 | Pie de página                            | `src/components/Footer.tsx`        | —                |

El orden de los bloques se define en `src/app/page.tsx`. Los textos de cada bloque están directamente en su archivo.

Lineamientos aplicados: no se muestran cantidades de cupos; hay **una sola zona de postulación** (bloque 05) con un único botón; el premio se presenta como reconocimiento al modelo Campuslands, no al programa.

## ¿Dónde cambio cada cosa? (`src/config/site.ts`)

- **`INSCRIPCION_URL`**: enlace del formulario de postulación (el mismo para Programación e Inteligencia Artificial). Lo usa el botón “Realiza tu postulación”, que es el único botón de inscripción de la página. El botón “Conoce cómo participar” de la portada y el enlace “Cómo participar” del menú solo llevan a esa sección.
- **`PREMIO.referenciaUrl`**: enlace “Ver publicación” del bloque del premio.
- **`TESTIMONIO`**: testimonio real de un egresado (foto, nombre, municipio, situación antes, qué aprendió, oportunidad lograda). Está en `null`, así que **la tarjeta no se muestra**. Complétalo solo con una historia real y autorizada; la foto va en `public/images/testimonios/`.
- **`ENLACES_LEGALES`**: enlaces legales del pie de página (política de datos, etc.). Si la lista está vacía no se muestran.
- **`SITE`** y **`SITE_URL`**: título, descripción y URL para Google y redes sociales. Cambia `SITE_URL` por el dominio real cuando se publique.

## Imágenes

Todas están en `public/images/`:

- `hero-estudiante-robot.webp` / `.jpg`: imagen de portada (recortada del afiche de la convocatoria). La propuesta recomienda reemplazarla por una fotografía real de estudiantes; usa el mismo nombre o ajusta `src`, `width` y `height` en `Hero.tsx`.
- `hero-grupo-estudiantes.webp`: fotografía real del grupo de estudiantes del programa, debajo de la sección de Alianza institucional (`Aliados.tsx`). Para cambiarla, reemplaza el archivo (mejor con un nombre nuevo, para evitar la caché de imágenes de Next.js) y ajusta `src`, `width` y `height` en ese componente.
- `premio-emprender-paz-2026-transparente.webp`: placa del Premio Emprender Paz 2026 con fondo transparente. Puede reemplazarse por la fotografía oficial de la entrega del 12 de noviembre de 2026.
- `logos/emprender-paz.png`: logo del premio, recortado de la placa. Si se obtiene el archivo oficial, reemplázalo con el mismo nombre.
- `logos/`: logos de Campuslands (oficiales, del paquete de marca) y de Gobernación de Santander, Secretaría de Competitividad y Productividad y Fondo Paz (recortados de los afiches; conviene reemplazarlos por los originales autorizados).

El ícono de la pestaña (`src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico`) y la imagen para compartir en redes (`src/app/opengraph-image.jpg`, recorte 1200×630 de la foto grupal) también se pueden reemplazar con archivos del mismo nombre.

## Marca y diseño

Basado en el Manual Visual de Campuslands y los afiches de la convocatoria:

- Colores (en `src/app/globals.css`): Seaweed `#00AA80`, Stormy Teal `#16697A`, Deep Twilight `#0F084B`, Sunflower Gold `#F4B422` (acento), blanco y negro, más el verde brillante de los afiches `#3EE06B`.
- Tipografía de texto: **Poppins**.
- Tipografía de titulares: el manual indica **Sugo Classic**, fuente comercial que no está en Google Fonts. Se usa **Montserrat** (700–900) como alternativa libre. Si tienen la licencia, se puede cargar con `next/font/local` en `src/app/layout.tsx`.
- Íconos lineales monocromáticos de [lucide-react](https://lucide.dev).

## Pendiente antes de publicar

- Fotografía oficial de la premiación y logo oficial del Premio Emprender Paz.
- Testimonio real y autorizado (`TESTIMONIO`).
- Enlaces legales (`ENLACES_LEGALES`), si se requieren.
- Validar edades, modalidades y requisitos de cada ruta con la convocatoria definitiva, y los logos autorizados.
