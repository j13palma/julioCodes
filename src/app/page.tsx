import { About, Hero, Header, WorkExperience } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <main>
        <section id="Hero" className="snap-start">
          <Hero />
        </section>
        <section id="About" className="snap-center">
          <About />
        </section>
        <section id="WorkExperience" className="snap-center">
          <WorkExperience />
        </section>
      </main>
    </div>
  );
}
