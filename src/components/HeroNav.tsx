import { useState } from "react";
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors pointer-events-auto relative z-[110]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
        className={`fixed inset-0 z-[100] bg-zinc-950 transition-all duration-500 md:hidden flex flex-col ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
        style={{ backgroundColor: '#161412' }}
      >
        <div className="flex justify-end p-8">
          {/* Menu button is handled above with z-110 */}
          <div className="w-10 h-10" /> 
        </div>
        
        <nav className="flex flex-col gap-10 items-center justify-center flex-1 w-full h-full pb-24">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`font-display text-4xl italic tracking-wider transition-all duration-500 w-full text-center py-2 ${
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

        <div className="mt-auto text-center pb-12 opacity-40">
          <h2 className="font-body text-xs tracking-[0.3em] text-foreground uppercase">
            Mrs Gray
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeroNav;
