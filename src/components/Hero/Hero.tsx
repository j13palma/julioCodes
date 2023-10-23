'use client';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PulsingCircles } from '..';
import Image from 'next/image';
import Link from 'next/link';

export type HeroProps = {};

export default function Hero({}: HeroProps) {
  const [text, count] = useTypewriter({
    words: ['Hi There, My Name is Julio!', 'Creator.io', '<NatureBoy />'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <PulsingCircles />
      <Image
        src='/Images/PALMAI.JPG'
        alt='Julio Palma AI Generated Pic'
        width={150}
        height={150}
        className='rounded-full relative mx-auto mt-0'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
