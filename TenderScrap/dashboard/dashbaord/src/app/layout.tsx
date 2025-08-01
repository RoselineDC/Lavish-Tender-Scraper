// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import UpNavBar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
import Page from "./page";

export const metadata: Metadata = {
  title: "TENDER SCAPPER",
  description: "Get the best deals on your favorite products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="max-w-10xl mx-auto flex flex-col min-h-screen">  
        
          {children}         
      
        </main>
      </body>
    </html>
  );
}
