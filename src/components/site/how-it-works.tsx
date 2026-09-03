"use client";

import { useEffect, useState } from "react";
import { Plug, Radar, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    icon: Plug,
    title: "Connect your free Groq key",
    body: "Grab a free API key at console.groq.com/keys and paste it into the API Settings screen. It is stored locally — you stay in control.",
  },
  {
    icon: Radar,
    title: "Track & search everything",
    body: "Log applications, browse remote jobs from RemoteOK and watch your statistics update in the dashboard. Works fully offline.",
  },
  {
    icon: Sparkles,
    title: "Let the AI do the heavy lifting",
    body: "Analyze job descriptions, match your resume, draft cover letters and generate interview questions in seconds.",
  },
];

const TERMINAL_LINES = [
  { text: "$ career-command-center", color: "text-foreground" },
  { text: "┌─ AI JOB ANALYZER ────────────────┐", color: "text-primary" },
  { text: "│ role     : Senior Python Engineer │", color: "text-muted-foreground" },
  { text: "│ level    : Mid–Senior (5–8 yrs)   │", color: "text-muted-foreground" },
  { text: "│ skills   : python · textual · sql │", color: "text-muted-foreground" },
  { text: "│ match    : ████████░░  82%        │", color: "text-primary" },
  { text: "│ missing  : docker · kubernetes    │", color: "text-yellow-400" },
  { text: "│ tip      : quantify API latency   │", color: "text-cyan-300" },
  { text: "└──────────────────────────────────┘", color: "text-primary" },
  { text: "✓ saved to jobs.db · press q to quit", color: "text-emerald-400" },
];

function useTypewriter(lines: string[], speed = 24, startDelay = 400) {
  const [charCount, setCharCount] = useState(0);
  const total = lines.join("\n").length;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCharCount((c) => (c >= total ? c : c + 1));
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [total, speed, startDelay]);

  // split the consumed character count back into per-line lengths
  let remaining = charCount;
  return lines.map((line) => {
    const take = Math.max(0, Math.min(line.length, remaining));
    remaining -= take;
    return { text: line.slice(0, take), done: take >= line.length };
  });
}

export function HowItWorks() {
  const typed = useTypewriter(TERMINAL_LINES.map((l) => l.text));
  const allDone = typed.every((l) => l.done);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 ccc-grid-bg" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="space-y-10">
            <div>
              <p className="font-mono text-sm text-primary">// getting started</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Up and running in{" "}
                <span className="font-mono text-primary">3 steps</span>
              </h2>
            </div>
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10">
                    <step.icon className="size-5 text-primary" />
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">
                    <span className="mr-2 font-mono text-primary">0{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.11_0.01_165)] shadow-[0_0_60px_-15px_oklch(0.83_0.18_156/25%)]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-red-500/70" />
                <span className="size-3 rounded-full bg-yellow-500/70" />
                <span className="size-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  career-command-center — bash
                </span>
              </div>
              <div className="min-h-[320px] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
                {typed.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.done || i === typed.findIndex((l) => !l.done)
                        ? TERMINAL_LINES[i].color
                        : "text-transparent"
                    }
                  >
                    {line.text || "\u00A0"}
                    {!allDone && i === typed.findIndex((l) => !l.done) && (
                      <span className="text-primary">▊</span>
                    )}
                  </div>
                ))}
                {allDone && <span className="text-primary">▊</span>}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}