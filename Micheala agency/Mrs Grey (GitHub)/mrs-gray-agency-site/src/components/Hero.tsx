import { useEffect, useState } from "react";
import SignatureLogo from "./SignatureLogo";

const Hero = () => {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTagline(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Signature Logo */}
        <div className="mb-12 md:mb-16">
          <SignatureLogo />
        </div>

        {/* Tagline - fades in after logo animation */}
        <div
          className={`transition-all duration-1000 ease-out ${
            showTagline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-normal tracking-tight mb-6 leading-relaxed text-foreground/90">
            Representing the next generation of women's football talent.
          </p>
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Founded by former professional Michaela Gooden — boutique, personal
            representation for players who value craft, confidence and creativity.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-1000 ${
            showTagline ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-sans">Discover</span>
            <div className="w-px h-10 md:h-12 bg-border group-hover:bg-gold transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
