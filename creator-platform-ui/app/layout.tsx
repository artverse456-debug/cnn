import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import HeaderNav from '@/components/HeaderNav';
import FooterCTA from '@/components/FooterCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });

export const metadata: Metadata = {
  title: 'Creator Platform UI',
  description: 'Moderne Social-Media-Plattform für Creator & Fans mit Challenges und Rewards.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-[#05030b] text-white">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(110,65,255,0.35),_transparent_55%)]">
          <HeaderNav />
          <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
            {children}
          </main>
          <FooterCTA />
        </div>
      </body>
    </html>
  );
}
