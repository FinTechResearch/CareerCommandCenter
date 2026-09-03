"use client";

import {
  BarChart3,
  Briefcase,
  FileSearch,
  FileText,
  GraduationCap,
  Heart,
  KeyRound,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";

const FEATURES = [
  {
    icon: Briefcase,
    title: "Application Tracker",
    body: "Log applied jobs, interviews, offers and rejections in a built-in SQLite database that stays on your machine.",
    tag: "no API key needed",
  },
  {
    icon: FileSearch,
    title: "Resume Match",
    body: "Compare your resume against any job description and get a match score, missing skills, gaps and ATS-style feedback.",
    tag: "AI",
  },
  {
    icon: Search,
    title: "AI Job Analyzer",
    body: "Paste any job description to extract required skills, experience level, responsibilities and suggested interview topics.",
    tag: "AI",
  },
  {
    icon: FileText,
    title: "Cover Letter Generator",
    body: "Generate tailored cover letters in seconds — stop rewriting the same template for every application.",
    tag: "AI",
  },
  {
    icon: GraduationCap,
    title: "Interview Preparation",
    body: "Technical, behavioral and follow-up questions plus preparation tips, generated for your target role.",
    tag: "AI",
  },
  {
    icon: KeyRound,
    title: "Remote Job Search",
    body: "Search real remote opportunities from RemoteOK directly inside the app, with an extensible multi-source architecture.",
    tag: "live data",
  },
  {
    icon: BarChart3,
    title: "Career Statistics",
    body: "A dashboard overview of total applications, interviews, offers and rejections with quick navigation to every tool.",
    tag: "no API key needed",
  },
  {
    icon: Heart,
    title: "Free & Open Source",
    body: "Fully open source under GPL-3.0. Inspect it, build it from source, contribute — or grab a ready-made binary.",
    tag: "v2.1",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">// seven tools, one terminal</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Everything your job search needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop juggling spreadsheets, bookmarks and sticky notes. Career
            Command Center bundles the whole pipeline into a single keyboard
            friendly desktop app.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/70 bg-card/60 transition-colors hover:border-primary/40">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <feature.icon className="size-5 text-primary" />
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}