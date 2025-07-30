import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cloud, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-cloud-it.jpg";
import TrustBadges from "@/components/TrustBadges";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Надежно • Безопасно • Доступно
              </Badge>
              
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
                Без покупки лицензий и серверов.
              </p>
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
              <Button variant="outline" size="xl">
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
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={heroImage}
                alt="Облачная 1С - современное решение для бизнеса"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">24/7</div>
                  <div className="text-xs text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
      </div>
    </section>
  );
};

export default Hero;