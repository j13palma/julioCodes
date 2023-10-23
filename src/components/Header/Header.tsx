'use client';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

export type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center md:px-5 z-10'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://github.com/j13palma'
          fgColor='inherit'
          bgColor='transparent'
          className='social-icon'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/j13hernandez/'
          fgColor='inherit'
          bgColor='transparent'
          className='social-icon'
        />
        <SocialIcon
          url='https://www.youtube.com/@FromNoneToOne'
          fgColor='inherit'
          bgColor='transparent'
          className='social-icon'
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url='cursor-pointer'
          network='email'
          fgColor='inherit'
          bgColor='transparent'
          className='social-icon'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Let&apos;s connect
        </p>
      </motion.div>
    </header>
  );
}
export default Header;
