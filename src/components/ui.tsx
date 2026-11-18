import type { ReactNode } from "react";

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

/** Siete estrellas, motivo gráfico de los afiches. */
export function Stars({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex gap-1.5 text-lime ${className}`}>
      {Array.from({ length: 7 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-4 fill-current">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </div>
  );
}
