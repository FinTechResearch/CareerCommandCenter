"use client";

import { Radar, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/components/providers/smooth-scroll";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Stack", href: "#stack" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("#top")}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-primary/30 bg-primary/10">
            <Radar className="size-4.5 text-primary" />
          </span>
          <span className="font-mono text-sm">
            career<span className="text-primary">cmd</span>center
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/FinTechResearch/CareerCommandCenter"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 className="size-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              href="https://github.com/FinTechResearch/CareerCommandCenter/releases/tag/v2.0.0"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="size-4" />
              Download
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}