import Image from "next/image";
import { TESTIMONIO } from "@/config/site";
import { Container, Eyebrow } from "./ui";

/** Tarjeta de testimonio: solo se muestra si TESTIMONIO (src/config/site.ts) tiene una historia real. */
function TarjetaTestimonio() {
  if (!TESTIMONIO) return null;
  const t = TESTIMONIO;
  return (
    <figure className="mt-14 grid overflow-hidden rounded-card border border-twilight/10 bg-mist md:grid-cols-[280px_1fr]">
      <div className="relative aspect-square md:aspect-auto">
        <Image src={t.foto} alt={`Fotografía de ${t.nombre}`} fill sizes="(min-width: 768px) 280px, 100vw" className="object-cover" />
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-wide text-teal uppercase">Testimonio de egresado Campuslands</p>
        <dl className="mt-4 space-y-4 leading-relaxed text-twilight/80">
          <div>
            <dt className="font-semibold text-twilight">Antes de formarse</dt>
            <dd>{t.antes}</dd>
          </div>
          <div>
            <dt className="font-semibold text-twilight">Qué aprendió</dt>
            <dd>{t.aprendio}</dd>
          </div>
          <div>
            <dt className="font-semibold text-twilight">La oportunidad que logró</dt>
            <dd>{t.oportunidad}</dd>
          </div>
        </dl>
        <figcaption className="mt-6 border-t border-twilight/10 pt-4">
          <span className="font-display text-lg font-bold text-twilight">{t.nombre}</span>
          <span className="block text-sm text-twilight/70">{t.municipio}</span>
        </figcaption>
      </div>
    </figure>
  );
}

/** Bloque 6: Historias que construyen paz. */
export default function Historias() {
  return (
    <section id="historias" aria-labelledby="historias-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Historias que construyen paz</Eyebrow>
            <h2 id="historias-title" className="font-display text-3xl leading-tight font-extrabold text-twilight sm:text-4xl">
              Detrás de cada oportunidad hay una historia que puede transformar un territorio.
            </h2>
          </div>
          <div>
            <p className="font-display text-xl leading-snug font-bold text-teal">
              ¿Por qué aprender programación también puede ayudar a construir paz?
            </p>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-twilight/80">
              <p>
                Aprender programación va más allá de escribir código. Significa desarrollar capacidades que pueden
                abrir puertas al empleo, fortalecer emprendimientos y generar nuevas alternativas económicas.
              </p>
              <p>
                Cuando una persona accede a nuevas oportunidades de formación y trabajo, puede mejorar sus condiciones
                de vida, fortalecer la economía de su familia y contribuir al desarrollo de su comunidad.
              </p>
              <p className="font-semibold text-twilight">
                Ese es el verdadero poder de conectar educación, tecnología y construcción de paz.
              </p>
            </div>
          </div>
        </div>

        <TarjetaTestimonio />

        <p className="font-display mx-auto mt-14 max-w-3xl rounded-card bg-twilight px-6 py-8 text-center text-xl leading-snug font-extrabold text-white sm:px-10 sm:text-2xl">
          La formación transforma conocimientos en oportunidades.{" "}
          <span className="text-lime">Y las oportunidades pueden transformar vidas.</span>
        </p>
      </Container>
    </section>
  );
}
