import { Github, Linkedin, Download, ArrowDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import sayedImage from "@/assets/sayed-profile.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <img
            src={sayedImage}
            alt="Sayed Muhammed"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
          Sayed Muhammed
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
          Turning ideas into scalable products through strategy, UX, data, and AI automation.
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
            <a href="/resume.pdf" download="Sayed_Muhammed_Resume.pdf">
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
