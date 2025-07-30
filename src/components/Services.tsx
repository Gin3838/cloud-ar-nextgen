import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Users, 
  FileText, 
  TrendingUp, 
  ShoppingCart, 
  Building,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "1С:Бухгалтерия ПРОФ",
    description: "Полный бухгалтерский и налоговый учет, расчет зарплаты и кадровый учет",
    price: "от 790 ₽/мес",
    features: ["Все виды отчетности", "Расчет налогов", "Зарплата", "Кадровый учет"],
    badge: "Популярно"
  },
  {
    icon: ShoppingCart,
    title: "1С:Управление торговлей",
    description: "Автоматизация торговых операций, управление складом и взаимоотношениями с клиентами",
    price: "от 1,200 ₽/мес",
    features: ["Управление складом", "CRM", "Закупки и продажи", "Аналитика"],
    badge: null
  },
  {
    icon: Users,
    title: "1С:Зарплата и управление персоналом",
    description: "Комплексное решение для HR-процессов и расчета заработной платы",
    price: "от 950 ₽/мес",
    features: ["Кадровый учет", "Табель времени", "Расчет зарплаты", "Отчеты в ФНС"],
    badge: null
  },
  {
    icon: Building,
    title: "1С:Комплексная автоматизация",
    description: "Управление всеми бизнес-процессами предприятия в одной системе",
    price: "от 2,100 ₽/мес",
    features: ["Все модули", "CRM", "Производство", "Финансы"],
    badge: "Для крупного бизнеса"
  },
  {
    icon: FileText,
    title: "1С:Документооборот",
    description: "Электронный документооборот и система управления документами",
    price: "от 890 ₽/мес",
    features: ["ЭДО", "Согласование", "Архив", "Интеграция"],
    badge: null
  },
  {
    icon: TrendingUp,
    title: "1С:Управление нашей фирмой",
    description: "Решение для малого и среднего бизнеса с простым интерфейсом",
    price: "от 690 ₽/мес",
    features: ["Простота", "Быстрый старт", "Основные функции", "Отчетность"],
    badge: "Для МСБ"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Облачные решения 1С
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Программы 1С в облаке
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Работайте в привычных программах 1С через интернет. Без установки, настройки и покупки лицензий.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Получить консультацию по выбору решения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;