"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";
export type SkillProps = {
  direction: "Left" | "Right";
  skill: Skill;
};

export default function Skill({ direction, skill }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: direction === "Left" ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative h-12  w-12  rounded-full border border-gray-500 filter transition duration-300 ease-in-out group-hover:grayscale md:h-28  md:w-28 xl:h-32 xl:w-32"
      >
        {/* <Image
          src={urlForImage(skill.image).url()}
          alt={skill.title}
          fill
          className="object-cover"
        /> */}
        <div className="absolute h-12  w-12 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
          <div className="flex h-full items-center justify-center">
            <p className="font-bold text-black opacity-100 md:text-3xl">
              {skill.progress}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
