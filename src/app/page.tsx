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

export const revalidate = 60;

async function getData() {
  const experiences: Experience[] = await client.fetch(experience);
  const pageInformation: PageInfo = await client.fetch(pageInfo);
  const projects: Project[] = await client.fetch(project);
  const skills: Skill[] = await client.fetch(skill);
  const socials: Social[] = await client.fetch(social);

  return {
    props: {
      experiences,
      pageInformation,
      projects,
      skills,
      socials,
    },
  };
}

export default async function Home() {
  const { experiences, pageInformation, projects, skills, socials } = (
    await getData()
  ).props;
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
      <Header socials={socials} />
      <main className="safari_only">
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInformation} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInformation} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-center">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start scroll-smooth">
          <Contact pageInfo={pageInformation} />
        </section>
      </main>
      <footer className="sticky bottom-3 mx-auto flex h-10 w-full max-w-7xl cursor-pointer items-center justify-end pr-3">
        <Link
          href="#hero"
          className="group flex flex-col items-center justify-center"
        >
          <div className="h-6 w-6 animate-bounce rounded-full grayscale filter hover:grayscale-0">
            <ChevronUpIcon className="fill-[#023047] group-hover:opacity-70" />
          </div>
          <p className="text-xs text-[#023047] opacity-0 group-hover:opacity-70 md:opacity-100">
            To the Top!
          </p>
        </Link>
      </footer>
    </div>
  );
}
