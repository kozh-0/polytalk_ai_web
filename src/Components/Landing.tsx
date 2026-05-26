// components/Hero.jsx
export default function Landing() {
  return (
    <section className="min-h-[calc(100vh-6rem)] w-full flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Главный заголовок */}
        <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl shadow-sm mb-12">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight">
            Часто ли вы говорите{" "}
            <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              на языке, <br /> который учите?
            </span>
            <span className="inline-block animate-pulse ml-2">🤔</span>
          </h1>
        </div>

        <div className="mb-4 flex flex-col md:flex-row items-center justify-center gap-2 text-gray-600 md:text-base lg:text-lg md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <a
              href="https://t.me/polytalk_ai_bot"
              className="text-4xl sm:text-4xl font-bold bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              PolyTalk AI
            </a>
            <span className="block max-md:hidden text-gray-400 text-xs">—</span>
          </div>

          <div className="flex items-center gap-1 flex-wrap justify-center">
            <span className="wrap-break-words text-2xl sm:text-2xl">
              <u>живое общение</u> в Telegram на{" "}
              <span className="font-bold whitespace-nowrap">23 языках!</span>
            </span>
            <span>✨</span>
          </div>
        </div>

        <div className="mb-10 flex justify-centermb-12 text-gray-500 text-base sm:text-base text-center px-4">
          <div className="max-w-[710px] gap-x-3 gap-y-2">
            🇺🇸 EN • 🇫🇷 FR • 🇩🇪 DE • 🇮🇹 IT • 🇪🇸 ES • 🇵🇹 PT • 🇳🇱 NL • 🇸🇪 SV • 🇬🇷 EL • 🇵🇱 PL • 🇨🇿 CS •
            🇷🇺 RU • 🇺🇦 UK • 🇭🇺 HU • 🇹🇷 TR • 🇨🇳 ZH • 🇯🇵 JA • 🇰🇷 KO • 🇮🇳 HI • 🇦🇪 AR • 🇮🇩 ID • 🇷🇴 RO •
            🇻🇳 VI
          </div>
        </div>

        {/* Проблемы vs Решение */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-sm:gap-4 mb-16">
          {/* Проблемы */}
          <div className="flex-1">
            <div className="h-full p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-lg font-medium mb-4 text-center">Проблемы</h3>
              <div className="space-y-3 text-gray-600 text-left">
                <p>❌ Не с кем говорить</p>
                <p>❌ Нужно платить репетиторам</p>
                <p>❌ Не хватает времени</p>
                <p>❌ Страх общения</p>
              </div>
            </div>
          </div>

          {/* Стрелка */}
          <div className="max-md:hidden md:flex items-center text-2xl text-gray-400">→</div>
          <div className="sm:hidden flex justify-center text-2xl text-gray-400">↓</div>

          {/* Решение */}
          <div className="flex-1">
            <div className="h-full p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-lg font-medium mb-4 text-center">Решение</h3>
              <div className="space-y-3 text-left">
                <p>✅ 23 языка 🌐</p>
                <p>✅ Голос + Текст + Перевод 🎤</p>
                <p>✅ Правка ошибок ✏️</p>
                <p>✅ Настройка уровня и голоса ⚙️</p>
                <p>✅ 24/7, без стресса 😌</p>
              </div>
            </div>
          </div>
        </div>

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
          <p>✨ Бесплатный тариф ✨ доступная подписка ✨ 24/7 ✨</p>
        </div>
      </div>
    </section>
  );
}
