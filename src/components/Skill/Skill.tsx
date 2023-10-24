"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export type SkillProps = {
  direction: "Left" | "Right";
};

export default function Skill({ direction }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: direction === "Left" ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative h-12  w-12  rounded-full border border-gray-500 filter transition duration-300 ease-in-out group-hover:grayscale md:h-28  md:w-28 xl:h-32 xl:w-32"
      >
        <Image
          src="/Images/sanity.webp"
          alt="Sanity"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute h-12  w-12 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="font-bold text-black opacity-100 md:text-3xl">100%</p>
        </div>
      </div>
    </div>
  );
}
