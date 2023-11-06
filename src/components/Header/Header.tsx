"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../../typings";

export type HeaderProps = {
  socials: Social[];
};

function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 mx-auto flex max-w-7xl items-start justify-between md:px-5 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="inherit"
            bgColor="transparent"
            className="social-icon"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="group"
      >
        <SocialIcon
          url="cursor-pointer"
          network="email"
          fgColor="inherit"
          bgColor="transparent"
          className="social-icon"
          href="#contact"
        />
        <Link href="#contact">
          <p className="hidden text-sm uppercase text-gray-400 group-hover:text-[#f7ab0a]/40 md:inline-flex">
            Let&apos;s connect
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
export default Header;
