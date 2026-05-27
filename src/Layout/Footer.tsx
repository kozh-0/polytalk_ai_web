// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900/80 backdrop-blur-md z-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Центрированные ссылки с иконками */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            href="https://t.me/polytalk_ai_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.06-.18-.07-.05-.17-.03-.25-.01-.11.02-1.87 1.19-5.28 3.49-.5.34-.95.51-1.36.5-.45-.01-1.31-.25-1.95-.46-.78-.25-1.4-.38-1.35-.81.03-.22.33-.45.91-.68 3.57-1.55 5.94-2.57 7.12-3.05 3.39-1.36 4.09-1.6 4.55-1.6.1 0 .33.02.48.15.12.1.15.24.17.35.01.1.01.19.01.24-.01.09-.02.18-.02.27z" />
            </svg>
            PolyTalk AI
          </Link>

          <Link
            href="mailto:dmitry.kozhevnikov.it@gmail.com"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            E-Mail Автора
          </Link>

          <Link
            href="https://linkedin.com/in/dmitry-kozh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
            </svg>
            LinkedIn Автора
          </Link>
        </div>

        {/* Копирайт */}
        <div className="text-center mt-8 text-sm text-gray-300">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </footer>
  );
}
