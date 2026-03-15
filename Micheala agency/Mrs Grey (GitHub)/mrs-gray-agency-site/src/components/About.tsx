import { useInView } from "@/hooks/useInView";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const missions = [
    {
      title: "Career-first representation",
      description: "Contract negotiation, club placement and long-term planning.",
    },
    {
      title: "Brand & creative development",
      description: "Strategic partnerships, creative direction, and media strategy.",
    },
    {
      title: "Whole-person support",
      description: "Wellbeing, lifestyle guidance and off-pitch opportunities.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            About
          </span>
          <h2 className="editorial-heading mb-8">Who We Are</h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Main Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="body-text mb-8">
              Mrs Gray is a female-focused, boutique football agency redefining the
              landscape of women's football. Founded by former professional Michaela
              Gooden, the agency blends real experience with purpose, representing a
              carefully selected group of athletes.
            </p>
            <p className="body-text">
              As a boutique agency, we thrive on intention, prioritising time, trust,
              and tailored support. We celebrate the woman behind the athlete,
              empowering each client to grow with confidence, express their
              individuality, and leave a legacy both on and off the pitch.
            </p>
          </div>

          {/* Right Column - Mission */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="editorial-subheading mb-8">Our Mission</h3>
            <div className="space-y-8">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="border-l-2 border-gold pl-6 py-2"
                >
                  <h4 className="font-serif text-lg mb-2">{mission.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div
          className={`mt-24 pt-24 border-t border-border transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="text-xs tracking-widest uppercase text-gold mb-4 block">
                Founder
              </span>
              <h3 className="editorial-subheading">Michaela Gooden</h3>
              <p className="text-muted-foreground text-sm mt-2">Lead Intermediary</p>
            </div>
            <div className="lg:col-span-2">
              <p className="body-text">
                Michaela is a former professional footballer who transitioned to
                representation after a career that spanned youth and senior clubs
                across England and a scholarship in the US. Her unique blend of
                on-field experience and creative industry expertise makes her
                especially equipped to represent women who want to craft a lasting
                and authentic career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
