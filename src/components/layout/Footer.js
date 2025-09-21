import React from "react";
import { Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { contactInfo } from "../../data/mockData";

const Footer = () => {
  const handlePhoneCall = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  const handleWebsite = () => {
    window.open(`https://${contactInfo.website}`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${contactInfo.social.telegram.replace('@', '')}`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.social.instagram.replace('@', '')}`, '_blank');
  };

  return (
    <footer className="bg-red-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-meat-red to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-r from-gold to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-meat-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍖</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">MEAT CITY</h2>
                <p className="text-gold font-medium">Premium kolbasa shahri</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Biz har bir kolbasani eng sifatli go'sht, tabiiy ziravorlar va asrlar davomida 
              sinovdan o'tgan retseptlar asosida tayyorlaymiz.
            </p>

            <div className="flex space-x-4">
              <button
                onClick={handleTelegram}
                className="w-10 h-10 bg-white/10 hover:bg-meat-red rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              >
                <Send className="w-5 h-5" />
              </button>
              <button
                onClick={handleInstagram}
                className="w-10 h-10 bg-white/10 hover:bg-meat-red rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={handleWebsite}
                className="w-10 h-10 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gold mb-4">Bog'lanish</h3>
            
            <div className="space-y-4">
              <button
                onClick={handlePhoneCall}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-meat-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>{contactInfo.phone}</span>
              </button>

              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-meat-red rounded-full flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>

              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-meat-red rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div>Dushanba-Juma: {contactInfo.workingHours.weekdays}</div>
                  <div>Dam olish: {contactInfo.workingHours.weekend}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gold mb-4">Tezkor havolalar</h3>
            
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2"
              >
                Bosh sahifa
              </button>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2"
              >
                Mahsulotlar
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2"
              >
                Biz haqimizda
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2"
              >
                Buyurtma berish
              </button>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-gold font-semibold mb-2">Ijtimoiy tarmoqlar:</p>
              
              <p className="text-gray-300 text-sm">{contactInfo.social.telegram}</p>
              <p className="text-gray-300 text-sm">{contactInfo.social.instagram}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Meat City. Barcha huquqlar himoyalangan.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>Sifat kafolati</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>24/7 mijozlar xizmati</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Tez yetkazib berish</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gold font-medium text-lg">
              🍖 Meat City - Har bir bo'lak san'at asari! 🍖
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;