import choriza from "src/assets/choriza.jpg";
import msdoktor from "src/assets/msdoktor.jpg";
import msextira from "src/assets/msextira.jpg";
import msservilat from "src/assets/msservilat.jpg";
import mstiliyachiy from "src/assets/mstiliyachiy.jpg";
import doktor from "src/assets/doktor 2.jpg";
import ezozdlyazaqv from "src/assets/ezozdlyazaqv.jpg";


import React, { useEffect, useState } from "react";
import { ChefHat, Heart, Award } from "lucide-react";

const SausageShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("sausage-showcase");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sausage-showcase" className="section-padding bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-meat-red rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gold rounded-full transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Sausage visual with multiple images */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative">
              {/* Main sausage display with real images */}
              <div className="bg-gradient-to-br from-meat-red/10 to-gold/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
                <div className="relative">
                  {/* Featured sausage image */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-xl relative mb-6">
                    <img 
                      src={choriza}
                      alt="Premium Kolbasa"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="absolute top-4 left-4 bg-meat-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      Premium
                    </div>
                  </div>
                  
                  {/* Additional sausage images grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={ezozdlyazaqv}
                        alt="Kolbasa 2"
                        className="w-full h-24 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={doktor}
                        alt="Kolbasa 3"
                        className="w-full h-24 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Steam effects */}
                  <div className="absolute -top-4 sm:-top-8 left-1/4 opacity-60">
                    <div className="w-1 sm:w-1 h-8 sm:h-12 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-steam"></div>
                  </div>
                  <div className="absolute -top-3 sm:-top-6 left-1/2 opacity-40 delay-500">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-t from-white/30 to-transparent rounded-full animate-steam"></div>
                  </div>
                  <div className="absolute -top-6 sm:-top-10 right-1/3 opacity-50 delay-1000">
                    <div className="w-1 h-10 sm:h-14 bg-gradient-to-t from-white/35 to-transparent rounded-full animate-steam"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg animate-float">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-meat-red rounded-full flex items-center justify-center shadow-lg animate-float delay-500">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full">
                <ChefHat className="w-5 h-5 text-meat-red" />
                <span className="text-meat-red font-semibold">Harakatdagi Lazzat</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-meat-red leading-tight">
                Meat City — bu lazzatning shahri
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bizning kolbasalarimiz faqat yangi go'shtdan, tabiiy ziravorlardan va muhabbat bilan yaratiladi. 
                Har bir kolbasa — sizning dasturxoningiz uchun maxsus hikoya.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-meat-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <h4 className="font-semibold text-meat-red mb-1">100% Tabiiy</h4>
                  <p className="text-sm text-gray-600">Eng sifatli go'sht</p>
                </div>

                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h4 className="font-semibold text-meat-red mb-1">Tabiiy Ziravorlar</h4>
                  <p className="text-sm text-gray-600">Maxsus retseptlar</p>
                </div>

                <div className="text-center p-4 bg-white rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-meat-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                  <h4 className="font-semibold text-meat-red mb-1">Usta Qo'llari</h4>
                  <p className="text-sm text-gray-600">San'atkorona yaratilgan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SausageShowcase;