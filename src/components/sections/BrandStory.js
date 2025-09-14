import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Star, Users, Award, Clock } from "lucide-react";
import { testimonials, brandStats } from "../../data/mockData";

const BrandStory = () => {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-meat-red rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gold rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-meat-red/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Brand Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-meat-red/10 rounded-full">
                <Clock className="w-5 h-5 text-meat-red" />
                <span className="text-meat-red font-semibold">Bizning hikoyamiz</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-meat-red leading-tight">
                Meat City — o'z ishini sevgan ustalar jamoasi
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Biz kolbasa tayyorlash san'atini avloddan-avlodga o'tkazamiz. 
                Sifat, ta'm va ishonch — bizning ustuvorligimiz.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-meat-red/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-meat-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tajribali jamoa</h4>
                    <p className="text-gray-600">15+ yillik tajribaga ega mutaxassislar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sifat kafolati</h4>
                    <p className="text-gray-600">Faqat eng yaxshi ingredientlar ishlatamiz</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-meat-red/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-meat-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mijozlar sevgisi</h4>
                    <p className="text-gray-600">500+ mamnun mijozlar bizga ishonadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative">
              {/* Main image placeholder */}
              <div className="bg-gradient-to-br from-meat-red/10 to-gold/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-gradient-to-br from-meat-red/20 to-gold/20 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl mb-4">👨‍🍳</div>
                    <h3 className="text-2xl font-bold text-meat-red">Usta Qo'llari</h3>
                    <p className="text-gray-700">An'anaviy retseptlar va zamonaviy texnologiyalar</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-meat-red">15+</div>
                  <div className="text-xs text-gray-600">Yil tajriba</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">100%</div>
                  <div className="text-xs text-gray-600">Tabiiy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {brandStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover-lift bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-meat-red mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-meat-red mb-4">Mijozlarimiz fikri</h3>
            <p className="text-lg text-gray-600">Bizning ishimizga bergan baholar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`hover-lift bg-white shadow-lg border-0 transform transition-all duration-500 delay-${index * 100}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-meat-red text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;