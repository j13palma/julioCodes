import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  ThankYou,
  WorkExperience,
} from "@/components";
import { client } from "@root/sanity/lib/client";
import {
  experience,
  pageInfo,
  project,
  skill,
} from "@root/sanity/queries";
import { Experience, PageInfo, Project, Skill } from "@root/typings";

export const revalidate = 60;

async function getData() {
  const experiences: Experience[] = await client.fetch(experience);
  const pageInformation: PageInfo = await client.fetch(pageInfo);
  const projects: Project[] = await client.fetch(project);
  const skills: Skill[] = await client.fetch(skill);

  return {
    props: {
      experiences,
      pageInformation,
      projects,
      skills,
    },
  };
}

export default async function Home() {
  const { experiences, pageInformation, projects, skills } = (
    await getData()
  ).props;
  
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
      <main>
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInformation} />
        </section>
        <section id="about" className="snap-start">
          <About pageInfo={pageInformation} />
        </section>
        <section id="experience" className="snap-start">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInformation} />
        </section>
        <section id="thankYou" className="snap-start">
          <ThankYou />
        </section>
      </main>
    </div>
  );
}
