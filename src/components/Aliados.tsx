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
  { nombre: "FondoPaz", src: "/images/logos/fondopaz.png", width: 300, height: 299 },
  { nombre: "Campuslands", src: "/images/logos/campuslands-horizontal-azul.png", width: 1200, height: 375 },
];

export default function Aliados() {
  return (
    <section id="aliados" aria-labelledby="aliados-title" className="border-t border-twilight/10 bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Aliados</Eyebrow>
          <h2 id="aliados-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
            Una alianza por el futuro de Santander
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-twilight/75">
            Este programa es posible gracias al trabajo conjunto de entidades públicas y del sector tecnológico.
          </p>
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
      </Container>
    </section>
  );
}
