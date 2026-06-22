import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import { Suspense } from "react";
import YandexMetrika from "@/Components/YandexMetrika";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Генерируем метаданные динамически на основе текущей локали
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Контент на русском языке
  const ruSEO = {
    title: "PolyTalk - AI собеседник на 23 языках | Изучение языков онлайн",
    template: "%s | PolyTalk AI собеседник",
    description:
      "Изучайте 23 языка с AI собеседником PolyTalk. Голосовое общение, перевод, исправление ошибок и рекомендации. Бесплатная альтернатива репетитору.",
    ogTitle: "PolyTalk - AI собеседник: Изучайте 23 языка с ИИ",
    ogDescription:
      "Практика разговорной речи, голосовое общение и перевод. Замените репетитора AI ассистентом. Бесплатно!",
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
  };

  // Контент на английском языке
  const enSEO = {
    title: "PolyTalk - AI Language Partner in 23 Languages | Learn Languages Online",
    template: "%s | PolyTalk AI Partner",
    description:
      "Learn 23 languages with PolyTalk AI speaking partner. Voice chat, translation, error correction, and smart tips. A free alternative to tutors and language courses.",
    ogTitle: "PolyTalk - AI Speaking Partner: Learn 23 Languages with AI",
    ogDescription:
      "Speaking practice, voice chat, and real-time translation. Replace your tutor with an AI assistant for free!",
    keywords: [
      "language learning",
      "AI speaking partner",
      "English tutor",
      "spoken English",
      "language trainer",
      "AI speech practice",
      "learn English online",
      "French language",
      "German language",
      "Spanish language",
      "Italian language",
      "Chinese language",
      "Japanese language",
      "voice translator",
      "tutor alternative",
    ],
  };

  // Выбираем нужный пакет данных
  const seo = locale === "en" ? enSEO : ruSEO;
  const currentOgLocale = locale === "en" ? "en_US" : "ru_RU";
  const alternateOgLocale = locale === "en" ? "ru_RU" : "en_US";

  return {
    metadataBase: new URL("https://polytalk-ai-web.vercel.app/"),
    title: {
      default: seo.title,
      template: seo.template,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Dmitry Kozhevnikov", url: "https://www.linkedin.com/in/dmitry-kozh/" }],

    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: `https://vercel.app{pagePath}`,
      siteName: "PolyTalk AI",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: currentOgLocale,
      alternateLocale: [alternateOgLocale],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      site: "@polytalk",
      creator: "@dmitrykozh",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.jpg"],
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

    // Важнейшая часть многоязычного SEO: теги hreflang
    alternates: {
      canonical: `https://vercel.app{pagePath}`,
      languages: {
        ru: "https://polytalk-ai-web.vercel.app/",
        en: "https://vercel.app",
        "x-default": "https://polytalk-ai-web.vercel.app/", // Главная страница для всех остальных регионов
      },
    },

    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },

    appleWebApp: {
      title: "PolyTalk AI",
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: false,
    },

    category: "education",
    classification: "Language Learning, AI Education",

    other: {
      "yandex-verification": "your-yandex-verification-code",
      "google-site-verification": "your-google-verification-code",
      author: "Dmitry Kozhevnikov",
      copyright: "PolyTalk",
      "revisit-after": "7 days",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {process.env.NODE_ENV === "production" && (
            <Suspense fallback={null}>
              <YandexMetrika />
            </Suspense>
          )}
          <Header />
          <main className="grow pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
