import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ScrollReveal animation="fade-up">
        <About />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal animation="scale" delay={100}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Education />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default Index;
