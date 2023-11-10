"use client";
import { motion } from "framer-motion";

export type PulsingCirclesProps = {};
export default function PulsingCircles({}: PulsingCirclesProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative -z-10 flex items-center justify-center"
    >
      <div className="animate-ping-slow absolute mt-52 h-[200px] w-[200px] rounded-full border border-[#333333]" />
      <div className="animate-ping-slow absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
      <div className="animate-ping-slow absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333333]" />
      <div className="animate-ping-slow absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#FB8500]" />
    </motion.div>
  );
}
