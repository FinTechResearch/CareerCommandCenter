import { Terminal } from "lucide-react";

const ITEMS = [
  "Application Tracking",
  "Resume Match",
  "AI Job Analyzer",
  "Cover Letter Generator",
  "Interview Preparation",
  "Job Search",
  "Career Statistics",
  "Powered by Groq",
  "Jobs from RemoteOK",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-border/60 bg-card/40 py-4">
      <div className="ccc-marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="ccc-marquee-track flex w-max items-center gap-8 pr-8">
          {row.map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono text-sm whitespace-nowrap text-muted-foreground"
            >
              {label}
              <Terminal className="size-3.5 text-primary/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}