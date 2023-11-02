import Link from "next/link";
import {
  About,
  Hero,
  Header,
  WorkExperience,
  Skills,
  Projects,
  Contact,
} from "@/components";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { client } from "../../sanity/lib/client";
import {
  experience,
  pageInfo,
  project,
  skill,
  social,
} from "../../sanity/queries";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";

const experiences: Experience[] = await client.fetch(experience);
const pageInformation: PageInfo[] = await client.fetch(pageInfo);
const projects: Project[] = await client.fetch(project);
const skills: Skill[] = await client.fetch(skill);
const socials: Social[] = await client.fetch(social);

console.log(experiences);

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
      <Header />
      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        <section id="contact" className="snap-center">
          <Contact />
        </section>
      </main>
      {/* TODO: Change to scroll to top */}
      <footer className="sticky bottom-5 flex w-full cursor-pointer items-center justify-center">
        <Link href="#hero">
          <div className=" h-10 w-10 animate-bounce rounded-full grayscale filter hover:grayscale-0">
            <ChevronUpIcon />
          </div>
        </Link>
      </footer>
    </div>
  );
}
