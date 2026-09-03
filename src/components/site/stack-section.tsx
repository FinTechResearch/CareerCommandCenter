import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";

const PRODUCT_STACK = [
  "Python",
  "Textual TUI",
  "Rich",
  "SQLite",
  "Groq AI API",
  "RemoteOK API",
  "PyInstaller",
  "GIF UI animations",
];

const SITE_STACK = [
  "Next.js 16",
  "React 19",
  "Three.js",
  "@react-three/fiber",
  "@react-three/drei",
  "GSAP + ScrollTrigger",
  "Framer Motion",
  "Lenis smooth scroll",
  "Tailwind CSS v4",
  "shadcn/ui",
  "react-hook-form + zod",
  "TypeScript",
];

export function StackSection() {
  return (
    <section id="stack" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">// under the hood</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Built with a terminal heart,
            <br className="hidden sm:block" /> rendered with a 3D soul
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-card/50 p-8">
              <h3 className="font-mono text-sm text-primary">
                $ the-product --stack
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {PRODUCT_STACK.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="h-7 px-3 font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                A Textual-powered terminal dashboard with SQLite persistence and
                Groq-speed AI, packaged into native Windows and Linux binaries.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-8">
              <h3 className="font-mono text-sm text-primary">
                $ this-landing-page --stack
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {SITE_STACK.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="h-7 border-primary/30 bg-background/60 px-3 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                A WebGL hero scene, buttery smooth scrolling and scroll-driven
                motion — this site is itself a showcase of the modern Next.js
                creative stack.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}