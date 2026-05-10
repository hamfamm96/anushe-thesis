import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Film from "@/components/Film";
import Concept from "@/components/Concept";
import Craft from "@/components/Craft";
import Characters from "@/components/Characters";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <PageReveal />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Film />
        <Concept />
        <Craft />
        <Characters />
        <About />
      </main>
      <Footer />
    </>
  );
}
