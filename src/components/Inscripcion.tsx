import type { LucideIcon } from "lucide-react";
import { BrainCircuit, CalendarClock, CodeXml, MapPin, MonitorSmartphone, Users } from "lucide-react";
import { CUPOS, DETALLES_CONVOCATORIA } from "@/config/site";
import { Container, Eyebrow } from "./ui";

type Linea = {
  letra: "A" | "B";
  nombre: string;
  icon: LucideIcon;
  requisitos: { icon: LucideIcon; texto: string }[];
};

const lineas: Linea[] = [
  {
    letra: "A",
    nombre: "Programación",
    icon: CodeXml,
    requisitos: [
      { icon: Users, texto: "Jóvenes de 16 a 28 años" },
      { icon: MapPin, texto: "Presencial" },
    ],
  },
  {
    letra: "B",
    nombre: "Inteligencia Artificial",
    icon: BrainCircuit,
    requisitos: [
      { icon: Users, texto: "Mayores de 18 años" },
      { icon: MonitorSmartphone, texto: "Virtual" },
    ],
  },
];

export default function Inscripcion() {
  return (
    <section id="inscripcion" aria-labelledby="inscripcion-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
          <div aria-hidden="true" className="absolute -right-32 -bottom-32 size-96 rounded-full bg-seaweed/25 blur-3xl" />

          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow dark>Cupos de formación gratuita</Eyebrow>
              <h2 id="inscripcion-title" className="font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Elige tu línea de formación
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Santander Programando Futuro 2026 ofrece{" "}
                <strong className="text-white">{CUPOS} cupos de formación gratuita</strong>. Conoce las dos líneas y
                elige la que mejor se ajuste a ti.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {lineas.map(({ letra, nombre, icon: Icon, requisitos }) => (
                <li
                  key={letra}
                  className="flex flex-col rounded-card bg-white/5 p-6 ring-1 ring-white/15 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold tracking-wide text-lime uppercase">Línea {letra}</p>
                      <h3 className="font-display mt-2 text-2xl leading-tight font-extrabold sm:text-3xl">{nombre}</h3>
                    </div>
                    <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-lime/10 text-lime ring-1 ring-lime/30">
                      <Icon aria-hidden="true" className="size-7" strokeWidth={1.5} />
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3" aria-label={`Requisitos de la Línea ${letra}`}>
                    {requisitos.map(({ icon: RIcon, texto }) => (
                      <li key={texto} className="flex items-center gap-3 text-base text-white/90">
                        <RIcon aria-hidden="true" className="size-5 shrink-0 text-sunflower" strokeWidth={1.75} />
                        {texto}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-sunflower uppercase">
                <CalendarClock aria-hidden="true" className="size-5" strokeWidth={1.75} />
                Detalles de la convocatoria
              </h3>
              {DETALLES_CONVOCATORIA.length > 0 ? (
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {DETALLES_CONVOCATORIA.map((d) => (
                    <div key={d.etiqueta}>
                      <dt className="text-sm text-white/60">{d.etiqueta}</dt>
                      <dd className="font-semibold">{d.valor}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-2 text-white/75">
                  Las fechas y horarios del curso se publicarán próximamente por los canales oficiales.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
