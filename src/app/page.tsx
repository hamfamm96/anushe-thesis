import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Film from "@/components/Film";
import Concept from "@/components/Concept";
import Characters from "@/components/Characters";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Film />
        <Concept />
        <Characters />
        <About />
      </main>
      <Footer />
    </>
  );
}
