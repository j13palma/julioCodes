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
      month: "short",
      year: "numeric",
    });
  return (
    <article className="flex h-full w-full max-w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center justify-start space-y-7 overflow-y-auto overflow-x-hidden  rounded-lg bg-[#292929] p-0 opacity-100 transition-opacity duration-200 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-white hover:opacity-100 md:w-[600px] xl:max-w-[900px]">
      <div>
        <div className="sticky top-0 z-10 bg-[#292929] px-5 pt-5">
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
          <div className="mt-2 px-0 md:px-10">
            <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
            <p className="my-2 space-x-2 font-bold">{experience.company}</p>
            <div>
              {experience.technologies.map((tech) => (
                <div key={tech._id} className="relative h-10 w-10 rounded-full">
                  <Image
                    src={urlForImage(tech.img).url()}
                    alt="JS Badge"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="py-3 uppercase text-gray-500">
              {formattedDate(experience.dateStarted)} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : formattedDate(experience.dateEnded)}
            </p>
          </div>
        </div>
        <div className="px-5 pb-5">
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
