import { setRequestLocale } from "next-intl/server";
import CTA from "@/Components/CTA";
import Landing from "@/Components/Landing";
import Prices from "@/Components/Prices";
import Reviews from "@/Components/Reviews";
import Slider from "@/Components/Slider";

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <section className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
      <Landing />

      <Slider />

      <Reviews />

      <Prices />

      <CTA />
    </section>
  );
}
