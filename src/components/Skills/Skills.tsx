"use client";
import { motion } from "framer-motion";
import { SectionTitle, Skill } from "..";
import { Skill as SkillType } from "../../../typings";

export type SkillsProps = { skills: SkillType[] };

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-start space-y-5 px-10 pt-10 text-center md:h-fit">
      <SectionTitle title="Skills" />
      <h3 className="text-sm uppercase tracking-[3px] text-[#023047]">
        <span className="hidden md:block">Hover over</span>
        <span className="md:hidden">Tap on</span> skills for name
      </h3>
      <div className="grid grid-cols-4 gap-2 px-5 pb-5 hover:opacity-100">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill skill={skill} key={skill._id} direction="Left" />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill skill={skill} key={skill._id} direction="Right" />
        ))}
      </div>
    </div>
  );
}
