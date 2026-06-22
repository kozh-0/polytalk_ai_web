// components/AutoSlider.jsx
"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

export default function Slider() {
  const t = useTranslations("slider");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<Slide | null>(null);

  const slides: Slide[] = [
    {
      image: "./tgPreview.jpg",
      title: t("1_start"),
      description: t("1_descr"),
    },
    {
      image: "./start.jpg",
      title: t("2_welcome"),
      description: t("2_descr"),
    },
    {
      image: "./botMenu.jpg",
      title: t("3_menu"),
      description: t("3_descr"),
    },
    {
      image: "./engEx.jpg",
      title: t("4_en"),
      description: t("345_descr"),
    },
    {
      image: "./germanEx.jpg",
      title: t("5_de"),
      description: t("345_descr"),
    },
    {
      image: "./ukEx.jpg",
      title: t("6_ukr"),
      description: t("345_descr"),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const openModal = (image: Slide) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="w-full bg-blue-100/80 backdrop-blur-md z-50 py-16">
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="relative w-full shrink-0">
                  <div
                    className="flex justify-center bg-blue-500/80 cursor-pointer"
                    onClick={() => openModal(slide)}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-auto h-[500px] object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
                    <p className="text-white/90">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
