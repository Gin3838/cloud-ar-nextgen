import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cloud, Users, Shield } from "lucide-react";
import heroOption1 from "@/assets/hero-option-1.jpg";
import TrustBadges from "@/components/TrustBadges";
import ImageSelector from "@/components/ImageSelector";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroOption1);

  return (
    <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
      {/* Декоративные линии и элементы в стиле изображения */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-tertiary/20 rotate-45 blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-24 bg-secondary/20 rotate-12 blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-20 bg-primary/20 -rotate-45 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Ваш надежный партнер в облачных решениях
              </Badge>
              
              <div className="space-y-3">
                <p className="text-lg text-primary font-medium">
                  Ваш надежный партнер в облачных решениях и AI
                </p>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Облачная 1С
                  </span>
                  <br />
                  от{" "}
                  <span className="text-primary">790 ₽/мес</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Работайте в программах 1С через интернет из любой точки мира. 
                  Доверьтесь профессионалам с 15-летним опытом.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">14 дней бесплатно</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Старт за 15 минут</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Техподдержка 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Без капвложений</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="shadow-glow">
                Попробовать бесплатно 14 дней
              </Button>
              <Button variant="cloud" size="xl">
                Рассчитать стоимость
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>19,000+ клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                <span>15 лет на рынке</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-up animate-float">
            <div className="relative overflow-hidden rounded-3xl shadow-dynamic">
              <img
                src={currentImage}
                alt="Облачная 1С - современное решение для бизнеса"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats - в стиле облачных элементов */}
              <div className="absolute top-6 right-6 bg-gradient-cloud backdrop-blur-md rounded-2xl p-4 shadow-glow border border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-primary/70">Uptime</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-gradient-cloud backdrop-blur-md rounded-2xl p-4 shadow-glow border border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tertiary">24/7</div>
                  <div className="text-xs text-primary/70">Поддержка</div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-tertiary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
      </div>
      
      {/* Image Selector */}
      <ImageSelector 
        currentImage={currentImage} 
        onImageSelect={setCurrentImage} 
      />
    </section>
  );
};

export default Hero;