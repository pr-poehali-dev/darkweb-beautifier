import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-darknet-border bg-darknet-bg/95">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-darknet-accent" />
              <span className="text-lg font-bold text-darknet-text">DarkCat</span>
            </div>
            <p className="text-darknet-text/70 text-sm">
              Ваш проводник в мире цифровой безопасности и анонимности. Мы обеспечиваем защиту ваших данных и коммуникаций.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-darknet-text/70 hover:text-darknet-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-darknet-text/70 hover:text-darknet-accent">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-darknet-text">Сервисы</h3>
            <ul className="space-y-2 text-darknet-text/70">
              <li><Link to="/vpn" className="hover:text-darknet-accent">VPN</Link></li>
              <li><Link to="/hosting" className="hover:text-darknet-accent">Анонимный хостинг</Link></li>
              <li><Link to="/email" className="hover:text-darknet-accent">Защищенная почта</Link></li>
              <li><Link to="/storage" className="hover:text-darknet-accent">Зашифрованное хранилище</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-darknet-text">Компания</h3>
            <ul className="space-y-2 text-darknet-text/70">
              <li><Link to="/about" className="hover:text-darknet-accent">О нас</Link></li>
              <li><Link to="/pricing" className="hover:text-darknet-accent">Тарифы</Link></li>
              <li><Link to="/contacts" className="hover:text-darknet-accent">Контакты</Link></li>
              <li><Link to="/blog" className="hover:text-darknet-accent">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-darknet-text">Техническая поддержка</h3>
            <ul className="space-y-2 text-darknet-text/70">
              <li><Link to="/faq" className="hover:text-darknet-accent">FAQ</Link></li>
              <li><Link to="/docs" className="hover:text-darknet-accent">Документация</Link></li>
              <li><Link to="/support" className="hover:text-darknet-accent">Обратиться в поддержку</Link></li>
              <li><Link to="/status" className="hover:text-darknet-accent">Статус серверов</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-darknet-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-darknet-text/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DarkCat. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-darknet-text/50">
            <Link to="/terms" className="hover:text-darknet-accent">Условия использования</Link>
            <Link to="/privacy" className="hover:text-darknet-accent">Политика конфиденциальности</Link>
            <Link to="/disclaimer" className="hover:text-darknet-accent">Отказ от ответственности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
