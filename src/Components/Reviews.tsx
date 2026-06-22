import { getTranslations } from "next-intl/server";
import { AppleEmoji } from "./AppleEmoji";

export default async function Reviews() {
  const t = await getTranslations("reviews");

  const reviews = [
    {
      author: t("users.kostya"),
      text: t("users.kostya_text"),
      rating: 5,
      country: <AppleEmoji name="de" size={16} />,
    },
    {
      author: t("users.timur"),
      text: t("users.timur_text"),
      rating: 5,
      country: <AppleEmoji name="jp" size={16} />,
    },
    {
      author: t("users.mark"),
      text: t("users.mark_text"),
      rating: 5,
      country: <AppleEmoji name="cz" size={16} />,
    },
    {
      author: t("users.andrey"),
      text: t("users.andrey_text"),
      rating: 5,
      country: <AppleEmoji name="us" size={16} />,
    },
    {
      author: t("users.galina"),
      text: t("users.galina_text"),
      rating: 5,
      country: <AppleEmoji name="fr" size={16} />,
    },
    {
      author: t("users.aidar"),
      text: t("users.aidar_text"),
      rating: 5,
      country: <AppleEmoji name="es" size={16} />,
    },
    {
      author: t("users.tatyana"),
      text: t("users.tatyana_text"),
      rating: 5,
      country: <AppleEmoji name="gb" size={16} />,
    },
  ];

  return (
    <section className="py-16 bg-linear-to-r from-gray-50 to-blue-50 max-w-full overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{t("title")}</h2>
        <p className="text-gray-500 text-sm">{t("rating")}</p>
      </div>

      {/* Бегущая строка */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap animate-marquee">
          {/* Первый набор отзывов */}
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="inline-block bg-white rounded-xl p-4 shadow-sm min-w-[280px] md:min-w-[320px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
              </div>
              <p className="text-gray-700 text-sm whitespace-normal wrap-break-word">
                {review.text}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <span>{review.country}</span>
                <span>{review.author}</span>
              </div>
            </div>
          ))}

          {/* Дублируем для бесконечности */}
          {reviews.map((review, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-block bg-white rounded-xl p-4 shadow-sm min-w-[280px] md:min-w-[320px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
                <span className="text-yellow-400">⭐️</span>
              </div>
              <p className="text-gray-700 text-sm whitespace-normal wrap-break-word">
                {review.text}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                <span>{review.country}</span>
                <span>{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
