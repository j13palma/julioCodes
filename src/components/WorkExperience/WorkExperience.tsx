"use client";
import { motion } from "framer-motion";
import { ExperienceCard, SectionTitle } from "..";

export type WorkExperienceProps = {};
export default function WorkExperience({}: WorkExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <SectionTitle title="Experience" />
      <div className="scrollbar-track-gray-400/40 scrollbar-thumb-white scrollbar-thin flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
