import mrsGrayScript from "@/assets/mrs-gray-script.png";
import HeroNav from "@/components/HeroNav";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Script font background - centered and large */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={mrsGrayScript}
          alt=""
          className="w-[80%] max-w-[1200px] select-none mix-blend-lighten"
          draggable={false}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-12">
        {/* Top section */}
        <header className="flex items-start justify-between">
          {/* Left nav */}
          <div className="animate-slide-in-left">
            <HeroNav />
          </div>

          {/* Center/Right - Agency name */}
          <div className="text-right" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-body text-xs md:text-sm tracking-[0.3em] text-foreground/80 uppercase">
              Mrs Gray
            </h2>
            <p className="font-body text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Women's Football Agency
            </p>
          </div>

          {/* Year */}
          <div className="hidden md:block font-body text-sm text-foreground/60 tracking-wider">
            © 2025
          </div>
        </header>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom section */}
        <footer className="flex items-end justify-between gap-8">
          {/* Tagline */}
          <div
            className="max-w-md animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="font-display text-xl md:text-2xl lg:text-3xl italic leading-snug text-foreground/80">
              Elevating women's football,
              <br />
              one player at a time
            </p>
          </div>

          {/* CTA Button */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#players"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300 group"
            >
              <span className="text-lg group-hover:rotate-90 transition-transform duration-300">✦</span>
              Our Players
            </a>
          </div>

          {/* Bottom right links */}
          <div className="hidden lg:flex items-center gap-8">
            {["Instagram", "Twitter", "LinkedIn"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
