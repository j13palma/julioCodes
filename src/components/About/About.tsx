"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "..";
import { PageInfo } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

export type AboutProps = { pageInfo: PageInfo };

export default function About({ pageInfo }: AboutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-start px-10 pb-4 pt-10 text-center  md:text-left"
    >
      <SectionTitle title="About" />
      <div className="md:my-auto md:flex">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="md:h-95 relative mx-auto mb-5 mt-2 h-56 w-56 flex-shrink-0 md:mb-0 md:w-64 xl:h-[600px] xl:w-[500px]"
        >
          <Image
            src={urlForImage(pageInfo.profilePic).url()}
            alt="Julio Palma Casual Pic"
            fill
            className="rounded-full object-cover md:rounded-lg"
          />
          d
        </motion.div>
        <div className="space-y-1 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            A{" "}
            <span className="text-xl underline decoration-[#f7ab0a]/50">
              little
            </span>{" "}
            bit about me.
          </h4>
          <p className="text-base">{pageInfo.backgroundInfo}</p>
        </div>
      </div>
    </motion.div>
  );
}
