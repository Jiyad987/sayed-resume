import { ReactNode, useEffect, useRef, useState } from "react";
import { Flag, Trophy, Briefcase, GraduationCap, Code2, Award, User, Mail } from "lucide-react";

const icons: Record<string, typeof Flag> = {
  start: Flag,
  about: User,
  experience: Briefcase,
  skills: Code2,
  projects: Trophy,
  certifications: Award,
  education: GraduationCap,
  contact: Mail,
  finish: Flag,
};

interface MilestoneProps {
  id: keyof typeof icons;
  label: string;
  side?: "left" | "right";
  children?: ReactNode;
}

export const Milestone = ({ id, label, side = "left", children }: MilestoneProps) => {
  const Icon = icons[id] || Flag;
  return (
    <div className="relative">
      {/* Marker on the track */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 z-20 items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
          <div className="relative h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Side flag label */}
      <div
        className={`hidden md:block absolute top-12 z-20 ${
          side === "left" ? "right-[calc(50%+2.5rem)]" : "left-[calc(50%+2.5rem)]"
        }`}
      >
        <div className="px-3 py-1 rounded-md bg-card border border-border text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
          {label}
        </div>
      </div>

      {children}
    </div>
  );
};

interface RaceTrackProps {
  children: ReactNode;
}

const RaceTrack = ({ children }: RaceTrackProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? (passed / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={trackRef} className="relative">
      {/* Track line (desktop) */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] z-0"
      >
        <div className="absolute inset-0 rounded-full bg-secondary/60 border-x border-border" />
        {/* Dashed center line */}
        <div
          className="absolute inset-x-0 top-0 bottom-0 mx-auto w-[2px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, hsl(var(--primary)) 0 12px, transparent 12px 26px)",
            opacity: 0.55,
          }}
        />
        {/* Progress car */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-100"
          style={{ top: `calc(${progress}% )` }}
        >
          <div className="-translate-y-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
        </div>
      </div>

      {/* Mobile vertical line */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute left-4 top-0 bottom-0 w-[3px] bg-secondary z-0"
      >
        <div
          className="absolute inset-0 w-[2px] mx-auto"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, hsl(var(--primary)) 0 8px, transparent 8px 18px)",
            opacity: 0.6,
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RaceTrack;
