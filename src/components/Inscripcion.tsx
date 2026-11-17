import Image from "next/image";
import { CalendarClock, ClipboardPen, FileText, ScanLine } from "lucide-react";
import { DETALLES_CONVOCATORIA, INSCRIPCION_URL } from "@/config/site";
import { Container, Eyebrow, InscripcionButton } from "./ui";

const pasos = [
  {
    icon: ScanLine,
    titulo: "Escanea el código QR",
    texto: "Usa la cámara de tu celular o pulsa el botón “Inscríbete aquí”.",
  },
  {
    icon: ClipboardPen,
    titulo: "Diligencia el formulario",
    texto: "Completa tus datos con información verídica y revisa antes de enviar.",
  },
  {
    icon: FileText,
    titulo: "Revisa los requisitos",
    texto: "Verifica que haces parte de la población a la que va dirigida la convocatoria.",
  },
];

export default function Inscripcion() {
  const hayEnlace = INSCRIPCION_URL !== "#" && INSCRIPCION_URL.trim() !== "";

  return (
    <section id="inscripcion" aria-labelledby="inscripcion-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
          <div aria-hidden="true" className="absolute -right-32 -bottom-32 size-96 rounded-full bg-seaweed/25 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow dark>Cómo inscribirse</Eyebrow>
              <h2 id="inscripcion-title" className="font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Inscríbete en tres pasos
              </h2>

              <ol className="mt-10 space-y-6">
                {pasos.map(({ icon: Icon, titulo, texto }, i) => (
                  <li key={titulo} className="flex gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lime ring-1 ring-white/15">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        <span className="text-lime">{i + 1}.</span> {titulo}
                      </h3>
                      <p className="mt-1 leading-relaxed text-white/75">{texto}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
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
                    Las fechas, horarios y modalidad del curso se publicarán próximamente por los canales oficiales.
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs rounded-card bg-white p-5 text-twilight shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <p className="mb-4 rounded-full bg-lime px-4 py-1.5 text-sm font-bold">Inscríbete aquí</p>
                <Image
                  src="/images/qr-inscripcion.png"
                  alt="Código QR que lleva al formulario de inscripción del curso Santander Programando Futuro"
                  width={600}
                  height={590}
                  className="h-auto w-full"
                />
              </div>
              <InscripcionButton className="mt-8 w-full max-w-xs px-8 py-4" />
              {!hayEnlace && (
                <p className="mt-3 text-sm text-white/70">El enlace de inscripción estará disponible muy pronto.</p>
              )}
              <a
                href="/images/flyers/afiche-vertical.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
              >
                Ver afiche oficial de la convocatoria
                <span className="sr-only"> (abre en una nueva pestaña)</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
