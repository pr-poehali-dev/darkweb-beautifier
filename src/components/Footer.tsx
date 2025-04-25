import React from "react";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight, Shield, ChevronRight, Github, Twitter, Globe, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-darkcat-bg border-t border-darkcat-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Terminal className="h-6 w-6 text-darkcat-accent" />
              <span className="text-xl font-bold text-darkcat-text glow-text">DarkCat</span>
            </Link>
            <p className="text-darkcat-muted mb-6">
              Специализированный сервис для обеспечения приватности и анонимности в цифровом пространстве.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-darkcat-muted hover:text-darkcat-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-darkcat-muted hover:text-darkcat-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-darkcat-muted hover:text-darkcat-accent transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-darkcat-muted hover:text-darkcat-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Сервисы</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/proxy" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Анонимный прокси
                </Link>
              </li>
              <li>
                <Link to="/crypto" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Криптокошелек
                </Link>
              </li>
              <li>
                <Link to="/storage" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Зашифрованное хранилище
                </Link>
              </li>
              <li>
                <Link to="/invisibility" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Цифровая невидимость
                </Link>
              </li>
              <li>
                <Link to="/messagner" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Защищенный мессенджер
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> О нас
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Безопасность
                </Link>
              </li>
              <li>
                <Link to="/access" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Доступ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-darkcat-muted hover:text-darkcat-accent transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Подписка</h3>
            <p className="text-darkcat-muted mb-4">
              Подпишитесь на наши обновления по безопасности
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-darkcat-subtle border border-darkcat-border rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-darkcat-accent flex-1"
              />
              <button className="bg-darkcat-accent hover:bg-darkcat-accent2 text-white rounded-r-md px-4 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-darkcat-muted text-xs mt-3">
              * Мы уважаем вашу приватность. Никакого спама.
            </p>
          </div>
        </div>
        
        <Separator className="bg-darkcat-border mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-darkcat-muted text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DarkCat Network. Все права защищены.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-darkcat-muted text-sm hover:text-darkcat-accent transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-darkcat-muted text-sm hover:text-darkcat-accent transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/cookies" className="text-darkcat-muted text-sm hover:text-darkcat-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
