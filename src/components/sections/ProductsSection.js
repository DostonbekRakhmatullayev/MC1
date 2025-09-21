import choriza from "src/assets/choriza.jpg";
import msdoktor from "src/assets/msdoktor.jpg";
import msextira from "src/assets/msextira.jpg";
import msservilat from "src/assets/msservilat.jpg";
import mstiliyachiy from "src/assets/mstiliyachiy.jpg";
import doktor from "src/assets/doktor 2.jpg";
import ezozdlyazaqv from "src/assets/ezozdlyazaqv.jpg";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Phone, Clock, CheckCircle, XCircle } from "lucide-react";
import { productCategories, contactInfo } from "../../data/mockData";

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("products");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleOrderCall = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  // Sausage images for different products
  const sausageImages = {
    // Dudlangan kolbasalar
    101: msservilat,
    102:ezozdlyazaqv,
    103:choriza,
    // Sosiska va sardelka
    201: msextira,
    202: msdoktor,
    203:mstiliyachiy,
    // Ziravorli va achchiq
    301:choriza,
    302: doktor,
    303: msextira,
    // Maxsus buyurtma
    401: doktor,
    402: msservilat,
    403: msdoktor
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-meat-red/5 to-transparent rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-r from-gold/5 to-transparent rounded-tr-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-meat-red/10 rounded-full mb-4">
            <span className="text-2xl">🏆</span>
            <span className="text-meat-red font-semibold">Bizning assortiment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-meat-red mb-4">
            Premium mahsulotlar katalogi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Har bir kategoriyada eng yaxshi sifat va ta'mni taqdim etamiz
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white shadow-lg p-2 rounded-2xl h-full">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id.toString()}
                  className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 p-3 sm:p-4 rounded-xl data-[state=active]:bg-meat-red data-[state=active]:text-black transition-all duration-300 text-xs sm:text-sm"
                >
                  <span className="text-lg sm:text-2xl">{category.icon}</span>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-70 hidden sm:block">{category.description}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Category Content */}
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id.toString()} className="mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.products.map((product, index) => (
                    <Card
                      key={product.id}
                      className={`hover-lift bg-white shadow-lg hover:shadow-xl border-0 overflow-hidden transform transition-all duration-500 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Product Image */}
                      <div className="h-40 sm:h-48 lg:h-56 overflow-hidden bg-gray-100 relative">
                        <img 
                          src={sausageImages[product.id] || sausageImages[101]}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                            <span className="text-2xl">{category.icon}</span>
                          </div>
                        </div>
                        {product.inStock && (
                          <div className="absolute bottom-3 left-3">
                            <div className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Yangi tayyorlangan
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <CardHeader className={`bg-stone-200 ${category.color} text-black p-4 sm:p-6`}>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg sm:text-xl font-bold">{product.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            {product.inStock ? (
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                            ) : (
                              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                            )}
                          </div>
                        </div>
                        <CardDescription className="text-slate-700 text-sm sm:text-base">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-4 sm:p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-500">{product.weight}</div>
                          </div>
                          <Badge
                            variant={product.inStock ? "default" : "secondary"}
                            className={`text-xs sm:text-sm ${
                              product.inStock 
                                ? "bg-green-100 text-green-800 hover:bg-green-200" 
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {product.inStock ? "Mavjud" : "Tugagan"}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Tarkibi:</h5>
                          <div className="flex flex-wrap gap-1">
                            {product.ingredients.map((ingredient, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          onClick={handleOrderCall}
                          disabled={!product.inStock}
                          className={`w-full py-2 sm:py-3 font-semibold transition-all duration-300 text-sm sm:text-base ${
                            product.inStock
                              ? "bg-meat-red hover:bg-meat-red/90 text-black hover:scale-105"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {product.inStock ? "Buyurtma berish" : "Mavjud emas"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Category Info */}
               
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;