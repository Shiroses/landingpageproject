import type { LucideIcon } from "lucide-react";
import { ArrowRight, BrainCircuit, CircleCheck, CodeXml, MapPin, MonitorSmartphone, Users } from "lucide-react";
import { INSCRIPCION_LINEA_A_URL, INSCRIPCION_LINEA_B_URL } from "@/config/site";
import { Container, Eyebrow } from "./ui";

type Ruta = {
  nombre: string;
  linea: "A" | "B";
  icon: LucideIcon;
  descripcion: string;
  condiciones: { icon: LucideIcon; texto: string }[];
  url: string;
  cta: string;
};

const rutas: Ruta[] = [
  {
    nombre: "Programación",
    linea: "A",
    icon: CodeXml,
    descripcion:
      "Aprende las bases del desarrollo de software y fortalece tus habilidades para construir soluciones tecnológicas.",
    condiciones: [
      { icon: Users, texto: "Jóvenes de 16 a 28 años." },
      { icon: MapPin, texto: "Modalidad presencial." },
    ],
    url: INSCRIPCION_LINEA_A_URL,
    cta: "Postúlate a la Línea A",
  },
  {
    nombre: "Inteligencia Artificial",
    linea: "B",
    icon: BrainCircuit,
    descripcion:
      "Conoce herramientas de inteligencia artificial y aprende a utilizarlas para fortalecer tus capacidades digitales y productivas.",
    condiciones: [
      { icon: Users, texto: "Personas mayores de 18 años." },
      { icon: MonitorSmartphone, texto: "Modalidad virtual." },
    ],
    url: INSCRIPCION_LINEA_B_URL,
    cta: "Postúlate a la Línea B",
  },
];

const poblaciones = [
  "Víctimas del conflicto armado",
  "Firmantes de paz",
  "Personas en reincorporación y reintegración",
  "Líderes sociales",
  "Demás población habilitada por Fondo Paz",
];

/** Bloque 5: Oferta formativa y postulación. Única zona de inscripción de la página. */
export default function Inscripcion() {
  return (
    <section id="inscripcion" aria-labelledby="inscripcion-title" className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -right-40 top-1/3 size-[420px] rounded-full bg-seaweed/20 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow dark>Oferta formativa y postulación</Eyebrow>
          <h2 id="inscripcion-title" className="font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            Elige las habilidades con las que quieres transformar tu futuro.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Conoce las oportunidades de formación gratuita de Santander Programando Futuro y descubre cómo participar.
          </p>
        </div>

        {/* Rutas de formación */}
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {rutas.map(({ nombre, linea, icon: Icon, descripcion, condiciones, url, cta }) => (
            <li key={nombre} className="flex flex-col rounded-card bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-lime/10 text-lime ring-1 ring-lime/30">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-2xl leading-tight font-extrabold sm:text-3xl">{nombre}</h3>
              </div>
              <p className="mt-5 leading-relaxed text-white/80">{descripcion}</p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5" aria-label={`Condiciones de la ruta ${nombre}`}>
                {condiciones.map(({ icon: CIcon, texto }) => (
                  <li key={texto} className="flex items-center gap-3 font-medium">
                    <CIcon aria-hidden="true" className="size-5 shrink-0 text-sunflower" strokeWidth={1.75} />
                    {texto}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-semibold text-twilight transition-colors hover:bg-[#6ff08f] focus-visible:outline-lime"
                >
                  {cta}
                  <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
                  <span className="sr-only"> (abre el formulario de la Línea {linea} en una nueva pestaña)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Destinatarios y requisitos */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-card bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
            <h3 className="font-display text-xl font-bold">¿A quién va dirigido?</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {poblaciones.map((p) => (
                <li key={p} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
            <h3 className="font-display flex items-center gap-2 text-xl font-bold">
              <CircleCheck aria-hidden="true" className="size-6 text-lime" strokeWidth={1.75} />
              ¿Qué necesitas para participar?
            </h3>
            <p className="mt-4 leading-relaxed text-white/80">
              Residir en Santander, pertenecer a alguna de las poblaciones priorizadas y cumplir los requisitos
              específicos de edad, modalidad y documentación de la ruta seleccionada.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
