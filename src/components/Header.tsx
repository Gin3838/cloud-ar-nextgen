import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CloudIT</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="/calculator" className="text-muted-foreground hover:text-primary transition-colors">
              Калькулятор
            </a>
            <a href="/server-calculator" className="text-muted-foreground hover:text-primary transition-colors">
              Сервера
            </a>
            <a href="/#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="/#advantages" className="text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="/#reviews" className="text-muted-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="/#contacts" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>24/7</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:88005550123" className="text-sm font-medium hover:text-primary transition-colors">
                8 (800) 555-01-23
              </a>
            </div>
            <Button variant="hero" size="sm">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;