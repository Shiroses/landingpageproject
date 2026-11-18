import Image from "next/image";
import { ExternalLink, Quote, Trophy } from "lucide-react";
import { PREMIO } from "@/config/site";
import { Container } from "./ui";

/**
 * Bloque 3: Ganadores del Premio Emprender Paz 2026.
 * El reconocimiento corresponde al modelo Campuslands (no al programa Santander Programando Futuro).
 */
export default function EmprenderPaz() {
  return (
    <section id="emprender-paz" aria-labelledby="premio-title" className="relative overflow-hidden bg-mist py-20 sm:py-24">
      <Container>
        <p className="font-display flex flex-wrap items-end gap-x-5 gap-y-3 text-3xl leading-none font-black tracking-tight text-twilight sm:text-5xl lg:text-6xl">
          <Trophy aria-hidden="true" className="size-10 shrink-0 text-sunflower sm:size-16" strokeWidth={1.75} />
          <span>
            <span className="block">
              PRIMER LUGAR <span className="text-sunflower">—</span>
            </span>
            <span className="block">EMPRENDER PAZ 2026</span>
          </span>
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-sm lg:max-w-md">
            <Image
              src="/images/premio-emprender-paz-2026-transparente.webp"
              alt="Placa de cristal de la 19ª edición del Premio Emprender Paz, liderado por la Fundación Grupo Social: Ganador Campuslands, 12 de noviembre de 2026"
              width={800}
              height={1071}
              sizes="(min-width: 1024px) 440px, 100vw"
              className="mx-auto h-auto w-full drop-shadow-[0_16px_24px_rgba(15,8,75,0.18)]"
            />
            <figcaption className="mt-4 text-center text-sm text-twilight/70">
              19ª edición del Premio Emprender Paz · 12 de noviembre de 2026
            </figcaption>
          </figure>

          <div>
            <Image
              src="/images/logos/emprender-paz.png"
              alt="Logo del Premio Emprender Paz"
              width={400}
              height={349}
              className="h-24 w-auto"
            />
            <h2 id="premio-title" className="font-display mt-6 text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
              Campuslands, primer lugar del Premio Emprender Paz 2026
            </h2>
            <p className="mt-4 text-lg font-medium text-teal">
              Un reconocimiento nacional a un modelo educativo que transforma vidas y construye paz a través del
              empleo.
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-twilight/80">
              <p>
                Campuslands fue reconocido con el primer lugar del Premio Emprender Paz 2026, una iniciativa nacional
                liderada por la Fundación Grupo Social, que exalta a las organizaciones que, a través de modelos
                empresariales sostenibles, generan oportunidades económicas, promueven la inclusión social y
                contribuyen a la construcción de paz en Colombia.
              </p>
              <p>
                Este reconocimiento destaca el impacto del modelo educativo de Campuslands, que conecta la formación
                tecnológica con oportunidades reales de desarrollo laboral, demostrando que el acceso al conocimiento
                puede transformar las condiciones de vida de las personas y generar nuevas posibilidades de progreso
                para sus comunidades.
              </p>
            </div>

            <blockquote className="mt-8 rounded-card bg-twilight p-6 text-white sm:p-8">
              <Quote aria-hidden="true" className="size-7 text-sunflower" strokeWidth={1.75} />
              <p className="font-display mt-3 text-xl leading-snug font-bold sm:text-2xl">
                Cuando la educación se transforma en empleo, también se convierte en una herramienta para construir
                paz.
              </p>
            </blockquote>

            <a
              href={PREMIO.referenciaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-teal underline underline-offset-4 hover:text-twilight"
            >
              Ver publicación
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only"> sobre el Premio Emprender Paz 2026 en LinkedIn (abre en una nueva pestaña)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
