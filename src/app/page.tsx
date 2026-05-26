import Landing from "@/Components/Landing";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <section className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
      <Landing />

      <Slider />
    </section>
  );
}
