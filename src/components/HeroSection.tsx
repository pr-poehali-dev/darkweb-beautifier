import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, Cpu, ChevronRight, Eye } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function draw() {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#8A4BAF';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomize the opacity to create depth effect
        const opacity = Math.random() * 0.5 + 0.1;
        ctx.fillStyle = `rgba(138, 75, 175, ${opacity})`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-darkcat-bg pt-24">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30 z-0"></canvas>
      
      <div className="noise-bg">
        <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center">
          {/* Main content */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-darkcat-bg border-2 border-darkcat-accent flex items-center justify-center animate-glow">
                <Eye className="h-10 w-10 text-darkcat-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Невидимость. Анонимность. Свобода.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-darkcat-muted">
              Добро пожаловать в теневую сторону интернета. Ваша приватность — наш главный принцип.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button asChild className="bg-darkcat-accent hover:bg-darkcat-accent2 text-white">
                <Link to="/services">
                  Начать путешествие <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-darkcat-accent text-darkcat-text hover:bg-darkcat-accent/10">
                <Link to="/about">
                  Подробнее
                </Link>
              </Button>
            </div>
            
            {/* Terminal */}
            <div className="mb-16 max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-darkcat-accent/20 to-purple-600/20 rounded-lg blur-md opacity-70"></div>
                <div className="relative bg-darkcat-code rounded-lg overflow-hidden glow-border">
                  <div className="flex items-center px-4 py-2 bg-black/70 border-b border-darkcat-border">
                    <div className="flex space-x-2 mr-4">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-darkcat-muted flex-1 text-center font-mono">
                      terminal@darkcat:~
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <div className="flex items-start text-sm font-mono">
                      <span className="text-darkcat-accent mr-2">$</span>
                      <span className="typing-effect">connect --to darkcat.net --secure --protocol=tor</span>
                    </div>
                    <div className="mt-2 text-sm font-mono text-darkcat-muted">
                      Initializing secure connection...
                    </div>
                    <div className="mt-1 text-sm font-mono text-darkcat-muted">
                      Encrypting traffic: [██████████] 100%
                    </div>
                    <div className="mt-1 text-sm font-mono text-darkcat-muted">
                      Routing through TOR network: [██████████] 100%
                    </div>
                    <div className="mt-1 text-sm font-mono text-purple-400">
                      Connection established. Welcome to the DarkCat Network.
                    </div>
                    <div className="mt-1 text-sm font-mono text-darkcat-muted">
                      Your identity is now protected. Tracking impossible.
                    </div>
                    <div className="mt-4 text-sm font-mono">
                      <span className="text-darkcat-accent mr-2">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-darkcat-subtle/30 glow-border hover:bg-darkcat-subtle/50 transition-all duration-300">
                <Lock className="h-10 w-10 text-darkcat-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Военное шифрование</h3>
                <p className="text-darkcat-muted">
                  AES-256 для защиты данных и полной анонимности ваших действий в сети
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-darkcat-subtle/30 glow-border hover:bg-darkcat-subtle/50 transition-all duration-300">
                <Shield className="h-10 w-10 text-darkcat-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">IP-маскировка</h3>
                <p className="text-darkcat-muted">
                  Технологии скрытия реального IP-адреса через многоуровневую маршрутизацию
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-darkcat-subtle/30 glow-border hover:bg-darkcat-subtle/50 transition-all duration-300">
                <Cpu className="h-10 w-10 text-darkcat-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Теневые серверы</h3>
                <p className="text-darkcat-muted">
                  Сеть распределенных серверов вне юрисдикции корпоративного контроля
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
