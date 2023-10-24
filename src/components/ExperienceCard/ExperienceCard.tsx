"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export type ExperienceCardProps = {};
export default function ExperienceCard({}: ExperienceCardProps) {
  return (
    <article className="flex h-[580px] w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden  rounded-lg bg-[#292929] p-10 opacity-100 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 overflow-hidden rounded-full object-center xl:h-[200px] xl:w-[200px]"
      >
        <Image
          src="/Images/PALMAI.JPG"
          fill
          alt="AI Generated Pic"
          className="object-cover"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF PALMA PRODUCTIONS</h4>
        <p className="my-2 space-x-2 font-bold">PALMA PRODUCTIONS</p>
        <div>
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src="/Images/JSBadge.png"
              alt="JS Badge"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="py-5 uppercase text-gray-500">Start-End</p>
        <ul className="ml-5 h-[120px] list-disc space-y-2 overflow-y-scroll text-lg">
          <li>
            StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff
            StuffStuff StuffStuff StuffStuff
          </li>
          <li>
            StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff
            StuffStuff StuffStuff StuffStuff
          </li>
          <li>
            StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff
            StuffStuff StuffStuff StuffStuff
          </li>
          <li>
            StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff StuffStuff
            StuffStuff StuffStuff StuffStuff
          </li>
        </ul>
      </div>
    </article>
  );
}
