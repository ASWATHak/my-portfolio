import { ThemeProvider } from '@/providers/ThemeProvider';
import SynapticNav from '@/components/neural/SynapticNav';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aswath | Full Stack Engineer',
  description: 'Full Stack Engineer specializing in full-stack development, AI/LLM integration, and scalable backend systems. Building robust, scalable, and intelligent web applications.',
  keywords: 'Full Stack Engineer, AI Integration, LLM, Backend Systems, React, Node.js, NestJS, Laravel, PostgreSQL, MySQL',
  authors: [{ name: 'Aswath' }],
  creator: 'Aswath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aswath.dev',
    title: 'Aswath | Full Stack Engineer',
    description: 'Full Stack Engineer specializing in full-stack development, AI/LLM integration, and scalable backend systems.',
    siteName: 'Full Stack Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aswath | Full Stack Engineer',
    description: 'Full Stack Engineer specializing in full-stack development, AI/LLM integration, and scalable backend systems.',
    creator: '@aswath',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className="bg-black text-white font-mono antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <SynapticNav />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
