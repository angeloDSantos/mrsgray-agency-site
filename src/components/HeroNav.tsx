import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["HOME", "PLAYERS", "ABOUT", "CONTACT"];

interface HeroNavProps {
  activeSection?: string;
}

const HeroNav = ({ activeSection }: HeroNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        type="button"
        onClick={toggleMenu}
        className="md:hidden -m-2 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center text-foreground/70 hover:text-primary active:text-primary transition-colors pointer-events-auto relative z-[110] touch-manipulation"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col gap-1 pointer-events-auto">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body text-sm tracking-[0.2em] transition-all duration-300 w-fit ${
                isActive || hoveredItem === item 
                  ? 'text-primary translate-x-2' 
                  : 'text-foreground/70'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="inline-block relative">
                {item}
                {isActive && (
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-primary animate-fade-in" />
                )}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-[100] bg-zinc-950 transition-all duration-500 md:hidden flex flex-col ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
        style={{ backgroundColor: '#161412' }}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end p-6 pt-[max(1.5rem,env(safe-area-inset-top,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))]">
          {/* Menu button is handled above with z-110 */}
          <div className="w-10 h-10" /> 
        </div>
        
        <nav className="flex flex-col gap-6 sm:gap-10 items-center justify-center flex-1 w-full h-full pb-[max(6rem,env(safe-area-inset-bottom,0px))]">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`font-display text-3xl min-[400px]:text-4xl italic tracking-wider transition-all duration-500 w-full max-w-[90vw] text-center py-4 min-h-[48px] flex items-center justify-center touch-manipulation ${
                  isActive ? 'text-primary' : 'text-foreground/70'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 0.1 + 0.2}s` : '0s',
                  transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto text-center pb-[max(3rem,env(safe-area-inset-bottom,0px))] opacity-40">
          <h2 className="font-body text-xs tracking-[0.3em] text-foreground uppercase">
            Mrs Gray
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeroNav;
