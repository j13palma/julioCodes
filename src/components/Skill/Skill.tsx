"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

export type SkillProps = {
  direction: "Left" | "Right";
  skill: Skill;
};

interface SkillBarProps {
  skills: Skill[];
}

export const SkillBar = ({ skills }: SkillBarProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto px-1 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
      {skills.map((skill) => (
        <div
          key={skill._id}
          className="relative mb-2 h-10 min-h-[40px] w-10 min-w-[40px] overflow-hidden rounded-full"
        >
          <Image
            src={urlForImage(skill.img).url()}
            alt="JS Badge"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default function Skill({ direction, skill }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: direction === "Left" ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="min-h-12 min-w-12 relative h-12 w-12  overflow-hidden rounded-full border border-gray-500 bg-slate-300 filter transition duration-300 ease-in-out  group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      >
        <Image
          src={urlForImage(skill.img).url()}
          alt={skill.title}
          fill
          className="object-cover"
        />
        <div className="absolute h-12  w-12 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
          <div className="flex h-full items-center justify-center">
            <p className="font-bold text-black opacity-100 md:text-3xl">
              {skill.title}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
