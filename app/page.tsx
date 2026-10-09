import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Cases } from "@/components/sections/cases";
import { Terminal } from "@/components/sections/terminal";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollFx } from "@/components/scroll-fx";
import { NetworkBg } from "@/components/network-bg";
import { OpeningCurtain } from "@/components/opening-curtain";

export default function Home() {
  return (
    <>
      <OpeningCurtain />
      <ScrollFx />
      <NetworkBg />
      <Navbar />
      <main id="top" className="relative z-[1]">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Cases />
        <Terminal />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
