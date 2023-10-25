"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  AtSymbolIcon as EmailIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  MapPinIcon as AddressIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { SectionTitle } from "..";

export type ContactProps = {};

export default function Contact({}: ContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <SectionTitle title="Contact Me" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          <span className="underline decoration-[#f7ab0a]/50">
            Let&apos;s talk
          </span>{" "}
          about your business needs and how I can help satisfy them.
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 animate-bounce text-[#f7ab0a]" />
            <p className="text-2xl">(978) 237-0901</p>
          </div>
          <div className="group flex items-center justify-center space-x-5">
            <EmailIcon className="animate-spin-slow h-7 text-[#f7ab0a]" />
            <p className="text-2xl">JPalma@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapIcon className="h-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">Charlotte, NC</p>
          </div>
        </div>
        <form className="mx-auto flex w-fit flex-col space-y-3">
          <div className="flex space-x-2">
            <input className="contact-input" placeholder="Name" type="text" />
            <input className="contact-input" placeholder="Email" type="email" />
          </div>
          <input className="contact-input" placeholder="Subject" type="text" />
          <textarea
            className="contact-input"
            placeholder="Message"
            name=""
            id=""
            cols={30}
            rows={10}
          >
            {" "}
          </textarea>
          <button className="rounded-md bg-[#f7ab0a]/40 px-10 py-5 text-lg font-bold transition-all hover:bg-[#f7ab0a]">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
