/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
  title: "LevelUp",
  description:
    "LevelUp - סוכנות דיגיטלית מובילה המספקת פתרונות מקצועיים בבניית אתרים, שיווק וכתיבה שיווקית, המקדמים עסקים להצלחה.",
  icons: {
    icon: "/levelup-logo-square.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased relative flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-1 px-5">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
