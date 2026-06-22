// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/config";

export default createMiddleware(routing);

export const config = {
  // Матчер определяет, на каких страницах будет срабатывать проверка языка.
  // Этот шаблон пропускает статические файлы (картинки, фавиконки), API и служебные файлы Next.js.
  matcher: [
    // Включаем корневой роут для редиректа
    "/",
    // Включаем роуты для поддерживаемых локалей
    "/(ru|en)/:path*",
    // Стандартный паттерн для пропуска папок _next, api и расширений файлов
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
