import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Phone, Clock, MapPin, Mail, MessageSquare, Send } from "lucide-react";
import { contactInfo } from "../../data/mockData";

const OrderSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsPulsing(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/6 w-32 h-32 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-yellow-400 rounded-full animate-float delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-red-400 rounded-full animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-red-700 text-white rounded-full mb-6 font-semibold">
            <MessageSquare className="w-5 h-5" />
            <span>Biz bilan Bog'lanish</span>
          </div>

          <h2 className="text-4xl md:text-5xl  font-bold text-gray-800 mb-6 leading-tight">
            Savollaringiz bo'lsa yoki buyurtma bermoxchi bo'lsangiz, biz bilan bog'laning. Har 
            doim sizning xizmatingizdamiz!
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address */}
          <Card className={`bg-white shadow-lg border-0 hover-lift transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-800" />
              </div>
              <CardTitle className="text-center text-gray-800 text-xl">Manzil</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 leading-relaxed">
                Toshkent tuman Bo'zsuw ko'chasi Ferma ko'cha 2-uy
              </p>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className={`bg-white shadow-lg border-0 hover-lift transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-center text-gray-800 text-xl">Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">+998 99 374 69 20</p>
              <Button
                onClick={handlePhoneCall}
                className="w-full bg-red-500 hover:bg-red-400 text-white py-2 rounded-lg transform hover:scale-105 transition-all duration-200"
              >
                Qo'ng'iroq qilish
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className={`bg-white shadow-lg border-0 hover-lift transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-center text-gray-800 text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 leading-relaxed">
                rahmatullajwwdoston@gmail.com
              </p>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className={`bg-white shadow-lg border-0 hover-lift transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-center text-gray-800 text-xl">Ish vaqti</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Dushanba-Yakshanba: 08:00 - 20:00
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and Social Media */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`bg-white shadow-xl border-0 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Xabar Yuborish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ismingiz *</label>
                  <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                  <input
                    type="tel"
                    placeholder="+998 XX XXX XX XX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Xabar *</label>
                <textarea
                  placeholder="Xabaringizni yozing..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-red-700 hover:bg-red-600 text-white py-3 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200">
                <Send className="w-5 h-5 mr-2" />
                Xabar Yuborish
              </Button>
            </CardContent>
          </Card>

          {/* Social Media and Additional Info */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Social Media Card */}
            <Card className="bg-red-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Ijtimoiy tarmoqlarda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">@meatcity_uz</p>
                    <p className="text-white/80 text-sm">Telegram</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-white/80 text-sm">Facebook</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Banner */}
            <div className=" bg-red-700 rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🍖 Haqiqiy lazzatni hoziroq sinang! 🍖
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Premium sifatli kolbasalarimizni buyurtma qiling
              </p>
              <Button
                onClick={handlePhoneCall}
                size="lg"
                className={`bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 text-lg transform hover:scale-110 transition-all duration-300 shadow-lg `}
              >
                <Phone className="w-6 h-6 mr-2" />
                +998 99 374 69 20
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;