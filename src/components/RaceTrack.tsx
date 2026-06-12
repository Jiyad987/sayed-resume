import { ReactNode, useEffect, useRef, useState } from "react";
import { Flag, Trophy, Briefcase, GraduationCap, Code2, Award, User, Mail, Car } from "lucide-react";

const icons = {
  start: Flag,
  about: User,
  experience: Briefcase,
  skills: Code2,
  projects: Trophy,
  certifications: Award,
  education: GraduationCap,
  contact: Mail,
  finish: Flag,
} as const;

interface MilestoneProps {
  id: keyof typeof icons;
  label: string;
  children?: ReactNode;
}

// Track sits on the LEFT edge. Each milestone marker is anchored on the track.
export const Milestone = ({ id, label, children }: MilestoneProps) => {
  const Icon = icons[id] || Flag;
  return (
    <div className="relative">
      {/* Marker on the track (left rail) */}
      <div className="absolute left-4 md:left-8 top-10 z-20 -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
          <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
            <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Flag label next to marker */}
      <div className="hidden md:block absolute left-20 top-12 z-20">
        <div className="px-3 py-1 rounded-md bg-card border border-border text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
          {label}
        </div>
      </div>

      {/* Content shifted right to clear the track */}
      <div className="pl-12 md:pl-24">{children}</div>
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
      {/* Track rail on the LEFT side */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 z-0"
        style={{ left: "calc(1rem - 3px)" }}
      >
        {/* Mobile road */}
        <div className="relative h-full w-[14px] md:hidden">
          <div className="absolute inset-0 rounded-sm bg-zinc-800 border-x-2 border-zinc-200/80" />
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #fbbf24 0 10px, transparent 10px 22px)",
            }}
          />
          {/* Car */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-100"
            style={{ top: `${progress}%` }}
          >
            <Car
              className="-translate-y-1/2 h-5 w-5 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]"
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* Desktop road */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute top-0 bottom-0 z-0"
        style={{ left: "calc(2rem - 9px)" }}
      >
        <div className="relative h-full w-[18px]">
          <div className="absolute inset-0 rounded-sm bg-zinc-800 border-x-2 border-zinc-200/80" />
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #fbbf24 0 14px, transparent 14px 28px)",
            }}
          />
          {/* Red car following the lap */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-100"
            style={{ top: `${progress}%` }}
          >
            <Car
              className="-translate-y-1/2 h-6 w-6 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]"
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>


      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RaceTrack;
