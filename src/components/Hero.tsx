import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CUPOS } from "@/config/site";
import { Container, InscripcionButton, Stars } from "./ui";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 size-[480px] rounded-full bg-teal/40 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl bg-white px-3 py-2">
            <Image
              src="/images/logos/fondopaz.png"
              alt="FondoPaz"
              width={300}
              height={299}
              className="h-12 w-auto"
            />
            <span className="pr-1 text-xs font-semibold text-twilight">
              Convocatoria
              <br />
              Fondo Paz
            </span>
          </div>

          <h1 id="hero-title" className="font-display leading-none">
            <span className="block text-[3.4rem] font-black tracking-tight text-lime sm:text-7xl lg:text-[5.4rem]">
              SANTANDER
            </span>
            <span className="mt-2 block text-[1.4rem] font-bold tracking-[0.06em] whitespace-nowrap text-white sm:text-3xl lg:text-[2.05rem]">
              PROGRAMANDO FUTURO
            </span>
          </h1>
          <Stars className="mt-4" />

          <p className="mt-8 inline-block rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
            Curso de Formación Gratuita · 2026
          </p>
          <p className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">
            Programación e <span className="text-lime">Inteligencia Artificial</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            <strong className="text-white">{CUPOS} cupos de formación gratuita</strong> de la Gobernación de
            Santander, FondoPaz y Campuslands para que víctimas del conflicto armado, firmantes de paz y personas
            en reincorporación y reintegración aprendan habilidades digitales con futuro.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <InscripcionButton className="px-8 py-4" />
            <a
              href="#programa"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              Conoce el programa
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/images/hero-estudiante-robot.webp"
              alt="Joven con gafas estudiando frente a un portátil junto a un robot humanoide, con líneas de código de fondo"
              width={1400}
              height={1260}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
              preload
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>
          <div className="relative mx-4 -mt-16 flex items-start gap-4 rounded-2xl bg-twilight/95 p-5 ring-1 ring-white/15 sm:mx-8 lg:absolute lg:right-auto lg:-bottom-8 lg:-left-10 lg:mx-0 lg:mt-0 lg:max-w-sm">
            <BadgeCheck aria-hidden="true" className="mt-0.5 size-8 shrink-0 text-lime" strokeWidth={1.75} />
            <p className="text-sm leading-relaxed text-white/90">
              Al finalizar el curso, <strong className="text-white">quienes cumplan con los requisitos</strong>{" "}
              podrán acceder a{" "}
              <strong className="text-lime">oportunidades de intermediación laboral.</strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
