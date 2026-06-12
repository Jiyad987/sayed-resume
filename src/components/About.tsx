const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am the <strong className="text-foreground">Founder & CEO of Boolean Technologies</strong> (Jan 2026 – Present), 
            a service-based startup that develops websites, ERP systems, and custom software solutions for multiple businesses. 
            I specialize in turning complex business needs into data-driven, user-centered solutions that deliver measurable impact.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Across different client projects, I have worn multiple hats — <strong className="text-foreground">Sales Lead, Developer, 
            Business Analyst, and Product Manager</strong> — giving me a 360° view of how technology, business, and design intersect 
            to build products that actually solve problems.
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
