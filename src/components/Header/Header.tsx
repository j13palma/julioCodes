import { SocialIcon } from 'react-social-icons';

export type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center md:px-5'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          url='https://github.com/j13palma'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/j13hernandez/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.youtube.com/@FromNoneToOne'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>
      <div>
        <SocialIcon
          url='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Let&apos;s connect
        </p>
      </div>
    </header>
  );
}
export default Header;
