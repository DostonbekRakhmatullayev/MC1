import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo with actual image */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-meat-red">
              <img 
                src="https://customer-assets.emergentagent.com/job_gourmet-sausage/artifacts/uztqy839_8385cc73-b2cb-4e57-9dd9-362bf2fe69a8_removalai_preview.png"
                alt="Meat City Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-meat-red tracking-tight">
                MEAT CITY
              </h1>
              <p className="text-xs text-gold font-medium">Premium kolbasa shahri</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-meat-red transition-colors font-medium text-sm"
            >
              Bosh sahifa
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-meat-red transition-colors font-medium text-sm"
            >
              Mahsulotlar
            </button>
            <button 
              onClick={() => scrollToSection("journey")}
              className="text-gray-700 hover:text-meat-red transition-colors font-medium text-sm"
            >
              Bizning yo'limiz
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-meat-red transition-colors font-medium text-sm"
            >
              Biz haqimizda
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-meat-red transition-colors font-medium text-sm"
            >
              Aloqa
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-meat-red hover:bg-meat-red/90 text-white px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Buyurtma berish
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-meat-red" /> : <Menu size={24} className="text-meat-red" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gold/20 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-meat-red transition-colors font-medium py-2"
              >
                Bosh sahifa
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-left text-gray-700 hover:text-meat-red transition-colors font-medium py-2"
              >
                Mahsulotlar
              </button>
              <button 
                onClick={() => scrollToSection("journey")}
                className="text-left text-gray-700 hover:text-meat-red transition-colors font-medium py-2"
              >
                Bizning yo'limiz
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-meat-red transition-colors font-medium py-2"
              >
                Biz haqimizda
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-meat-red transition-colors font-medium py-2"
              >
                Aloqa
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-meat-red hover:bg-meat-red/90 text-white self-start px-6 py-3 font-semibold shadow-md"
              >
                Buyurtma berish
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;