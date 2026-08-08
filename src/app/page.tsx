import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Portfolio } from "@/components/sections/Portfolio";

/**
 * Landing page. Sections land phase by phase — see plan.md.
 * Design system reference lives at /styleguide.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ClientLogos />
      <Services />
      <Stats />
      <Portfolio />
    </main>
  );
}
