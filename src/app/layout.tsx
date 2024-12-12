import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
  title: "Your Digital Agency",
  description: "Helping businesses thrive with websites, Meta marketing, and copywriting.",
  icons: {
    icon: "/favicon.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden ">
        <Navbar />
        <main className="relative flex-1 px-5 md:max-w-3xl lg:max-w-5xl md:mx-auto">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout
