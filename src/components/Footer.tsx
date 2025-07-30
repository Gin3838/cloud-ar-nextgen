import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield,
  MessageCircle,
  ExternalLink,
  Zap,
  CheckCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Остались вопросы?
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Свяжитесь с нами прямо сейчас
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Наши специалисты ответят на все вопросы и помогут выбрать подходящее решение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Телефоны</h4>
                    <div className="space-y-1">
                      <div>
                        <a href="tel:88005550123" className="text-lg font-medium hover:opacity-80 transition-opacity">
                          8 (800) 555-01-23
                        </a>
                        <span className="text-sm opacity-70 ml-2">— бесплатно по России</span>
                      </div>
                      <div>
                        <a href="tel:+74951234567" className="hover:opacity-80 transition-opacity">
                          +7 (495) 123-45-67
                        </a>
                        <span className="text-sm opacity-70 ml-2">— Москва</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <a href="mailto:info@cloudit-solutions.ru" className="hover:opacity-80 transition-opacity">
                      info@cloudit-solutions.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Режим работы</h4>
                    <div className="space-y-1">
                      <div>Техподдержка: <span className="font-medium">24/7</span></div>
                      <div>Консультации: <span className="font-medium">ПН-ПТ 9:00-18:00</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Адрес</h4>
                    <div>г. Москва, ул. Тверская, д. 123, офис 456</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm opacity-90">Отвечаем в течение 2 минут</span>
              </div>
            </div>

            {/* Quick Start Card */}
            <Card className="bg-primary-foreground text-primary border-0 shadow-large">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      <Zap className="w-4 h-4 mr-2" />
                      Быстрый старт
                    </Badge>
                    <h3 className="text-2xl font-bold">
                      Начните работу прямо сейчас
                    </h3>
                    <p className="text-muted-foreground">
                      Заполните заявку, и мы подготовим ваш облачный сервис за 15 минут
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <Button variant="default" size="lg" className="w-full">
                      Получить доступ за 15 минут
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">CloudIT Solutions</span>
              </div>
              <p className="text-sm opacity-80">
                Надежный партнер в области облачных IT-решений с 2009 года
              </p>
              <div className="text-sm opacity-70">
                ООО «CloudIT Solutions»<br />
                ИНН: 7701234567<br />
                ОГРН: 1127746123456
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Аренда 1С в облаке</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Хостинг серверов 1С</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Техническая поддержка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Настройка и внедрение</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Обучение персонала</a></li>
              </ul>
            </div>

            {/* Legal & Links */}
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2">
                    Политика конфиденциальности
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2">
                    Пользовательское соглашение
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2">
                    Договор оферты
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-2">
                    SLA соглашение
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-70">
            <p>&copy; 2024 CloudIT Solutions. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;