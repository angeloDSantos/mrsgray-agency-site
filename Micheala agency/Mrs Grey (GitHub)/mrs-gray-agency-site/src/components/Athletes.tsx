import { useInView } from "@/hooks/useInView";
import { Instagram, ExternalLink } from "lucide-react";

const Athletes = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Athlete data with Instagram post links
  const athletes = [
    { id: 1, name: "Athlete 1", instagramUrl: "https://www.instagram.com/p/DRKfOZCCATv/" },
    { id: 2, name: "Athlete 2", instagramUrl: "https://www.instagram.com/p/DQtf7aDiLOn/" },
    { id: 3, name: "Athlete 3", instagramUrl: "https://www.instagram.com/p/DOtlhwMCPca/" },
    { id: 4, name: "Athlete 4", instagramUrl: "https://www.instagram.com/p/DMcolcVIAsg/" },
    { id: 5, name: "Athlete 5", instagramUrl: "https://www.instagram.com/p/DLaIG8woG8a/" },
  ];

  return (
    <section id="athletes" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Roster
          </span>
          <h2 className="editorial-heading mb-8">Our Athletes</h2>
          <p className="body-text max-w-2xl">
            We represent a focused roster of players. Below are recent highlights
            — image tiles load automatically from the Mrs Gray Instagram feed.
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {athletes.map((athlete, index) => (
            <a
              key={athlete.id}
              href={athlete.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[3/4] bg-muted overflow-hidden transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <Instagram
                  size={32}
                  className="text-muted-foreground/30 group-hover:text-gold transition-colors"
                />
              </div>

              {/* Athlete Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-foreground text-sm font-medium">
                  {athlete.name}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-foreground text-sm font-medium mb-1">
                    View on Instagram
                  </p>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground mx-auto mt-2"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            We update this roster publicly on Instagram — follow{" "}
            <a
              href="https://www.instagram.com/mrsgrayagency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              @mrsgrayagency
            </a>{" "}
            for daily highlights and client news.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Athletes;
