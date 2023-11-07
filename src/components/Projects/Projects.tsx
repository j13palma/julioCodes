"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "..";
import Image from "next/image";
import { Project } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

export type ProjectsProps = { projects: Project[] };

export default function Projects({ projects }: ProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left"
    >
      <SectionTitle title="Projects" />
      <div className="relative z-10 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
        {projects.map((project, i) => (
          <div
            key={Math.random()}
            className="relative flex h-screen w-full flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative mx-auto mb-10 mt-5 h-full w-full flex-shrink-0 "
            >
              <Image
                src={urlForImage(project.img).url()}
                alt="Web app"
                fill
                className="relative object-cover"
              />
            </motion.div>
            <div className="min-h-[45%] max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              {project.technologies?.map((tech) => (
                <div key={tech._id} className="relative h-10 w-10 rounded-full">
                  <Image
                    src={urlForImage(tech.img).url()}
                    alt="JS Badge"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <p className="text-center text-lg md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/10" />
    </motion.div>
  );
}
