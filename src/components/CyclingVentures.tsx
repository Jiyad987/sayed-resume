import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const ventures = [
  { name: "Boolean Technologies", url: "https://booleantechnologies.in", tag: "Founder & CEO" },
  { name: "Templately", url: "https://templately.shop", tag: "Live Product" },
  { name: "Fix My Careers", url: "https://www.fixmycareers.in", tag: "Live Product" },
];

const CyclingVentures = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % ventures.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
      {ventures.map((v, i) => (
        <a
          key={v.name}
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            i === active
              ? "border-primary bg-primary/15 text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.45)] scale-105"
              : "border-border bg-secondary/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>{v.name}</span>
          <span className="hidden sm:inline text-xs opacity-70">· {v.tag}</span>
          <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
};

export default CyclingVentures;
