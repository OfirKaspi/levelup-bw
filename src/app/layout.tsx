/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import AccessibilityWidget from "@/components/legal/AccessibilityWidget";
import Script from "next/script";
import { CONFIG } from "@/config/config";
import GAListener from "@/components/common/GAListener";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LevelUp | סוכנות דיגיטלית לבניית אתרים, שיווק וכתיבה</title>
        <meta
          name="description"
          content="LevelUp - סוכנות דיגיטלית מובילה לבניית אתרים, שיווק דיגיטלי וכתיבה שיווקית לעסקים שרוצים להצליח."
        />
        <meta
          name="keywords"
          content="בניית אתרים, סוכנות דיגיטל, שיווק בפייסבוק, כתיבה שיווקית, דפי נחיתה, אתרי תדמית, LevelUp"
        />
        <meta property="og:title" content="LevelUp | סוכנות דיגיטלית" />
        <meta
          property="og:description"
          content="LevelUp - סוכנות דיגיטלית מובילה המספקת פתרונות מקצועיים בבניית אתרים, שיווק וכתיבה שיווקית, המקדמים עסקים להצלחה."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thelevelupagency.com/levelup-og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://thelevelupagency.com" />
        <meta name="twitter:card" content="https://thelevelupagency.com/levelup-og-image.png" />
        <link rel="canonical" href="https://thelevelupagency.com" />
        <link
          rel="icon"
          href="/levelup-logo-square.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${CONFIG.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dudwjf2pu/video/upload/v1750703778/LevelUp/hero_video_ut01hm.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dudwjf2pu/video/upload/f_auto,q_auto,c_crop,ar_3:4/v1750705376/LevelUp/hero_video_mobile_iwfyyj.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

      </head>
      <body className="antialiased relative flex flex-col min-h-screen overflow-x-hidden font-[Assistant]">
        <Navbar />
        <main className="flex-1 px-5">{children}</main>
        <AccessibilityWidget />
        <WhatsAppButton />
        <Footer />

        <GAListener />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
