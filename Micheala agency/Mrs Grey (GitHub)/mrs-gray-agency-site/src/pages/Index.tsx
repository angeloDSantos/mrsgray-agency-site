import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Athletes from "@/components/Athletes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mrs Gray — Boutique Agency for Women's Football</title>
        <meta
          name="description"
          content="Mrs Gray is a boutique agency representing elite female footballers. Founded by former footballer Michaela Gooden, we provide career representation, brand development and creative direction for women in sport."
        />
        <meta name="author" content="Mrs Gray Agency" />
        <meta property="og:title" content="Mrs Gray — Boutique Agency for Women's Football" />
        <meta
          property="og:description"
          content="Mrs Gray is a boutique agency representing elite female footballers. Founded by former footballer Michaela Gooden, we provide career representation, brand development and creative direction for women in sport."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mrs Gray — Boutique Agency for Women's Football" />
        <meta
          name="twitter:description"
          content="Boutique agency representing elite female footballers."
        />
        <link rel="canonical" href="https://mrsgray.agency" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Athletes />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
