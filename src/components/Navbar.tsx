import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ShieldAlert, Terminal, Lock, Layers, Server, Shield, Minimize2, ChevronDown } from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-darkcat-subtle hover:text-darkcat-accent focus:bg-darkcat-subtle focus:text-darkcat-accent",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-darkcat-muted">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-darkcat-bg/95 backdrop-blur-md border-b border-darkcat-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative h-10 w-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-darkcat-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <Terminal className="h-6 w-6 text-darkcat-accent relative z-10" />
          </div>
          <span className="text-xl font-bold text-darkcat-text glow-text">DarkCat</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-darkcat-text hover:text-darkcat-accent hover:bg-darkcat-bg/50">
                <span className="flex items-center">
                  <Shield className="mr-1.5 h-4 w-4" /> Сервисы
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-darkcat-bg/95 backdrop-blur-md border border-darkcat-border rounded-md">
                  <ListItem href="#" title="Анонимный прокси">
                    <div className="flex items-start">
                      <Lock className="h-4 w-4 mr-2 mt-0.5 text-darkcat-accent" />
                      <span>Скрывайте свой IP и сохраняйте конфиденциальность</span>
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Криптовалютные транзакции">
                    <div className="flex items-start">
                      <Shield className="h-4 w-4 mr-2 mt-0.5 text-darkcat-accent" />
                      <span>Безопасный обмен и хранение криптовалют</span>
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Зашифрованное хранилище">
                    <div className="flex items-start">
                      <Server className="h-4 w-4 mr-2 mt-0.5 text-darkcat-accent" />
                      <span>Надежное зашифрованное хранение данных</span>
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Скрытые сообщения">
                    <div className="flex items-start">
                      <Minimize2 className="h-4 w-4 mr-2 mt-0.5 text-darkcat-accent" />
                      <span>Стеганография и зашифрованные сообщения</span>
                    </div>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/access" className="flex items-center text-darkcat-text hover:text-darkcat-accent px-4 py-2 block transition-colors">
                <Layers className="mr-1.5 h-4 w-4" /> Доступ
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/security" className="flex items-center text-darkcat-text hover:text-darkcat-accent px-4 py-2 block transition-colors">
                <ShieldAlert className="mr-1.5 h-4 w-4" /> Безопасность
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/faq" className="flex items-center text-darkcat-text hover:text-darkcat-accent px-4 py-2 block transition-colors">
                <ChevronDown className="mr-1.5 h-4 w-4" /> FAQ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-darkcat-text hover:text-darkcat-accent transition-colors px-4 py-2">
            Вход
          </Link>
          <Link to="/register" className="glow-border px-4 py-2 rounded-md bg-darkcat-accent text-white hover:bg-darkcat-accent2 transition-colors">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
