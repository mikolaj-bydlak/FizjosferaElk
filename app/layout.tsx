import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fizjosfera.pl'),
  title: 'Fizjosfera — fizjoterapia uroginekologiczna w Ełku',
  description:
    'Specjalistyczna fizjoterapia uroginekologiczna, terapia blizn i opieka okołoporodowa w Ełku. Gabinet Katarzyny Marcinkowskiej-Kononowicz — zdrowie kobiety w troskliwych rękach.',
  keywords: [
    'fizjoterapia uroginekologiczna',
    'terapia blizn',
    'opieka okołoporodowa',
    'fizjoterapia Ełk',
    'dno miednicy',
    'Fizjosfera',
  ],
  openGraph: {
    title: 'Fizjosfera — fizjoterapia uroginekologiczna w Ełku',
    description:
      'Specjalistyczna fizjoterapia uroginekologiczna, terapia blizn i opieka okołoporodowa w Ełku.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Fizjosfera',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
