// components/Header.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links: { name: string; href: string }[] = [
    // { name: "Главная", href: "/" },
    // { name: "Преимущества", href: "#advantages" },
    // { name: "Контакты", href: "#contacts" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-blue-100/80 backdrop-blur-md z-100 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo и кнопка */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-medium tracking-tight flex items-center"
                onClick={closeMenu}
              >
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover inline-block mr-2"
                />
                PolyTalk AI
              </Link>

              <a
                href="https://t.me/polytalk_ai_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
              >
                {t("start")} ✨
              </a>
            </div>

            {/* Десктопное меню */}
            <div className="hidden sm:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}

              <LanguageSwitcher />
            </div>

            {/* Бургер-кнопка */}
            <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </nav>
        </div>
      </header>

      <BurgerMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} links={links} />
    </>
  );
}

const BurgerButton = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <button onClick={toggleMenu} className="sm:hidden flex flex-col gap-1.5 p-2" aria-label="Меню">
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
          isMenuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
          isMenuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

const BurgerMenu = ({
  isMenuOpen,
  closeMenu,
  links,
}: {
  isMenuOpen: boolean;
  closeMenu: () => void;
  links: { name: string; href: string }[];
}) => {
  return (
    <>
      {/* Мобильное меню */}
      <div
        className={`fixed top-18.25 left-0 right-0 bg-blue-100/95 backdrop-blur-md z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-600 hover:text-black transition-colors duration-200 text-lg"
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Оверлей */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 sm:hidden" onClick={closeMenu} />
      )}
    </>
  );
};
