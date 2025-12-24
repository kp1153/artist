 "use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {[...Array(totalSlides)].map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/${index + 1}.jpg`}
            alt={`Painting ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
          Dr. Uttama Dixit
        </h1>
        <p className="text-2xl md:text-3xl text-amber-400 mb-2 font-serif italic">
          M.F.A., Ph.D., N.E.T.
        </p>
        <p className="text-xl md:text-2xl text-white mb-8">
          Professor & Dean, Faculty of Visual Arts, BHU
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 text-lg text-white/90">
          <span>23+ Years Teaching</span>
          <span className="hidden md:inline">•</span>
          <span>45+ Group Exhibitions</span>
          <span className="hidden md:inline">•</span>
          <span>12 PhDs Awarded</span>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? "bg-amber-400" : "bg-white/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}