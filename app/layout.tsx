import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import Head from "next/head";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Harem: Project Maid",
  description: "Welcome to Harem: Project Maid. Collect and trade to build your perfect harem. Discover the rarity of each card and rise in the global ranking. ¡Join our community and have fun!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
