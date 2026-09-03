import { BookOpen, Radar } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex items-center gap-2.5 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg border border-primary/30 bg-primary/10">
            <Radar className="size-4.5 text-primary" />
          </span>
          <span className="font-mono text-sm">
            career<span className="text-primary">cmd</span>center
          </span>
        </div>

        <p className="max-w-md font-mono text-xs text-muted-foreground">
          Track * Apply * Interview * Get Hired
          <br />
          Powered by Groq · Jobs from RemoteOK
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            className="transition-colors hover:text-primary"
            href="https://github.com/FinTechResearch/CareerCommandCenter"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition-colors hover:text-primary"
            href="https://github.com/FinTechResearch/CareerCommandCenter/releases/tag/v2.0.0"
            target="_blank"
            rel="noreferrer"
          >
            Releases
          </a>
          <a
            className="transition-colors hover:text-primary"
            href="https://adityamadhok.gumroad.com/l/Career-Command-Center"
            target="_blank"
            rel="noreferrer"
          >
            Gumroad
          </a>
          <a
            className="transition-colors hover:text-primary"
            href="https://ko-fi.com/adityamadhok"
            target="_blank"
            rel="noreferrer"
          >
            Ko-fi
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            href="https://dev.to/adityamadhok/i-built-career-command-center-an-ai-powered-job-search-dashboard-with-python-textual-496d"
            target="_blank"
            rel="noreferrer"
          >
            <BookOpen className="size-3.5" /> dev.to write-up
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aditya Madhok · GPL-3.0 · Built with
          Next.js, Three.js & ❤️
        </p>
      </div>
    </footer>
  );
}