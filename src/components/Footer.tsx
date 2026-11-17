import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { CONTACTO, SITE } from "@/config/site";
import { Container, InscripcionButton } from "./ui";

export default function Footer() {
  const hayContacto = Boolean(CONTACTO.correo || CONTACTO.telefono || CONTACTO.sitioWeb);

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="font-display text-2xl leading-tight font-black">
            <span className="text-lime">SANTANDER</span> PROGRAMANDO FUTURO
          </p>
          <p className="mt-3 max-w-md text-white/75">
            Curso de Formación Gratuita en Programación e Inteligencia Artificial.
          </p>
          <InscripcionButton className="mt-6" />
        </div>

        <div className="space-y-6 md:justify-self-end md:text-right">
          <Image
            src="/images/logos/campuslands-horizontal-blanco.png"
            alt="Campuslands"
            width={1200}
            height={237}
            className="h-8 w-auto md:ml-auto"
          />
          <p className="font-semibold text-lime">{SITE.hashtag}</p>
          {hayContacto && (
            <ul className="space-y-2 text-sm text-white/80">
              {CONTACTO.correo && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Mail aria-hidden="true" className="size-4" />
                  <a href={`mailto:${CONTACTO.correo}`} className="hover:text-white">{CONTACTO.correo}</a>
                </li>
              )}
              {CONTACTO.telefono && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Phone aria-hidden="true" className="size-4" />
                  <a href={`tel:${CONTACTO.telefono.replace(/\s/g, "")}`} className="hover:text-white">{CONTACTO.telefono}</a>
                </li>
              )}
              {CONTACTO.sitioWeb && (
                <li className="flex items-center gap-2 md:justify-end">
                  <Globe aria-hidden="true" className="size-4" />
                  <a href={CONTACTO.sitioWeb} className="hover:text-white">{CONTACTO.sitioWeb}</a>
                </li>
              )}
            </ul>
          )}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-white/60">
          <p>
            Una iniciativa de la Gobernación de Santander · Secretaría de Competitividad y Productividad · FondoPaz ·
            Campuslands.
          </p>
        </Container>
      </div>
    </footer>
  );
}
