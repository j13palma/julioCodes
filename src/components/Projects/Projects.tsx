"use client";
import { motion } from "framer-motion";
import { SectionTitle, SkillBar } from "..";
import Image from "next/image";
import { Project } from "@root/typings";
import { urlForImage } from "@root/sanity/lib/image";

export type ProjectsProps = { projects: Project[] };

export default function Projects({ projects }: ProjectsProps) {
  const reversedProjects = [...projects].reverse();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-start overflow-hidden px-10 pb-12 pt-10 text-left"
    >
      <SectionTitle title="Projects" />
      <div className="flex h-full w-full snap-x snap-mandatory overflow-x-auto py-5 scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
        {reversedProjects.map((project, i) => (
          <article
            className="flex h-full w-full max-w-[500px] flex-shrink-0 snap-center flex-col items-center justify-start space-y-7 overflow-y-auto overflow-x-hidden p-0 opacity-100 transition-opacity duration-200 scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white hover:opacity-100 md:w-[600px] xl:max-w-[900px]"
            key={project._id}
          >
            <div className="relative flex h-full w-full flex-shrink-0 snap-center flex-col items-center justify-start space-y-1">
              <motion.div
                className="relative mx-auto mb-5 mt-2 flex w-72 flex-shrink-0 items-center overflow-hidden rounded-2xl md:mb-0 md:w-96 md:rounded-lg xl:h-[300px] xl:w-[500px]"
                initial={{ y: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <Image
                  src={urlForImage(project.img).url()}
                  alt="Web app"
                  layout="responsive"
                  width={1000}
                  height={600}
                  className="object-cover"
                />
              </motion.div>
              <div className="max-w-[280px] space-y-5 px-0 md:max-w-md md:px-10 lg:max-w-lg">
                <h4 className="text-center text-4xl font-semibold">
                  <span className="underline decoration-[#FB8500]/50">
                    Case Study {i + 1} of {reversedProjects.length}:
                  </span>
                  <br />
                  <a
                    href={project.linkToBuild}
                    className="text-[#461e04] hover:text-[#FB8500] hover:underline hover:decoration-[#FB8500]/50"
                  >
                    {project.title}
                  </a>
                </h4>
                <SkillBar skills={project.technologies} />
                <p className="text-center text-lg md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="absolute left-0 top-[30%] -z-10 h-[500px] w-full -skew-y-12 bg-[#FB8500]/10" />
    </motion.div>
  );
}
