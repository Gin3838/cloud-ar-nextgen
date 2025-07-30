import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Star,
  Calculator,
  TrendingUp,
  Zap
} from "lucide-react";

const pricingPlans = [
  {
    name: "Стартовый",
    description: "Для малого бизнеса и ИП",
    price: "790",
    originalPrice: "990",
    period: "мес",
    badge: "Популярный",
    badgeVariant: "default" as const,
    features: [
      "1С:Бухгалтерия ПРОФ",
      "1 пользователь",
      "5 ГБ дискового пространства",
      "Техподдержка 24/7",
      "Автоматические обновления",
      "Резервное копирование",
      "SSL-шифрование"
    ],
    highlighted: true
  },
  {
    name: "Бизнес",
    description: "Для средних компаний",
    price: "1,590",
    originalPrice: "1,890",
    period: "мес",
    badge: "Выгодно",
    badgeVariant: "secondary" as const,
    features: [
      "1С:Управление торговлей",
      "До 3 пользователей",
      "15 ГБ дискового пространства",
      "Приоритетная поддержка",
      "CRM-модуль",
      "Интеграция с банками",
      "Аналитические отчеты",
      "Мобильное приложение"
    ],
    highlighted: false
  },
  {
    name: "Корпоративный",
    description: "Для крупного бизнеса",
    price: "3,290",
    originalPrice: "3,890",
    period: "мес",
    badge: "Максимум возможностей",
    badgeVariant: "secondary" as const,
    features: [
      "1С:Комплексная автоматизация",
      "Неограниченное число пользователей",
      "100 ГБ дискового пространства",
      "Персональный менеджер",
      "Настройка под бизнес-процессы",
      "Интеграция с любыми системами",
      "Расширенная аналитика",
      "Обучение сотрудников"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Тарифы и цены
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Выберите подходящий тариф
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Прозрачные цены без скрытых платежей. 14 дней бесплатного тестирования для всех тарифов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 hover:shadow-large ${
                plan.highlighted 
                  ? 'ring-2 ring-primary shadow-glow scale-105' 
                  : 'hover:-translate-y-1'
              } bg-gradient-card border-0`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant={plan.badgeVariant} className="px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl lg:text-4xl font-bold text-primary">
                      {plan.price} ₽
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="line-through text-muted-foreground">
                      {plan.originalPrice} ₽
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      скидка 20%
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.highlighted ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.highlighted ? "Начать бесплатно" : "Выбрать тариф"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calculator Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Нужна индивидуальная настройка?
              </h3>
              <p className="text-lg opacity-90">
                Мы подберем оптимальное решение под ваши бизнес-процессы и рассчитаем персональную стоимость
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Калькулятор стоимости
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <TrendingUp className="w-5 h-5 mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  <Zap className="w-4 h-4 mr-2" />
                  Акция до конца месяца
                </Badge>
                <h4 className="text-xl font-bold">
                  Подключение и миграция данных — БЕСПЛАТНО
                </h4>
                <p className="text-muted-foreground">
                  При подключении любого тарифа мы бесплатно настроим программу и перенесем ваши данные
                </p>
                <Button variant="success" size="lg">
                  Воспользоваться предложением
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;