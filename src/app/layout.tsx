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
  title: `PolyTalk - AI собеседник на 23 языках. Изучение языков, замена репетитора, живое общение`,
  description:
    "AI собеседник, практика общения на 23 языках, Голос + текст + перевод, Правка ошибок + рекомендации, Изучение языков, Замена репетитора",
  // TODO: add keywords
  keywords: `английский язык, немецкий язык, французский язык, русский язык, украинский, 
итальянский язык, испанский язык, китайский язык, японский язык, курсы английского
общение классы языков, репетитор, изучение языков, ии бесплатно`,
  authors: [
    {
      name: "Dmitry Kozhevnikov",
      url: "https://www.linkedin.com/in/dmitry-kozh/",
    },
  ],
  openGraph: {
    title:
      "PolyTalk - AI собеседник на 23 языках. Изучение языков · замена репетитора · живое общение",
    description:
      "AI собеседник, Практика общения на 23 языках, Голос + текст + перевод, Правка ошибок + рекомендации, Изучение языков, Замена репетитора",
    url: "https://polytalk-ai-web.vercel.app/",
    siteName: "Wise HR",
    images: [{ url: "/favicon.ico", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  metadataBase: new URL("https://polytalk-ai-web.vercel.app/"),
  twitter: {
    card: "summary_large_image",
    title:
      "PolyTalk - AI собеседник на 23 языках. Изучение языков · замена репетитора · живое общение",
    description:
      "AI собеседник, Живое общение на 23 языках, Голос + текст + перевод, Правка ошибок + рекомендации, Изучение языков, Замена репетитора",
    images: ["/favicon.ico"],
  },

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
