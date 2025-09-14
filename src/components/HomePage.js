import React, { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import SausageShowcase from "./sections/SausageShowcase";
import CuttingScene from "./sections/CuttingScene";
import ProductsSection from "./sections/ProductsSection";
import GallerySection from "./sections/GallerySection";
import JourneySection from "./sections/JourneySection";
import BrandStory from "./sections/BrandStory";
import OrderSection from "./sections/OrderSection";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const HomePage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <SausageShowcase />
      <CuttingScene />
      <ProductsSection />
      <GallerySection />
      <JourneySection />
      <BrandStory />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default HomePage;