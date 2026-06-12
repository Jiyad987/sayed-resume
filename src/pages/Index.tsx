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
import RaceTrack, { Milestone } from "@/components/RaceTrack";
import { Flag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Start line */}
      <div className="relative py-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <Flag className="h-4 w-4 text-primary" />
        <span>Start · Career Grid</span>
        <Flag className="h-4 w-4 text-primary" />
      </div>

      <RaceTrack>
        <Milestone id="about" label="Lap 1 · About" side="left">
          <ScrollReveal animation="fade-up"><About /></ScrollReveal>
        </Milestone>
        <Milestone id="experience" label="Lap 2 · Experience" side="right">
          <ScrollReveal animation="fade-up" delay={100}><Experience /></ScrollReveal>
        </Milestone>
        <Milestone id="skills" label="Lap 3 · Skills" side="left">
          <ScrollReveal animation="fade-up" delay={100}><Skills /></ScrollReveal>
        </Milestone>
        <Milestone id="projects" label="Lap 4 · Projects" side="right">
          <ScrollReveal animation="scale" delay={100}><Projects /></ScrollReveal>
        </Milestone>
        <Milestone id="certifications" label="Lap 5 · Certifications" side="left">
          <ScrollReveal animation="fade-up" delay={100}><Certifications /></ScrollReveal>
        </Milestone>
        <Milestone id="education" label="Lap 6 · Education" side="right">
          <ScrollReveal animation="fade-up" delay={100}><Education /></ScrollReveal>
        </Milestone>
        <Milestone id="contact" label="Finish · Contact" side="left">
          <ScrollReveal animation="fade-up" delay={100}><Contact /></ScrollReveal>
        </Milestone>
      </RaceTrack>

      {/* Finish line */}
      <div
        className="h-6 w-full"
        style={{
          backgroundImage:
            "repeating-conic-gradient(hsl(var(--foreground)) 0% 25%, hsl(var(--background)) 0% 50%)",
          backgroundSize: "20px 20px",
          opacity: 0.85,
        }}
        aria-hidden
      />
    </div>
  );
};

export default Index;
