import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1120]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};