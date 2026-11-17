import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/** Contenedor horizontal común (ancho máximo + márgenes laterales). */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Etiqueta pequeña sobre los títulos de sección. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${
        dark ? "text-lime" : "text-teal"
      }`}
    >
      <span aria-hidden="true" className={`h-0.5 w-6 rounded-full ${dark ? "bg-lime" : "bg-seaweed"}`} />
      {children}
    </p>
  );
}

/** Botón principal: lleva a la sección de inscripción (#inscripcion), donde están las dos líneas. */
export function InscripcionButton({ className = "", label = "Inscríbete aquí" }: { className?: string; label?: string }) {
  return (
    <a
      href="#inscripcion"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-base font-semibold text-twilight transition-colors hover:bg-[#6ff08f] ${className}`}
    >
      {label}
      <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/** Siete estrellas, motivo gráfico de los afiches. */
export function Stars({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex gap-1.5 text-lime ${className}`}>
      {Array.from({ length: 7 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-4 fill-current sm:size-5">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </div>
  );
}
