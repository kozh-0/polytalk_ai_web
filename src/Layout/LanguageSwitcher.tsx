// components/LanguageSwitcher.tsx
"use client";

import { AppleEmoji } from "@/Components/AppleEmoji";
import { usePathname, useRouter } from "@/i18n/config";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("ru")}
        className={`flex gap-1 px-3 py-1 rounded ${
          currentLocale === "ru" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <AppleEmoji name="ru" size={24} /> RU
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`flex gap-1 px-3 py-1 rounded ${
          currentLocale === "en" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <AppleEmoji name="us" size={24} /> EN
      </button>
    </div>
  );
}
