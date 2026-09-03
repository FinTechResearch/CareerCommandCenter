import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Features } from "@/components/site/features";
import { HowItWorks } from "@/components/site/how-it-works";
import { StatsBand } from "@/components/site/stats-band";
import { StackSection } from "@/components/site/stack-section";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <StatsBand />
        <StackSection />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
