import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, Cpu, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden matrix-bg pt-24">
      <div className="noise-bg">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          {/* Matrix-style animation background */}
          <div className="absolute inset-0 z-0 opacity-10"></div>

          {/* Main content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-darknet-bg border-2 border-darknet-accent flex items-center justify-center animate-glow">
                <Shield className="h-10 w-10 text-darknet-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Безопасность. Анонимность. Свобода.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-darknet-text/80">
              Добро пожаловать в мир цифровой безопасности, где ваша приватность — наш главный приоритет.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild className="bg-darknet-accent hover:bg-darknet-accent/80 text-white">
                <Link to="/services">
                  Наши сервисы <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-darknet-accent text-darknet-text hover:bg-darknet-accent/10">
                <Link to="/about">
                  Узнать больше
                </Link>
              </Button>
            </div>
            
            {/* Animated GIF or video */}
            <div className="relative rounded-lg overflow-hidden glow-border mb-16 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop" 
                alt="Защищенная сеть" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darknet-bg to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-darknet-accent/20 border border-darknet-accent/30 text-sm mb-2">
                  Продвинутая технология
                </div>
                <h3 className="text-2xl font-bold mb-2">Невидимость в сети</h3>
                <p className="text-darknet-text/80">Наша инфраструктура разработана для обеспечения полной анонимности</p>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-darknet-subtle/30 glow-border">
                <Lock className="h-10 w-10 text-darknet-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Шифрование военного уровня</h3>
                <p className="text-darknet-text/70">
                  Ваши данные защищены передовыми алгоритмами шифрования AES-256
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-darknet-subtle/30 glow-border">
                <Shield className="h-10 w-10 text-darknet-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Защита от слежки</h3>
                <p className="text-darknet-text/70">
                  Технологии защиты от отслеживания и деанонимизации
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-darknet-subtle/30 glow-border">
                <Cpu className="h-10 w-10 text-darknet-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Распределенная инфраструктура</h3>
                <p className="text-darknet-text/70">
                  Глобальная сеть серверов обеспечивает высокую скорость и надежность
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
