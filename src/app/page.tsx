import { Hero, Header } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='snap-y snap-mandatory overflow-y-scroll h-screen z-0'>
      <Header />
      <main>
        <section id='Hero' className='snap-center'>
          <Hero />
        </section>
        <section id='About' className='snap-center'>
          <Hero />
        </section>
      </main>
    </div>
  );
}
