import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Certificates from "@/components/home/Certificates";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import SakuraParticles from "@/components/ui/SakuraParticles";

export default function Home() {
  return (
    <>
      {/* Sakura Particles Background */}
      <SakuraParticles />

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}