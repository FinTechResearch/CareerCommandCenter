"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CircleDot,
  Download,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SceneWrapper } from "@/components/three/scene-wrapper";
import { scrollToSection } from "@/components/providers/smooth-scroll";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* 3D scene + overlays */}
      <SceneWrapper />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_92%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="mb-6 h-7 gap-2 border-primary/30 bg-primary/10 px-3 font-mono text-xs text-primary"
            >
              <CircleDot className="size-3 animate-pulse" />
              v2.1 · NOW OPEN SOURCE · GPL-3.0
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Your career. One{" "}
            <span className="text-glow font-mono text-primary">command center</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg"
          >
            Track applications, match resumes, analyze job descriptions, generate
            cover letters and prepare for interviews — an AI-powered desktop
            toolkit that replaces the spreadsheet chaos. Powered by Groq, jobs
            from RemoteOK.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-11 px-6 text-base" asChild>
              <a
                href="https://github.com/FinTechResearch/CareerCommandCenter/releases/tag/v2.0.0"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="size-4" />
                Download v2.1 — Free
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6 text-base" asChild>
              <a
                href="https://adityamadhok.gumroad.com/l/Career-Command-Center"
                target="_blank"
                rel="noreferrer"
              >
                <Heart className="size-4" />
                Support on Gumroad
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-11 px-4 text-base text-primary"
              onClick={() => scrollToSection("#features")}
            >
              Explore features
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" /> 100% local data (SQLite)
            </span>
            <span className="hidden size-1 rounded-full bg-border sm:block" />
            <span>Windows EXE + Linux .deb</span>
            <span className="hidden size-1 rounded-full bg-border sm:block" />
            <span>Free Groq API key</span>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection("#features")}
        aria-label="Scroll to features"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </button>
    </section>
  );
}