import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChatButton, Header } from '@/components';
import { Social } from '@root/typings';
import { client } from '@root/sanity/lib/client';
import { social } from '@root/sanity/queries';

const inter = Inter({ subsets: ['latin'] });

async function getData() {  const socials: Social[] = await client.fetch(social);
return{props: {socials}}
}

export const metadata: Metadata = {
  title: 'Julio`s Portfolio',
  description:
    'Portfolio site for Julio Palma, showcasing a few of his personal projects and aspirations.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { socials } = (
    await getData()).props
    
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header socials={socials} />
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
