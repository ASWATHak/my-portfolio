import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';
import ChatbotWidget from '@/components/ui/ChatbotWidget';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aswath | Full-Stack Developer',
  description: 'Full-Stack Developer crafting intelligent web experiences with modern technologies and AI integration.',
  keywords: 'Full-Stack Developer, React, Next.js, TypeScript, AI, Web Development',
  authors: [{ name: 'Aswath' }],
  creator: 'Aswath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aswath.dev',
    title: 'Aswath | Full-Stack Developer',
    description: 'Full-Stack Developer crafting intelligent web experiences with modern technologies and AI integration.',
    siteName: 'Aswath Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aswath | Full-Stack Developer',
    description: 'Full-Stack Developer crafting intelligent web experiences with modern technologies and AI integration.',
    creator: '@aswath',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatbotWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
