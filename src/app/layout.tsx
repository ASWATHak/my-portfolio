import { ThemeProvider } from '@/providers/ThemeProvider';
import SynapticNav from '@/components/neural/SynapticNav';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aswath | Quantum Developer',
  description: 'Architecting digital realities through neural networks and quantum algorithms.',
  keywords: 'Quantum Developer, Neural Networks, AI, Web Development, React, Three.js',
  authors: [{ name: 'Aswath' }],
  creator: 'Aswath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aswath.dev',
    title: 'Aswath | Quantum Developer',
    description: 'Architecting digital realities through neural networks and quantum algorithms.',
    siteName: 'Quantum Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aswath | Quantum Developer',
    description: 'Architecting digital realities through neural networks and quantum algorithms.',
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
