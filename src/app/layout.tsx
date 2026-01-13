// src/app/layout.tsx
'use client'
import { LanguageProvider } from '@/contexts/LanguajeContext';
import './globals.css';
import { Playfair_Display, Open_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${playfairDisplay.variable} ${openSans.className}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}