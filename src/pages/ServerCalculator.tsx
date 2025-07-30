import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Server, HardDrive, Cpu, MemoryStick, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ServerCalculator = () => {
  const [serverType, setServerType] = useState("");
  const [cpu, setCpu] = useState(2);
  const [ram, setRam] = useState(4);
  const [storage, setStorage] = useState(100);
  const [backup, setBackup] = useState(true);
  const [support, setSupport] = useState("standard");

  const serverConfigs = {
    "basic": {
      name: "Базовый",
      cpu: 2,
      ram: 4,
      storage: 100,
      price: 3500
    },
    "standard": {
      name: "Стандартный",
      cpu: 4,
      ram: 8,
      storage: 200,
      price: 6500
    },
    "premium": {
      name: "Премиум",
      cpu: 8,
      ram: 16,
      storage: 500,
      price: 12000
    },
    "enterprise": {
      name: "Корпоративный",
      cpu: 16,
      ram: 32,
      storage: 1000,
      price: 25000
    }
  };

  const calculatePrice = () => {
    if (!serverType) return 0;
    
    const basePrice = serverConfigs[serverType].price;
    let total = basePrice;
    
    // Additional CPU cores
    const extraCpu = Math.max(0, cpu - serverConfigs[serverType].cpu);
    total += extraCpu * 500;
    
    // Additional RAM
    const extraRam = Math.max(0, ram - serverConfigs[serverType].ram);
    total += extraRam * 300;
    
    // Additional Storage
    const extraStorage = Math.max(0, storage - serverConfigs[serverType].storage);
    total += extraStorage * 15;
    
    // Backup service
    if (backup) total += 800;
    
    // Support level
    if (support === "premium") total += 2000;
    else if (support === "enterprise") total += 5000;
    
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <SEOHead 
        title="Калькулятор аренды выделенного сервера | CloudIT Solutions"
        description="Калькулятор стоимости аренды выделенного сервера. Подберите оптимальную конфигурацию: CPU, RAM, SSD. Первый месяц со скидкой 50%."
        keywords="аренда сервера калькулятор, выделенный сервер цена, хостинг сервер калькулятор, VPS аренда стоимость"
        canonical="https://clouditsolutions.ru/server-calculator"
      />
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Калькулятор аренды выделенного сервера
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Подберите оптимальную конфигурацию сервера для ваших задач
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-6 w-6 text-primary" />
                  Конфигурация сервера
                </CardTitle>
                <CardDescription>
                  Выберите базовую конфигурацию и настройте параметры
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Server Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    Базовая конфигурация
                  </Label>
                  <Select value={serverType} onValueChange={setServerType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите конфигурацию сервера" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(serverConfigs).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          {config.name} - {config.cpu} CPU, {config.ram} GB RAM, {config.storage} GB SSD
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* CPU Configuration */}
                <div className="space-y-3">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    Количество ядер CPU
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="32"
                      value={cpu}
                      onChange={(e) => setCpu(parseInt(e.target.value) || 1)}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">
                      {serverType && cpu > serverConfigs[serverType].cpu && (
                        <span className="text-warning">
                          +{cpu - serverConfigs[serverType].cpu} дополнительных ядер
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* RAM Configuration */}
                <div className="space-y-3">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <MemoryStick className="h-4 w-4" />
                    Оперативная память, ГБ
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="128"
                      value={ram}
                      onChange={(e) => setRam(parseInt(e.target.value) || 1)}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">
                      {serverType && ram > serverConfigs[serverType].ram && (
                        <span className="text-warning">
                          +{ram - serverConfigs[serverType].ram} ГБ дополнительно
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Storage Configuration */}
                <div className="space-y-3">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <HardDrive className="h-4 w-4" />
                    Дисковое пространство, ГБ
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="50"
                      max="5000"
                      value={storage}
                      onChange={(e) => setStorage(parseInt(e.target.value) || 50)}
                      className="w-32"
                    />
                    <span className="text-sm text-muted-foreground">
                      SSD диски
                      {serverType && storage > serverConfigs[serverType].storage && (
                        <span className="block text-warning">
                          +{storage - serverConfigs[serverType].storage} ГБ дополнительно
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Дополнительные услуги</h4>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <Label className="text-base flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Резервное копирование
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Ежедневное автоматическое резервное копирование
                      </p>
                    </div>
                    <Button
                      variant={backup ? "default" : "outline"}
                      onClick={() => setBackup(!backup)}
                      size="sm"
                    >
                      {backup ? "Включено" : "Выключено"}
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">
                      Уровень технической поддержки
                    </Label>
                    <Select value={support} onValueChange={setSupport}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Стандартная (8x5, email/тикеты)
                        </SelectItem>
                        <SelectItem value="premium">
                          Премиум (24x7, телефон + email)
                        </SelectItem>
                        <SelectItem value="enterprise">
                          Корпоративная (24x7, приоритет + персональный менеджер)
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
                    {calculatePrice().toLocaleString()} ₽
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Первый месяц со скидкой 50%
                  </Badge>
                </div>

                <Separator className="my-4 bg-primary-foreground/20" />

                {serverType && (
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Базовая конфигурация</span>
                      <span>{serverConfigs[serverType].price} ₽</span>
                    </div>
                    
                    {cpu > serverConfigs[serverType].cpu && (
                      <div className="flex justify-between">
                        <span>Дополнительные CPU (+{cpu - serverConfigs[serverType].cpu})</span>
                        <span>{(cpu - serverConfigs[serverType].cpu) * 500} ₽</span>
                      </div>
                    )}
                    
                    {ram > serverConfigs[serverType].ram && (
                      <div className="flex justify-between">
                        <span>Дополнительная RAM (+{ram - serverConfigs[serverType].ram} ГБ)</span>
                        <span>{(ram - serverConfigs[serverType].ram) * 300} ₽</span>
                      </div>
                    )}
                    
                    {storage > serverConfigs[serverType].storage && (
                      <div className="flex justify-between">
                        <span>Дополнительное место (+{storage - serverConfigs[serverType].storage} ГБ)</span>
                        <span>{(storage - serverConfigs[serverType].storage) * 15} ₽</span>
                      </div>
                    )}
                    
                    {backup && (
                      <div className="flex justify-between">
                        <span>Резервное копирование</span>
                        <span>800 ₽</span>
                      </div>
                    )}
                    
                    {support !== "standard" && (
                      <div className="flex justify-between">
                        <span>
                          {support === "premium" ? "Премиум" : "Корпоративная"} поддержка
                        </span>
                        <span>{support === "premium" ? "2000" : "5000"} ₽</span>
                      </div>
                    )}
                  </div>
                )}

                <Button 
                  className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                  size="lg"
                  disabled={!serverType}
                >
                  Заказать сервер
                </Button>
              </CardContent>
            </Card>

            {/* Server Features */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Преимущества наших серверов</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>✓ SSD диски для максимальной производительности</div>
                <div>✓ Процессоры Intel Xeon последнего поколения</div>
                <div>✓ Гарантированные ресурсы без overselling</div>
                <div>✓ Размещение в дата-центрах уровня Tier III</div>
                <div>✓ Круглосуточный мониторинг и техподдержка</div>
                <div>✓ Защита от DDoS атак</div>
                <div>✓ Бесплатная установка и настройка ОС</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServerCalculator;