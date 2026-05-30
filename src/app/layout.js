import { Mukta, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "../hooks/useDarkMode";

const mukta = Mukta({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['devanagari', 'latin'],
  variable: '--font-nepali',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: "नेपालको पात्रो - Nepali Calendar, Date Converter & Holidays",
  description: "The most accurate Nepali Calendar (Nepali Patro) with Bikram Sambat to AD converter, upcoming holidays, and festivals. Privacy-focused and ad-free.",
  keywords: "Nepali Calendar, Nepali Patro, Bikram Sambat, BS to AD Converter, Nepali Date Converter, Nepal Holidays, Nepali Festivals, Nepali Panjika, Today Nepali Date",
  authors: [{ name: "Yuvaraj" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-72x72.png",
    apple: "/icons/icon-192x192.png",
  },
  openGraph: {
    title: "नेपालको पात्रो - Nepali Calendar",
    description: "Accurate Nepali Calendar with Date Converter and Holidays.",
    url: "https://calendarofnepal.com",
    siteName: "नेपालको पात्रो",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://calendarofnepal.com/og-image.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Nepali Calendar Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'नेपालको पात्रो - Nepali Calendar',
    description: 'Accurate Nepali Calendar with Date Converter and Holidays.',
  },
  alternates: {
    canonical: 'https://calendarofnepal.com',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Nepali Calendar',
    alternateName: 'नेपालको पात्रो',
    url: 'https://calendarofnepal.com',
    description: 'A comprehensive Nepali Calendar application featuring BS to AD conversion, holiday lists, and event tracking.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Nepali Calendar (Bikram Sambat)',
      'Date Converter (BS to AD / AD to BS)',
      'Nepal Holidays List',
      'Tithi and Festivals',
    ],
  };

  return (
    <html lang="en">
      <body className={`${mukta.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
