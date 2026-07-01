import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: {
    default: "GadgetHub",
    template: "%s | GadgetHub",
  },
  description: "Premium Gadget Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>

      <body className="min-h-screen bg-background text-on-background flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Navbar />
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}