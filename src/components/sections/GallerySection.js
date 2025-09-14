import choriza from "src/assets/choriza.jpg";
import msdoktor from "src/assets/msdoktor.jpg";
import msextira from "src/assets/msextira.jpg";
import msservilat from "src/assets/msservilat.jpg";
import mstiliyachiy from "src/assets/mstiliyachiy.jpg";
import doktor from "src/assets/doktor 2.jpg";
import ezozdlyazaqv from "src/assets/ezozdlyazaqv.jpg";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Eye, Heart, Star } from "lucide-react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: choriza,
      title: "Premium Dudlangan Kolbasa",
      description: "Eng yaxshi go'sht va tabiiy ziravorlar bilan",
      category: "Dudlangan"
    },
    {
      id: 2,
      src: msdoktor, 
      title: "Klassik Sosiska",
      description: "Nonushta uchun eng yaxshi tanlov",
      category: "Sosiska"
    },
    {
      id: 3,
      src: msextira,
      title: "Achchiq Maxsus Kolbasa", 
      description: "Keskin ta'm sevuvchilar uchun",
      category: "Achchiq"
    },
    {
      id: 4,
      src: msservilat,
      title: "Fermer Kolbasasi",
      description: "Qishloq uslubida tayyorlangan",
      category: "Maxsus"
    },
    {
      id: 5,
      src: mstiliyachiy,
      title: "Premium Sardelka",
      description: "Katta oila uchun mukammal",
      category: "Sardelka"
    },
    {
      id: 6,
      src: ezozdlyazaqv,
      title: "Ziravorli Kolbasa",
      description: "Boy ziravorli ta'm",
      category: "Ziravorli"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-meat-red rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-meat-red/10 rounded-full mb-6">
            <Eye className="w-5 h-5 text-meat-red" />
            <span className="text-meat-red font-semibold">Kolbasa Galereya</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-meat-red mb-6 leading-tight">
            Bizning mahsulotlarimiz ko'rinishi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Har bir kolbasa o'zining noyob ta'mi va ko'rinishi bilan sizni hayratda qoldiradi
          </p>
        </div>

        {/* Featured Image */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img 
                    src={galleryImages[activeImage].src}
                    alt={galleryImages[activeImage].title}
                    className=" object-cover transition-all duration-500 w-full h-full hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-meat-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      {galleryImages[activeImage].category}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <Heart className="w-4 h-4 fill-current" />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-meat-red mb-4">
                    {galleryImages[activeImage].title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {galleryImages[activeImage].description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <Star className="w-5 h-5 text-gold fill-current" />
                      <Star className="w-5 h-5 text-gold fill-current" />
                    </div>
                    <span className="text-gold font-semibold">Premium Sifat</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className={`cursor-pointer hover-lift transition-all duration-300 border-2 ${
                activeImage === index 
                  ? 'border-meat-red shadow-lg' 
                  : 'border-transparent hover:border-gold/50'
              }`}
              onClick={() => setActiveImage(index)}
            >
              <CardContent className="p-0">
                <div className="relative h-24 sm:h-32 lg:h-40 overflow-hidden rounded-lg">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold truncate">
                      {image.title}
                    </p>
                  </div>
                  {activeImage === index && (
                    <div className="absolute inset-0 bg-meat-red/20 flex items-center justify-center">
                      <div className="bg-white rounded-full p-2">
                        <Eye className="w-4 h-4 text-meat-red" />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-meat-red to-gold text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Har bir kolbasa - san'at asari!</h3>
            <p className="text-lg opacity-90">
              Bizning mahsulotlarimizning har biri diqqat bilan tanilgan ingredientlar va 
              an'anaviy retseptlar asosida tayyorlanadi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;