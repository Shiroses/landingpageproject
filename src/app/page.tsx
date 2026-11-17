import Aliados from "@/components/Aliados";
import Beneficios from "@/components/Beneficios";
import Dirigido from "@/components/Dirigido";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inscripcion from "@/components/Inscripcion";
import Programa from "@/components/Programa";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Programa />
        <Dirigido />
        <Beneficios />
        <Inscripcion />
        <Aliados />
      </main>
      <Footer />
    </>
  );
}
