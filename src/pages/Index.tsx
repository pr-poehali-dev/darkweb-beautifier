import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Terminal, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-darknet-bg text-darknet-text">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ServicesSection />
        
        {/* Terminal Section */}
        <section className="py-16 px-4 bg-darknet-subtle/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-lg overflow-hidden border border-darknet-border">
                <div className="flex items-center px-4 py-2 bg-darknet-subtle border-b border-darknet-border">
                  <div className="flex space-x-2 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-darknet-text/60 flex-1 text-center font-mono">
                    terminal@darkcat:~
                  </div>
                </div>
                <div className="p-6 terminal-text">
                  <div className="flex items-start text-sm font-mono">
                    <span className="text-darknet-accent mr-2">$</span>
                    <span className="typing-effect">connect --to darkcat.net --secure --anonymous</span>
                  </div>
                  <div className="mt-2 text-sm font-mono text-darknet-text/80">
                    Initializing secure connection...
                  </div>
                  <div className="mt-1 text-sm font-mono text-darknet-text/80">
                    Routing through encrypted nodes: [██████████] 100%
                  </div>
                  <div className="mt-1 text-sm font-mono text-darknet-text/80">
                    Connection established. Welcome to the secure network.
                  </div>
                  <div className="mt-4 text-sm font-mono">
                    <span className="text-darknet-accent mr-2">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-darknet-accent/10 border border-darknet-accent/20 text-darknet-accent mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm">Максимальная защита</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 glow-text">
                  Ваша безопасность — наш приоритет
                </h2>
                <p className="text-darknet-text/80 mb-6">
                  Мы используем передовые технологии шифрования и анонимизации, чтобы обеспечить вашу полную защиту в цифровом пространстве. Наша инфраструктура разработана с учетом современных угроз безопасности.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darknet-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darknet-accent text-sm">✓</span>
                    </div>
                    <span className="text-darknet-text/80">Распределенная сеть серверов по всему миру</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darknet-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darknet-accent text-sm">✓</span>
                    </div>
                    <span className="text-darknet-text/80">Отсутствие логирования вашей активности</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 rounded-full bg-darknet-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-darknet-accent text-sm">✓</span>
                    </div>
                    <span className="text-darknet-text/80">Протоколы шифрования военного уровня</span>
                  </li>
                </ul>
                <Button className="bg-darknet-accent hover:bg-darknet-accent/90">
                  Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-darknet-accent/20 to-purple-600/20 rounded-lg blur-lg opacity-30 animate-pulse-subtle"></div>
                <div className="relative rounded-lg overflow-hidden glow-border">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop" 
                    alt="Secure Network" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-b from-darknet-bg to-darknet-subtle">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Начните путь к цифровой свободе сегодня
            </h2>
            <p className="text-xl text-darknet-text/80 mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже оценили преимущества наших защищенных сервисов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-darknet-accent hover:bg-darknet-accent/90">
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" className="border-darknet-accent text-darknet-text hover:bg-darknet-accent/10">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
