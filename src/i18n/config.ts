// i18n/config.ts
import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { createNavigation } from "next-intl/navigation";

// 1. Роутинг
export const routing = defineRouting({
  locales: ["ru", "en"],
  defaultLocale: "ru",
  localePrefix: "as-needed",
});

// 2. Навигация (Link, useRouter и т.д.)
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

// 3. Запрос (загрузка переводов)
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@/i18n/${locale}.json`)).default,
  };
});
