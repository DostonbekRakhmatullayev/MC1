import React, { useEffect, useState } from "react";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

const JourneySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("journey");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      year: "2010 - Boshlanish",
      title: "Kompaniyaning tashkil etilishi",
      description: "Kompaniya tashkil etildi va birinchi kolbasa mahsulotlari ishlab chiqarila boshlandi",
      icon: Award,
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      year: "2015 - Kengayish",
      title: "Yangi mahsulot turlari",
      description: "Yangi mahsulot turlarini qo'shildi va ishlab chiqarish hajmi oshirildi",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      year: "2020 - Modernizatsiya",
      title: "Zamonaviy texnologiyalar",
      description: "Zamonaviy texnologiyalar joriy etildi va sifat standartlari oshirildi",
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      year: "2024 - Kelajak",
      title: "Yangi bozorlar va innovatsiyalar",
      description: "Yangi bozorlar va innovation mahsulotlar bilan mijozlash davom etmoqda",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section id="journey" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-meat-red rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-gold rounded-full"></div>
      </div>


      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white rounded-full mb-4 sm:mb-6 font-semibold text-sm sm:text-base">
            <span>Bizning Yo'limiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-meat-red mb-4 sm:mb-6 leading-tight">
            Muvaffaqiyat tarixi
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            2010-yildan buyon mijozlarimizga eng yaxshi sifatli mahsulotlarni yetkazib berish yo'lida
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 via-red-400 via-purple-400 to-pink-400 rounded-full"></div>

          {/* Journey Steps */}
          <div className="space-y-12 md:space-y-16">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex items-center justify-start md:justify-center relative transform transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-12 md:w-16 h-12 md:h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10`}>
                    <IconComponent className={`w-6 md:w-8 h-6 md:h-8 ${step.color}`} />
                  </div>

                  {/* Content card */}
                  <div className={`w-full pl-20 md:pl-0 md:max-w-md ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover-lift">
                      <h3 className={`text-lg md:text-xl font-bold mb-2 ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>
                        {step.year}
                      </h3>
                      <h4 className={`text-base md:text-lg font-semibold text-gray-800 mb-3 ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm md:text-base text-gray-600 leading-relaxed ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className={`text-center mt-12 md:mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-meat-red to-gold text-white rounded-2xl p-6 md:p-8 max-w-3xl md:max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Kelajakda yanada ko'p yutuqlar!</h3>
            <p className="text-base md:text-lg opacity-90">
              Biz o'z mijozlarimiz uchun eng yaxshi mahsulotlarni taqdim etish yo'lida davom etamiz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;