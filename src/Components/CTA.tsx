import { getTranslations } from "next-intl/server";

export default async function CTA() {
  const t = await getTranslations("cta");
  return (
    <section className="max-w-6xl mx-auto text-center my-16">
      {/* CTA Блок */}
      <div className="px-4">
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl">
          <p className="text-white text-xl md:text-2xl font-medium mb-6">{t("title")}</p>
          <a
            href="https://t.me/polytalk_ai_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 text-lg md:text-xl font-bold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {t("subtitle")}
          </a>
          <a
            href="https://t.me/polytalk_ai_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-100 text-sm mt-4"
          >
            @polytalk_ai_bot
          </a>
        </div>
      </div>
    </section>
  );
}
