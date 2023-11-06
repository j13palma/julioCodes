"use client";
import { motion } from "framer-motion";
import { ExperienceCard, SectionTitle } from "..";
import { Experience } from "../../../typings";

export type WorkExperienceProps = { experiences: Experience[] };
export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <SectionTitle title="Experience" />
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
