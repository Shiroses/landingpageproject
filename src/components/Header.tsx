import Image from "next/image";
import { Container, InscripcionButton } from "./ui";

const links = [
  { href: "#programa", label: "El programa" },
  { href: "#dirigido", label: "¿A quién va dirigido?" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#aliados", label: "Aliados" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-twilight"
      >
        Saltar al contenido
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center" aria-label="Santander Programando Futuro, ir al inicio">
          <Image
            src="/images/logos/campuslands-horizontal-blanco.png"
            alt="Campuslands"
            width={1200}
            height={237}
            className="h-6 w-auto sm:h-7"
            preload
          />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-white/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <InscripcionButton className="px-4! py-2! text-sm!" label="Inscríbete" />
      </Container>
    </header>
  );
}
