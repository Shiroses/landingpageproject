import Image from "next/image";
import { ArrowDown, BrainCircuit, CodeXml, GraduationCap } from "lucide-react";
import { Container, Stars } from "./ui";

const destacados = [
  { icon: CodeXml, texto: "Programación" },
  { icon: BrainCircuit, texto: "Inteligencia Artificial" },
  { icon: GraduationCap, texto: "Formación gratuita" },
];

/** Bloque 2: portada principal con llamado a la acción laboral. */
export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-40 -left-40 size-[480px] rounded-full bg-teal/40 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <h1
            id="hero-title"
            className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            ¿Quieres mejorar tu perfil laboral y acceder a{" "}
            <span className="text-lime">nuevas oportunidades?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Aprende Programación e Inteligencia Artificial, desarrolla habilidades tecnológicas que están
            transformando el mercado laboral y prepárate para los desafíos del futuro.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Lo que ofrece el programa">
            {destacados.map(({ icon: Icon, texto }) => (
              <li
                key={texto}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20"
              >
                <Icon aria-hidden="true" className="size-4 text-lime" strokeWidth={2} />
                {texto}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-2 border-lime pl-5">
            <p className="font-display text-lg font-extrabold tracking-[0.06em]">
              <span className="text-lime">SANTANDER</span> PROGRAMANDO FUTURO
            </p>
            <Stars className="mt-2" />
            <p className="mt-3 max-w-lg leading-relaxed text-white/75">
              Una oportunidad de formación gratuita para fortalecer tus conocimientos, desarrollar nuevas capacidades
              y ampliar tus posibilidades de crecimiento laboral y productivo.
            </p>
          </div>

          <a
            href="#inscripcion"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-semibold text-twilight transition-colors hover:bg-[#6ff08f]"
          >
            Conoce cómo participar
            <ArrowDown aria-hidden="true" className="size-5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
          <Image
            src="/images/hero-estudiante-robot.webp"
            alt="Joven con gafas estudiando frente a un portátil junto a un robot humanoide, con líneas de código de fondo"
            width={1400}
            height={1260}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="h-auto w-full"
            preload
          />
        </div>
      </Container>
    </section>
  );
}
