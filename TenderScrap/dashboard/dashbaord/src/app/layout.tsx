import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import UpNavBar from "../components/Navbar/Navbar";
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarLabel,
  SidebarItem,
} from "../components/Navbar/sidebar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavish DEALS",
  description: "Get the best deals on your favorite products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-10xl mx-auto">
          <UpNavBar />
          <Sidebar>
            <SidebarHeader>
              <div className="text-lg font-bold">Alexander Pierce</div>
              <div className="text-green-400 text-sm">● Online</div>
            </SidebarHeader>

            <SidebarBody>
              <SidebarLabel>MAIN NAVIGATION</SidebarLabel>

              <SidebarItem label="Dashboard" icon={<span>📊</span>}>
                <SidebarItem label="Dashboard v1" href="/dashboard/v1" />
                <SidebarItem label="Dashboard v2" href="/dashboard/v2" />
              </SidebarItem>

              <SidebarItem
                label="Layout Options"
                icon={<span>🧩</span>}
                badge={
                  <span className="text-xs bg-blue-500 px-2 py-0.5 rounded-full">
                    4
                  </span>
                }
              />
              <SidebarItem
                label="Widgets"
                icon={<span>🧱</span>}
                badge={
                  <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">
                    new
                  </span>
                }
              />
              <SidebarItem label="Charts" icon={<span>📈</span>} />
              <SidebarItem label="UI Elements" icon={<span>🧰</span>} />
              <SidebarItem label="Forms" icon={<span>📝</span>} />
              <SidebarItem label="Tables" icon={<span>📋</span>} />

              <SidebarLabel>LABELS</SidebarLabel>
              <SidebarItem
                label="Important"
                icon={<span className="text-red-500">●</span>}
              />
              <SidebarItem
                label="Warning"
                icon={<span className="text-yellow-500">●</span>}
              />
              <SidebarItem
                label="Information"
                icon={<span className="text-blue-500">●</span>}
              />
            </SidebarBody>
          </Sidebar>
        </main>
        {children}
      </body>
    </html>
  );
}
