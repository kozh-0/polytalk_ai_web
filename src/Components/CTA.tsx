import { AppleEmoji } from "./AppleEmoji";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto text-center my-12">
      {/* CTA Блок */}
      <div className="mt-8">
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl p-8 shadow-xl">
          <p className="text-white text-xl md:text-2xl font-medium mb-6">
            Готовы заговорить на новом языке?
          </p>
          <a
            href="https://t.me/polytalk_ai_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 text-lg md:text-xl font-bold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Просто говорите - Бот научит
            <span className="text-xl animate-pulse">→</span>
          </a>
          <p className="text-blue-100 text-sm mt-4">@polytalk_ai_bot</p>
        </div>
      </div>

      {/* Дополнительный триггер */}
      <div className="mt-12 text-sm text-gray-400">
        <p className="inline-flex items-center gap-2">
          <AppleEmoji name="sparkles" size={16} /> Бесплатный тариф{" "}
          <AppleEmoji name="sparkles" size={16} /> Доступная подписка{" "}
          <AppleEmoji name="sparkles" size={16} /> 24/7 <AppleEmoji name="sparkles" size={16} />
        </p>
      </div>
    </section>
  );
}
