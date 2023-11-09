"use client";
import { motion } from "framer-motion";
import { SectionTitle, Skill } from "..";
import { Skill as SkillType } from "../../../typings";

export type SkillsProps = { skills: SkillType[] };

export default function Skills({ skills }: SkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-start space-y-5 overflow-hidden px-10 pt-10 text-center"
    >
      <SectionTitle title="Skills" />
      <h3 className="text-sm uppercase tracking-[3px] text-gray-500">
        <span className="hidden md:block">Hover over</span>
        <span className="md:hidden">Tap on</span> skills for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-2 px-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill skill={skill} key={skill._id} direction="Left" />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill skill={skill} key={skill._id} direction="Right" />
        ))}
      </div>
    </motion.div>
  );
}
