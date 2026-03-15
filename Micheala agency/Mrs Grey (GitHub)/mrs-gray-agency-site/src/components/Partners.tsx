import { useInView } from "@/hooks/useInView";
import { Instagram } from "lucide-react";

const Partners = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  // Placeholder partner data - these would be replaced with actual verified partners
  const featuredPartners = [
    {
      name: "Featured Club",
      description: "Featured on our Instagram feed",
      type: "featured",
    },
    {
      name: "Sports Brand",
      description: "Featured collaboration",
      type: "featured",
    },
    {
      name: "Media Partner",
      description: "Featured on our feed",
      type: "featured",
    },
    {
      name: "Training Partner",
      description: "Featured collaboration",
      type: "featured",
    },
  ];

  return (
    <section
      id="partners"
      className="section-padding bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Collaborations
          </span>
          <h2 className="editorial-heading mb-8">Partners & Collaborators</h2>
          <p className="body-text max-w-2xl">
            Mrs Gray collaborates with clubs, brands and creative partners that
            operate at the intersection of sport and culture. Logos below are
            featured on our Instagram feed and are used as editorial examples.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className={`bg-background p-8 flex flex-col items-center justify-center text-center border border-border transition-all duration-700 hover:border-gold/50 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl text-muted-foreground">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                {partner.type === "featured" ? "Featured on our feed" : "Partner"}
              </p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://www.instagram.com/mrsgrayagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Instagram size={20} />
            <span className="text-sm tracking-wide">
              Follow @mrsgrayagency for daily updates
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
