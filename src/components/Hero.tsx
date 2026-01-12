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
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <img
              src={sayedImage}
              alt="Sayed Muhammed"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              Sayed Muhammed
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 animate-fade-in">
              Turning ideas into scalable products through strategy, UX, data, and AI automation.
            </p>

            {/* About Content */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 mb-6 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am a multidisciplinary product and analytics professional with experience across 
                Product Management, Business Analysis, AI Automation, Power BI, and UI/UX Design. 
                I specialize in turning complex business needs into data-driven, user-centered 
                solutions that deliver measurable impact.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 animate-fade-in">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
