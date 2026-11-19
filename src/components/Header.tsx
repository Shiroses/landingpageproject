import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "./ui";

const links = [
  { href: "/#emprender-paz", label: "Ganadores Emprender Paz" },
  { href: "/#programa", label: "El programa" },
  { href: "/#inscripcion", label: "Cómo participar" },
  { href: "/#historias", label: "Historias" },
  { href: "/#aliados", label: "Aliados" },
  { href: "/marco-normativo", label: "Respaldo normativo" },
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
        <a href="/#inicio" className="flex items-center" aria-label="Santander Programando Futuro, ir al inicio">
          <Image
            src="/images/logos/campuslands-horizontal-blanco.png"
            alt="Campuslands"
            width={1200}
            height={237}
            className="h-6 w-auto sm:h-7"
            preload
          />
        </a>

        {/* Menú de escritorio */}
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-white/80 xl:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors hover:text-white ${
                    l.href === "/#emprender-paz" ? "text-sunflower hover:text-sunflower" : ""
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú móvil (sin JavaScript) */}
        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white ring-1 ring-white/25 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-5" />
            Menú
          </summary>
          <nav
            aria-label="Secciones"
            className="absolute right-0 mt-2 w-64 rounded-2xl bg-twilight p-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
          >
            <ul className="flex flex-col text-base text-white">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block rounded-xl px-4 py-3 hover:bg-white/10">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
