import { ExternalLink, Github, FileText, BarChart3, Stethoscope, ShoppingBag } from "lucide-react";
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

const projects = [
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
    },
    prdPath: "/documents/prd-templately.pdf",
  },
  {
    id: 2,
    title: "Warba ERP",
    subtitle: "Medical Equipment & Supplies Management",
    description: "Comprehensive ERP platform for managing medical equipment lifecycle from installation to relocation. Features include complete equipment database with maintenance history, preventive & emergency maintenance scheduling, engineer performance tracking, and automated notifications for pending PMs. Designed for Admin and Biomedical Engineer roles.",
    icon: Stethoscope,
    tags: ["ERP", "Healthcare", "Equipment Management", "Dashboard"],
    srsPath: "/documents/warba-srs.docx",
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
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing product management work across marketplaces, healthcare ERP, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
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
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.links?.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
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
