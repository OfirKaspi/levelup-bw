/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import AccessibilityWidget from "@/components/legal/AccessibilityWidget";

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
        <meta property="og:image" content="/levelup-logo-square.png" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://thelevelupagency.com" />
        <meta name="twitter:card" content="summary_large_image" />
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
      </head>
      <body className="antialiased relative flex flex-col min-h-screen overflow-x-hidden font-[Assistant]">
        <Navbar />
        <main className="flex-1 px-5">{children}</main>
        <AccessibilityWidget/>
        <WhatsAppButton />
        <Footer />
        <Analytics />
        
      </body>
    </html>
  );
};

export default RootLayout;
