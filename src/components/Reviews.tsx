import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp } from "lucide-react";

const reviews = [
  {
    name: "Михаил Петров",
    company: "ООО «Альфа Торг»",
    position: "Генеральный директор",
    rating: 5,
    text: "Перешли на облачную 1С год назад. Сэкономили на IT-инфраструктуре более 500 тысяч рублей. Поддержка работает отлично, всегда помогают быстро решить любые вопросы.",
    avatar: "МП"
  },
  {
    name: "Елена Соколова", 
    company: "ИП Соколова",
    position: "Индивидуальный предприниматель",
    rating: 5,
    text: "Как ИП долго сомневалась переходить ли на облако. Но после тестового периода поняла - это идеальное решение! Работаю из дома, данные всегда доступны, поддержка помогает 24/7.",
    avatar: "ЕС"
  },
  {
    name: "Андрей Волков",
    company: "«Строй-Гарант»",
    position: "Главный бухгалтер",
    rating: 5,
    text: "Пользуемся уже 3 года. Никаких проблем с доступностью или скоростью работы. Все обновления происходят автоматически, данные всегда в безопасности. Рекомендую всем коллегам!",
    avatar: "АВ"
  },
  {
    name: "Ольга Кузнецова",
    company: "ООО «Медтехника»",
    position: "Руководитель отдела",
    rating: 5,
    text: "Когда офис переехал, поняли все преимущества облачной 1С. Сотрудники продолжили работать без простоев. Техподдержка помогла настроить удаленный доступ буквально за час.",
    avatar: "ОК"
  },
  {
    name: "Сергей Иванов",
    company: "«ПромТех»",
    position: "IT-директор",
    rating: 5,
    text: "С точки зрения IT-безопасности облачное решение оказалось надежнее нашего локального сервера. Плюс больше не нужно заботиться об обновлениях и бэкапах - все работает автоматически.",
    avatar: "СИ"
  },
  {
    name: "Татьяна Белова",
    company: "«Кафе Уют»",
    position: "Владелец",
    rating: 5,
    text: "Малый бизнес не может позволить себе дорогое IT-оборудование. Облачная 1С позволила автоматизировать учет за копейки. Очень довольна соотношением цена-качество!",
    avatar: "ТБ"
  }
];

const stats = [
  { number: "19,000+", label: "Довольных клиентов" },
  { number: "4.9/5", label: "Средняя оценка" },
  { number: "99.2%", label: "Рекомендуют друзьям" },
  { number: "15", label: "Лет на рынке" }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Отзывы клиентов
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 19,000 компаний уже оценили преимущества нашего сервиса
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="ring-2 ring-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.position}</div>
                      <div className="text-xs text-muted-foreground">{review.company}</div>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-primary/30" />
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  "{review.text}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Yandex Maps Widget */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                4.8 звезды на Яндекс.Картах
              </h3>
              <p className="text-lg opacity-90">
                Более 500 отзывов от реальных клиентов подтверждают качество нашего сервиса
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8</span>
              <span className="opacity-90">• 542 отзыва</span>
            </div>

            <a 
              href="https://yandex.ru/maps/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              Смотреть все отзывы на Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;