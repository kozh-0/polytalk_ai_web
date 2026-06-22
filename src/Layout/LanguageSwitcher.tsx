// components/LanguageSwitcher.tsx
"use client";

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
        className={`px-3 py-1 rounded ${
          currentLocale === "ru" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        🇷🇺 RU
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded ${
          currentLocale === "en" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
