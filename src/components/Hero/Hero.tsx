"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PulsingCircles } from "..";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

export type HeroProps = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: HeroProps) {
  console.log(pageInfo);

  const [text, count] = useTypewriter({
    words: pageInfo.banner,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <PulsingCircles />
      <Image
        src={urlForImage(pageInfo.heroImg).url()}
        alt="Julio Palma AI Generated Pic"
        width={150}
        height={150}
        className="relative mx-auto mt-0 rounded-full"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo.role}
        </h2>
        <h1 className="px-10 text-4xl font-semibold lg:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
