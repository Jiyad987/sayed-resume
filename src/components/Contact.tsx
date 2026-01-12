import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          I'm always open to discussing product management, analytics, or potential collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Email */}
          <a
            href="mailto:sayedmuhammedjiyad13@gmail.com"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 transition-all hover:border-primary/50 group"
          >
            <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium text-sm truncate">
                sayedmuhammedjiyad13@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+918714180384"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 transition-all hover:border-primary/50 group"
          >
            <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium">+91 8714180384</p>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sayed-muhammed-jiyad/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
          <a
            href="https://github.com/Jiyad987/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-primary" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-sm mt-16">
          © {new Date().getFullYear()} Sayed Muhammed. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
