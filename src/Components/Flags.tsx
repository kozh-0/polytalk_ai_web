"use client";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export const Flags = () => {
  // Flag emojis with their unified codes
  const flags = [
    { code: "🇺🇸", unified: "1f1fa-1f1f8", label: "EN" }, // US
    { code: "🇫🇷", unified: "1f1eb-1f1f7", label: "FR" }, // France
    { code: "🇩🇪", unified: "1f1e9-1f1ea", label: "DE" }, // Germany
    { code: "🇮🇹", unified: "1f1ee-1f1f9", label: "IT" }, // Italy
    { code: "🇪🇸", unified: "1f1ea-1f1f8", label: "ES" }, // Spain
    { code: "🇵🇹", unified: "1f1f5-1f1f9", label: "PT" }, // Portugal
    { code: "🇳🇱", unified: "1f1f3-1f1f1", label: "NL" }, // Netherlands
    { code: "🇸🇪", unified: "1f1f8-1f1ea", label: "SV" }, // Sweden
    { code: "🇬🇷", unified: "1f1ec-1f1f7", label: "EL" }, // Greece
    { code: "🇵🇱", unified: "1f1f5-1f1f1", label: "PL" }, // Poland
    { code: "🇨🇿", unified: "1f1e8-1f1ff", label: "CS" }, // Czech
    { code: "🇷🇺", unified: "1f1f7-1f1fa", label: "RU" }, // Russia
    { code: "🇺🇦", unified: "1f1fa-1f1e6", label: "UK" }, // Ukraine
    { code: "🇭🇺", unified: "1f1ed-1f1fa", label: "HU" }, // Hungary
    { code: "🇹🇷", unified: "1f1f9-1f1f7", label: "TR" }, // Turkey
    { code: "🇨🇳", unified: "1f1e8-1f1f3", label: "ZH" }, // China
    { code: "🇯🇵", unified: "1f1ef-1f1f5", label: "JA" }, // Japan
    { code: "🇰🇷", unified: "1f1f0-1f1f7", label: "KO" }, // Korea
    { code: "🇮🇳", unified: "1f1ee-1f1f3", label: "HI" }, // India
    { code: "🇦🇪", unified: "1f1e6-1f1ea", label: "AR" }, // UAE
    { code: "🇮🇩", unified: "1f1ee-1f1e9", label: "ID" }, // Indonesia
    { code: "🇷🇴", unified: "1f1f7-1f1f4", label: "RO" }, // Romania
    { code: "🇻🇳", unified: "1f1fb-1f1f3", label: "VI" }, // Vietnam
  ];

  return (
    <div className="text-gray-500 text-base sm:text-base px-4 flex justify-center">
      <div className="max-w-[730px] flex justify-center flex-wrap">
        {flags.map((flag, index) => (
          <div key={index} className="flex items-center gap-x-1">
            <Emoji unified={flag.unified} size={18} emojiStyle={EmojiStyle.APPLE} />
            <span>{flag.label}</span>
            <span className="mx-1">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
