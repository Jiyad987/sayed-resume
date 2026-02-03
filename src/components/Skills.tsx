import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Product Management",
    skills: [
      { name: "Product Strategy & Roadmap", proficiency: 95 },
      { name: "Feature Prioritization", proficiency: 90 },
      { name: "Problem Discovery & Validation", proficiency: 92 },
      { name: "Go-to-Market Planning", proficiency: 88 },
      { name: "KPI & Metrics Tracking", proficiency: 90 },
    ],
  },
  {
    title: "Strategy & Growth",
    skills: [
      { name: "Revenue & Monetization", proficiency: 85 },
      { name: "A/B Testing", proficiency: 88 },
      { name: "Customer-Centric Decisions", proficiency: 92 },
      { name: "Stakeholder Management", proficiency: 90 },
      { name: "Investment & Growth", proficiency: 85 },
    ],
  },
  {
    title: "Agile & Execution",
    skills: [
      { name: "Agile / Scrum", proficiency: 95 },
      { name: "Sprint Planning", proficiency: 92 },
      { name: "PRDs & User Stories", proficiency: 90 },
      { name: "Release Coordination", proficiency: 88 },
      { name: "Fast-Paced Decisions", proficiency: 90 },
    ],
  },
  {
    title: "User & UX Design",
    skills: [
      { name: "User Research", proficiency: 88 },
      { name: "Usability Testing", proficiency: 85 },
      { name: "Wireframing & UX", proficiency: 82 },
      { name: "UI Improvement", proficiency: 80 },
      { name: "Design Review", proficiency: 85 },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Data Modeling", proficiency: 88 },
      { name: "SQL & Excel", proficiency: 90 },
      { name: "Power BI & Tableau", proficiency: 85 },
      { name: "Funnel Analysis", proficiency: 88 },
      { name: "Data-Driven Decisions", proficiency: 90 },
    ],
  },
  {
    title: "AI & Technical Skills",
    skills: [
      { name: "AI Automation", proficiency: 88 },
      { name: "AI Integration", proficiency: 85 },
      { name: "System & API Understanding", proficiency: 82 },
      { name: "Technical Trade-Offs", proficiency: 85 },
      { name: "Workflow Optimization", proficiency: 87 },
    ],
  },
  {
    title: "Collaboration & Communication",
    skills: [
      { name: "Cross-Functional Work", proficiency: 95 },
      { name: "Documentation & Storytelling", proficiency: 90 },
      { name: "Stakeholder Communication", proficiency: 92 },
      { name: "Gap Analysis", proficiency: 88 },
      { name: "Solution Recommendation", proficiency: 90 },
    ],
  },
];

const tools = [
  { name: "Miro", logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Mixpanel", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg" },
  { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  { name: "Power BI", logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg" },
  { name: "RevenueCat", logo: "https://www.revenuecat.com/favicon.ico" },
  { name: "Razorpay", logo: "https://cdn.worldvectorlogo.com/logos/razorpay.svg" },
  { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
  { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Gemini", logo: "https://cdn.worldvectorlogo.com/logos/google-gemini-icon.svg" },
  { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
  { name: "Amplitude", logo: "https://cdn.worldvectorlogo.com/logos/amplitude-icon.svg" },
  { name: "Google Forms", logo: "https://cdn.worldvectorlogo.com/logos/google-forms-2020.svg" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
];

const Skills = () => {
  const skillsScrollRef = useRef<HTMLDivElement>(null);
  const toolsScrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const skillsAnimationIdRef = useRef<number | null>(null);
  const toolsAnimationIdRef = useRef<number | null>(null);
  const skillsPositionRef = useRef(0);
  const toolsPositionRef = useRef(0);

  useEffect(() => {
    const skillsContainer = skillsScrollRef.current;
    const toolsContainer = toolsScrollRef.current;
    if (!skillsContainer || !toolsContainer) return;

    const skillsSpeed = 1.2;
    const toolsSpeed = 0.8;

    const animateSkills = () => {
      if (!isAutoScrolling) return;
      skillsPositionRef.current += skillsSpeed;
      if (skillsPositionRef.current >= skillsContainer.scrollWidth / 2) {
        skillsPositionRef.current = 0;
      }
      skillsContainer.scrollLeft = skillsPositionRef.current;
      skillsAnimationIdRef.current = requestAnimationFrame(animateSkills);
    };

    const animateTools = () => {
      if (!isAutoScrolling) return;
      toolsPositionRef.current -= toolsSpeed;
      if (Math.abs(toolsPositionRef.current) >= toolsContainer.scrollWidth / 2) {
        toolsPositionRef.current = 0;
      }
      toolsContainer.scrollLeft = toolsContainer.scrollWidth / 2 + toolsPositionRef.current;
      toolsAnimationIdRef.current = requestAnimationFrame(animateTools);
    };

    if (isAutoScrolling) {
      skillsAnimationIdRef.current = requestAnimationFrame(animateSkills);
      toolsAnimationIdRef.current = requestAnimationFrame(animateTools);
    }

    return () => {
      if (skillsAnimationIdRef.current) cancelAnimationFrame(skillsAnimationIdRef.current);
      if (toolsAnimationIdRef.current) cancelAnimationFrame(toolsAnimationIdRef.current);
    };
  }, [isAutoScrolling]);

  const handleStopAutoScroll = () => {
    setIsAutoScrolling(false);
  };

  const handleStartAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  const duplicatedCategories = [...skillCategories, ...skillCategories];
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning product strategy, analytics, and modern tech
          </p>
        </div>

        {/* Auto-scroll toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={isAutoScrolling ? handleStopAutoScroll : handleStartAutoScroll}
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 hover:border-primary/50"
          >
            {isAutoScrolling ? (
              <>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Click to stop & scroll manually
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                Click to resume auto-scroll
              </>
            )}
          </button>
        </div>

        {/* Skills Cards - Scrolling Right */}
        <div
          ref={skillsScrollRef}
          onClick={handleStopAutoScroll}
          className={`flex gap-6 cursor-grab mb-12 ${isAutoScrolling ? 'overflow-x-hidden' : 'overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent'}`}
          style={{ scrollBehavior: isAutoScrolling ? "auto" : "smooth" }}
        >
          {duplicatedCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex-shrink-0 w-80 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">Tools I Work With</h3>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Tools - Scrolling Left (Opposite Direction) */}
        <div
          ref={toolsScrollRef}
          onClick={handleStopAutoScroll}
          className={`flex gap-4 cursor-grab py-4 ${isAutoScrolling ? 'overflow-x-hidden' : 'overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent'}`}
          style={{ scrollBehavior: isAutoScrolling ? "auto" : "smooth" }}
        >
          {duplicatedTools.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-full px-5 py-3 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=3b82f6&color=fff&size=32`;
                }}
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground whitespace-nowrap transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
