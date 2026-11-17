import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, Laptop } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const beneficios = [
  {
    icon: GraduationCap,
    titulo: "Formación sin costo",
    texto: "Accede a un curso gratuito en Programación e Inteligencia Artificial.",
  },
  {
    icon: Laptop,
    titulo: "Habilidades digitales",
    texto: "Fortalece conocimientos que hoy son clave en el mundo laboral y en el emprendimiento.",
  },
  {
    icon: BriefcaseBusiness,
    titulo: "Intermediación laboral",
    texto:
      "Al finalizar el curso, quienes cumplan con los requisitos podrán acceder a oportunidades de intermediación laboral.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="bg-mist py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Beneficios y empleabilidad</Eyebrow>
          <h2 id="beneficios-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
            Aprender hoy para trabajar en lo que viene
          </h2>
          <ul className="mt-10 space-y-6">
            {beneficios.map(({ icon: Icon, titulo, texto }) => (
              <li key={titulo} className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal ring-1 ring-twilight/10">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-twilight">{titulo}</h3>
                  <p className="mt-1 leading-relaxed text-twilight/75">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="overflow-hidden rounded-card bg-white ring-1 ring-twilight/10">
          <Image
            src="/images/flyers/afiche-horizontal.webp"
            alt="Afiche de Santander Programando Futuro: curso de formación gratuita en Programación e Inteligencia Artificial, con los logos de FondoPaz, Gobernación de Santander, Secretaría de Competitividad y Productividad y Campuslands"
            width={1600}
            height={899}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="px-6 py-4 text-sm text-twilight/70">Afiche oficial de la convocatoria.</figcaption>
        </figure>
      </Container>
    </section>
  );
}
