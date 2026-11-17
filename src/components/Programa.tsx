import { BrainCircuit, CodeXml, GraduationCap } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const pilares = [
  {
    icon: GraduationCap,
    titulo: "Formación gratuita",
    texto: "El curso no tiene ningún costo para las personas seleccionadas en la convocatoria.",
  },
  {
    icon: CodeXml,
    titulo: "Programación",
    texto: "Aprende las bases para crear soluciones digitales y comprender cómo funciona el software.",
  },
  {
    icon: BrainCircuit,
    titulo: "Inteligencia Artificial",
    texto: "Conoce cómo usar la inteligencia artificial como herramienta para aprender, crear y trabajar.",
  },
];

export default function Programa() {
  return (
    <section id="programa" aria-labelledby="programa-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Sobre el programa</Eyebrow>
            <h2 id="programa-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
              Tecnología para construir oportunidades en Santander
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-twilight/80">
            <p>
              <strong className="text-twilight">Santander Programando Futuro</strong> es un curso de formación
              gratuita en Programación e Inteligencia Artificial, impulsado por la Gobernación de Santander a
              través de la Secretaría de Competitividad y Productividad, junto con FondoPaz y Campuslands.
            </p>
            <p>
              Su propósito es abrir caminos de aprendizaje y empleabilidad en el sector tecnológico para
              poblaciones que han sido afectadas por el conflicto armado y para quienes le apuestan a la paz.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {pilares.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo} className="rounded-card border border-twilight/10 bg-mist p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-seaweed ring-1 ring-twilight/10">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display mt-6 text-xl font-bold text-twilight">{titulo}</h3>
              <p className="mt-2 leading-relaxed text-twilight/75">{texto}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
