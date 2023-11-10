"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";
import { SkillBar } from "..";

export type ExperienceCardProps = {
  experience: Experience;
};
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const formattedDate = (date: Date) =>
    new Date(date).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  return (
    <article className="flex h-full w-full max-w-[500px] flex-shrink-0 snap-center flex-col items-center justify-start space-y-7 overflow-y-auto overflow-x-hidden rounded-lg bg-[#B9C7DA] p-0 opacity-100 transition-opacity duration-200 scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white hover:opacity-100 md:w-[600px] xl:max-w-[900px]">
      <div>
        <div className="sticky top-0 z-10 max-w-[300px] bg-[#B9C7DA] px-5 pt-5 md:max-w-md lg:max-w-lg">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0, x: 10 }}
            viewport={{ once: true }}
            className="relative h-32 w-32 overflow-hidden rounded-full object-center xl:h-[200px] xl:w-[200px]"
          >
            <Image
              src={urlForImage(experience.companyImg).url()}
              fill
              alt="AI Generated Pic"
              className="object-cover"
            />
          </motion.div>
          <div className="relative mt-2 px-0 md:mt-4 md:pl-10">
            <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
            <p className="my-2 space-x-2 font-bold">{experience.company}</p>
            <SkillBar skills={experience.technologies} />
            <p className="py-3 uppercase text-[#023047]">
              {formattedDate(experience.dateStarted)} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : formattedDate(experience.dateEnded)}
            </p>
          </div>
        </div>
        <div className="px-5 pb-5 md:px-10">
          <ul className="ml-5 list-disc space-y-2 pr-5 text-lg">
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
