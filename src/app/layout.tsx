import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import { Suspense } from "react";
import YandexMetrika from "@/Components/YandexMetrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Primary title (60 characters max for optimal display)
  title: {
    default: "PolyTalk - AI собеседник на 23 языках | Изучение языков онлайн",
    template: "%s | PolyTalk AI собеседник",
  },

  // Description (150-160 characters ideal)
  description:
    "Изучайте 23 языка с AI собеседником PolyTalk. Голосовое общение, перевод, исправление ошибок и рекомендации. Бесплатная альтернатива репетитору и языковым курсам.",

  // Keywords (removed duplicates, added more specific terms)
  keywords: [
    "изучение языков",
    "AI собеседник",
    "репетитор английского",
    "разговорный английский",
    "языковой тренажер",
    "практика речи AI",
    "изучение английского онлайн",
    "французский язык",
    "немецкий язык",
    "испанский язык",
    "итальянский язык",
    "китайский язык",
    "японский язык",
    "украинский язык",
    "голосовой переводчик",
    "замена репетитора",
  ],

  authors: [
    {
      name: "Dmitry Kozhevnikov",
      url: "https://www.linkedin.com/in/dmitry-kozh/",
    },
  ],

  // Open Graph for social sharing
  openGraph: {
    title: "PolyTalk - AI собеседник: Изучайте 23 языка с ИИ",
    description:
      "Практика разговорной речи, голосовое общение и перевод. Замените репетитора AI ассистентом. Бесплатно!",
    url: "https://polytalk-ai-web.vercel.app/",
    siteName: "PolyTalk AI",
    images: [
      {
        url: "/og-image.jpg", // Create a custom OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "PolyTalk - AI собеседник на 23 языках",
      },
    ],
    locale: "ru_RU",
    alternateLocale: ["en_US", "uk_UA"],
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@polytalk", // Add your Twitter handle if you have one
    creator: "@dmitrykozh", // Add creator's handle
    title: "PolyTalk - AI собеседник на 23 языках",
    description:
      "Изучайте языки с AI. Голосовое общение, перевод и рекомендации. Бесплатная альтернатива репетитору.",
    images: ["/og-image.jpg"], // Use the same OG image
  },

  metadataBase: new URL("https://polytalk-ai-web.vercel.app/"),

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional SEO improvements
  alternates: {
    canonical: "https://polytalk-ai-web.vercel.app/",
    languages: {
      ru: "/",
      en: "/en",
      uk: "/uk",
    },
  },

  // Verification for search consoles
  verification: {
    google: "your-google-verification-code", // Add when you have it
    yandex: "your-yandex-verification-code", // Add for Yandex (important for Russian audience)
  },

  // App links and other meta
  appleWebApp: {
    title: "PolyTalk AI",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
  },

  // Category and classification
  category: "education",
  classification: "Language Learning, AI Education",

  // Other important meta tags
  other: {
    "yandex-verification": "your-yandex-verification-code", // Alternative Yandex format
    "google-site-verification": "your-google-verification-code",
    author: "Dmitry Kozhevnikov",
    copyright: "PolyTalk",
    "revisit-after": "7 days",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {/* <meta name="google-site-verification" content="LiScndLoaI3WcOC5g9ze5l1wxxbMHfddde7Di_82928" /> */}
      {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
      <body className="min-h-full flex flex-col">
        {process.env.NODE_ENV === "production" && (
          <Suspense fallback={null}>
            <YandexMetrika />
          </Suspense>
        )}
        <Header />
        <main className="grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
