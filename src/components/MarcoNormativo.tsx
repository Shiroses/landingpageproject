import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { Container } from "./ui";

type Norma = {
  titulo: string;
  establece: string;
  contribuye: string;
  href: string;
  enlace: string;
  esPdf?: boolean;
};

const normas: Norma[] = [
  {
    titulo: "Ordenanza 062 de 2017, que actualiza la Ordenanza 007 de 1998, creadora del Fondo de Paz",
    establece:
      "el Fondo apoya la educación y la capacitación en derechos humanos y paz, y la reintegración, la reincorporación, la garantía de derechos y la sostenibilidad económica de la población que atiende.",
    contribuye:
      "aprender tecnología e inteligencia artificial es educación para la paz y, a la vez, una herramienta para generar ingresos propios y estables, también para defensores y defensoras de derechos humanos y líderes sociales.",
    href: "/docs/ordenanza-062-2017.pdf",
    enlace: "Ver ordenanza (PDF)",
    esPdf: true,
  },
  {
    titulo: "Ley 1448 de 2011, Ley de Víctimas",
    establece: "reconoce los derechos de las víctimas del conflicto armado y les da acceso prioritario a la formación para el empleo.",
    contribuye:
      "abre a las víctimas, incluidos los integrantes de la Fuerza Pública, formación gratuita en áreas con demanda laboral, que apoya su estabilización económica.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43043",
    enlace: "Ver en el Gestor Normativo",
  },
  {
    titulo: "Decreto Ley 899 de 2017, reincorporación económica y social",
    establece: "las medidas para la reincorporación de los firmantes del Acuerdo de Paz, entre ellas la formación y los proyectos productivos.",
    contribuye: "da a los firmantes de paz competencias digitales que fortalecen sus proyectos productivos y su vinculación laboral.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=81880",
    enlace: "Ver en el Gestor Normativo",
  },
  {
    titulo: "Decreto 1081 de 2015, ruta de reintegración",
    establece:
      "el proceso de reintegración de las personas desmovilizadas, que acompaña la Agencia para la Reincorporación y la Normalización (ARN).",
    contribuye: "complementa la dimensión educativa y productiva de la ruta de reintegración.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=73593",
    enlace: "Ver en el Gestor Normativo",
  },
  {
    titulo: "Ley 1957 de 2019, Estatutaria de la Jurisdicción Especial para la Paz (JEP)",
    establece: "el funcionamiento de la JEP y la situación de quienes comparecen ante ella.",
    contribuye:
      "los comparecientes, incluidos los integrantes de la Fuerza Pública, acceden a formación para el trabajo que facilita su vida productiva.",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=94590",
    enlace: "Ver en el Gestor Normativo",
  },
];

const intro =
  "Santander Programando Futuro se financia con el Fondo de Paz de Santander. Estas son las normas que lo respaldan y la forma en que la formación en programación e inteligencia artificial contribuye a cumplirlas.";

const cierre =
  "Quienes finalicen la formación participarán en un espacio de intermediación laboral. Allí podrán presentar su perfil y conocer empresas y oportunidades de empleo o de negocio. Con este cierre, la formación avanza hacia la sostenibilidad económica que buscan estas normas.";

/** Página /marco-normativo: respaldo normativo del programa. */
export default function MarcoNormativo() {
  return (
    <section aria-labelledby="marco-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 id="marco-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl lg:text-5xl">
            Respaldo normativo
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-twilight/80">{intro}</p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {normas.map(({ titulo, establece, contribuye, href, enlace, esPdf }) => (
            <li key={titulo} className="flex flex-col md:last:col-span-2 rounded-card border border-twilight/10 bg-mist p-6 sm:p-8">
              <h2 className="font-display text-xl leading-snug font-bold text-twilight">{titulo}</h2>
              <p className="mt-5 leading-relaxed text-twilight/80">
                <strong className="font-semibold text-twilight">Qué establece: </strong>
                {establece}
              </p>
              <p className="mt-3 leading-relaxed text-twilight/80">
                <strong className="font-semibold text-twilight">Cómo contribuye la formación: </strong>
                {contribuye}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-teal underline underline-offset-4 hover:text-twilight"
              >
                {enlace}
                {esPdf ? (
                  <FileText aria-hidden="true" className="size-4 shrink-0" />
                ) : (
                  <ExternalLink aria-hidden="true" className="size-4 shrink-0" />
                )}
                <span className="sr-only"> (abre en una nueva pestaña)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-card bg-ink px-6 py-10 text-white sm:px-10 sm:py-12">
          <h2 className="font-display text-2xl leading-snug font-extrabold sm:text-3xl">
            Del aula al trabajo: espacio de intermediación laboral
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">{cierre}</p>
          <a
            href="/#inscripcion"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-semibold text-twilight transition-colors hover:bg-[#6ff08f]"
          >
            Conoce cómo participar
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
