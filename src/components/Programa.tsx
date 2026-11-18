import { CodeXml, Languages, Lightbulb } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const capsulas = [
  {
    icon: CodeXml,
    titulo: "Tecnología que abre oportunidades",
    texto:
      "La programación y la inteligencia artificial permiten desarrollar competencias para participar en sectores económicos en crecimiento, crear soluciones digitales y fortalecer el perfil laboral.",
  },
  {
    icon: Languages,
    titulo: "Bilingüismo que conecta con el mundo",
    texto:
      "El aprendizaje del inglés amplía las posibilidades de comunicación, acceso al conocimiento y participación en oportunidades laborales y comerciales.",
  },
  {
    icon: Lightbulb,
    titulo: "Emprendimiento que fortalece comunidades",
    texto:
      "El desarrollo de capacidades emprendedoras permite impulsar proyectos productivos, aplicar conocimientos tecnológicos y contribuir a la generación de ingresos.",
  },
];

/** Bloque 4: Sobre el programa + Formación para construir paz. */
export default function Programa() {
  return (
    <section id="programa" aria-labelledby="programa-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Sobre el programa</Eyebrow>
            <h2 id="programa-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
              Santander Programando Futuro: tecnología y educación para construir paz
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-twilight/80">
            <p>
              La Gobernación de Santander, a través de la Secretaría de Competitividad y Productividad, en alianza con
              la Fundación Campuslands y con el apoyo de Fondo Paz, te invita a participar en{" "}
              <strong className="text-twilight">Santander Programando Futuro</strong>, una estrategia de formación
              gratuita en Programación e Inteligencia Artificial.
            </p>
            <p>
              Esta iniciativa busca fortalecer las habilidades digitales de poblaciones priorizadas, ampliar sus
              oportunidades laborales y productivas y contribuir a la construcción de paz mediante el acceso a nuevos
              conocimientos.
            </p>
            <p>
              Porque construir paz también significa crear condiciones para que las personas puedan desarrollar su
              talento, generar ingresos y aportar al crecimiento de sus comunidades.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {capsulas.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo} className="rounded-card border border-twilight/10 bg-mist p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-seaweed ring-1 ring-twilight/10">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display mt-6 text-xl leading-snug font-bold text-twilight">{titulo}</h3>
              <p className="mt-2 leading-relaxed text-twilight/75">{texto}</p>
            </li>
          ))}
        </ul>

        <p className="font-display mx-auto mt-14 max-w-3xl text-center text-2xl leading-snug font-extrabold text-twilight sm:text-3xl">
          La paz se construye cuando el talento encuentra{" "}
          <span className="text-seaweed">oportunidades para crecer.</span>
        </p>
      </Container>
    </section>
  );
}
