import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope, Caveat, Outfit } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteDetails } from '@/data/siteDetails';

import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import Script from 'next/script';
import CookieBanner from "@/components/CookieBanner";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: 'nl_NL',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" suppressHydrationWarning>
      <body
        className={`${manrope.className} ${sourceSans.className} ${outfit.variable} ${caveat.variable} antialiased`}
      >
        <div className="waitlist-banner" role="status">
          Currently there&apos;s a wait list. Please email{' '}
          <a href="mailto:tim@studiolee.nl">tim@studiolee.nl</a>{' '}
          for more information.
        </div>
        <ThemeProvider>
          {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        <CookieBanner widgetId="69c4ef18d9121c5778d93245" />
        <Script id="waitlist-mode" strategy="afterInteractive">{`
          (function(){
            const intercept = (e) => {
              const t = e.target && e.target.closest && e.target.closest('button, a');
              if (!t) return;
              if (t.closest('.waitlist-banner') || t.closest('header') || t.closest('nav')) return;
              if (t.getAttribute('data-allow') === 'true') return;
              const text = (t.innerText || t.textContent || '').toLowerCase().trim();
              const href = (t.getAttribute('href') || '').toLowerCase();
              const sale = /(start gratis|start nu|start voor|start mijn|proefperiode|14 dagen voor|gratis start|gratis proberen|gratis trial|free trial|plan een|book a call|book a demo|kies pakket|kies dit pakket|abonneren|aanmelden|registreer|betaal|bestel|nu kopen|koop nu|begin|aan de slag)/.test(text)
                || /calendly\\.com|\\/\\/cal\\.com|tally\\.so|checkout|stripe\\.com\\/pay/.test(href);
              if (sale) {
                e.preventDefault();
                e.stopImmediatePropagation();
                window.location.href = 'mailto:tim@studiolee.nl?subject=Wachtlijst%20-%20' + encodeURIComponent(document.title);
              }
            };
            document.addEventListener('click', intercept, true);
          })();
        `}</Script>
      </body>
    </html>
  );
}
// cookie-banner v4
