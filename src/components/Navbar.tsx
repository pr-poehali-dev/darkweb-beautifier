import React from "react";
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
import { ShieldAlert, Terminal, Lock, Layers, Server } from "lucide-react";

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-darknet-subtle hover:text-darknet-text focus:bg-darknet-subtle focus:text-darknet-text",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-darknet-text/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <div className="w-full border-b border-darknet-border bg-darknet-bg/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-darknet-accent" />
          <span className="text-xl font-bold text-darknet-text glow-text">DarkCat</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-darknet-text">
                Сервисы
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-darknet-bg border border-darknet-border">
                  <ListItem href="#" title="Анонимный хостинг">
                    Надежный хостинг с защитой от отслеживания
                  </ListItem>
                  <ListItem href="#" title="Защищенный VPN">
                    Скрывайте свой IP и оставайтесь анонимными
                  </ListItem>
                  <ListItem href="#" title="Приватный мессенджер">
                    Общайтесь безопасно с шифрованием end-to-end
                  </ListItem>
                  <ListItem href="#" title="Безопасное хранилище">
                    Зашифрованное облачное хранилище для ваших данных
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about" className="text-darknet-text hover:text-darknet-accent px-4 py-2 block transition-colors">
                О нас
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/pricing" className="text-darknet-text hover:text-darknet-accent px-4 py-2 block transition-colors">
                Тарифы
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts" className="text-darknet-text hover:text-darknet-accent px-4 py-2 block transition-colors">
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-darknet-text hover:text-darknet-accent transition-colors">
            Вход
          </Link>
          <Link to="/register" className="px-4 py-2 rounded-md bg-darknet-accent text-white hover:bg-purple-600 transition-colors">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
