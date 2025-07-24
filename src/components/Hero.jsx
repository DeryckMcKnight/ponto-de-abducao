import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Zap, Star, Rocket } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "BEM-VINDOS AO PONTO DE ABDUÇÃO",
      subtitle: "Distribuidora, Conveniência e Tabacaria",
      description: "Vila dos Cabanos - Os melhores produtos com os melhores preços da cidade",
      cta: "EXPLORAR PRODUTOS",
      badge: "🛸 INAUGURAÇÃO 12/01",
      bgGradient: "from-green-900/20 to-black",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 2,
      title: "BEBIDAS PREMIUM",
      subtitle: "Jack Daniel's, Absolut, Johnnie Walker",
      description: "As melhores marcas de destilados, cervejas e bebidas com preços especiais",
      cta: "VER BEBIDAS",
      badge: "🍺 PROMOÇÕES ESPECIAIS",
      bgGradient: "from-blue-900/20 to-black",
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 3,
      title: "TABACARIA COMPLETA",
      subtitle: "Cigarros e acessórios",
      description: "Marlboro, Lucky Strike, Parliament e todos os acessórios para fumantes",
      cta: "VER TABACARIA",
      badge: "🚬 VARIEDADE COMPLETA",
      bgGradient: "from-purple-900/20 to-black",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden star-field">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgGradient} transition-all duration-1000`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-ufo absolute top-20 left-10 opacity-30">
          <Zap className="w-6 h-6 text-primary" />
        </div>
        <div className="floating-ufo absolute top-40 right-20 opacity-20" style={{ animationDelay: '1s' }}>
          <Star className="w-4 h-4 text-white" />
        </div>
        <div className="floating-ufo absolute bottom-32 left-1/4 opacity-25" style={{ animationDelay: '2s' }}>
          <Rocket className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <Badge className="neon-border bg-primary/10 text-primary pulse-green">
              {currentSlideData.badge}
            </Badge>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="neon-glow text-primary floating-ufo">
              {currentSlideData.icon}
            </div>
          </div>

          {/* Title */}
          <h1 className="alien-font text-4xl md:text-6xl font-bold mb-4 neon-glow">
            {currentSlideData.title}
          </h1>

          {/* Subtitle */}
          <h2 className="alien-font text-xl md:text-2xl text-primary mb-6">
            {currentSlideData.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentSlideData.description}
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="alien-font text-lg px-8 py-6 hover-glow bg-primary text-primary-foreground"
            >
              {currentSlideData.cta}
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary neon-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full alien-card border-border hover-glow transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full alien-card border-border hover-glow transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Floating elements for extra alien feel */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="alien-card p-4 neon-border">
          <p className="alien-font text-sm text-primary">🛸 DESDE 2024</p>
          <p className="text-xs text-muted-foreground">Abduzindo clientes</p>
        </div>
      </div>

      <div className="absolute top-20 right-10 hidden md:block">
        <div className="alien-card p-4 neon-border">
          <p className="alien-font text-sm text-primary">⭐ 5.0</p>
          <p className="text-xs text-muted-foreground">Avaliação galáctica</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

