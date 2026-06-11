// app/components/AppleEmoji.tsx
"use client";
import { Emoji, EmojiStyle } from "emoji-picker-react";

interface AppleEmojiProps {
  name: keyof typeof emojiList; // Type as keys of the emojiList object
  size?: number;
}

const emojiList = {
  thinking: "1f914",
  fire: "1f525",
  check: "2705",
  globe: "1f310",
  mic: "1f3a4",
  pencil: "270f-fe0f", // ✅ Fixed: Added '-fe0f' suffix
  gear: "2699-fe0f", // ✅ Fixed: Added '-fe0f' suffix
  relieved: "1f60c",
  star: "2b50",
  gift: "1f381",
  sparkles: "2728",
  cross: "274c",
  // Flags
  us: "1f1fa-1f1f8",
  fr: "1f1eb-1f1f7",
  de: "1f1e9-1f1ea",
  it: "1f1ee-1f1f9",
  es: "1f1ea-1f1f8",
  pt: "1f1f5-1f1f9",
  nl: "1f1f3-1f1f1",
  se: "1f1f8-1f1ea",
  gr: "1f1ec-1f1f7",
  pl: "1f1f5-1f1f1",
  cz: "1f1e8-1f1ff",
  ru: "1f1f7-1f1fa",
  ua: "1f1fa-1f1e6",
  hu: "1f1ed-1f1fa",
  tr: "1f1f9-1f1f7",
  cn: "1f1e8-1f1f3",
  jp: "1f1ef-1f1f5",
  kr: "1f1f0-1f1f7",
  in: "1f1ee-1f1f3",
  ae: "1f1e6-1f1ea",
  id: "1f1ee-1f1e9",
  ro: "1f1f7-1f1f4",
  vn: "1f1fb-1f1f3",
  gb: "1f1ec-1f1e7",
} as const; // 'as const' makes the object readonly and infers literal types

export const AppleEmoji = ({ name, size = 18 }: AppleEmojiProps) => {
  return (
    <span style={{ display: "inline-block" }}>
      <Emoji unified={emojiList[name]} size={size} emojiStyle={EmojiStyle.APPLE} />
    </span>
  );
};
