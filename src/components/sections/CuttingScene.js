import React, { useEffect, useState } from "react";
import { ChefHat, Sparkles } from "lucide-react";
import myVideo from "src/assets/video.mp4";
const CuttingScene = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsAnimating(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("cutting-scene");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cutting-scene" className="section-padding bg-gradient-to-br from-red-900 to-red-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-meat-red/10 to-gold/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/20 rounded-full">
                <ChefHat className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold">Kesish san'ati</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Biz har bir bo'lakni san'atkorona kesamiz
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                chunki kolbasa ta'mi uning kesilishidan boshlanadi. Har bo'lak — yumshoqlik, 
                hid va mazali tuzilmadan iborat.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Professional pichoqlar bilan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Ideal qalinlikda bo'laklar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gray-300">Maksimal ta'm saqlanadi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Cutting animation */}
          <div
  className={`transform transition-all duration-1000 delay-300 ${
    isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
  }`}
>
  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
    {/* Cutting board */}
    <video
      className="w-full h-80 rounded-2xl object-cover"
      controls
    >
      <source src={myVideo} type="video/mp4" />
      Sizning brauzeringiz video qo‘llab-quvvatlamaydi.
    </video>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CuttingScene;



        // <div className="relative bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-2xl p-8">
     
        //         <div className="relative mb-8">
        //           <div className={`w-full h-16 bg-gradient-to-r from-meat-red to-meat-red/80 rounded-full shadow-xl transition-all duration-1000 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
        //             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        //           </div>
        //         </div>

          
        //         <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isAnimating ? 'rotate-12 translate-y-2' : 'rotate-45 -translate-y-4'}`}>
        //           <div className="w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full shadow-lg">
        //             <div className="absolute top-0 w-3 h-16 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full -left-1"></div>
        //             <div className="absolute bottom-0 w-1 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full"></div>
        //           </div>
        //         </div>

        //         <div className="flex justify-center space-x-2 mt-4">
        //           {[...Array(5)].map((_, index) => (
        //             <div
        //               key={index}
        //               className={`w-8 h-12 bg-gradient-to-r from-meat-red to-meat-red/90 rounded-full shadow-md transform transition-all duration-1000 ${
        //                 isAnimating ? `translate-y-0 opacity-100 delay-${index * 200}` : 'translate-y-4 opacity-0'
        //               }`}
        //             >
        //               <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
        //             </div>
        //           ))}
        //         </div>

             
        //         {isAnimating && (
        //           <div className="absolute inset-0 pointer-events-none">
        //            <Sparkles className="absolute top-1/4 left-1/4 w-4 h-4 text-gold animate-ping" />
        //             <Sparkles className="absolute top-3/4 right-1/4 w-3 h-3 text-gold animate-ping delay-300" />
        //             <Sparkles className="absolute top-1/2 right-1/3 w-2 h-2 text-gold animate-ping delay-700" />
        //           </div>
        //         )}
        //       </div>

          
        //       <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-60">
        //         <div className="flex space-x-4">
        //           {[...Array(3)].map((_, index) => (
        //             <div
        //               key={index}
        //               className={`w-1 h-8 bg-gradient-to-t from-white/30 to-transparent rounded-full transition-all duration-1000 ${
        //                 isAnimating ? 'animate-steam opacity-60' : 'opacity-0'
        //               }`}
        //               style={{ animationDelay: `${index * 300}ms` }}
        //             ></div>
        //           ))}
        //         </div>
        //       </div>