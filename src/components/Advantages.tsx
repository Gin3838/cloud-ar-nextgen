import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Clock, 
  DollarSign, 
  Globe, 
  Headphones,
  RefreshCw,
  HardDrive,
  CheckCircle
} from "lucide-react";
import teamImage from "@/assets/team-work.jpg";
import datacenterImage from "@/assets/datacenter.jpg";

const advantages = [
  {
    icon: DollarSign,
    title: "Экономия бюджета",
    description: "Не нужно покупать сервер, лицензии 1С и нанимать IT-специалистов. Платите только за использование.",
    stats: "до 70% экономии"
  },
  {
    icon: Clock,
    title: "Быстрый старт",
    description: "Начните работу уже через 15 минут после заявки. Никаких долгих настроек и установок.",
    stats: "старт за 15 мин"
  },
  {
    icon: Globe,
    title: "Работа из любой точки",
    description: "Доступ к 1С из офиса, дома или командировки. Нужен только интернет и браузер.",
    stats: "24/7 доступ"
  },
  {
    icon: Headphones,
    title: "Живая поддержка",
    description: "Техподдержка без роботов и долгих ожиданий. Решаем вопросы по телефону в реальном времени.",
    stats: "отвечаем за 2 мин"
  },
  {
    icon: RefreshCw,
    title: "Автообновления",
    description: "Все обновления программ 1С происходят автоматически в удобное для вас время.",
    stats: "всегда актуально"
  },
  {
    icon: HardDrive,
    title: "Резервное копирование",
    description: "Ежедневные бэкапы ваших данных с возможностью восстановления в любой момент.",
    stats: "99.9% надежность"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Наши преимущества
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Почему выбирают нашу облачную 1С
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 19,000 компаний доверили нам свой учет и остались довольны результатом
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {advantage.stats}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security & Infrastructure Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Безопасность и надежность
              </Badge>
              <h3 className="text-2xl lg:text-3xl font-bold">
                Ваши данные под надежной защитой
              </h3>
              <p className="text-lg text-muted-foreground">
                Размещаем сервера в дата-центрах уровня TIER III с максимальным уровнем безопасности и отказоустойчивости.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold">Дата-центры TIER III</div>
                  <div className="text-sm text-muted-foreground">Независимое электропитание, дублирование систем</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold">Шифрование данных</div>
                  <div className="text-sm text-muted-foreground">SSL/TLS протоколы для передачи данных</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold">Гарантия SLA 99.5%</div>
                  <div className="text-sm text-muted-foreground">Компенсация при недоступности более 5 часов</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold">Круглосуточный мониторинг</div>
                  <div className="text-sm text-muted-foreground">Наши инженеры следят за работой 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={datacenterImage}
                alt="Надежные дата-центры для облачной 1С"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={teamImage}
                alt="Команда поддержки облачной 1С"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;