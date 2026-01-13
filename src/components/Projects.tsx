import { useState } from "react";
import { ExternalLink, Github, FileText, BarChart3, Stethoscope, ShoppingBag, Image, Briefcase, GraduationCap, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const templetelyImages = [templately1, templately2, templately3, templately4, templately5];
const cricketImages = [cricketDashboard1, cricketDashboard2];

interface ProjectLink {
  demo?: string;
  github?: string;
  competitive?: string;
  productOverview?: string;
  mvp?: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  links?: ProjectLink;
  prdPath?: string;
  srsPath?: string;
  srsContent?: string;
  images?: string[];
  dashboardImage?: string;
  githubNote?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Templately",
    subtitle: "Multi-Vendor Digital Product Marketplace",
    description: "A creator-first digital marketplace where developers, designers, and automation builders can sell digital products. Features include WordPress plugins & themes, Notion templates, videography & photography presets, desktop software, and AI automation templates. Built with India-first approach supporting Razorpay & UPI payments.",
    icon: ShoppingBag,
    tags: ["Marketplace", "E-commerce", "React", "Supabase"],
    links: {
      demo: "https://buy-bright-sell.lovable.app",
      github: "https://github.com/developer-zayed/digital-marketplace-hub",
      competitive: "https://templately-competitive-a-jl6xs5j.gamma.site/",
      productOverview: "https://product-overview-hkmxvkz.gamma.site/",
    },
    prdPath: "/documents/prd-templately.pdf",
    images: templetelyImages,
  },
  {
    id: 2,
    title: "Warba ERP",
    subtitle: "Medical Equipment & Supplies Management",
    description: "Comprehensive ERP platform for managing medical equipment lifecycle from installation to relocation. Features include complete equipment database with maintenance history, preventive & emergency maintenance scheduling, engineer performance tracking, and automated notifications for pending PMs.",
    icon: Stethoscope,
    tags: ["ERP", "Healthcare", "Equipment Management", "Dashboard"],
    links: {
      mvp: "https://connect-build-launch.lovable.app",
    },
    srsPath: "/documents/warba-srs.docx",
    githubNote: "Available on request",
    srsContent: `
## Adjustments to SRS Proposal

### 1. User Roles and Access
- Only two roles: Admin and Biomedical Engineer
- No technician or user roles required

### 2. Workflow Simplification
- PM and EM follow simple status flow: Pending → In Progress → Completed
- Multi-level approval stages eliminated

### 3. Core Objective – Equipment Database
- Complete database of all installed equipment
- Full lifecycle details: installation, maintenance, software updates, parts replaced, relocation history
- Single window view for complete equipment history

### 4. Notifications and Follow-up
- Automated notifications for pending or overdue PMs
- Monthly/quarterly scheduling based on contract terms

### 5. PM Tasks Linkage
- Tasks linked to equipment group and assigned engineer
- Engineers can view and update their assigned tasks

### 6. Admin Dashboard
- Monitor engineer performance and activities
- KPIs: Total PMs completed, pending/delayed PMs, response time, service turnaround

### Phase 2 – Future Enhancements
- Spare parts and consumable inventory
- Invoice generation
- Labor hours and cost tracking
    `,
  },
  {
    id: 3,
    title: "Amazon Sales Dashboard",
    subtitle: "End-to-End Sales Analytics System",
    description: "Comprehensive sales analytics system built on Amazon product data featuring interactive dashboards and an AI chatbot for natural-language querying. Enables data-driven decision making through visualizations and conversational insights.",
    icon: BarChart3,
    tags: ["Data Analytics", "AI Chatbot", "Dashboard", "Python"],
    links: {
      github: "https://github.com/Jiyad987/Amazon_Sales_Dashboard",
    },
    dashboardImage: amazonDashboard,
  },
  {
    id: 4,
    title: "Career Boost",
    subtitle: "AI-Powered Career Platform",
    description: "An all-in-one AI-powered career platform that helps job seekers build ATS-optimized resumes, find relevant jobs, analyze job fit, prepare for interviews, optimize LinkedIn profiles, and access practical career insights—all in one place.",
    icon: Briefcase,
    tags: ["AI", "Career", "Resume Builder", "Job Search"],
    links: {
      mvp: "https://carrerboost.lovable.app",
      github: "https://github.com/Jiyad987/carrerboost.git",
    },
  },
  {
    id: 5,
    title: "EduWants",
    subtitle: "AI-Powered Education & Career Ecosystem",
    description: "A unified education and career platform designed for students across their entire academic journey. Features AI-generated notes, PYQs with solutions, global course & college discovery, skill development marketplace, and internship/job support.",
    icon: GraduationCap,
    tags: ["EdTech", "AI", "Mobile App", "Career"],
    links: {
      mvp: "https://studypeak-educationa-xfuv.bolt.host",
    },
    prdPath: "/documents/eduwants-prd.pdf",
    srsPath: "/documents/eduwants-srs.docx",
  },
  {
    id: 6,
    title: "T20 Cricket Data Analysis",
    subtitle: "Sports Analytics & Best 11 Selection",
    description: "Built an end-to-end sports analytics pipeline using web scraping, Python, and Power BI to select a data-driven 'Best 11' team based on performance metrics from the 2022 T20 World Cup.",
    icon: Trophy,
    tags: ["Data Analytics", "Power BI", "Python", "Web Scraping"],
    links: {
      github: "https://github.com/developer-zayed",
    },
    images: cricketImages,
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing product management work across marketplaces, healthcare ERP, EdTech, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.subtitle}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

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

                  {project.srsContent && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          SRS
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>System Requirements Specification - {project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <div className="space-y-4 text-sm text-muted-foreground">
                            <h3 className="text-lg font-semibold text-foreground">Adjustments to SRS Proposal</h3>
                            
                            <div>
                              <h4 className="font-medium text-foreground">1. User Roles and Access</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Only two roles: Admin and Biomedical Engineer</li>
                                <li>No technician or user roles required</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">2. Workflow Simplification</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>PM and EM follow simple status flow: Pending → In Progress → Completed</li>
                                <li>Multi-level approval stages eliminated</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">3. Core Objective – Equipment Database</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Complete database of all installed equipment</li>
                                <li>Full lifecycle details: installation, maintenance, software updates, parts replaced, relocation history</li>
                                <li>Single window view for complete equipment history</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">4. Notifications and Follow-up</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Automated notifications for pending or overdue PMs</li>
                                <li>Monthly/quarterly scheduling based on contract terms</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">5. PM Tasks Linkage</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Tasks linked to equipment group and assigned engineer</li>
                                <li>Engineers can view and update their assigned tasks</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">6. Admin Dashboard</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Monitor engineer performance and activities</li>
                                <li>KPIs: Total PMs completed, pending/delayed PMs, response time, service turnaround</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-foreground">Phase 2 – Future Enhancements</h4>
                              <ul className="list-disc pl-5 mt-1">
                                <li>Spare parts and consumable inventory</li>
                                <li>Invoice generation</li>
                                <li>Labor hours and cost tracking</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 border-t">
                          <Button variant="outline" size="sm" asChild>
                            <a href="/documents/warba-srs.docx" download>
                              <FileText className="w-4 h-4 mr-1" />
                              Download Full Document
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}

                  {project.srsPath && !project.srsContent && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          SRS
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>System Requirements Specification - {project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                            <p>This document defines the complete functional and non-functional requirements for {project.title}.</p>
                          </div>
                          <div className="pt-4 border-t">
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.srsPath} download>
                                <FileText className="w-4 h-4 mr-1" />
                                Download SRS Document
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
