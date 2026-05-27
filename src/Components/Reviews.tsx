const reviews = [
  {
    text: "Разные голоса и уровни 🔥",
    author: "Константин",
    rating: 5,
    country: "🇩🇪",
  },
  {
    text: "Удобно, что можно выбрать уровень. Прогресс пошел!",
    author: "Тимур",
    rating: 5,
    country: "🇯🇵",
  },
  {
    text: "Класс! Бюджетно и всегда под рукой",
    author: "Марк",
    rating: 5,
    country: "🇨🇿",
  },
  {
    text: "Лучшая инвестиция в свое развитие за 250 звезд",
    author: "Андрей",
    rating: 5,
    country: "🇺🇸",
  },
  {
    text: "Интерактивно, интересно, не скучно!",
    author: "Галина",
    rating: 5,
    country: "🇫🇷",
  },
  {
    text: "Атас! Нашел испанскую девушку❤️",
    author: "Айдар",
    rating: 5,
    country: "🇪🇸",
  },
  {
    text: "Бот исправляет ошибки лучше репетитора",
    author: "Татьяна",
    rating: 5,
    country: "🇬🇧",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-linear-to-r from-gray-50 to-blue-50 max-w-full overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Что говорят ученики</h2>
        <p className="text-gray-500 text-sm">⭐️ 4.9 • 7 отзывов</p>
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
