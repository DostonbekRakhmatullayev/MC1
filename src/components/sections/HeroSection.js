
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown, Star } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream to-gold/10 pt-20 pb-8">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-meat-red rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-gold rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-meat-red/50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Sausage Image - Mobile optimized */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transform transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-20' : 'scale-0 opacity-0'}`}>
          <div className="w-48 sm:w-80 lg:w-96 h-48 sm:h-80 lg:h-96 bg-gradient-to-r from-meat-red/20 to-gold/20 rounded-full flex items-center justify-center">
            <div className="w-40 sm:w-72 lg:w-80 h-8 sm:h-16 lg:h-20 bg-gradient-to-r from-meat-red/40 to-meat-red/60 rounded-full relative shadow-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-64 lg:w-72 h-6 sm:h-12 lg:h-16 bg-gradient-to-r from-meat-red/60 to-meat-red/80 rounded-full"></div>
              {/* Steam effect - Responsive */}
              <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-1 sm:w-2 h-4 sm:h-8 bg-white/30 rounded-full animate-pulse"></div>
                <div className="w-0.5 sm:w-1 h-3 sm:h-6 bg-white/20 rounded-full ml-2 sm:ml-4 animate-pulse delay-300"></div>
                <div className="w-0.5 sm:w-1 h-2 sm:h-4 bg-white/15 rounded-full -ml-3 sm:-ml-6 animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Mobile optimized */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 mb-4">
            <Star className="w-4 sm:w-6 h-4 sm:h-6 text-gold fill-current" />
            <span className="text-gold font-semibold text-sm sm:text-lg tracking-wide">PREMIUM SIFAT</span>
            <Star className="w-4 sm:w-6 h-4 sm:h-6 text-gold fill-current" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-meat-red mb-4 sm:mb-6 tracking-tight">
            MEAT CITY
          </h1>
          
          <p className="text-lg sm:text-2xl lg:text-3xl text-gold font-semibold mb-2 sm:mb-4 tracking-wide">
            Premium kolbasa shahri
          </p>
          
          <p className="text-base sm:text-xl text-meat-red/80 font-medium mb-6 sm:mb-8">
            Har bir bo'lak — san'at asari!
          </p>
          
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              Biz har bir kolbasani eng sifatli go'sht, tabiiy ziravorlar va asrlar davomida 
              sinovdan o'tgan retseptlar asosida tayyorlaymiz. Bu shunchaki kolbasa emas — 
              bu ta'm dunyosiga sayohat.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="w-full sm:w-auto bg-meat-red hover:bg-meat-red/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Mahsulotlarimizni Ko'ring
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Buyurtma Berish
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator - Hidden on small mobile */}
        <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} hidden sm:block`}>
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-500 text-xs sm:text-sm mb-2">Pastga suring</span>
            <ArrowDown className="w-4 sm:w-6 h-4 sm:h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;