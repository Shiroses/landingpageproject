import { ArrowRight, Trophy } from "lucide-react";

/** Bloque 1: franja superior de reconocimiento (enlaza a la sección del premio). */
export default function AnuncioPremio() {
  return (
    <a
      href="#emprender-paz"
      className="group block bg-teal text-white transition-colors hover:bg-[#12596a]"
    >
      <span className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm xl:text-xs sm:px-6 lg:px-8">
        <Trophy aria-hidden="true" className="size-4 shrink-0 text-sunflower" strokeWidth={2} />
        <span>
          <strong className="font-semibold">Campuslands, primer lugar del Premio Emprender Paz 2026.</strong>
          <span className="hidden text-white/85 xl:inline">
            {" "}
            Reconocidos por transformar la educación tecnológica en oportunidades de empleo, inclusión y construcción
            de paz.
          </span>
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </span>
    </a>
  );
}
