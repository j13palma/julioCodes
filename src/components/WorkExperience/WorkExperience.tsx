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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-start overflow-hidden px-10 pb-4 pt-10 text-left"
    >
      <SectionTitle title="Experience" />
      <div className="flex h-full w-full snap-x snap-mandatory space-x-8 overflow-x-auto py-5 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
