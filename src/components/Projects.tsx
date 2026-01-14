import { useState } from "react";
import { ExternalLink, Github, FileText, BarChart3, Stethoscope, ShoppingBag, Image, Briefcase, GraduationCap, Trophy, ChevronLeft, ChevronRight, Bot, Phone, TrendingUp, Smartphone, CreditCard, Plane, BookOpen, UtensilsCrossed, Headphones, DollarSign, Sparkles, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Import project images
import amazonDashboard from "@/assets/projects/amazon-dashboard.png";
import templately1 from "@/assets/projects/templately-ui-1.jpeg";
import templately2 from "@/assets/projects/templately-ui-2.jpeg";
import templately3 from "@/assets/projects/templately-ui-3.jpeg";
import templately4 from "@/assets/projects/templately-ui-4.jpeg";
import templately5 from "@/assets/projects/templately-ui-5.jpeg";
import cricketDashboard1 from "@/assets/projects/cricket-dashboard-1.jpg";
import cricketDashboard2 from "@/assets/projects/cricket-dashboard-2.jpg";
import zomatoUi1 from "@/assets/projects/zomato-ui-1.png";
import zomatoUi2 from "@/assets/projects/zomato-ui-2.png";
import templetelyLogo from "@/assets/projects/templately-logo.png";
import eduwantsLogo from "@/assets/projects/eduwants-logo.jpeg";

const templetelyImages = [templately1, templately2, templately3, templately4, templately5];
const cricketImages = [cricketDashboard1, cricketDashboard2];
const zomatoImages = [zomatoUi1, zomatoUi2];

interface ProjectLink {
  demo?: string;
  github?: string;
  competitive?: string;
  productOverview?: string;
  mvp?: string;
  breakdown?: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  tools?: string[];
  links?: ProjectLink;
  prdPath?: string;
  srsPath?: string;
  srsContent?: string;
  images?: string[];
  dashboardImage?: string;
  githubNote?: string;
  logo?: string;
  category: "apps" | "data" | "prd" | "breakdown" | "automation";
}

// Web & Mobile Apps (Combined)
const appProjects: Project[] = [
  {
    id: 1,
    title: "Templately",
    subtitle: "Multi-Vendor Digital Product Marketplace",
    description: "A creator-first digital marketplace where developers, designers, and automation builders can sell digital products. Features include WordPress plugins & themes, Notion templates, videography & photography presets, desktop software, and AI automation templates.",
    icon: ShoppingBag,
    tags: ["Marketplace", "E-commerce", "React", "Supabase"],
    tools: ["Lovable", "Supabase", "Antigravity", "TypeScript"],
    links: {
      demo: "https://buy-bright-sell.lovable.app",
      github: "https://github.com/developer-zayed/digital-marketplace-hub",
      competitive: "https://templately-competitive-a-jl6xs5j.gamma.site/",
      productOverview: "https://product-overview-hkmxvkz.gamma.site/",
    },
    prdPath: "/documents/prd-templately.pdf",
    images: templetelyImages,
    logo: templetelyLogo,
    category: "apps",
  },
  {
    id: 2,
    title: "Warba ERP",
    subtitle: "Medical Equipment & Supplies Management",
    description: "Comprehensive ERP platform for managing medical equipment lifecycle from installation to relocation. Features include complete equipment database with maintenance history, preventive & emergency maintenance scheduling, and engineer performance tracking.",
    icon: Stethoscope,
    tags: ["ERP", "Healthcare", "Equipment Management"],
    tools: ["React", "Antigravity", "Python"],
    links: {
      mvp: "https://connect-build-launch.lovable.app",
    },
    srsPath: "/documents/warba-srs.docx",
    githubNote: "Available on request",
    srsContent: `## Adjustments to SRS Proposal\n\n### 1. User Roles and Access\n- Only two roles: Admin and Biomedical Engineer\n\n### 2. Workflow Simplification\n- PM and EM follow simple status flow: Pending → In Progress → Completed\n\n### 3. Core Objective – Equipment Database\n- Complete database of all installed equipment with full lifecycle details`,
    category: "apps",
  },
  {
    id: 3,
    title: "Career Boost",
    subtitle: "AI-Powered Career Platform",
    description: "An all-in-one AI-powered career platform that helps job seekers build ATS-optimized resumes, find relevant jobs, analyze job fit, prepare for interviews, optimize LinkedIn profiles, and access practical career insights.",
    icon: Briefcase,
    tags: ["AI", "Career", "Resume Builder", "Job Search"],
    tools: ["Lovable", "OpenAI API"],
    links: {
      mvp: "https://carrerboost.lovable.app",
      github: "https://github.com/Jiyad987/carrerboost.git",
    },
    category: "apps",
  },
  {
    id: 4,
    title: "EduWants",
    subtitle: "AI-Powered Education & Career Ecosystem",
    description: "A unified education and career platform designed for students across their entire academic journey. Features AI-generated notes, PYQs with solutions, global course & college discovery, skill development marketplace, and internship/job support.",
    icon: GraduationCap,
    tags: ["EdTech", "AI", "Mobile App", "Career"],
    tools: ["React Native", "Supabase", "OpenAI"],
    links: {
      mvp: "https://studypeak-educationa-xfuv.bolt.host",
    },
    prdPath: "/documents/eduwants-prd.pdf",
    srsPath: "/documents/eduwants-srs.docx",
    logo: eduwantsLogo,
    category: "apps",
  },
];

// Data Analytics
const dataProjects: Project[] = [
  {
    id: 5,
    title: "Amazon Sales Dashboard",
    subtitle: "End-to-End Sales Analytics System",
    description: "Comprehensive sales analytics system built on Amazon product data featuring interactive dashboards and an AI chatbot for natural-language querying. Enables data-driven decision making through visualizations and conversational insights.",
    icon: BarChart3,
    tags: ["Data Analytics", "AI Chatbot", "Dashboard"],
    tools: ["Excel", "Power BI", "Python", "SQL", "OpenAI API"],
    links: {
      github: "https://github.com/Jiyad987/Amazon_Sales_Dashboard",
    },
    dashboardImage: amazonDashboard,
    category: "data",
  },
  {
    id: 6,
    title: "T20 Cricket Data Analysis",
    subtitle: "Sports Analytics & Best 11 Selection",
    description: "Built an end-to-end sports analytics pipeline using web scraping, Python, and Power BI to select a data-driven 'Best 11' team based on performance metrics from the 2022 T20 World Cup.",
    icon: Trophy,
    tags: ["Data Analytics", "Power BI", "Web Scraping"],
    tools: ["Excel", "Power BI", "Python", "SQL", "OpenAI API"],
    links: {
      github: "https://github.com/developer-zayed",
    },
    images: cricketImages,
    category: "data",
  },
];

// PRD Projects
const prdProjects: Project[] = [
  {
    id: 7,
    title: "Zomato Streak",
    subtitle: "Gamified Retention Feature",
    description: "Product Requirements Document for a new gamification feature designed to significantly improve user retention on Zomato through streak rewards, milestone achievements, and tiered loyalty levels.",
    icon: UtensilsCrossed,
    tags: ["PRD", "Gamification", "Retention", "Food Delivery"],
    prdPath: "/documents/zomato-streak-prd.pdf",
    images: zomatoImages,
    category: "prd",
  },
  {
    id: 8,
    title: "Kuku FM",
    subtitle: "Engagement & Community Features",
    description: "PRD outlining new features for Kuku FM aimed at increasing engagement via audio playtime and generating revenue through innovative alternatives that enhance user stickiness and foster community.",
    icon: Headphones,
    tags: ["PRD", "Audio Platform", "Engagement", "Community"],
    prdPath: "/documents/kukufm-prd.pdf",
    category: "prd",
  },
  {
    id: 9,
    title: "INDmoney",
    subtitle: "Financial Navigator Feature",
    description: "PRD for the INDmoney Financial Navigator feature designed to enhance financial literacy, user engagement, and investment confidence through personalized guidance and interactive tools.",
    icon: DollarSign,
    tags: ["PRD", "FinTech", "Financial Literacy", "Investments"],
    prdPath: "/documents/indmoney-prd.pdf",
    category: "prd",
  },
];

// Product Breakdowns
const breakdownProjects: Project[] = [
  {
    id: 10,
    title: "INDmoney",
    subtitle: "Financial Platform Analysis",
    description: "Comprehensive product breakdown analyzing INDmoney's super finance app features, user journey, monetization strategies, and growth mechanics.",
    icon: DollarSign,
    tags: ["Product Breakdown", "FinTech", "Investment"],
    links: {
      breakdown: "https://indmoney-financial-partn-iylutng.gamma.site/",
    },
    category: "breakdown",
  },
  {
    id: 11,
    title: "CRED",
    subtitle: "Product Teardown",
    description: "Deep-dive analysis of CRED's product strategy, unique positioning in the credit card payments space, and premium user experience design.",
    icon: CreditCard,
    tags: ["Product Breakdown", "FinTech", "Payments"],
    links: {
      breakdown: "https://cred-product-teardown-si-ah1pgyb.gamma.site/",
    },
    category: "breakdown",
  },
  {
    id: 12,
    title: "PhonePe",
    subtitle: "AARRR Framework Breakdown",
    description: "Detailed AARRR (Pirate Metrics) framework analysis of PhonePe's growth strategy, covering Acquisition, Activation, Retention, Referral, and Revenue.",
    icon: Smartphone,
    tags: ["Product Breakdown", "AARRR", "Payments", "Growth"],
    links: {
      breakdown: "https://phonepe-unpacking-growth-51y1p30.gamma.site/",
    },
    category: "breakdown",
  },
  {
    id: 13,
    title: "MakeMyTrip",
    subtitle: "Product Teardown",
    description: "Comprehensive analysis of MakeMyTrip's product ecosystem, booking flows, personalization strategies, and travel tech innovations.",
    icon: Plane,
    tags: ["Product Breakdown", "Travel Tech", "OTA"],
    links: {
      breakdown: "https://makemytrip-product-teard-c1ke7o8.gamma.site/",
    },
    category: "breakdown",
  },
  {
    id: 14,
    title: "Kissa",
    subtitle: "Bedtime Stories Analysis",
    description: "Product breakdown of Kissa's bedtime stories app, analyzing content strategy, user engagement mechanics, and audio content delivery.",
    icon: BookOpen,
    tags: ["Product Breakdown", "Content", "Audio"],
    links: {
      breakdown: "https://kissa-bedtime-stories-th-3zg93tl.gamma.site/",
    },
    category: "breakdown",
  },
];

// AI Automations
const automationProjects: Project[] = [
  {
    id: 15,
    title: "Stock Market AI Agent",
    subtitle: "Real-time Stock Price Alerts",
    description: "Built an AI agent using n8n and Telegram API to provide real-time stock market price updates and intelligent alerts for investment decisions.",
    icon: TrendingUp,
    tags: ["AI Agent", "n8n", "Telegram", "Stocks"],
    tools: ["n8n", "Telegram API", "LLMs"],
    links: {
      github: "https://github.com/Jiyad987/stockmarket-ai-agent",
    },
    category: "automation",
  },
  {
    id: 16,
    title: "AI Voice Call Agent",
    subtitle: "Automated Business Call Handler",
    description: "AI Voice Assistant that answers missed business calls automatically. Validates phone numbers, books appointments, logs customer data into spreadsheets via webhooks, and handles natural conversations.",
    icon: Phone,
    tags: ["AI Agent", "Voice AI", "Automation", "n8n"],
    tools: ["Retell AI", "n8n", "Cal.com", "LLMs", "Webhooks"],
    links: {
      github: "https://github.com/Jiyad987/ai-voice-agent",
    },
    category: "automation",
  },
];

const ImageGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Image className="w-4 h-4 mr-1" />
          View UI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title} - UI Screenshots</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`${title} UI ${currentIndex + 1}`}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const DashboardImageDialog = ({ image, title }: { image: string; title: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Image className="w-4 h-4 mr-1" />
          View Dashboard
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title} - Dashboard</DialogTitle>
        </DialogHeader>
        <img
          src={image}
          alt={`${title} Dashboard`}
          className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card flex flex-col h-full hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {project.logo ? (
            <img src={project.logo} alt={`${project.title} logo`} className="w-10 h-10 rounded-lg object-cover" />
          ) : (
            <div className="p-2 rounded-lg bg-primary/10">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription className="text-sm">{project.subtitle}</CardDescription>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {project.tools && project.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-muted-foreground font-medium">Tools:</span>
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {project.links?.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button>
          )}

          {project.links?.mvp && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.mvp} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                View MVP
              </a>
            </Button>
          )}

          {project.links?.productOverview && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.productOverview} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-1" />
                Product Overview
              </a>
            </Button>
          )}

          {project.links?.breakdown && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.breakdown} target="_blank" rel="noopener noreferrer">
                <BarChart3 className="w-4 h-4 mr-1" />
                View Breakdown
              </a>
            </Button>
          )}

          {project.links?.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
            </Button>
          )}

          {project.githubNote && (
            <Badge variant="outline" className="text-xs">
              <Github className="w-3 h-3 mr-1" />
              {project.githubNote}
            </Badge>
          )}

          {project.images && project.images.length > 0 && (
            <ImageGallery images={project.images} title={project.title} />
          )}

          {project.dashboardImage && (
            <DashboardImageDialog image={project.dashboardImage} title={project.title} />
          )}

          {project.prdPath && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-1" />
                  PRD
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle>Product Requirements Document - {project.title}</DialogTitle>
                </DialogHeader>
                <iframe
                  src={project.prdPath}
                  className="w-full h-[60vh] rounded-lg border"
                  title="PRD Document"
                />
              </DialogContent>
            </Dialog>
          )}

          {project.links?.competitive && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.competitive} target="_blank" rel="noopener noreferrer">
                <BarChart3 className="w-4 h-4 mr-1" />
                Competitive Analysis
              </a>
            </Button>
          )}

          {project.srsPath && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-1" />
                  SRS
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>System Requirements - {project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>View the complete SRS document below:</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.srsPath} download>
                      <FileText className="w-4 h-4 mr-1" />
                      Download SRS
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing product management work across apps, data analytics, PRDs, product breakdowns, and AI automations
          </p>
        </div>

        <Tabs defaultValue="apps" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8 h-auto gap-1">
            <TabsTrigger value="apps" className="text-xs sm:text-sm py-2">
              <Globe className="w-4 h-4 mr-1 hidden sm:inline" />
              Apps
            </TabsTrigger>
            <TabsTrigger value="data" className="text-xs sm:text-sm py-2">
              <BarChart3 className="w-4 h-4 mr-1 hidden sm:inline" />
              Data Analysis
            </TabsTrigger>
            <TabsTrigger value="prd" className="text-xs sm:text-sm py-2">
              <FileText className="w-4 h-4 mr-1 hidden sm:inline" />
              PRDs
            </TabsTrigger>
            <TabsTrigger value="breakdown" className="text-xs sm:text-sm py-2">
              <TrendingUp className="w-4 h-4 mr-1 hidden sm:inline" />
              Breakdowns
            </TabsTrigger>
            <TabsTrigger value="automation" className="text-xs sm:text-sm py-2">
              <Bot className="w-4 h-4 mr-1 hidden sm:inline" />
              AI Automations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="apps">
            <ProjectGrid projects={appProjects} />
          </TabsContent>
          <TabsContent value="data">
            <ProjectGrid projects={dataProjects} />
          </TabsContent>
          <TabsContent value="prd">
            <ProjectGrid projects={prdProjects} />
          </TabsContent>
          <TabsContent value="breakdown">
            <ProjectGrid projects={breakdownProjects} />
          </TabsContent>
          <TabsContent value="automation">
            <ProjectGrid projects={automationProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
