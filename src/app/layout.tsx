import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Frontend Developer, Creative Coder, and more...',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
