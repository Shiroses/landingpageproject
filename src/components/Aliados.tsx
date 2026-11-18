import Image from "next/image";
import { Container, Eyebrow } from "./ui";

const aliados = [
  {
    nombre: "Gobernación de Santander",
    src: "/images/logos/gobernacion-santander.png",
    width: 700,
    height: 218,
  },
  {
    nombre: "Secretaría de Competitividad y Productividad",
    src: "/images/logos/secretaria-competitividad.png",
    width: 600,
    height: 172,
  },
  { nombre: "Fondo Paz", src: "/images/logos/fondopaz.png", width: 300, height: 299 },
  { nombre: "Campuslands", src: "/images/logos/campuslands-horizontal-azul.png", width: 1200, height: 375 },
];

export default function Aliados() {
  return (
    <section id="aliados" aria-labelledby="aliados-title" className="border-t border-twilight/10 bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Alianza institucional</Eyebrow>
          <h2 id="aliados-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
            Una alianza por la PAZ y por el futuro de la productividad y competitividad de Santander.
          </h2>
          <div className="mt-4 space-y-3 text-lg leading-relaxed text-twilight/75">
            <p>
              Santander Programando Futuro articula esfuerzos institucionales para ampliar el acceso a la educación
              tecnológica, promover la inclusión productiva y fortalecer las capacidades de poblaciones priorizadas del
              departamento.
            </p>
            <p>
              Una apuesta en la que la formación y la generación de oportunidades se convierten en herramientas para
              construir paz y avanzar hacia un Santander más competitivo.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {aliados.map((a) => (
            <li
              key={a.nombre}
              className="flex h-32 items-center justify-center rounded-card border border-twilight/10 bg-white p-3 sm:h-36 sm:p-6"
            >
              <Image
                src={a.src}
                alt={a.nombre}
                width={a.width}
                height={a.height}
                sizes="(min-width: 1024px) 240px, 45vw"
                className="h-auto max-h-20 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>

        <figure className="mt-12 overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-grupo-estudiantes.webp"
            alt="Grupo de estudiantes de Santander Programando Futuro"
            width={1400}
            height={823}
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="h-auto w-full"
          />
        </figure>
      </Container>
    </section>
  );
}
