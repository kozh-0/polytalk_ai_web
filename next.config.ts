import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Перфоманс с i18n может падать
};

const withNextIntl = createNextIntlPlugin("./src/i18n/config.ts");
export default withNextIntl(nextConfig);
