import './globals.css';
import { Inter, Russo_One, Oswald } from 'next/font/google';
import Script from 'next/script';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const russo = Russo_One({ weight: '400', subsets: ['latin', 'cyrillic'], variable: '--font-brand' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display' });

const siteUrl = 'https://vandals.barbershop';
const defaultTitle = 'Vandals Barbershop — Warszawa (Mokotów)';
const defaultDescription =
  'Męskie strzyżenia, brody i golenie. Rezerwacja online — Booksy. Mokotów, Warszawa.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Vandals Barbershop',
  },
  description: defaultDescription,
  keywords: [
    'barber',
    'barbershop',
    'strzyżenie Warszawa',
    'Mokotów barber',
    'broda',
    'fade',
    'golenie brzytwą',
    'Booksy',
  ],
  authors: [{ name: 'Vandals Barbershop' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: 'Vandals Barbershop',
    locale: 'pl_PL',
    alternateLocale: ['en_US', 'uk_UA'],
    type: 'website',
    images: [
      {
        url: '/hero-vandal.JPG',
        width: 1200,
        height: 630,
        alt: 'Wnętrze Vandals Barbershop w Warszawie (Mokotów)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/hero-vandal.JPG'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Barbershop',
    name: 'Vandals Barbershop',
    url: siteUrl,
    description: defaultDescription,
    telephone: '+48 571 848 348',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'JRR Tolkiena 1/4',
      addressLocality: 'Warszawa',
      postalCode: '02-676',
      addressCountry: 'PL',
    },
    sameAs: ['https://instagram.com/vndls_barbershop'],
    image: `${siteUrl}/hero-vandal.JPG`,
  };

  return (
    <html lang="pl">
      <body className={`${inter.variable} ${russo.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17126142870"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17126142870');
          `}
        </Script>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <div className="site">
          {children}
        </div>
      </body>
    </html>
  );
}
