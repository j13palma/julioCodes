"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

export type ExperienceCardProps = {
  experience: Experience;
};
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const formattedDate = (date: Date) =>
    new Date(date).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  return (
    <article className="flex h-[580px] w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden  rounded-lg bg-[#292929] p-10 opacity-100 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 overflow-hidden rounded-full object-center xl:h-[200px] xl:w-[200px]"
      >
        {experience.companyImage && (
          <Image
            src={urlForImage(experience.companyImage).url()}
            fill
            alt="AI Generated Pic"
            className="object-cover"
          />
        )}
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="my-2 space-x-2 font-bold">{experience.company}</p>
        <div>
          {experience.companyImage &&
            experience.technologies.map((tech) => (
              <div key={tech._id} className="relative h-10 w-10 rounded-full">
                <Image
                  src={urlForImage(tech.image).url()}
                  alt="JS Badge"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>
        <p className="py-5 uppercase text-gray-500">
          {formattedDate(experience.dateStarted)} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : formattedDate(experience.dateEnded)}
        </p>
        <ul className="ml-5 max-h-96 list-disc space-y-2 overflow-y-scroll pr-5 text-lg scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
