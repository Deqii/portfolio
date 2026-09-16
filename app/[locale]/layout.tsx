import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Inter, JetBrains_Mono, Calistoga } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggleProvider } from "@/components/ThemeToggleProvider";
import { themeInitScript } from "@/lib/theme-script";

import "../globals.css";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${calistoga.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <NextIntlClientProvider>
          <ThemeToggleProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeToggleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
