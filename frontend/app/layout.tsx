import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Web3Provider from "../providers/Web3Provider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CarbonChain Protocol",
  description: "Verifiable Carbon Removal on the Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        <Web3Provider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
