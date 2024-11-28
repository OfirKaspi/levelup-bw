import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Your Digital Agency",
  description: "Helping businesses thrive with websites, Meta marketing, and copywriting.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
