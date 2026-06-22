import { getTranslations } from "next-intl/server";
import { AppleEmoji } from "./AppleEmoji";

export default async function Prices() {
  const t = await getTranslations("pricing");

  const SUBSCRIPTION_PLANS = [
    {
      id: "14-days",
      days: 14,
      stars: 150,
      label: `14 ${t("days")}`,
      buttonText: `⭐️ 150 ⭐️`,
      popular: false,
    },
    {
      id: "1-month",
      days: 30,
      stars: 250,
      label: `1 ${t("month")}`,
      buttonText: "⭐️ 250 ⭐️ -17%",
      popular: true,
    },
    {
      id: "3-months",
      days: 90,
      stars: 600,
      label: `3 ${t("months")}`,
      buttonText: "⭐️ 600 ⭐️ -20%",
      popular: false,
    },
    {
      id: "6-months",
      days: 180,
      stars: 1100,
      label: `6 ${t("months")}`,
      buttonText: "⭐️ 1100 ⭐️ -27%",
      popular: false,
    },
    {
      id: "12-months",
      days: 365,
      stars: 2000,
      label: `12 ${t("months")}`,
      buttonText: "⭐️ 2000 ⭐️ -33%",
      popular: false,
    },
  ];
  return (
    <section className=" min-h-[50vh] w-full flex items-center justify-center bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-sm md:text-base">{t("subtitle")}</p>
        </div>

        {/* Сетка цен */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-xl p-5 text-center transition-all duration-300
                ${
                  plan.popular
                    ? "shadow-xl border-2 border-blue-500 scale-105"
                    : "shadow-md border border-gray-100 hover:shadow-lg hover:scale-105"
                }
              `}
            >
              {/* Popular бейдж */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t("popular")}
                  </span>
                </div>
              )}

              {/* Название */}
              <h3 className="text-lg font-bold mb-2">{plan.label}</h3>

              {/* Цена */}
              <div className="mb-3">
                <span className="text-3xl font-bold text-blue-600">{plan.stars}</span>
                <span className="text-gray-500 text-md"> ⭐️</span>
              </div>

              {/* Экономия */}
              {plan.id !== "14-days" && (
                <div className="text-xs text-green-600 font-semibold mb-2">
                  {t("saving")} {plan.id === "1-month" && "50 ⭐️"}
                  {plan.id === "3-months" && "150 ⭐️"}
                  {plan.id === "6-months" && "400 ⭐️"}
                  {plan.id === "12-months" && "1000 ⭐️"}
                </div>
              )}

              {/* Цена в день/месяц */}
              <div className="text-xs text-gray-400 mb-4">
                ~{Math.round(plan.stars / plan.days)} ⭐️ / {t("day")}
              </div>

              {/* Кнопка */}
              <a
                href="https://t.me/PremiumBot?start=polytalk_ai_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full py-2 px-3 rounded-lg text-sm font-medium transition-all
                  ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }
                `}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Бесплатный тариф */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-50 border border-green-200 rounded-xl p-4 px-6">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-green-600 leading-0">
                <AppleEmoji name="gift" size={26} />
              </span>
              <span className="font-semibold text-gray-700">{t("free.title")}:</span>
              <span className="text-gray-600">{t("free.subtitle")}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">{t("free.feat")}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">24/7</span>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>{t("note")}</p>
          <p>
            {t("buy_stars_tg")} -{" "}
            <a
              href="https://t.me/PremiumBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @PremiumBot
            </a>
          </p>
          <p>
            {t("buy_stars_other")} (
            <a
              href="https://ggsel.net/catalog/telegram-stars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              ggsel.net
            </a>
            ,{" "}
            <a
              href="https://kupikod.com/console/telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              kupikod.com
            </a>
            , ...)
          </p>
          <p className="mt-1 text-gray-400">{t("no_auto_renew")}</p>
        </div>
      </div>
    </section>
  );
}
