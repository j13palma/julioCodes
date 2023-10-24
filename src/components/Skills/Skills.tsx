"use client";
import { motion } from "framer-motion";
import { SectionTitle, Skill } from "..";

export type SkillsProps = {};

export default function Skills({}: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <SectionTitle title="Skills" />
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over skills for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
