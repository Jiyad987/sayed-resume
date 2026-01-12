import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Product Manager",
    company: "Kissa App",
    companyUrl: "https://kissa.app",
    period: "May 2025 – December 2025",
    responsibilities: [
      "Drive product decisions using user behavior, engagement, and revenue insights, supported by structured planning and task prioritization tools",
      "Conduct user interviews and translate customer insights into product improvements and UI updates (wireframes)",
      "Implement AI automations to enhance efficiency, personalization, and scalability. Improved conversion by 15%",
      "Support fundraising and investment efforts through product strategy, metrics, and growth insights",
      "Balance fast execution with risk, regulatory, and financial safeguards in a dynamic environment",
    ],
  },
  {
    title: "Associate Product Manager",
    company: "Functionary Labs Pvt Ltd",
    companyUrl: "https://functionary.co/",
    period: "January 2022 – March 2023",
    responsibilities: [
      "Collect and translate requirements from stakeholders, users, and internal teams into clear PRDs, user stories, acceptance criteria, and actionable requirements",
      "Support Agile delivery by hosting daily stand-ups, collaborating with engineers during sprint planning and grooming, and clarifying requirements throughout development",
      "Review designs to ensure alignment with user needs, business goals, and product requirements",
      "Participate in user interviews and usability testing to validate product ideas with real user insights",
      "Monitor post-launch performance and issues while keeping product documentation up to date",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 transition-all hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline transition-colors"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
