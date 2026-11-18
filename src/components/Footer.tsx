import Image from "next/image";
import { ENLACES_LEGALES, SITE } from "@/config/site";
import { Container } from "./ui";

/** Bloque 8: pie de página. Cierre institucional, sin botón de inscripción. */
export default function Footer() {
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
