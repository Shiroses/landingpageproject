import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { SITE, SITE_URL } from "@/config/site";
import "./globals.css";

// Tipografía de texto del Manual de Marca Campuslands.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Titulares: el manual usa "Sugo Classic" (fuente comercial, no disponible en
// Google Fonts). Se usa Montserrat en pesos altos como alternativa libre.
// Ver README para reemplazarla si se cuenta con la licencia de Sugo Classic.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.titulo,
  description: SITE.descripcion,
  keywords: [
    "Santander Programando Futuro",
    "curso gratuito",
    "programación",
    "inteligencia artificial",
    "Gobernación de Santander",
    "Fondo Paz",
    "Campuslands",
    "víctimas del conflicto armado",
    "firmantes de paz",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE.nombre,
    title: SITE.titulo,
    description: SITE.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.titulo,
    description: SITE.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f084b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${poppins.variable} ${montserrat.variable} antialiased`}>
      <body className="min-h-dvh bg-white text-twilight">{children}</body>
    </html>
  );
}
