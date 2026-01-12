import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Product Management & Strategy",
    skills: [
      "Product Strategy & Roadmap",
      "Feature Prioritization",
      "Problem Discovery & Solution Validation",
      "Go-to-Market Planning",
      "KPI & Metrics Tracking",
      "Revenue & Monetization Analysis",
      "Experimentation & A/B Testing",
      "Customer-Centric Decision Making",
      "Stakeholder Management",
      "Investment & Growth Support",
      "Risk & Compliance Awareness",
    ],
  },
  {
    title: "Agile & Execution",
    skills: [
      "Agile / Scrum Execution",
      "Sprint Planning & Backlog Management",
      "PRDs, User Stories & Acceptance Criteria",
      "Release Coordination & Post-Launch Analysis",
      "Decision-Making in Fast-Paced Environments",
    ],
  },
  {
    title: "User & UX Design",
    skills: [
      "User Research & Interviews",
      "Usability Testing",
      "Wireframing & UX Collaboration",
      "UI Improvement & Iteration",
      "Design Review & Usability Principles",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Data Cleaning, Transformation & Modeling",
      "SQL & Excel",
      "Dashboard Creation & Visualization (Power BI, Tableau)",
      "User Behavior & Funnel Analysis",
      "Predictive Analytics & Insights",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "AI & Technical Skills",
    skills: [
      "AI Automation & Workflow Optimization",
      "AI Integration into Business Processes",
      "System & API Understanding",
      "Technical Trade-Off Evaluation",
    ],
  },
  {
    title: "Collaboration & Communication",
    skills: [
      "Cross-Functional Collaboration",
      "Clear Documentation & Storytelling",
      "Stakeholder Communication & Solution Recommendation",
      "Gap Analysis",
    ],
  },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate skills for infinite scroll effect
  const duplicatedCategories = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
