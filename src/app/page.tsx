import Aliados from "@/components/Aliados";
import AnuncioPremio from "@/components/AnuncioPremio";
import EmprenderPaz from "@/components/EmprenderPaz";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historias from "@/components/Historias";
import Inscripcion from "@/components/Inscripcion";
import Programa from "@/components/Programa";

/**
 * Orden de bloques según la "Propuesta de ajustes" del cliente:
 * 01 Banner Emprender Paz · 02 Portada · 03 Premio Emprender Paz · 04 Sobre el programa + paz
 * 05 Oferta formativa y postulación · 06 Historias · 07 Alianza institucional · 08 Pie de página
 */
export default function Home() {
  return (
    <>
      <AnuncioPremio />
      <Header />
      <main id="contenido">
        <Hero />
        <EmprenderPaz />
        <Programa />
        <Inscripcion />
        <Historias />
        <Aliados />
      </main>
      <Footer />
    </>
  );
}
