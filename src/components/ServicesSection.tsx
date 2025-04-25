import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Globe, Server, Mail, Database, Shield } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-darknet-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 glow-text">Наши сервисы</h2>
          <p className="text-darknet-text/70 max-w-2xl mx-auto">
            Полный набор инструментов для обеспечения вашей цифровой безопасности и анонимности в сети
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <Card className="bg-darknet-subtle border-darknet-border hover:border-darknet-accent/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2">
                <Globe className="h-8 w-8 text-darknet-accent" />
              </div>
              <CardTitle>Прокси и VPN</CardTitle>
              <CardDescription className="text-darknet-text/70">
                Скройте свой IP-адрес и защитите свое подключение
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-36 rounded-md overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
                  alt="VPN Service" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-sm text-darknet-text/80">
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Скрытие реального IP
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Шифрование трафика
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Обход блокировок
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-darknet-accent text-darknet-accent hover:bg-darknet-accent/10">
                Подробнее <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Service 2 */}
          <Card className="bg-darknet-subtle border-darknet-border hover:border-darknet-accent/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2">
                <Server className="h-8 w-8 text-darknet-accent" />
              </div>
              <div className="flex items-center gap-2">
                <CardTitle>Анонимный хостинг</CardTitle>
                <Badge className="bg-darknet-accent">Популярно</Badge>
              </div>
              <CardDescription className="text-darknet-text/70">
                Размещайте сайты без привязки к личности
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-36 rounded-md overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop" 
                  alt="Anonymous Hosting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-sm text-darknet-text/80">
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Оплата криптовалютой
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Защита от DDoS
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Нет KYC проверок
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-darknet-accent hover:bg-darknet-accent/90">
                Подробнее <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Service 3 */}
          <Card className="bg-darknet-subtle border-darknet-border hover:border-darknet-accent/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2">
                <Mail className="h-8 w-8 text-darknet-accent" />
              </div>
              <CardTitle>Защищенная почта</CardTitle>
              <CardDescription className="text-darknet-text/70">
                Конфиденциальная переписка с полным шифрованием
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-36 rounded-md overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Secure Email" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-sm text-darknet-text/80">
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> End-to-end шифрование
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Отсутствие логов
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-darknet-accent">✓</span> Самоуничтожающиеся сообщения
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-darknet-accent text-darknet-accent hover:bg-darknet-accent/10">
                Подробнее <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
