import { Handshake, HeartHandshake, MapPin, Megaphone, Route } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const poblaciones = [
  { icon: HeartHandshake, titulo: "Víctimas del conflicto armado" },
  { icon: Handshake, titulo: "Firmantes de paz" },
  { icon: Route, titulo: "Personas en reincorporación y reintegración" },
  { icon: Megaphone, titulo: "Líderes sociales y demás población habilitada del Fondo Paz" },
];

export default function Dirigido() {
  return (
    <section id="dirigido" aria-labelledby="dirigido-title" className="relative overflow-hidden bg-twilight py-20 text-white sm:py-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow dark>Convocatoria dirigida a</Eyebrow>
          <h2 id="dirigido-title" className="font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            ¿A quién va dirigido?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            El curso está pensado para personas que hacen parte de las siguientes poblaciones:
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {poblaciones.map(({ icon: Icon, titulo }) => (
            <li
              key={titulo}
              className="flex flex-col gap-6 rounded-card bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <Icon aria-hidden="true" className="size-8 text-lime" strokeWidth={1.5} />
              <p className="text-lg leading-snug font-semibold">{titulo}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 sm:rounded-full text-base ring-1 ring-white/15">
          <MapPin aria-hidden="true" className="size-5 shrink-0 text-sunflower" strokeWidth={1.75} />
          <span>
            Requisito: ser <strong className="text-sunflower">residente en Santander</strong>.
          </span>
        </p>
      </Container>
    </section>
  );
}
