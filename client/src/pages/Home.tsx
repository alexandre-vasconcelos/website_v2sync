import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Technologies } from "@/components/sections/Technologies";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { RetailSolutions } from "@/components/sections/RetailSolutions";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <RetailSolutions />
        <Solutions />
        <Technologies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
