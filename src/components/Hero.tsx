import { Github, Linkedin, Download, ArrowDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import sayedImage from "@/assets/sayed-profile.png";
import Silk from "@/components/Silk";
import FloatingParticles from "@/components/FloatingParticles";
import TypingText from "@/components/TypingText";

const Hero = () => {
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-[#0a0a0f]">
      {/* Fluid Background Animation */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={3}
          scale={1.2}
          color="#1a1a2e"
          noiseIntensity={2}
          rotation={0}
        />
        {/* Floating Particles */}
        <FloatingParticles count={40} />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Profile Image with Glow */}
        <div className="mb-8 animate-fade-in relative">
          <div className="absolute inset-0 w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full bg-primary/30 blur-2xl animate-pulse" />
          <img
            src={sayedImage}
            alt="Sayed Muhammed Jiyad"
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl ring-4 ring-primary/20"
          />
        </div>

        {/* Name with Gradient */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
          Sayed Muhammed Jiyad
        </h1>

        {/* Tagline with Typing Effect */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          <TypingText 
            text="Turning ideas into scalable products through strategy, UX, data, and AI automation."
            speed={40}
          />
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <a
            href="https://www.linkedin.com/in/sayed-muhammed-jiyad/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="https://github.com/Jiyad987/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-foreground" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download="Sayed_Muhammed_Jiyad_Resume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => scrollToSection("#experience")}
          >
            <ArrowDown className="h-4 w-4" />
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2"
            onClick={() => scrollToSection("#contact")}
          >
            <Rocket className="h-4 w-4" />
            Let's Build a Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
