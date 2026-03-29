import { useState, useEffect } from "react";
import HeroNav from "@/components/HeroNav";
import PlayerCard from "@/components/PlayerCard";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import mrsGrayScript from "@/assets/mrs-gray-script.png";

const players = [
  {
    name: "Drew Spence",
    club: "Tottenham Hotspur",
    bio: "An elite midfielder with clinical precision. London Derby Player of the Match and a cornerstone of the Spurs midfield.",
    image: "/players/drew-spence.jpg"
  },
  {
    name: "Emily Syme",
    club: "Bristol City",
    bio: "Captain Syme leading with vision and tenacity. A technical playmaker whose influence defines the game.",
    image: "/players/emily-syme.jpg"
  },
  {
    name: "Tegan McGowan",
    club: "Charlton Athletic",
    bio: "A dynamic force on the pitch, known for explosive pace and tactical intelligence. A rising star in women's football.",
    image: "/players/tegan-mcgowan.jpg"
  },
  {
    name: "Megan Walsh",
    club: "West Ham United",
    bio: "Reliable, agile, and commanding. A top-tier goalkeeper whose presence provides ultimate security between the posts.",
    image: "/players/megan-walsh.jpg"
  },
  {
    name: "Scarlett Williams",
    club: "Southampton FC",
    bio: "A defensive powerhouse with incredible reading of the game. Essential to the Southampton backline.",
    image: "/players/scarlett-williams.jpg"
  },
  {
    name: "Clara Bellahall",
    club: "Cheltenham Town / Jamaica",
    bio: "Representing with pride on the national and club stage. A versatile goalscorer with a clinical finishing touch.",
    image: "/players/clara-bellahall.jpg"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle header background - using a small threshold for mobile
      setIsScrolled(window.scrollY > 10);

      const sections = ["home", "players", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground scroll-smooth overflow-x-hidden">
      {/* Background Logo Overlay (Fixed) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
        <img
          src={mrsGrayScript}
          alt=""
          className="w-[120%] md:w-[80%] max-w-[1200px] select-none"
        />
      </div>

      {/* Navigation - Fixed on desktop */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a1816]/90 backdrop-blur-md border-b border-border/50 py-4 md:py-8 shadow-lg' 
            : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <div className="flex justify-between items-center md:items-start max-w-[1440px] mx-auto w-full px-6 md:px-12">
          <div className="animate-slide-in-left">
            <HeroNav activeSection={activeSection} />
          </div>
          
          <div className="text-right">
            <h2 className="font-body text-[10px] md:text-sm tracking-[0.3em] text-foreground/80 uppercase">
              Mrs Gray
            </h2>
            <p className="font-body text-[8px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase hidden sm:block">
              Women's Football Agency
            </p>
          </div>
        </div>
      </header>

      {/* Hidden SEO Content - Harsh SEO for London Women's Football Agency */}
      <div className="sr-only" aria-hidden="true">
        <h1>Mrs Gray - London Women's Football Agency</h1>
        <p>
          Mrs Gray is the premier women's football agency in London, offering elite player representation and football management. 
          As a leading London football agency, we specialize in women's football and Mrs Gray football services across all London boroughs.
        </p>
        <p>
          Our agency serves players in Camden, Greenwich, Hackney, Hammersmith and Fulham, Islington, Kensington and Chelsea, Lambeth, 
          Lewisham, Southwark, Tower Hamlets, Wandsworth, Westminster, Barking and Dagenham, Barnet, Bexley, Brent, Bromley, Croydon, 
          Ealing, Enfield, Haringey, Harrow, Havering, Hillingdon, Hounslow, Kingston upon Thames, Merton, Newham, Redbridge, 
          Richmond upon Thames, Sutton, and Waltham Forest.
        </p>
        <p>
          London women's football agency, Mrs Gray football, London football agency, female football intermediary London, 
          pro women's soccer representation London, women's football recruitment London.
        </p>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Restored to original layout */}
        <section id="home" className="scroll-mt-28 md:scroll-mt-36 min-h-screen flex flex-col justify-between p-6 md:p-12">
          {/* Spacer for fixed header */}
          <div className="h-24 md:h-32" />
          
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl space-y-6 md:space-y-8 animate-fade-in px-4 md:px-12">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl italic leading-tight text-foreground/90">
                Elevating women's football,
                <br />
                <span className="text-primary/80">one player at a time</span>
              </h1>
              <p className="font-body text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Representing the next generation of women's football talent with intention, trust, and tailored support.
              </p>
            </div>
          </div>

          <footer className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 px-4 md:px-12 pb-12 md:pb-4">
            <div className="animate-fade-in w-full sm:w-auto flex justify-center sm:justify-start" style={{ animationDelay: "0.6s" }}>
              <a 
                href="#players"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-80 md:w-auto px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase hover:bg-zinc-800 transition-colors duration-300 group"
              >
                <span className="text-lg group-hover:rotate-90 transition-transform duration-300">✦</span>
                Our Players
              </a>
            </div>

            <div className="flex items-center gap-8 md:gap-8 animate-fade-in w-full sm:w-auto justify-center sm:justify-end" style={{ animationDelay: "0.8s" }}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/mrsgrayagency/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/mrs-gray-sports-agency/" },
                { label: "Twitter", href: "https://x.com/mrsgrayagency" }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[10px] md:text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </footer>
        </section>

        {/* Players Section */}
        <section id="players" className="scroll-mt-28 md:scroll-mt-36 py-16 md:py-24 px-6 md:px-24 bg-secondary/30 relative">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            <div className="space-y-4 px-4 md:px-0">
              <h2 className="font-display text-3xl md:text-4xl italic text-primary">Our Players</h2>
              <div className="h-px w-24 bg-primary/30" />
              <p className="md:hidden font-body text-xs tracking-[0.12em] text-muted-foreground uppercase">
                Tap a player to read their bio
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
              {players.map((player, index) => (
                <div 
                  key={player.name} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PlayerCard {...player} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-28 md:scroll-mt-36 py-16 md:py-24 px-6 md:px-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-8 px-4 md:px-0">
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl italic text-primary">Who We Are</h2>
                <div className="h-px w-24 bg-primary/30" />
              </div>
              <div className="font-body text-base md:text-lg leading-relaxed text-muted-foreground space-y-6">
                <p>
                  Mrs Gray is a female-focused, boutique football agency redefining the landscape of women's football. 
                  Founded by former professional Michaela Gooden, the agency blends real experience with purpose, 
                  representing a carefully selected group of athletes.
                </p>
                <p>
                  As a boutique agency, we thrive on intention, prioritising time, trust, and tailored support. 
                  We celebrate the woman behind the athlete, empowering each client to grow with confidence, 
                  express their individuality, and leave a legacy both on and off the pitch.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-8 md:p-12 space-y-8 border border-border/50 mx-4 md:mx-0">
              <h3 className="font-display text-xl md:text-2xl italic">Our Mission</h3>
              <ul className="space-y-6 md:space-y-8">
                {[
                  { title: "Career-first representation", desc: "Contract negotiation, club placement and long-term planning." },
                  { title: "Brand & creative development", desc: "Strategic partnerships, creative direction, and media strategy." },
                  { title: "Whole-person support", desc: "Wellbeing, lifestyle guidance and off-pitch opportunities." }
                ].map((item, i) => (
                  <li key={i} className="space-y-2">
                    <h4 className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary/80">{item.title}</h4>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Founder Section */}
          <div className="max-w-5xl mx-auto mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center px-4 md:px-0">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden grayscale brightness-90 transition-all duration-700 hover:grayscale-0">
               <img 
                 src="/michaela_enhanced.png" 
                 alt="Michaela Gooden" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl italic">Michaela Gooden</h3>
              <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/60 mb-8">Lead Intermediary & Founder</p>
              <div className="space-y-4 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Michaela is a former professional footballer who transitioned to representation after a career 
                  that spanned youth and senior clubs across England and a scholarship in the US. 
                </p>
                <p>
                  Her unique blend of on-field experience and creative industry expertise makes her especially 
                  equipped to represent women who want to craft a lasting and authentic career.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-28 md:scroll-mt-36 py-16 md:py-24 px-6 md:px-24 bg-card">
          <div className="max-w-5xl mx-auto text-center space-y-12 px-4 md:px-0">
            <div className="space-y-4">
              <h2 className="font-display text-3xl md:text-4xl italic text-primary">Inquire</h2>
              <div className="h-px w-24 bg-primary/30 mx-auto" />
            </div>
            
            <p className="font-body text-xl md:text-3xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              For representation or partnership inquiries, please reach out to our team.
            </p>

            <a 
              href="mailto:info@mrsgray.agency" 
              className="inline-flex items-center gap-4 text-lg md:text-2xl font-display italic hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              info@mrsgray.agency
            </a>

            <div className="flex justify-center gap-8 md:gap-12 pt-8 md:pt-12">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mrsgrayagency/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/mrs-gray-sports-agency/" },
                { icon: Twitter, label: "Twitter", href: "https://x.com/mrsgrayagency" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary transition-colors" />
                  <span className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12 px-6 border-t border-border/50 text-center">
        <p className="font-body text-[8px] md:text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          © 2026 Mrs Gray Agency. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
