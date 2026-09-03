import { Coffee, Download, FileCode2, Heart, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { FeatureForm } from "@/components/site/feature-form";

export function Cta() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.83_0.18_156/8%),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card/60 p-8">
              <div>
                <p className="font-mono text-sm text-primary">// get started</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Track. Apply. Interview.{" "}
                  <span className="font-mono text-primary text-glow">Get hired.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Install for your platform, add a free Groq key for the AI
                  features, and take command of your job search tonight.
                </p>
                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3">
                    <Terminal className="size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Linux:{" "}
                      <code className="text-foreground">
                        sudo apt install ./career-command-center_2.0_amd64.deb
                      </code>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3">
                    <Terminal className="size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Windows:{" "}
                      <code className="text-foreground">CareerCommandCenter.exe</code>{" "}
                      — portable or setup installer
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a
                    href="https://github.com/FinTechResearch/CareerCommandCenter/releases/tag/v2.0.0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="size-4" /> Download v2.1
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/FinTechResearch/CareerCommandCenter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileCode2 className="size-4" /> Build from source
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://ko-fi.com/adityamadhok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Coffee className="size-4" /> Ko-fi
                  </a>
                </Button>
              </div>

              <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Heart className="size-3 text-primary" />
                Purchases on Gumroad and donations fund future improvements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-xl border border-border bg-card/60 p-8">
              <p className="font-mono text-sm text-primary">// shape the roadmap</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Request a feature
              </h3>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">
                Have an idea for the next release? Drop it here — or better yet,
                open a pull request.
              </p>
              <FeatureForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}