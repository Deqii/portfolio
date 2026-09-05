import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Calistoga } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggleProvider } from "@/components/ThemeToggleProvider";
import { themeInitScript } from "@/lib/theme-script";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tio Prayuda",
  description: "Personal portfolio site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${calistoga.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeToggleProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeToggleProvider>
      </body>
    </html>
  );
}