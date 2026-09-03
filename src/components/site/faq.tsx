import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";

const FAQS = [
  {
    q: "Is Career Command Center really free?",
    a: "Yes — as of v2.1 the full source code is open source under GPL-3.0, and ready-to-install binaries (Windows EXE, Linux .deb) are free on the GitHub releases page. Optionally, you can purchase a build on Gumroad or donate via Ko-fi / GitHub Sponsors to support development.",
  },
  {
    q: "Do I need an API key to use it?",
    a: "Only for the AI features (Job Analyzer, Resume Match, Cover Letters, Interview Prep). Application Tracker and Statistics work completely offline with no key. Grab a free Groq API key at console.groq.com/keys and add it in the API Settings screen.",
  },
  {
    q: "Where is my data stored?",
    a: "Everything lives locally in a SQLite database (jobs.db) plus a local .env file. Your data is preserved even after uninstalling or upgrading, and nothing is sent anywhere except the AI prompts you choose to run through Groq.",
  },
  {
    q: "Which platforms are supported?",
    a: "Windows (portable EXE or setup installer with Start-menu shortcut and uninstaller) and Linux (amd64 .deb — install with `sudo apt install ./career-command-center_2.0_amd64.deb`, launch with `career-command-center`). You can also build from source on either platform.",
  },
  {
    q: "What's on the roadmap?",
    a: "Resume optimization, deeper ATS scoring, PDF report exports, multi-source job aggregation beyond RemoteOK, and an advanced analytics dashboard. Feature requests and pull requests are welcome — the project is open source.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-sm text-primary">// faq</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Questions, answered
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}