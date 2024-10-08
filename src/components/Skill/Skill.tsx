"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "@root/typings";
import { urlForImage } from "@root/sanity/lib/image";

export type SkillProps = {
  direction: "Left" | "Right";
  skill: SkillType;
};

interface SkillBarProps {
  skills: SkillType[];
}

export const SkillBar = ({ skills }: SkillBarProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto px-1 scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
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
        initial={{ x: direction === "Left" ? -50 : 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="min-h-14 min-w-14 relative h-14 w-14 overflow-hidden rounded-full border border-[#023047] bg-slate-300 filter transition duration-300 ease-in-out  group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      >
        <Image
          src={urlForImage(skill.img).url()}
          alt={skill.title}
          fill
          placeholder="blur"
          loading="eager"
          blurDataURL="/placerholder.png"
          className="object-cover"
        />
        <div className="absolute h-14  w-14 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
          <div className="flex h-full items-center justify-center">
            <p className="text-xs font-bold text-black opacity-100 md:text-2xl">
              {skill.title}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
