import { AnomalousMatterHero } from "./ui/anomalous-matter-hero";
import { BlurIn } from "./ui/blur-in";

export default function Hero() {
  return (
    <AnomalousMatterHero>
      <BlurIn
        word="GOUTHAM SRINATH"
        className="text-5xl md:text-7xl font-bold tracking-tight mb-2"
      />
      <p className="text-2xl md:text-3xl text-neutral-300 mb-8">
        Full Stack Developer
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#portfolio"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          Contact Me
        </a>
      </div>
    </AnomalousMatterHero>
  );
}
