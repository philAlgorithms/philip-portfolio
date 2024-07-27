import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import { Providers } from '@/lib/providers';
import { HandleOnComplete } from '@/lib/router-events';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chinendu Onyedikachi',
  description: 'Work Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <HandleOnComplete />
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
