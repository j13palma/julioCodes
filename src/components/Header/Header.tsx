"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "@root/typings";
import Image from "next/image";

export type HeaderProps = {
  socials: Social[];
};

function Header({ socials }: HeaderProps) {
  return (
    <header className="trans-x-center fixed top-0 z-10 mx-auto flex w-full max-w-7xl justify-between md:px-5 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <Link href="/">
          <div className="m-2 rounded-full border-2 hover:border-[#FB8500]">
            <Image
              src="/PalmTechDraft_logo.png"
              alt="Home"
              width={50}
              height={50}
            />
          </div>
        </Link>
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="inherit"
            bgColor="transparent"
            className="social-icon"
            target="_blank"
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
          href="/#contact"
        />
        <Link href="/#contact">
          <p className="hidden text-sm uppercase text-[#023047] delay-75 group-hover:text-[#FB8500] md:inline-flex">
            Let&apos;s connect
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
export default Header;
