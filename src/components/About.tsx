const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a multidisciplinary product and analytics professional with experience across 
            Product Management, Business Analysis, AI Automation, Power BI, and UI/UX Design. 
            I specialize in turning complex business needs into data-driven, user-centered 
            solutions that deliver measurable impact.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Working across the full product lifecycle, I bridge strategy, data, technology, 
            and design to optimize processes, enable smarter decisions, and build intuitive 
            digital products aligned with business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
