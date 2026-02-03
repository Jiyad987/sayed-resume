import { useEffect, useRef, useState } from "react";
import { Award, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

import aiCert from "@/assets/certificates/ai-certification.jpg";
import businessAnalyst from "@/assets/certificates/business-analyst.jfif";
import productStrategy from "@/assets/certificates/product-strategy.jpg";
import dataVisualization from "@/assets/certificates/data-visualization.jpg";
import productDiscovery from "@/assets/certificates/product-discovery.png";
import cloudComputing from "@/assets/certificates/cloud-computing.jpg";
import productManagement from "@/assets/certificates/product-management.jpg";

const certificates = [
  {
    title: "AI Micro-Certification",
    issuer: "Product School",
    image: aiCert,
  },
  {
    title: "Business Analyst",
    issuer: "Professional Certification",
    image: businessAnalyst,
  },
  {
    title: "Product Strategy",
    issuer: "Product School",
    image: productStrategy,
  },
  {
    title: "Data Visualization",
    issuer: "Tata & Forage",
    image: dataVisualization,
  },
  {
    title: "Product Discovery",
    issuer: "Pendo x Mind the Product",
    image: productDiscovery,
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    image: cloudComputing,
  },
  {
    title: "Product Management",
    issuer: "GeeksforGeeks",
    image: productManagement,
  },
];

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationIdRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1;

    const animate = () => {
      if (!isAutoScrolling) return;
      
      scrollPositionRef.current += scrollSpeed;
      
      const firstSet = scrollContainer.scrollWidth / 2;
      if (scrollPositionRef.current >= firstSet) {
        scrollPositionRef.current = 0;
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    if (isAutoScrolling) {
      animationIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleStopAutoScroll = () => {
    setIsAutoScrolling(false);
  };

  const handleStartAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  const duplicatedCerts = [...certificates, ...certificates];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certifications
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </div>

        {/* Auto-scroll toggle */}
        <div className="flex justify-center mb-4">
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

        {/* Scrolling Certificates */}
        <div
          ref={scrollRef}
          onClick={handleStopAutoScroll}
          className={`flex gap-6 cursor-pointer ${isAutoScrolling ? 'overflow-x-hidden' : 'overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent'}`}
          style={{ scrollBehavior: isAutoScrolling ? "auto" : "smooth" }}
        >
          {duplicatedCerts.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(cert);
              }}
              className="flex-shrink-0 w-72 bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="h-44 overflow-hidden bg-background">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Popup Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
              <X className="h-4 w-4" />
            </DialogClose>
            {selectedCert && (
              <div className="flex flex-col">
                <div className="w-full max-h-[70vh] overflow-auto">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-muted-foreground">{selectedCert.issuer}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
