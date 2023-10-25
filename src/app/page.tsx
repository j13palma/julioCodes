import { About, Hero, Header, WorkExperience, Skills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="workexperience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        <section id="projects" className="snap-center">
          <Skills />
        </section>
      </main>
    </div>
  );
}
