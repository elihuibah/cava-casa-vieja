import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

export function HeroPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-page relative w-full h-screen overflow-hidden">
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-stone-900/90 via-stone-900/50 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl px-16 text-stone-50 mt-24">
        <q className="text-24xl md:text-5xl leading-tight italic font-bold">
          Quien sabe degustar no bebe jamás el vino, sino que degusta sus
          secretos
        </q>
        <p className="mt-6 text-xl italic">- Salvador Dalí</p>
        <button className="mt-10 w-fit px-8 py-3 border-2 border-stone-50 bg-stone-800 rounded-full font-semibold tracking-wide hover:bg-stone-50 hover:text-stone-900 transition">
          RESERVA AHORA
        </button>
      </div>
    </section>
  );
}
