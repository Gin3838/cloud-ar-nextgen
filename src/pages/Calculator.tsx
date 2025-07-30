import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator as CalcIcon, Clock, Shield, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Calculator = () => {
  const [users, setUsers] = useState(1);
  const [programs, setPrograms] = useState([]);
  const [rdp, setRdp] = useState(false);
  const [sql, setSql] = useState(false);
  const [sqlSize, setSqlSize] = useState(5);
  const [additionalSpace, setAdditionalSpace] = useState(0);

  const basePrice = 1400;
  const userPrice = 1200;
  const rdpPrice = 500;
  const sqlPrice = 800;
  const spacePrice = 50; // per GB

  const calculateTotal = () => {
    let total = basePrice;
    if (users > 1) {
      total += (users - 1) * userPrice;
    }
    if (rdp) total += rdpPrice;
    if (sql) total += sqlPrice + (sqlSize * 20);
    total += additionalSpace * spacePrice;
    return total;
  };

  const programOptions = [
    "1С:Бухгалтерия ПРОФ",
    "1С:Зарплата и управление персоналом",
    "1С:Управление торговлей",
    "1С:Комплексная автоматизация",
    "1С:Управление нашей фирмой",
    "1С:Документооборот",
    "1С:CRM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <SEOHead 
        title="Калькулятор стоимости 1С в облаке | CloudIT Solutions"
        description="Рассчитайте точную стоимость аренды 1С в облаке. Гибкие тарифы, круглосуточная поддержка, 14 дней бесплатно. Калькулятор цен на облачную 1С."
        keywords="калькулятор 1С облако, стоимость аренды 1С, цена 1С в облаке, расчет тарифа 1С, облачная бухгалтерия калькулятор"
        canonical="https://clouditsolutions.ru/calculator"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Калькулятор стоимости 1С в облаке
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Рассчитайте точную стоимость аренды 1С в облаке для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="h-6 w-6 text-primary" />
                  Конфигурация системы
                </CardTitle>
                <CardDescription>
                  Выберите необходимые параметры для расчета стоимости
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Program Selection */}
                <div className="space-y-3">
                  <Label htmlFor="programs" className="text-base font-medium">
                    Программы 1С
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите программу 1С" />
                    </SelectTrigger>
                    <SelectContent>
                      {programOptions.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Users */}
                <div className="space-y-3">
                  <Label htmlFor="users" className="text-base font-medium">
                    Количество одновременных подключений
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="users"
                      type="number"
                      min="1"
                      max="100"
                      value={users}
                      onChange={(e) => setUsers(parseInt(e.target.value) || 1)}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">
                      пользователей (1-100)
                    </span>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Дополнительные опции</h4>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <Label className="text-base">RDP подключение</Label>
                      <p className="text-sm text-muted-foreground">
                        Терминальный режим для разработки
                      </p>
                    </div>
                    <Button
                      variant={rdp ? "default" : "outline"}
                      onClick={() => setRdp(!rdp)}
                      size="sm"
                    >
                      {rdp ? "Включено" : "Выключено"}
                    </Button>
                  </div>

                  <div className="space-y-3 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">SQL Server</Label>
                        <p className="text-sm text-muted-foreground">
                          Клиент-серверный вариант для больших нагрузок
                        </p>
                      </div>
                      <Button
                        variant={sql ? "default" : "outline"}
                        onClick={() => setSql(!sql)}
                        size="sm"
                      >
                        {sql ? "Включено" : "Выключено"}
                      </Button>
                    </div>
                    
                    {sql && (
                      <div className="space-y-2">
                        <Label htmlFor="sqlSize">Размер SQL базы, ГБ</Label>
                        <Input
                          id="sqlSize"
                          type="number"
                          min="1"
                          max="500"
                          value={sqlSize}
                          onChange={(e) => setSqlSize(parseInt(e.target.value) || 1)}
                          className="w-24"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="space" className="text-base font-medium">
                      Дополнительное место под базы, ГБ
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="space"
                        type="number"
                        min="0"
                        max="500"
                        value={additionalSpace}
                        onChange={(e) => setAdditionalSpace(parseInt(e.target.value) || 0)}
                        className="w-24"
                      />
                      <span className="text-sm text-muted-foreground">
                        30 ГБ уже включены в стоимость
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Стоимость в месяц
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {calculateTotal().toLocaleString()} ₽
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    14 дней бесплатно
                  </Badge>
                </div>

                <Separator className="my-4 bg-primary-foreground/20" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Базовая стоимость</span>
                    <span>{basePrice} ₽</span>
                  </div>
                  {users > 1 && (
                    <div className="flex justify-between">
                      <span>Доп. пользователи ({users - 1})</span>
                      <span>{(users - 1) * userPrice} ₽</span>
                    </div>
                  )}
                  {rdp && (
                    <div className="flex justify-between">
                      <span>RDP подключение</span>
                      <span>{rdpPrice} ₽</span>
                    </div>
                  )}
                  {sql && (
                    <div className="flex justify-between">
                      <span>SQL Server ({sqlSize} ГБ)</span>
                      <span>{sqlPrice + (sqlSize * 20)} ₽</span>
                    </div>
                  )}
                  {additionalSpace > 0 && (
                    <div className="flex justify-between">
                      <span>Доп. место ({additionalSpace} ГБ)</span>
                      <span>{additionalSpace * spacePrice} ₽</span>
                    </div>
                  )}
                </div>

                <Button 
                  className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                  size="lg"
                >
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>

            {/* Features included */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Что включено</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">Круглосуточная поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Резервное копирование</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-primary" />
                  <span className="text-sm">5 консультаций в месяц</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;