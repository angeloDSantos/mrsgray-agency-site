import { useState } from "react";

const navItems = ["HOME", "PLAYERS", "ABOUT", "CONTACT"];

const HeroNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-body text-sm tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300 w-fit"
          style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className={`inline-block transition-transform duration-300 ${hoveredItem === item ? 'translate-x-2' : ''}`}>
            {item}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default HeroNav;
