import { useEffect, useState } from "react";
import mrsGrayLogo from "@/assets/mrs-gray-logo.png";

const SignatureLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="text-center">
        {/* Main logo image */}
        <img
          src={mrsGrayLogo}
          alt="Mrs Gray"
          className={`mx-auto h-40 md:h-56 lg:h-72 w-auto transition-all ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "1.5s",
          }}
        />
        
        {/* Decorative underline */}
        <div className="flex justify-center mt-6">
          <div
            className={`h-px bg-foreground/20 transition-all ease-out ${
              isVisible ? "w-48 md:w-64" : "w-0"
            }`}
            style={{
              transitionDuration: "1s",
              transitionDelay: "0.8s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignatureLogo;
