import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import { CONTACTO, ENLACES_LEGALES, SITE } from "@/config/site";
import { Container } from "./ui";

/** Bloque 8: pie de página. Cierre institucional, sin botón de inscripción. */
export default function Footer() {
  const hayContacto = Boolean(CONTACTO.correo || CONTACTO.telefono || CONTACTO.sitioWeb);

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="font-display text-2xl leading-tight font-black">
            <span className="text-lime">Santander</span> Programando Futuro
          </p>
          <p className="mt-3 max-w-md leading-relaxed text-white/75">
            Formación que abre oportunidades. Tecnología que impulsa el desarrollo. Educación que construye paz.
          </p>
        </div>

        <div className="space-y-5 md:justify-self-end md:text-right">
          <Image
            src="/images/logos/campuslands-horizontal-blanco.png"
            alt="Campuslands"
            width={1200}
            height={237}
            className="h-8 w-auto md:ml-auto"
          />
          <p className="font-semibold text-lime">{SITE.hashtag}</p>
          {hayContacto && (
            <ul className="space-y-2 text-sm text-white/80" aria-label="Canales de contacto">
              {CONTACTO.correo && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Mail aria-hidden="true" className="size-4" />
                  <a href={`mailto:${CONTACTO.correo}`} className="hover:text-white">
                    {CONTACTO.correo}
                  </a>
                </li>
              )}
              {CONTACTO.telefono && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Phone aria-hidden="true" className="size-4" />
                  <a href={`tel:${CONTACTO.telefono.replace(/\s/g, "")}`} className="hover:text-white">
                    {CONTACTO.telefono}
                  </a>
                </li>
              )}
              {CONTACTO.sitioWeb && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Globe aria-hidden="true" className="size-4" />
                  <a href={CONTACTO.sitioWeb} className="hover:text-white">
                    {CONTACTO.sitioWeb}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            Una iniciativa de la Gobernación de Santander · Secretaría de Competitividad y Productividad · Fondo Paz ·
            Fundación Campuslands.
          </p>
          {ENLACES_LEGALES.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Enlaces legales">
              {ENLACES_LEGALES.map((l) => (
                <li key={l.url}>
                  <a href={l.url} className="underline underline-offset-4 hover:text-white">
                    {l.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </div>
    </footer>
  );
}
