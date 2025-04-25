import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  ArrowRight, 
  Layers, 
  Fingerprint,
  Key
} from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  image: string;
}) => {
  return (
    <Card className="overflow-hidden bg-darkcat-subtle border-darkcat-border hover:border-darkcat-accent/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-darkcat-bg to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkcat-accent/20 border border-darkcat-accent/30 text-sm text-darkcat-accent mb-2">
            <Icon className="h-3.5 w-3.5 mr-1.5" />
            <span>Сервис DarkCat</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-darkcat-muted mb-4">{description}</p>
        <Button variant="outline" className="border-darkcat-accent text-darkcat-text hover:bg-darkcat-accent/10 w-full">
          Подробнее <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Анонимный прокси",
      description: "Маскировка IP-адреса через многоуровневую маршрутизацию с военным шифрованием",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Lock,
      title: "Криптокошелек",
      description: "Безопасное хранение и анонимный обмен криптовалют без централизованного контроля",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2068&auto=format&fit=crop"
    },
    {
      icon: Server,
      title: "Зашифрованное хранилище",
      description: "Хранение ваших данных с шифрованием на распределенных серверах в теневой сети",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hexagon-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className={`hexagon pulse-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.6 + 0.1,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkcat-accent/20 border border-darkcat-accent/30 text-darkcat-accent mb-4">
            <Key className="h-4 w-4 mr-2" />
            <span className="text-sm">Невидимость в сети</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Сервисы теневой сети
          </h2>
          <p className="text-xl text-darkcat-muted max-w-3xl mx-auto">
            Наши специализированные сервисы разработаны для обеспечения максимальной анонимности и 
            защиты в цифровом пространстве
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Featured service */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-darkcat-accent/20 to-purple-600/20 rounded-lg blur-md opacity-70"></div>
          <div className="relative rounded-lg overflow-hidden border border-darkcat-border bg-darkcat-bg p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkcat-accent/20 border border-darkcat-accent/30 text-darkcat-accent mb-4">
                  <Fingerprint className="h-4 w-4 mr-2" />
                  <span className="text-sm">Премиум защита</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Цифровая невидимость</h3>
                <p className="text-darkcat-muted mb-6">
                  Наш флагманский сервис обеспечивает полную маскировку вашей цифровой личности. 
                  Мы используем многослойную защиту и продвинутую технологию против слежки и деанонимизации.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-darkcat-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-darkcat-accent text-xs">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Полное скрытие цифрового следа</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-darkcat-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-darkcat-accent text-xs">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Обход глубокой проверки пакетов (DPI)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-darkcat-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-darkcat-accent text-xs">✓</span>
                    </div>
                    <span className="text-darkcat-muted">Защита от цифрового отпечатка браузера</span>
                  </li>
                </ul>
                <Button className="bg-darkcat-accent hover:bg-darkcat-accent2 text-white">
                  Активировать защиту <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative animate-float">
                <div className="rounded-lg overflow-hidden glow-border">
                  <img 
                    src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop" 
                    alt="Digital Invisibility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-darkcat-bg/80 backdrop-blur-sm border border-darkcat-border flex items-center justify-center animate-bounce-slow">
                  <Eye className="h-10 w-10 text-darkcat-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
