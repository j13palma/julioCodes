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

      <h2 className="z-20 mr-[-20px] pb-2 text-sm uppercase tracking-[15px] text-[#023047]">
        {pageInfo.role}
      </h2>
      <h1 className="h-32 px-9 text-4xl font-semibold lg:text-5xl">
        <span>{text}</span>
        <Cursor cursorColor="#FB8500" />
      </h1>
      <div className="bottom-3 z-20 mx-auto flex flex-col gap-1 px-1 md:flex-row md:pt-5">
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
  );
}
